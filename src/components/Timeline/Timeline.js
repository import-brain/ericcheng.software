import React from 'react';

import { FcBriefcase as WorkIcon, FcGraduationCap as SchoolIcon } from 'react-icons/fc';

import { timelineElements } from '../../constants/constants';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

import { Section, TimelineSectionTitle } from '../../styles/GlobalComponents';

let workIconStyles = { background: "#06D6A0" };
let schoolIconStyles = { background: "#f9c74f" };

const Timeline = () => (
    <Section id="timeline">
        <TimelineSectionTitle main style={{width: '100%', textAlign: 'center'}}>
            Timeline
        </TimelineSectionTitle>
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon === 'work';

                    return (
                        <VerticalTimelineElement
                            key = {element.key}
                            dateClassName = "date"
                            iconStyle = {isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon = {isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h1 style={{color: "black", fontSize: "15px"}}>{element.date}</h1>
                            <h3 className="vertical-timeline-element-title" style={{color: "black", fontSize: "20px"}}>{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{color: "black", fontSize: "15px"}}>{element.location}</h5>
                            <p id="description" style={{color: "black", fontSize: "15px"}}>{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </Section>
);

export default Timeline;