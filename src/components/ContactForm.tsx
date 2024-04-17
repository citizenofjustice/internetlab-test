import { useState } from "react";
import TextInput from "./TextInput";

export interface InputCheck {
  isValid: boolean | undefined;
  helperText: string;
}

const ContactForm = () => {
  const [nameCheck, setNameCheck] = useState<InputCheck>();
  const [phoneCheck, setPhoneCheck] = useState<InputCheck>();

  const handleNameValidation = (value: string) => {
    const trimmedName = value.trim();
    if (trimmedName.length < 2) {
      setNameCheck({ isValid: false, helperText: "Имя слишком короткое" });
      return;
    }
    setNameCheck({ isValid: true, helperText: "" });
  };

  const handlePhoneValidation = (value: string) => {
    const trimmedPhone = value.trim();
    if (trimmedPhone.length < 11) {
      setPhoneCheck({
        isValid: false,
        helperText: "В номере телефона должно быть 10 цифр",
      });
      return;
    }
    setPhoneCheck({ isValid: true, helperText: "" });
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="contact_form">
      <h2 className="contact_form_header">Отправь форму</h2>
      <form onSubmit={handleFormSubmission} className="form">
        <TextInput
          id="name"
          label="Имя"
          validator={handleNameValidation}
          check={nameCheck}
        />
        <TextInput
          id="phone"
          label="Телефон"
          validator={handlePhoneValidation}
          check={phoneCheck}
        />
        <input type="checkbox" />
        <button className="button">Отправить</button>
      </form>
    </section>
  );
};

export default ContactForm;
