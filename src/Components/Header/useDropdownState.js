import { useState } from "react";

export const useDropdownState = () => {
  const [showAboutDropDown, setAboutShowDropDown] = useState(false);
  const [showTPDropDown, setTPShowDropDown] = useState(false);
  const [showPermanentPlacement, setShowPermentPlacement] = useState(false);

  return {
    showAboutDropDown,
    setAboutShowDropDown,
    showTPDropDown,
    setTPShowDropDown,
    showPermanentPlacement,
    setShowPermentPlacement,
  };
};
