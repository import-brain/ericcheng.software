import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitleTyped } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import TypeIt from 'typeit-react';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitleTyped main>
      <TypeIt>Projects I've Worked On</TypeIt>
    </SectionTitleTyped>
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
              <ExternalLinks href={p.visit}>Website</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;