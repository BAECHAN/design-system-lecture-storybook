import React from "react";

type TPrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: TPrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<TPrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  children,
  onClick,
  disabled,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`
    rounded-button-default
    w-full 
    h-[59px] 
    ${disabledStyle}
    ${color[theme]}
  `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
