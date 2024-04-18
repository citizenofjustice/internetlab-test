import { useEffect, useRef, useState } from "react";
import checkGreen from "../assets/images/check.svg";
import crossRed from "../assets/images/crossRed.svg";
import { InputCheck } from "./ContactForm";

interface TextInputProps {
  id: string;
  label: string;
  validator: (value: string) => void;
  type?: "text" | "password";
  check: InputCheck | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = "text",
  validator,
  check,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) return;
    const timeOutId = setTimeout(() => validator(inputValue), 700);
    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  return (
    <div>
      <div className="input_wrapper">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type={type}
          className={`text-input ${inputValue.length > 0 ? "not_empty" : ""} ${
            check?.isValid ? "valid" : "invalid"
          }`}
          autoComplete="off"
          id={id}
        />
        <label className="lable">{label}</label>
        {check && (
          <div className="validation_status">
            {check.isValid ? (
              <img
                className="valid"
                src={checkGreen}
                alt="валидация пройдена"
              />
            ) : (
              <img
                className="invalid"
                src={crossRed}
                alt="валидация провалена"
              />
            )}
          </div>
        )}
      </div>
      <p className={`helper ${check?.isValid ? "valid" : "invalid"}`}>
        {check?.helperText}
      </p>
    </div>
  );
};

export default TextInput;
