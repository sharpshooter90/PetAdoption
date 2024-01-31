import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // this will run when the modal is closed/unmounted from the DOM
    return () => modalRoot.removeChild(elRef.current);
  });

  return createPortal(
    <div className="modal__container">{children}</div>,
    elRef.current,
  );
};

export default Modal;
