import { useState } from "react";
import Modal from "./Modal";

const JoinUsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="button" onClick={openModal}>
        Доєднатись до нас
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Приєднуйтесь до команди <span className="highlight">YourBank!</span></h2>
        <p>
          Заповніть форму, щоб стати частиною нашої місії формування майбутнього банківської галузі.
        </p>
        <form className="modal-form">
          <input
            type="text"
            className="modal-input"
            placeholder="Ваше ім'я"
          />
          <input
            type="email"
            className="modal-input"
            placeholder="Ваша електронна адреса"
          />
          <textarea
            className="modal-textarea"
            placeholder="Чому ви хочете приєднатися?"
          ></textarea>
          <button type="submit" className="apply-button">
            Надіслати заявку
          </button>
        </form>
      </Modal>
    </>
  );
};

export default JoinUsModal;
