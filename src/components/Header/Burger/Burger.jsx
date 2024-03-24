import React from 'react';
import './Burger.scss';

const Burger = ({ burger, setBurger }) => {
    const toggleBurger = () => {
        document.querySelector('body').classList.toggle('no_scroll')
        setBurger(!burger);
    }

    return (
        <div
            onClick={toggleBurger}
            className={"burger_wrapper hide flex-if_md_size" + (burger ? " open" : "")}
        >
            <div className="burger">
                <i></i>
            </div>
        </div>
    )
}

export default Burger;