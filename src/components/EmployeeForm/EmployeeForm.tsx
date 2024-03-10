//import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeInfo } from "./types";
import {
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
  ErrorContainer 
} from "./styles";


function EmployeeForm() {
  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  });

  const formikEmplForm = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      ageValue: "",
      jobPosition: "",
      agreeToTerms: false,
    },
// })
// function EmployeeForm() {
//   const [nameValue, setNameValue] = useState<string>("");
//   const [lastNameValue, setLastNameValue] = useState<string>("");
//   const [ageValue, setAgeValue] = useState<string>("");
//   const [jobPositionValue, setJobPositionValue] = useState<string>("");
//   // Создадим state, который решает когда нам карточку показывать, а когда нет
//   const [isShowCard, setIsShowCard] = useState<boolean>(false);
//   // Создаем контейнер(стейт), в котором будет храниться информация для карточки,
//   // чтобы она туда добавлялась только на onClick
//   const [userInfo, setUserInfo] = useState<EmployeeInfo>({
//     name: "",
//     lastName: "",
//     ageValue: "",
//     jobPosition: "",
//   });

  // const onChangeFieldsValue = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   setFieldValue: Dispatch<SetStateAction<string>>
  // ) => {
  //   setFieldValue(event.target.value);
  // };

  // const createEmployeeCard = () => {
  //   // Если все значения у нас не пустые, то показываем карточку
  //   if (!!nameValue && !!lastNameValue && !!ageValue && !!jobPositionValue) {
  //     setUserInfo({
  //       name: nameValue,
  //       lastName: lastNameValue,
  //       ageValue: ageValue,
  //       jobPosition: jobPositionValue,
  //     });
  //     setIsShowCard(true);
  //   } else {
  //     // Показываем alert если хотя бы одно из полей пустое
  //     setIsShowCard(false);
  //     setTimeout(() => alert("Введите данные во все поля"), 0);
  //   }
  // };
  validationSchema: Yup.object({
    name: Yup.string()
      .min(2, "Minimum 2 znaki")
      .max(50, "Maximum 50 znaków")
      .required("Pole wymagane"),
    lastName: Yup.string().max(15, "Maximum 15 znaków").required("Pole wymagane"),
    ageValue: Yup.number()
      .min(1, "Minimum 1 znak")
      .max(999, "Maximum 3 znaki")
      .required("Pole wymagane"),
    jobPosition: Yup.string()
      .max(30, "Maximum 30 znaków"),
    agreeToTerms: Yup.boolean().oneOf([true], "Musisz zaakceptować regulamin"),
  }),
  onSubmit: (values) => {
    setIsShowCard(true);
    setUserInfo({
      name: values.name,
      lastName: values.lastName,
      ageValue: values.ageValue,
      jobPosition: values.jobPosition,
    });
  },
});


const createEmployeeCard = () => {
  formikEmplForm.handleSubmit(); //  walidacja z Formik
};

return (
  <EmployeeFormWrapper>
    <EmployeeFormContainer>
      <Input
        id="first_name_id"
        name="name"
        onChange={formikEmplForm.handleChange}
        //onBlur={formikEmplForm.handleBlur}
        value={formikEmplForm.values.name}
        label="* Imię"
        placeholder="Jan"
        error={formikEmplForm.touched.name && formikEmplForm.errors.name ? formikEmplForm.errors.name : undefined}

      />
      <Input
        id="last_name_id"
        name="lastName"
        onChange={formikEmplForm.handleChange}
       // onBlur={formikEmplForm.handleBlur}
        value={formikEmplForm.values.lastName}
        label="* Nazwisko"
        placeholder="Kowalski"
        error={formikEmplForm.touched.lastName && formikEmplForm.errors.lastName ? formikEmplForm.errors.lastName : undefined}

      />
      <Input
        id="age_id"
        name="ageValue"
        onChange={formikEmplForm.handleChange}
        //onBlur={formikEmplForm.handleBlur}
        value={formikEmplForm.values.ageValue}
        label="* Wiek"
        placeholder="25"
        error={formikEmplForm.touched.ageValue && formikEmplForm.errors.ageValue ? formikEmplForm.errors.ageValue : undefined}

      />
      <Input
        id="job_position_id"
        name="jobPosition"
        onChange={formikEmplForm.handleChange}
        value={formikEmplForm.values.jobPosition}
        label="Stanowisko"
        placeholder="Starszy specjalista"
        error={formikEmplForm.touched.jobPosition && formikEmplForm.errors.jobPosition ? formikEmplForm.errors.jobPosition : undefined}

      />
      <Input
      label="* Zgadzam się z polityką przetwarzania danych."
        type="checkbox"
        id="agree_to_terms_id"
        name="agreeToTerms"
        onChange={formikEmplForm.handleChange}
        checked={formikEmplForm.values.agreeToTerms}
        
      />
      <ErrorContainer>
  {formikEmplForm.touched.agreeToTerms && !formikEmplForm.values.agreeToTerms && (
    "Musisz zaakceptować regulamin"
  )}
</ErrorContainer>
<p>* Pola oznaczone gwiazdką są wymagane.</p>

      <Button name="Stwórz" onClick={createEmployeeCard} />
    </EmployeeFormContainer>
    {/* Jeśli isShowCard jest true, to renderuj EmployeeCard */}
    {isShowCard && (
      <EmployeeCard>
        <EmployeeInfoContainer>
          <EmployeeTitle>Imię</EmployeeTitle>
          <EmployeeInfoText>{userInfo.name}</EmployeeInfoText>
        </EmployeeInfoContainer>
        <EmployeeInfoContainer>
          <EmployeeTitle>Nazwisko</EmployeeTitle>
          <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
        </EmployeeInfoContainer>
        <EmployeeInfoContainer>
          <EmployeeTitle>Wiek</EmployeeTitle>
          <EmployeeInfoText>{userInfo.ageValue}</EmployeeInfoText>
        </EmployeeInfoContainer>
        <EmployeeInfoContainer>
          <EmployeeTitle>Stanowisko</EmployeeTitle>
          <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
        </EmployeeInfoContainer>
      </EmployeeCard>
    )}
  </EmployeeFormWrapper>
);
};

export default EmployeeForm;