import { ReactNode } from "react";

interface Props {
  isShown: boolean;
  children: ReactNode;
  handleHideClick: () => void;
}

const Alert = ({ isShown, children, handleHideClick }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible show fade"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleHideClick}
      ></button>
    </div>
  );
};

export default Alert;
