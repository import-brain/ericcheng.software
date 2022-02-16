import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, ProjectsSectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import ProjectsButton from '../ProjectsButton';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <ProjectsSectionTitle main>
      Projects I've Worked On
    </ProjectsSectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <Hr />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return (
                    <div>
                      <Tag>{t}</Tag>
                    </div>
                  );
                })}
              </TagList>
            </div>
            <UtilityList>
              <ProjectsButton class="website-link" href={p.visit}>Website</ProjectsButton>
              <ProjectsButton class="source-code-link" href={p.source}>Source Code</ProjectsButton>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;