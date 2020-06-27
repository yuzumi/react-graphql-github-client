import { useState } from "react";

export default function useBoolean(initial = false) {
  const [value, setValue] = useState(initial);

  const setTrue = () => setValue(true);

  const setFalse = () => setValue(false);

  const toggle = () => setValue(!value);

  return {
    value,
    toggle,
    setTrue,
    setFalse
  };
};