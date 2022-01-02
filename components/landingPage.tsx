import React from 'react'
import { Box, Container, Text, Link, SimpleGrid } from '@chakra-ui/react'
import Button from '@mui/material/Button'

export const LandingPage = () => {
    return (
        <Box bg="black" color="white" className='page'>
            <Box className='main-content'>
                <Container className='main-text'>
                    <Button variant='contained'>test</Button>
                </Container>
            </Box>

            <Box bg="black" color="white" className='contact-buttons'>
                <Button href='https://github.com/import-brain' variant='contained' color='primary'>GitHub</Button>
            </Box>
        </Box>
    )
}