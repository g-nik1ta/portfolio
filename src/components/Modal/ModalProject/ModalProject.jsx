import React from 'react';
import './ModalProject.scss';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProjectAction } from 'store/ProjectsReducer';
import MyButton from 'components/UI/MyButton/MyButton';

const ModalProject = () => {
    const dispatch = useDispatch();
    const currentProject = useSelector(state => state.ProjectsReducer.currentProject);
    const project = useSelector(state => state.ProjectsReducer.projects.find(item => item.id === currentProject));

    const closeHandler = () => {
        dispatch(setCurrentProjectAction(null));
    }

    if (!currentProject) return

    return (
        <Modal modalName="modal-project" closeHandler={closeHandler}>
            <div className="img_wrapper">
                <img src={require(`assets/projects/${project.preview}`)} alt={`${project.project_name} preview`} />
            </div>
            <h2 className="project_name">{project.project_name}</h2>
            <h4 className="duration_work">{project.duration_work}</h4>
            <ul className='undecorated_ul technologies'>
                {
                    project.technologies.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
            <p className="project_description">{project.project_description}</p>
            {
                project.appHref &&
                <MyButton href={project.appHref} active={true} rectangle={true}>View Live App</MyButton>
            }
        </Modal>
    )
}

export default ModalProject;