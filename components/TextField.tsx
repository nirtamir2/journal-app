import React from "react";
import { dimensions, fonts } from "../common/theme";

interface IProps {
  label: string;
  value: string;
  required?: boolean;
  type?: "text" | "password";
  textarea?: boolean;
  onChange: (value: string) => void;
}

export function TextField(props: IProps) {
  const {
    label,
    value,
    onChange,
    required = false,
    textarea = false,
    type = "text"
  } = props;
  const idRef = React.useRef(`id_${Math.random()}`);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="TextField">
      <label htmlFor={idRef.current} className="TextField__label">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={idRef.current}
          value={value}
          required={required}
          onChange={handleTextareaChange}
          className="TextField__field"
        />
      ) : (
        <input
          id={idRef.current}
          value={value}
          required={required}
          type={type}
          onChange={handleInputChange}
          className="TextField__field"
        />
      )}
      <style jsx>{`
        .TextField {
          display: grid;
          grid-gap: ${dimensions.gutterSmall};
        }

        .TextField__label {
          font-size: ${fonts.size.small};
          font-weight: ${fonts.weight.bold};
        }

        .TextField__field {
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
        }
      `}</style>
    </div>
  );
}
