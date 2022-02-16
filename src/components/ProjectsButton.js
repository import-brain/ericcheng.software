import React from 'react'

import { ProjectsButtonBack, ProjectsButtonFront } from '../styles/GlobalComponents/index'

const ProjectsButton = (props) => (
    <ProjectsButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
        <ProjectsButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ProjectsButtonFront>
    </ProjectsButtonBack>
);

export default ProjectsButton;