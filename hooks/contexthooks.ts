import { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { ThemeContext } from "../context/themeContext";

export const useModalContext = () => {
  return useContext(ModalContext);
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
}
