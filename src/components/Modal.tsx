import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose, open }) => {
  if (!open) return null;

  return createPortal(
    <div
      className="z-50 fixed top-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      {children}
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

export default Modal;
