import React from 'react';

import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { JsSquare } from '@styled-icons/fa-brands/JsSquare'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss'

import { Node } from '@styled-icons/fa-brands/Node'
import { Graphql } from '@styled-icons/simple-icons/Graphql'

import { Linux } from '@styled-icons/fa-brands/Linux'
import { Gnubash } from '@styled-icons/simple-icons/Gnubash'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Vercel } from '@styled-icons/simple-icons/Vercel'
import { Heroku } from '@styled-icons/simple-icons/Heroku'
import { Netlify } from '@styled-icons/simple-icons/Netlify'
import { Circleci } from '@styled-icons/simple-icons/Circleci'
import { Postman } from '@styled-icons/simple-icons/Postman'

import { Python } from '@styled-icons/boxicons-logos/Python'
import { Java } from '@styled-icons/fa-brands/Java'

import { Jest } from '@styled-icons/simple-icons/Jest'
import { Pytest } from '@styled-icons/simple-icons/Pytest'

import { Section, SectionText, TechSectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem } from '@mui/material' 

const Technologies = () => (
  <Section id="tech" style={{display: 'flex'}}>
    <TechSectionTitle main>
      Technologies
    </TechSectionTitle>
    <List direction="row">
      <ListItem>
        <SectionText>
          Front-End
        </SectionText>
        <Html5 size='4rem' className="pad-inline"/>
        <Css3 size='4.1rem' className="pad-inline"/>
        <JsSquare size='4rem' className="pad-inline"/>
        <Typescript size='3.45rem' className="pad-inline"/>
        <Nextdotjs size='3.45rem' className="pad-inline"/>
        <ReactLogo size='4rem' className="pad-inline"/>
        <Tailwindcss size='4rem' className="pad-inline"/>
      </ListItem>

      <ListItem>
        <SectionText>
          Back-End
        </SectionText>
        <Node size='4rem' className="pad-inline"/>
        <Graphql size='4rem' className="pad-inline"/>
      </ListItem>

      <ListItem>
        <SectionText>
          DevOps
        </SectionText>
        <Linux size='4rem' className="pad-inline"/>
        <Gnubash size='4rem' className="pad-inline"/>
        <Git size='4rem' className="pad-inline"/>
        <Github size='4rem' className="pad-inline"/>
        <Vercel size='4rem' className="pad-inline"/>
        <Heroku size='4rem' className="pad-inline"/>
        <Netlify size='4rem' className="pad-inline"/>
        <Circleci size='4rem' className="pad-inline"/>
        <Postman size='4rem' className="pad-inline"/>
      </ListItem>

      <ListItem>
        <SectionText>
          Programming Languages
        </SectionText>
        <Python size='4rem' className="pad-inline"/>
        <Java size='4rem' className="pad-inline"/>
      </ListItem>

      <ListItem>
        <SectionText>
          Testing
        </SectionText>
        <Jest size='4rem' className="pad-inline"/>
        <Pytest size='4rem' className="pad-inline"/>
      </ListItem>
    </List>
    <br />
  </Section>
);

export default Technologies;
