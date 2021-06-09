import React from "react";
import ReactDOM from "react-dom";
import { useRef, useEffect, useCallback } from "react";
//CONTEXT
import { useModal } from "../../../contexts/ModalContext";
//ANIMATION
import { useSpring, animated } from "react-spring";
//IMPORT ELEMENTS
import * as S from "./elements.sc";

//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

///////////////////////
// Component: Modal //
///////////////////////
const Modal = () => {
  const { modalContent, handleModal, showModal } = useModal();
  const modalRef = useRef();

  //Animation
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  //Close modal, click on background
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      handleModal();
    }
  };

  //Close modal, press "Esc"
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        handleModal();
        console.log("I pressed");
      }
    },
    [handleModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  if (showModal) {
    return ReactDOM.createPortal(
      <S.Background onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>
          <S.Wrapper>
            {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
            <S.Content>{modalContent}</S.Content>
            <S.CloseIcon>
              <FontAwesomeIcon icon={faTimes} onClick={() => handleModal()} />
            </S.CloseIcon>
          </S.Wrapper>
        </animated.div>
      </S.Background>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
