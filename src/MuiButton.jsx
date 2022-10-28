/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { Button as InternalMuiButton } from "@mui/material";
import makeTrackingText from "./utils/makeTrackingText";

export const VARIANTS = ["contained", "text", "outlined"];
export const COLOR_VARIANTS = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
];
export const SIZE_OPTIONS = ["large", "medium", "small"];

export function Button(props) {
  const {
    children,
    color,
    className,
    disabled,
    ariaLabel,
    variant,
    size,
    type,
    onClick,
    startIcon,
    endIcon,
    taggingPrefix,
  } = props;

  return (
    <InternalMuiButton
      className={className}
      color={color}
      disabled={disabled}
      aria-label={ariaLabel}
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      data-cy={makeTrackingText({
        taggingPrefix,
        component: "button",
        element: "button",
      })}
    >
      {children}
    </InternalMuiButton>
  );
}

export const buttonPropTypes = {
  taggingPrefix: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(COLOR_VARIANTS),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(VARIANTS),
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(SIZE_OPTIONS),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

Button.propTypes = buttonPropTypes;

export default Button;
