import { ButtonFace } from "./button.interface";
import { ButtonStyled } from "./button.style";

const ButtonComponent: React.FC<ButtonFace> = (props): JSX.Element => {
  const { children } = props;
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default ButtonComponent;
