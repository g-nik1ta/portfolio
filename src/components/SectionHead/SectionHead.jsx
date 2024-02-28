import React from 'react';
import "./SectionHead.scss";

const SectionHead = ({title, subtitle}) => {
    return (
        <>
            <h1 className="section_title">{title}</h1>
            <p className="section_subtitle">{subtitle}</p>
        </>
    )
}

export default SectionHead;