import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const About = () => (
    <Section id="about">
        <SectionDivider />
        <SectionTitle main>
            About Me
        </SectionTitle>
        <SectionText>
            Hi, my name is Eric Cheng.
            I'm a current sophomore in high school at Green Hope High School in North Carolina.
            I aspire to become a full-stack web developer with a passion for learning new technologies and building things.
            Feel free to look at my projects below!
        </SectionText>
    </Section>
)

export default About;