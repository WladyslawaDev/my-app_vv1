import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 30px;
`;

export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  gap: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const JokeBody = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #3300cc;
`;

export const ButtonsContiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  margin-top:auto;
`;
