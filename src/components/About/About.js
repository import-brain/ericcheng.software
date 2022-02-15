import React from 'react';

import { Section, SectionText, AboutMeSectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const About = () => (
    <Section id="about">
        <SectionDivider />
        <AboutMeSectionTitle main>
            About Me
        </AboutMeSectionTitle>
        <SectionText>
            Hi, my name is Eric Cheng.
            I'm a current sophomore at Green Hope High School in North Carolina.
            I aspire to become a full-stack web developer with a passion for <span style={{color: '#FF4D4D'}}>learning new technologies</span> and building things.
            Feel free to look at my projects below!
        </SectionText>
    </Section>
)

export default About;