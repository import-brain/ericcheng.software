import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, ProjectsSectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import Button from '../../styles/GlobalComponents/Button';

const Projects = () => (
  <Section nopadding id="projects">
    <ProjectsSectionTitle main style={{width: '100%', textAlign: 'center'}}>
      Projects I've Worked On
    </ProjectsSectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
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
              <Button className="website-link" onClick={() => window.location = p.visit}>Website</Button>
              <Button className="source-code-link" onClick={() => window.location = p.source}>Source Code</Button>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;