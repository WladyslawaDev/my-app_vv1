import { InputComponent, Label, InputField } from './styles';
import { InputProps } from './types';

function Input({ id, name, placeholder, label, type = 'text', disabled = false }: InputProps) {
  return (
    <InputComponent disabled={disabled}>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
    </InputComponent>
  );
}
export default Input;