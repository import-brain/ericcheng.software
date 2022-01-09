import React from 'react';

import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { JsSquare } from '@styled-icons/fa-brands/JsSquare'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss'

import { Node } from '@styled-icons/fa-brands/Node'
import { Express } from '@styled-icons/simple-icons/Express'

import { Linux } from '@styled-icons/fa-brands/Linux'
import { Gnubash } from '@styled-icons/simple-icons/Gnubash'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs'
import { Circleci } from '@styled-icons/simple-icons/Circleci'

import { Python } from '@styled-icons/boxicons-logos/Python'
import { Java } from '@styled-icons/fa-brands/Java'

import { Jest } from '@styled-icons/simple-icons/Jest'
import { Pytest } from '@styled-icons/simple-icons/Pytest'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem } from '@mui/material' 

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>
      Technologies
    </SectionTitle>
    <List direction="row">
      <ListItem>
        <SectionText>
          Front-End
        </SectionText>
        <Html5 size='4rem' />
        <Css3 size='4rem' />
        <JsSquare size='4rem' />
        <Typescript size='3.45rem' />
        <ReactLogo size='4rem' />
        <Tailwindcss size='4rem' />
      </ListItem>

      <ListItem>
        <SectionText>
          Back-End
        </SectionText>
        <Node size='4rem' />
        <Express size='4rem' />
      </ListItem>

      <ListItem>
        <SectionText>
          DevOps
        </SectionText>
        <Linux size='4rem' />
        <Gnubash size='4rem' />
        <Git size='4rem' />
        <Github size='4rem' />
        <Nextdotjs size='4rem' />
        <Circleci size='4rem' />
      </ListItem>

      <ListItem>
        <SectionText>
          Programming Languages
        </SectionText>
        <Python size='4rem' />
        <Java size='4rem' />
      </ListItem>

      <ListItem>
        <SectionText>
          Testing
        </SectionText>
        <Jest size='4rem' />
        <Pytest size='4rem' />
      </ListItem>
    </List>
    <br />
  </Section>
);

export default Technologies;
