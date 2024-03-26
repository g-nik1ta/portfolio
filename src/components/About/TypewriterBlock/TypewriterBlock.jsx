import React from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

const TypewriterBlock = () => {
    const { t } = useTranslation();

    return (
        <Typewriter
            options={{
                strings: t('about.typewriter', { returnObjects: true }),
                autoStart: true,
                loop: true,
                pauseFor: 2500,
            }}
        />
    )
}

export default TypewriterBlock;