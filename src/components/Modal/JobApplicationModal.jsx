import { useState } from "react";
import Modal from './Modal';

const JobApplicationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="button" onClick={openModal}>
        Подати заявку
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Залишіть заявку на вакансію в <span className="highlight">YourBank</span></h2>
        <p>
          Заповніть форму, щоб стати частиною нашої команди та долучитись до створення інноваційного банківського майбутнього.
        </p>
        <form className="modal-form">
          <input
            type="text"
            className="modal-input"
            placeholder="Ваше ім'я"
            required
          />
          <input
            type="email"
            className="modal-input"
            placeholder="Ваша електронна адреса"
            required
          />
          <textarea
            className="modal-textarea"
            placeholder="Чому ви хочете працювати у нас?"
            required
          ></textarea>
          <input
            type="file"
            className="modal-input"
            placeholder="Прикріпіть своє резюме"
          />
          <button type="submit" className="apply-button">
            Надіслати заявку
          </button>
        </form>
      </Modal>
    </>
  );
};

export default JobApplicationModal;
