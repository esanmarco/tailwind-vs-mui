// @ts-ignore-next-line
import { Box, Button } from "@mui/material";
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

      <Box gap={10} display="flex" flexDirection="row">
        <p>Test</p>
        <p>Test 2</p>
      </Box>

      <TailwindButton disabled={disabled} onClick={handleClick} color="primary">
        Tailwind Button Component
        <EndIcon />
      </TailwindButton>

      <button
        disabled={disabled}
        onClick={handleClick}
        className={`btn btn-error btn-large mt-1`}
        data-pendo="test"
      >
        <StartIcon />
        CSS Utility Button Primative
      </button>
    </div>
  );
}

export default App;
