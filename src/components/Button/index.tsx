import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  console.log(`Button is ${disabled}`)
  return <ButtonContainer onClick={onClick} disabled={ disabled }>{title}</ButtonContainer>;
};

export default Button;
