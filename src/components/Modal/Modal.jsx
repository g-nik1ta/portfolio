import React from 'react';
import './Modal.scss';
import Close from 'svg/Close';

const Modal = ({children, modalName = '', closeHandler}) => {
    const closeModal = (e) => {
        if (e.target.classList.contains('modal_wrapper') || e.currentTarget.classList.contains('modal_close')) {
            if (!!closeHandler) closeHandler()

            document.querySelector("body").classList.remove("no_scroll");
            e.currentTarget.closest('.modal_wrapper').classList.add('hide');
        }
    }

    return (
        <div onClick={closeModal} className={'modal_wrapper flex hide ' + (modalName)}>
            <div className="modal">
                <Close onClick={closeModal} className="modal_close" />
                {children}
            </div>
        </div>
    )
}

export default Modal;