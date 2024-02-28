import React from 'react';
import "./Project.scss";
import SectionHead from 'components/SectionHead/SectionHead';

const Project = () => {
    return (
        <section className='project_section container_box'>
            <SectionHead
                title="Projects"
                subtitle="I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."
            />

        </section>
    )
}

export default Project;