import { Colors, Sizes } from "../../TailwindButton";

export const textSize = ({ size }: { size: Sizes }) => {
  switch (size) {
    case "small":
      return "text-xs px-3 py-1";
    case "large":
      return "text-lg px-6 py-4";
    default:
      return "text-sm px-4 py-2";
  }
};

export const buttonColor = ({
  color,
  isOutlined,
}: {
  color: Colors;
  isOutlined: boolean;
}) => {
  switch (color) {
    case "primary":
      return `${
        isOutlined
          ? `${outlinedCss} border-blue-600 text-blue-600`
          : "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 active:bg-blue-800 text-white"
      }`;
    case "error":
      return isOutlined
        ? `${outlinedCss} border-red-700 text-red-700`
        : "bg-red-500 hover:bg-red-700 active:bg-red-800 focus:bg-red-700 active:bg-gray-800 text-white";
    default:
      return isOutlined
        ? `${outlinedCss} border-gray-200 text-gray-700`
        : "bg-white";
  }
};

export const defaultStyles =
  "flex flex-row items-center justify-center disabled:shadow-none disabled:bg-black/[0.1] disabled:text-black/[0.35] disabled:cursor-not-allowed shadow-md focus:outline-none focus:ring-0 gap-2 leading-tight uppercase rounded transition duration-150 ease-in-out";
export const outlinedCss =
  "bg-transparent border border-current hover:bg-gray-100 active:gray-300";
