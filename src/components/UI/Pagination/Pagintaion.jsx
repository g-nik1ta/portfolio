import React from 'react';
import ArrowNext from 'svg/ArrowNext';
import ArrowPrev from 'svg/ArrowPrev';
import './Pagination.scss';

const Pagination = ({ currentPagePagination, setCurrentPagePagintaion, paginationMaxItem, items }) => {
    const pages = Math.ceil(items.length / paginationMaxItem);
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr.push({ id: i, number: i });
    }

    const goToPrevPage = () => {
        if (currentPagePagination > 1) {
            setCurrentPagePagintaion(currentPagePagination - 1);
        }
    }

    const goToNextPage = () => {
        if (currentPagePagination < pages) {
            setCurrentPagePagintaion(currentPagePagination + 1)
        }
    }

    return (
        <div className='pagination'>
            <div
                onClick={goToPrevPage}
                className="arrow prev"
            >
                <ArrowPrev />
            </div>
            {
                pagesArr.length >= 5
                    ?
                    (
                        <>
                            <PaginateBlock
                                element={pagesArr[0]}
                                setCurrentPagePagintaion={setCurrentPagePagintaion}
                                currentPagePagination={currentPagePagination}
                            />
                            <span
                                className={
                                    "item" +
                                    (currentPagePagination > pagesArr[1].number ? "" : " hide")
                                }
                            >
                                ...
                            </span>
                            <PaginateMultiBlock
                                pagesArr={pagesArr}
                                setCurrentPagePagintaion={setCurrentPagePagintaion}
                                currentPagePagination={currentPagePagination}
                            />
                            <span
                                className={
                                    "item" +
                                    (currentPagePagination < pagesArr[pagesArr.length - 2].number ? "" : " hide")
                                }
                            >
                                ...
                            </span>
                            <PaginateBlock
                                element={pagesArr[pagesArr.length - 1]}
                                setCurrentPagePagintaion={setCurrentPagePagintaion}
                                currentPagePagination={currentPagePagination}
                            />
                        </>
                    )
                    :
                    pagesArr.map(page =>
                        <span
                            onClick={() => setCurrentPagePagintaion(page.number)}
                            key={page.id}
                            className={
                                "item" +
                                (page.id === currentPagePagination ? " active" : "")
                            }
                        >
                            {page.number}
                        </span>
                    )
            }
            <div
                onClick={goToNextPage}
                className="arrow next"
            >
                <ArrowNext />
            </div>
        </div>
    )
}



const PaginateBlock = ({ element, setCurrentPagePagintaion, currentPagePagination }) => {
    return (
        <span
            onClick={() => setCurrentPagePagintaion(element.number)}
            className={
                "item" +
                (element.id === currentPagePagination ? " active" : "")
            }
        >
            {element.number}
        </span>
    )
}



const PaginateMultiBlock = ({ pagesArr, setCurrentPagePagintaion, currentPagePagination }) => {
    const getActiveClass = () => {
        if (currentPagePagination > pagesArr[0].number && currentPagePagination < pagesArr[pagesArr.length - 1].number) {
            return " active";
        }
        return ""
    }

    const getCurrentTitle = () => {
        if (currentPagePagination > pagesArr[0].number && currentPagePagination < pagesArr[pagesArr.length - 1].number) {
            return currentPagePagination;
        } else if (currentPagePagination === pagesArr[0].number) {
            return '2'
        } else return pagesArr[pagesArr.length - 1].number - 1
    }

    return (
        <span
            onClick={() => setCurrentPagePagintaion(Number(getCurrentTitle()))}
            className={"item" + getActiveClass()}
        >
            {getCurrentTitle()}
        </span>
    )

}

export default Pagination;