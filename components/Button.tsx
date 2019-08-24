import React from "react";
import { dimensions, borderRadius, colors, animations } from "../common/theme";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  submit: boolean;
  disabled?: boolean;
}

export function Button(props: IProps) {
  const { children, onClick, submit = false, disabled = false } = props;
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <style jsx>
        {`
          button {
            outline: none;
            padding: ${dimensions.gutterSmall} ${dimensions.gutter};

            border: none;
            background-color: ${colors.primary};
            border-radius: ${borderRadius.button};

            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            color: ${colors.light};

            transition: background-color ${animations.duration};
          }

          button:hover {
            background-color: ${colors.hover.primary};
          }

          button:focus:not(:active) {
            box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.2);
          }

          button:active {
            transform: translateY(1px);
          }
        `}
      </style>
    </button>
  );
}
