// @ts-ignore-next-line
import Button from "./MuiButton";
import TailwindButton from "./TailwindButton";
import { EndIcon, StartIcon } from "./utils/icons";

const handleClick = () => console.log("CLICKED");
const disabled = false;

function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10">
      <Button
        type="button"
        variant="contained"
        color="primary"
        disabled={disabled}
        onClick={handleClick}
        endIcon={<EndIcon />}
      >
        Mui Button Component
      </Button>

      <TailwindButton disabled={disabled} onClick={handleClick} color="primary">
        Tailwind Button Component
        <EndIcon />
      </TailwindButton>

      <button
        disabled={disabled}
        onClick={handleClick}
        className="btn btn-primary"
        data-pendo="test"
      >
        <StartIcon />
        CSS Utility Button Primative
      </button>
    </div>
  );
}

export default App;
