import React from 'react';
import "./SwitchBlock.scss";

const SwitchBlock = ({children}) => {
    return (
        <div className='switch_block'>
            {children}
        </div>
    )
}

export default SwitchBlock;