import { useState, useEffect } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(
        "keydown",
        function handleKeydown(event) {
          if (event.keyCode === 27) {
            setIsOpen(false);
          }
        },
        false
      );
    }
    return function cleanUp() {
      document.removeEventListener(
        "keydown",
        function handleKeydown(event) {
          if (event.keyCode === 27) {
            setIsOpen(false);
          }
        },
        false
      );
    };
  }, [isOpen]);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return { isOpen, toggle };
}
