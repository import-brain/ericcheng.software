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
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;