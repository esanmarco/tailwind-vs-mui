// import {
//   buttonColor,
//   textSize,
//   defaultStyles,
// } from "./utils/buttons/withoutCssUtils";
import { buttonColor, textSize } from "./utils/buttons/withCssUtils";

export type Colors = "primary" | "error" | "inherit" | "disabled";
export type Sizes = "small" | "inherit" | "large";
export type Variants = "contained" | "outlined";

interface TailwindButtonProps {
  children: React.ReactNode;
  size?: Sizes;
  color?: Colors;
  variant?: Variants;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function TailwindButton({
  children,
  className,
  disabled,
  onClick,
  color,
  size = "inherit",
  variant = "contained",
}: TailwindButtonProps): JSX.Element {
  const isOutlined = variant === "outlined";
  const btnColor = buttonColor({ color: color ?? "inherit", isOutlined });
  const btnSize = textSize({ size });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      // className={`${defaultStyles} ${btnColor} ${btnSize} ${className ?? ""}`}
      className={`btn ${btnSize} ${btnColor} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
