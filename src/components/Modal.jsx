import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef()
    
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }))
  return createPortal(
    <dialog className="rounded backdrop:backdrop-blur-sm h-1/3 w-1/2" ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root")
  );
})

export default Modal;
