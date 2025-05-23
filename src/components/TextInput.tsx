import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface CustomProps {
  labelText: string;
  isTextarea?: boolean;
  placeholder: string;
}

type InputProps = CustomProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = CustomProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

type TextInputProps = InputProps | TextareaProps;

export default function TextInput({
  labelText,
  isTextarea = false,
  placeholder,
  ...props
}: TextInputProps) {
  const inputStyles = "focus:outline-none text-black resize-none p-2 rounded";

  return (
    <>
      <label className="text-purple-600 font-semibold">{labelText}</label>
      {isTextarea ? (
        <textarea
          {...(props as TextareaProps)}
          placeholder={placeholder}
          className={inputStyles}
          required
        />
      ) : (
        <input
          required
          {...(props as InputProps)}
          type="text"
          className={inputStyles}
          placeholder={placeholder}
        />
      )}
    </>
  );
}
