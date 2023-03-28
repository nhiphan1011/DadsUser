import { RefObject, useEffect, useState } from "react";

export default function useOnClickOutside(ref: RefObject<HTMLDivElement>, forceClose?: boolean) {
  const [active, setActive] = useState(false);

  const handleOpen = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  const handleTogle = () => {
    setActive(!active);
  };

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setActive(false);
    }
  };
  useEffect(() => {
    if (forceClose) {
      setActive(false);
    }
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ref]);

  return { active, handleOpen, handleClose, handleTogle };
}
