import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendJobMutation } from "../../util/http";
import Modal from "./Modal";

const JobApplicationModal = ({ vacancyTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const mutation = useMutation({
    mutationFn: sendJobMutation,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    mutation.mutate(
      {
        formType: "job",
        name,
        email,
        message,
        file,
        vacancyTitle,
      },
      {
        onSuccess: () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setFile(null);
        },
        onError: () => {
          setStatus("error");
        },
      }
    );
  };

  return (
    <>
      <button className="button" onClick={openModal}>
        Подати заявку
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>
          Залишіть заявку на вакансію{" "}
          <span className="highlight">{vacancyTitle || "YourOutsource"}</span>
        </h2>
        <p>
          Заповніть форму, щоб стати частиною нашої команди та долучитись до
          створення інноваційних аутсорсингових рішень.
        </p>
        <form
          className="modal-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            type="text"
            className="modal-input"
            placeholder="Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="modal-input"
            placeholder="Ваша електронна адреса"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="modal-textarea"
            placeholder="Чому ви хочете працювати у нас?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="file"
            className="modal-input"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
          />
          <button
            type="submit"
            className="apply-button"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Відправляється..." : "Надіслати заявку"}
          </button>
          {status === "success" && (
            <p style={{ color: "green" }}>Заявку надіслано!</p>
          )}
          {mutation.isPending && <p>Завантаження...</p>}
          {status === "error" && (
            <p style={{ color: "red" }}>Сталася помилка. Спробуйте ще раз.</p>
          )}
        </form>
      </Modal>
    </>
  );
};

export default JobApplicationModal;
