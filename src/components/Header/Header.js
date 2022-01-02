import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';

const Header = () =>  (
  <Container>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: "center", color: "white" }}>
          <DiCode size="3rem" /> <span>ericcheng.software</span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <Stack direction="row">
        <ListItem>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </ListItem>
      </Stack>
    </Div2>
  </Container>
);

export default Header;
