import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTitleTyped } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import TypeIt from 'typeit-react';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitleTyped main>
      <TypeIt>Projects I've Worked On</TypeIt>
    </SectionTitleTyped>
    <GridContainer>
      {projects.map((project) => (
        <div>
          {project.image}
          <br />
          {project.title}
          <br />
          {project.description}
          <br />
          {project.techUsed}
          <br />
          {project.visit}
          <br />
          {project.source}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;