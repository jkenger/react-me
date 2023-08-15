import { cloneElement, createContext, useContext, useState } from "react";
import Card from "./Card";
import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <ModalContext.Provider value={{ isOpen, handleOnOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Header({ children, cardDark }) {
  return (
    <header className={`py-3 px-4 font-semibold ${cardDark}`}>
      {children}
    </header>
  );
}

function Form({ children }) {
  const { secondaryDark } = useTheme();
  return (
    <div className={`px-4 py-6 border-y ${secondaryDark}`}>{children}</div>
  );
}

function Footer({ children }) {
  const { secondaryDark } = useTheme();
  const { handleOnOpen } = useContext(ModalContext);
  return (
    <footer
      className={`absolute bottom-0 w-full border-y flex space-x-2 justify-end items-center p-4 ${secondaryDark}`}
    >
      {cloneElement(children[0], { onClick: handleOnOpen })}
      {cloneElement(children[1])}
    </footer>
  );
}

function Button({ children }) {
  const { handleOnOpen } = useContext(ModalContext);
  return cloneElement(children, { onClick: handleOnOpen });
}

function Body({ children }) {
  const { secondaryDark } = useTheme();
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) return;

  return createPortal(
    <div
      className={`absolute top-0 right-0 bg-gray-800 w-full h-full bg-opacity-75 z-20 transition-all duration-300 `}
    >
      <div
        className={`fixed m-0 right-0 border shadow-lg border-l-gray-300 bg-gray-50 rounded-none w-full h-full transition-all duration-300 ease-in md:w-1/3 z-30 ${secondaryDark}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Header = Header;
Modal.Form = Form;
Modal.Footer = Footer;

Modal.Body = Body;
Modal.Button = Button;

export default Modal;
