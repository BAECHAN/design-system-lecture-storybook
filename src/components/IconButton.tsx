import { MouseEventHandler } from "react";

interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IIconButtonProps) {
  return (
    <button>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
