import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendContactMutation } from "../../util/http";
import Modal from "./Modal";

const ContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const mutation = useMutation({
    mutationFn: sendContactMutation,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    mutation.mutate(
      {
        formType: "contact",
        name,
        email,
        message,
      },
      {
        onSuccess: () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
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
        Замовити рішення
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>
          Замовляйте рішення в{" "}
          <span className="highlight">YourOutsource!</span>
        </h2>
        <p>
          Заповніть форму, щоб отримати безкоштовну консультацію та дізнатися найкраще рішення для вас!
        </p>
        <form className="modal-form" onSubmit={handleSubmit}>
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
            placeholder="Чому ви хочете приєднатися?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="apply-button">
            Надіслати заявку
          </button>
          {status === "success" && (
            <p style={{ color: "green" }}>Заявку надіслано!</p>
          )}
          {status === "error" && (
            <p style={{ color: "red" }}>
              Сталася помилка. Спробуйте ще раз.
            </p>
          )}
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;
