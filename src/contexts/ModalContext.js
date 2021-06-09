import React, { useContext, useState } from "react";
import Modal from "../components/pages/Modal"

const ModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModal = (content = false) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
  };

  const value ={
    showModal, modalContent, handleModal
  }

  return (
    <ModalContext.Provider value={value}>
      <Modal/>
      {children}
    </ModalContext.Provider>

  )
}