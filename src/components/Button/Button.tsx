import { ButtonComponent } from "./styles";
import { ButtonProps, ButtonTypes } from "./types";

function Button({ isRed = false, name, type = 'button', onClick = () => {}, disabled = false }: ButtonProps) {
  return (
    <ButtonComponent isRed={isRed} disabled={disabled} className="button-component" onClick={onClick} type={type}>
      {name}
    </ButtonComponent>
  );
}

export default Button;