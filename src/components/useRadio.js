import { useState, useEffect } from "react";

// <input type="radio" name="products" value="Hat" checked/>
// <input type="radio" name="products" value="Mug" />
// <input type="radio" name="products" value="Car" />

const radioMapping = {
  products: [
    {
      refRadio1: false,
      refRadio2: false,
      refRadio3: true,
    },
  ],
};

export function RadioGroup() {}

export function useRadio(name, ref) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(
    function saveRadiosToMap() {
      radioMapping[name] = {
        [ref.current]: ref.current.checked,
      };
    },
    [name, ref, isChecked]
  );

  function onChange(event) {
    setIsChecked(event.target.checked);
  }
  return { isChecked, onChange };
}
