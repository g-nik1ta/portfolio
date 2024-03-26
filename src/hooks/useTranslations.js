import { useEffect, useState } from "react";

export const useTranslationDataArray = (arrayCommon, data_translations, language) => {
    const [translatedArray, setTranslatedArray] = useState([]);

    useEffect(() => {
        const translatedData = arrayCommon.map(arrItem => {
            const translation = data_translations.filter(item =>
                item.id === arrItem.id && item.lang === language
            )[0] || {};
            return {
                ...arrItem,
                translation
            }
        })
        setTranslatedArray(translatedData);
    }, [arrayCommon, data_translations, language])

    return translatedArray;
}

export const useTranslationData = () => {
    return (projectsCommon, data_translations = [], language, currentProject) => {
        const project = projectsCommon.find(item => item.id === currentProject);
        
        const translation = data_translations.filter(item =>
            item.id === currentProject && item.lang === language
        )[0] || {};

        return {
            ...project,
            translation
        }
    }
}