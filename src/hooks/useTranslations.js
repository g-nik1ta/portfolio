import { useEffect, useState } from "react";

export const useTranslationData = (arrayCommon, data_translations, language) => {
    const [translatedArray, setTranslatedArray] = useState([]);

    useEffect(() => {
        const translatedData = arrayCommon.map(company => {
            const translation = data_translations.filter(item =>
                item.id === company.id && item.lang === language
            )[0];
            return {
                ...company,
                translation
            }
        })
        setTranslatedArray(translatedData);
    }, [arrayCommon, data_translations, language])

    return translatedArray;
}