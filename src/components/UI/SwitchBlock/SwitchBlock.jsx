import React, { useEffect, useRef } from 'react';
import "./SwitchBlock.scss";

const SwitchBlock = ({ children, switchHandler, firstActive = false }) => {
    const switchBlock = useRef();

    useEffect(() => {
        const switchBlockBtn = switchBlock.current.children;

        Array.from(switchBlockBtn).forEach((item, index) => {
            if (firstActive && index === 0) {
                item.classList.add('active');
            }

            item.addEventListener("click", (e) => {
                switchHandler(item.dataset.param);

                Array.from(switchBlockBtn).forEach(element => {
                    element.classList.remove("active");
                })
                item.classList.add("active");
            })
        })
    }, [])

    return (
        <div ref={switchBlock} className='switch_block'>
            {children}
        </div>
    )
}

export default SwitchBlock;