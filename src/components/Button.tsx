interface Props {
  children: string;
  ButtonType?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, ButtonType = "primary", onClick }: Props) => {
  let ButtonClass = `btn btn-${ButtonType}`;
  return (
    <button className={ButtonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
