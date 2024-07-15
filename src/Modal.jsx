import React from "react"
import { useGlobalContext } from "./Context"
import { FaTimes } from "react-icons/fa"

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <FaTimes className="close-modal-btn" onClick={closeModal} />
      </div>
    </div>
  )
}

export default Modal
