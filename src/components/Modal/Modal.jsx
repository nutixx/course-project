import "./Modal.css"

export default function Modal ({ isOpen, onClose, children }) {
  const handleOverlayClick = (event) => {
    // Перевіряємо, чи клік був саме на оверлей
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};