import React, { useEffect, useRef, useState } from 'react';
import "./Project.scss";
import SectionHead from 'components/SectionHead/SectionHead';
import SwitchBlock from 'components/UI/SwitchBlock/SwitchBlock';
import MyButton from 'components/UI/MyButton/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProjectAction } from 'store/ProjectsReducer';
import { useTranslation } from 'react-i18next';
import { useTranslationDataArray } from 'hooks/useTranslations';
import Pagination from 'components/UI/Pagination/Pagintaion';
import variables from 'styles/variables.module.scss';

const Project = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const titleArr = t('projects.types', { returnObjects: true })
    const types = [
        { id: -1, title: titleArr[0] },
        { id: 1, title: titleArr[1] },
        { id: 2, title: titleArr[2] },
        { id: 3, title: titleArr[3] },
    ]

    const projectsCommon = useSelector(state => state.ProjectsReducer.projects);
    const projects_translations = useSelector(state => state.ProjectsReducer.projects_translations);
    const translationProjects = useTranslationDataArray(projectsCommon, projects_translations, i18n.language)
    const [projects, setProjects] = useState(translationProjects.reverse());

    useEffect(() => {
        setProjects(translationProjects.reverse())
    }, [translationProjects])


    const [sortProjects, setSortProjects] = useState(translationProjects.reverse());

    const [sort, setSort] = useState(-1);
    const sortHandler = (param) => {
        setSort(Number(param));
    }

    const setCurrentProject = (id) => {
        dispatch(setCurrentProjectAction(id));
        document.querySelector('body').classList.add('no_scroll');
    }

    useEffect(() => {
        if (sort === -1) {
            setSortProjects(projects);
            return;
        }
        setSortProjects(projects.filter(item => item.type_id === sort));
    }, [sort, projects])


    const paginationMaxItem = Number(variables.mdSizeMaxWidth) ? 6 : 9;
    const [currentPagePagination, setCurrentPagePagintaion] = useState(1);
    const projectsRef = useRef()

    const [sortProjectsPaginate, setSortProjectsPaginate] = useState([]);
    useEffect(() => {
        const startIndex = (currentPagePagination - 1) * paginationMaxItem;
        const endIndex = Math.min(currentPagePagination * paginationMaxItem, sortProjects.length);
        setSortProjectsPaginate(sortProjects.slice(startIndex, endIndex))

        if (projectsRef.current) {
            projectsRef.current.scrollTop = 0
        }

        if ((paginationMaxItem * currentPagePagination - paginationMaxItem + 1) > sortProjects.length && !!sortProjects.length) {
            setCurrentPagePagintaion(currentPagePagination - 1);
        }
    }, [sortProjects, currentPagePagination])

    return (
        <section className='project_section container_box' id='projects'>
            <SectionHead
                title={t('projects.head.title')}
                subtitle={t('projects.head.subtitle')}
            />
            <SwitchBlock switchHandler={sortHandler} firstActive={true}>
                {
                    types.map(item =>
                        <MyButton key={item.id} data-param={item.id}>{item.title}</MyButton>
                    )
                }
            </SwitchBlock>
            <div className="projects_list" ref={projectsRef}>
                {
                    !!sortProjectsPaginate.length &&
                    sortProjectsPaginate.map((project, index) =>
                        <div onClick={() => setCurrentProject(project.id)} key={project.id} className="project_card">
                            <img src={require(`assets/projects/${project.preview}`)} alt={`project ${index}`} />
                            <ul className='undecorated_ul technologies'>
                                {
                                    project.technologies.map(item =>
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>
                            <h2 className="project_name">{project.translation.project_name}</h2>
                            <h4 className="duration_work">{project.translation.duration_work}</h4>
                            <p className="project_description">{project.translation.project_description}</p>
                        </div>
                    )
                }
            </div>
            {
                sortProjects.length > paginationMaxItem
                    ?
                    <Pagination
                        currentPagePagination={currentPagePagination}
                        setCurrentPagePagintaion={setCurrentPagePagintaion}
                        paginationMaxItem={paginationMaxItem}
                        items={sortProjects}
                    />
                    :
                    <></>
            }
        </section>
    )
}

export default Project;