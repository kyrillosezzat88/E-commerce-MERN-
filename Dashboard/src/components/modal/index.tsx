import { CloseIcon } from "../../assets/icons";
import "./Modal.scss";
import { FC, ReactNode } from "react";

interface modalPropsType {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}

export const ModalHead: FC<modalPropsType> = ({
  children,
  className,
  onClose,
}) => {
  return (
    <div className={`modal-head ${className}`}>
      <div className="flex justify-between items-center">
        {children}
        <CloseIcon onClick={onClose} />
      </div>
    </div>
  );
};

export const ModalBody: FC<modalPropsType> = ({ children, className }) => {
  return <div className={`modal-body ${className}`}>{children}</div>;
};

export const ModalFooter: FC<modalPropsType> = ({ children, className }) => {
  return <div className={`modal-footer ${className}`}>{children}</div>;
};

const Modal: FC<modalPropsType> = ({ children, className, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className={`modal-container ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
