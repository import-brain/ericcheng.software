import React from 'react'
import { Box, Container, Text} from '@chakra-ui/react'
import Button from '@mui/material/Button'
import TypeIt from "typeit-react";

export const LandingPage = () => {
    return (
        <Box bg="black" color="white" className="BlinkMacSystemFont">
            <Box id='welcome-typeit' class='text-3xl font-mono BlinkMacSystemFont'>
                <Container className='container'>
                    <TypeIt className='title BlinkMacSystemFont'>Hi, I&#39;m Eric.</TypeIt>
                </Container>
            </Box>

            <Box className='main-content BlinkMacSystemFont'>
                <Container className='container'>
                    <Text className='main'>I&#39;m a high school sophomore at Green Hope High School.
                    Since discovering programming in 9th grade, coding has fascinated me with how simple, yet complex it is.
                    In my free time, I like to create applications that have a positive impact on the lives of those around me.
                    I&#39;ve created/contributed to programs and services as varied as websites, Python modules, JavaScript libraries, and more.
                    Feel free to connect with me below!
                    </Text>
                </Container>
            </Box>

            <Box bg="black" color="white" className='contact-buttons BlinkMacSystemFont'>
                <Button href='https://github.com/import-brain' variant='contained' className='orange'>GitHub</Button>
                <Button href='mailto:ericcheng9316@gmail.com' variant='contained' className='orange'>Email</Button>
            </Box>
        </Box>
    )
}
