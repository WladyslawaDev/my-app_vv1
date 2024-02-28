import { LoginFormWrapper, LoginFormName, InputsContainer } from './styles';
import Button from '../Button/Button';
import Input from '../Input/Input';

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
        />
      </InputsContainer>
      <Button name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;