import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <Box bg="black" color="white" className='page'>
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
