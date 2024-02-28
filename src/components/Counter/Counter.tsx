import { CounterProps } from './types';
import { CounterWrapper, ButtonControl, Count } from './styles';
import styled from "@emotion/styled";
import Button from "../Button/Button";


const StyledButton = styled(Button)`
  
  color: #ffffff;
  background-color: #1f27f5;

`;

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <StyledButton name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <StyledButton name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;