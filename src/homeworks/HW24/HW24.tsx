import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Button from "components/Button/Button";

import { PageWrapper, JokeCard, JokeBody, ButtonsContiner } from "./styles";
import { wait } from "@testing-library/user-event/dist/utils";

// const CustomButton = styled.button`// nie wyszlo!:(
//   width: 100%;
//   height: 70px;
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   padding: 20px;
//   font-size: 24px;
//   font-weight: bold;
//   color:black;
// `;

function HW24() {
  const [joke, setJoke] = useState<string>("");
  const [errorJoke, setErrorJoke] = useState<string>("");

  const getJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();
      console.log(result);
      console.log("XXX");

      if (!response.ok) {
        setJoke("");
        alert("Failed to fetch joke");
        setErrorJoke(`Failed to fetch joke. Error Code: ${response.status}`);
        throw Object.assign(new Error("API Error"), {
          response: result,
        });
      } else {
        setJoke(`${result.setup} `);
        setErrorJoke("");
        setTimeout(() => alert("You have received a new joke!"), 2000);
      }
    } catch (errorJoke) {
      console.log(errorJoke);
      console.log("XXX");
      setTimeout(() => alert("Failed to fetch joke"), 1000);
      setJoke("");
      setErrorJoke("Failed to fetch joke");
    }
  };

  const handleButtonClick = () => {
    setErrorJoke("");
    getJoke();
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <JokeCard>
        {errorJoke && (
          <p style={{ fontSize: "36px", color: "red" }}>{errorJoke}</p>
        )}
        <JokeBody>{joke}</JokeBody>
        <ButtonsContiner>
          <Button name="Get Joke" onClick={handleButtonClick} />
        </ButtonsContiner>
      </JokeCard>
    </PageWrapper>
  );
}

export default HW24;
