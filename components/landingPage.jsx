import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Button from '@mui/material/Button'
import TypeIt from "typeit-react";

export const LandingPage = () => {
    return (
        <Box bg="black" color="white" className='page'>
            <Box id='welcome-typeit'>
                <Container className='welcome-text'>
                    <TypeIt>Hi, I&#39;m Eric.</TypeIt>
                </Container>
            </Box>

            <Box className='main-content'>
                <Container className='main-text'>
                    <Button variant='contained'>test</Button>
                </Container>
            </Box>

            <Box bg="black" color="white" className='contact-buttons'>
                <Button href='https://github.com/import-brain' variant='contained' color='primary'>GitHub</Button>
                <Button href='mailto:ericcheng9316@gmail.com' variant='contained' color='primary'>Email</Button>
            </Box>
        </Box>
    )
}
