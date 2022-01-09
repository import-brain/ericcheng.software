import React from 'react';

import { Section, SectionText, SectionTitleTyped } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import TypeIt from 'typeit-react';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitleTyped main center>
        <TypeIt>Hi, I'm Eric.</TypeIt>
      </SectionTitleTyped>
      <SectionText>
        A passionate high-schooler interested in full-stack web development.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:ericcheng9316@gmail.com'}>
        Send me an email
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;