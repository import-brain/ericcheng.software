import React from 'react'
import { Box, Container, Text} from '@chakra-ui/react'
import Button from '@mui/material/Button'
import TypeIt from "typeit-react";
import 'styles/globals.css'
import 'styles/Home.module.css'

export const LandingPage = () => {
    return (
        <Box bg="black" color="white">
            <Box id='welcome-typeit'>
                <Container className='container'>
                    <TypeIt className='title'>Hi, I&#39;m Eric.</TypeIt>
                </Container>
            </Box>

            <Box className='main-content'>
                <Container className='container'>
                    <Text className='main'>I&#39;m a high school sophomore at Green Hope High School.
                    Since discovering programming in 9th grade, coding has fascinated me with how simple, yet complex it is.
                    In my free time, I like to create applications that have a positive impact on the lives of those around me.
                    I&#39;ve created/contributed to programs and services as varied as websites, Python modules, JavaScript libraries, and more.
                    Feel free to connect with me below!
                    </Text>
                </Container>
            </Box>

            <Box bg="black" color="white" className='contact-buttons'>
                <Button href='https://github.com/import-brain' variant='contained' color='primary'>GitHub</Button>
                <Button href='mailto:ericcheng9316@gmail.com' variant='contained' color='primary'>Email</Button>
            </Box>
        </Box>
    )
}
