import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { useState,  ChangeEvent } from 'react';

import { useForm } from 'react-hook-form';

import {
  HW23Wrapper,
  InputsContainer,
  ButtonsContainer
} from "./styles";

 import {ProfileData } from "./types";

function EmployeeForm() {
    const { register, handleSubmit, reset } = useForm<ProfileData>();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");
    const [submittedData, setSubmittedData] = useState<ProfileData | null>(null);
  
    const onSubmit = (data:ProfileData) => {
      setSubmittedData(data);
      reset();
    };

    const showSubmittedForm = () => {
      if (submittedData) {
        return (
          <div>
            <h2>Submitted Form:</h2>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Age: {submittedData.age}</p>
            <p>Position: {submittedData.position}</p>
          </div>
        );
      }
      return null;
    };
  
    const handleShowCard = (e: React.FormEvent) => {
      e.preventDefault();
      if (firstName !== '' && lastName !== '' && age !== '' && position !== '') {
        //showSubmittedForm();
      } else {
        alert('Please, complete all fields');
      }
    };

    return (
      <HW23Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
     
      <InputsContainer>
        <Input
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value= {firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          value= {lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          id="age"
          name="age"
          label="Age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          id="position"
          name="position"
          label="Position"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        </InputsContainer>

        <ButtonsContainer>
    <Button name="Send" type="submit" onClick={handleShowCard} />
    </ ButtonsContainer>
      </form>
      {showSubmittedForm()}
       </HW23Wrapper>
    );
  }

  export default EmployeeForm;




  