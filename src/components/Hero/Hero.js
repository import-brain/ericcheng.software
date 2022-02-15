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
        A passionate high-schooler interested in full-stack web development and <a style={{color: '#42d392'}} href=''>open-source software.</a>
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/e/2PACX-1vSs-0L_gFb2p2giXTS5KQ51glhFDFFcK9zylhOSa9zlZT-qPgifieKm5GJLp2-GFQViNUkTHClTcENG/pub'}>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;