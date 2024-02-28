import styled from '@emotion/styled';

interface InputComponentProps {
  disabled: boolean;
}

export const InputComponent = styled.div<InputComponentProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: fit-content;

  ${({ disabled }) => disabled && `
    opacity: 0.7; // Dodaj inne style dla wyłączonego stanu
  `}
`;

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputField = styled.input<InputComponentProps>` 
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #6f6f6f;
  }

  &:disabled {
    background-color: #ccc; 
    cursor: not-allowed;
  }
`;