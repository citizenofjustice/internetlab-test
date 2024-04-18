interface ButtonProps {
  className: string;
  children: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  className,
}) => {
  return (
    <button type={type} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
