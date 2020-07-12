import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ children }) => {

    
    const focusTrap = () => {
        const  focusableElements =
        'button, div, p, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const modal = document.querySelector('#modal'); // select the modal by it's id

        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
        
            if (!isTabPressed) {
            return;
            }
        
            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus(); // add focus for the last focusable element
                    e.preventDefault();
                }
            } else { // if tab key is pressed
                if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                    firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });
        firstFocusableElement.focus();
    }
    const elRef = useRef(null);
    if (!elRef.current) {
        const div = document.createElement('div');
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current);
        focusTrap();
        return () => modalRoot.removeChild(elRef.current);
    }, [])

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;