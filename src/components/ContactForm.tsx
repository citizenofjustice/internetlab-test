import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

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
    if (trimmedPhone.length < 10) {
      setPhoneCheck({
        isValid: false,
        helperText: "В номере телефона должно быть 10 цифр",
      });
      return;
    }
    if (trimmedPhone.length > 10) {
      setPhoneCheck({
        isValid: false,
        helperText: "В номере телефона не должно быть больше 10 цифр",
      });
      return;
    }
    setPhoneCheck({ isValid: true, helperText: "" });
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const target = e.currentTarget;
      const data = {
        user: target.user.value,
        phone: target.phone.value,
        agreement: target.agreement.value,
      };

      const response = await fetch("http://localhost:3000/api/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) alert("success!");
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  return (
    <section id="contact-form" className="contact_form">
      <h2 className="contact_form_header">Отправь форму</h2>
      <form onSubmit={handleFormSubmission} className="form">
        <TextInput
          id="user"
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
        <div className="agreement_check">
          <input id="agreement" type="checkbox" required />
          <label htmlFor="agreement">Согласен, отказываюсь</label>
        </div>
        <Button type="submit" className="button_primary">
          Отправить
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
