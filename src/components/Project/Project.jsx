import React, { useEffect, useState } from 'react';
import "./Project.scss";
import SectionHead from 'components/SectionHead/SectionHead';
import SwitchBlock from 'components/UI/SwitchBlock/SwitchBlock';
import MyButton from 'components/UI/MyButton/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProjectAction } from 'store/ProjectsReducer';
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const titleArr = t('projects.types', { returnObjects: true })
    const types = [
        { id: -1, title: titleArr[0] },
        { id: 1, title: titleArr[1] },
        { id: 2, title: titleArr[2] },
        { id: 3, title: titleArr[3] },
    ]

    const projects = useSelector(state => state.ProjectsReducer.projects);
    const [sortProjects, setSortProjects] = useState(projects);

    const [sort, setSort] = useState(-1);
    const sortHandler = (param) => {
        setSort(Number(param));
    }
    useEffect(() => {
        if (sort === -1) {
            setSortProjects(projects);
            return;
        }
        setSortProjects(projects.filter(item => item.type_id === sort));
    }, [sort])

    const setCurrentProject = (id) => {
        dispatch(setCurrentProjectAction(id));
        document.querySelector('body').classList.add('no_scroll');
    }

    return (
        <section className='project_section container_box' id='projects'>
            <SectionHead
                title={t('experience.head.title')}
                subtitle={t('experience.head.subtitle')}
            />
            <SwitchBlock switchHandler={sortHandler} firstActive={true}>
                {
                    types.map(item =>
                        <MyButton key={item.id} data-param={item.id}>{item.title}</MyButton>
                    )
                }
            </SwitchBlock>
            <div className="projects_list">
                {
                    sortProjects.reverse().map((project, index) =>
                        <div onClick={() => setCurrentProject(project.id)} key={project.id} className="project_card">
                            <img src={require(`assets/projects/${project.preview}`)} alt={`project ${index}`} />
                            <ul className='undecorated_ul technologies'>
                                {
                                    project.technologies.map(item =>
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>
                            <h2 className="project_name">{project.project_name}</h2>
                            <h4 className="duration_work">{project.duration_work}</h4>
                            <p className="project_description">{project.project_description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Project;