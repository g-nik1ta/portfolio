import React, { useEffect, useState } from 'react';
import './ModalProject.scss';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProjectAction } from 'store/ProjectsReducer';
import MyButton from 'components/UI/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { useTranslationData } from 'hooks/useTranslations';

const ModalProject = () => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const translationData = useTranslationData();

    const closeHandler = () => {
        dispatch(setCurrentProjectAction(null));
    }


    const currentProject = useSelector(state => state.ProjectsReducer.currentProject);
    const projectsCommon = useSelector(state => state.ProjectsReducer.projects);
    const projects_translations = useSelector(state => state.ProjectsReducer.projects_translations);

    const [project, setProject] = useState();

    useEffect(() => {
        setProject(translationData(projectsCommon, projects_translations, i18n.language, currentProject));
        document.querySelector('.modal_wrapper.modal-project')?.classList.remove('hide')
    }, [projectsCommon, projects_translations, i18n.language, currentProject])

    if (!project?.id) return

    return (
        <Modal modalName="modal-project" closeHandler={closeHandler}>
            <div className="img_wrapper">
                <img src={require(`assets/projects/${project.preview}`)} alt={`${project.translation.project_name} preview`} />
            </div>
            <h2 className="project_name">{project.translation.project_name}</h2>
            <h4 className="duration_work">{project.translation.duration_work}</h4>
            <ul className='undecorated_ul technologies'>
                {
                    project.technologies.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
            <p className="project_description">{project.translation.project_description}</p>
            {
                project.appHref &&
                <MyButton href={project.appHref} active={true} rectangle={true}>
                    View Live App
                </MyButton>
            }
        </Modal>
    )
}

export default ModalProject;