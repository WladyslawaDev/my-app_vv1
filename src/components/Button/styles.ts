import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({ isRed, disabled }) => (disabled ? '#ccc' : isRed ? 'red' : '#1f27f5')};
  color: ${({ disabled }) => (disabled ? '#666' : 'white')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    background-color: ${({ isRed, disabled }) => (disabled ? '#ccc' : isRed ? 'darkred' : '#0e1647')};
  }
`;