import { Colors, Sizes } from "../../TailwindButton";

export const buttonColor = ({
  color,
  isOutlined,
}: {
  color: Colors;
  isOutlined: boolean;
}) => {
  switch (color) {
    case "primary":
      return isOutlined ? "btn-primary-outlined" : "btn-primary";
    case "error":
      return isOutlined ? "btn-error-outlined" : "btn-error";
    default:
      return isOutlined ? "btn-outlined text-inherit" : "text-inherit";
  }
};

export const textSize = ({ size }: { size: Sizes }) => {
  switch (size) {
    case "small":
      return "btn-small";
    case "large":
      return "btn-large";
    default:
      return "";
  }
};
