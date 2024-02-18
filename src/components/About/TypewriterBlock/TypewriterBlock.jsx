import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterBlock = () => {
    return (
        <Typewriter
            options={{
                strings: ['Programmer', 'Full Stack Developer', 'Frontend Developmenter'],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
            }}
        />
    )
}

export default TypewriterBlock;