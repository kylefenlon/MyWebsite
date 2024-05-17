import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Group, Text, Anchor } from '@mantine/core';

const NavBar = () => {
    const [colour, setColour] = useState(false);

    const changeColour = () => {
        if (window.scrollY >= 100) {
            setColour(true);
        } else {
            setColour(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColour);
        return () => {
            window.removeEventListener('scroll', changeColour);
        };
    }, []);

    return (
        <div className={colour ? 'header header-bg' : 'header'} style={{ padding: '10px 0', background: colour ? '#f5f5f5' : 'transparent' }}>
            <Container>
                <Group position="apart" align="center">
                    <Anchor component={Link} to="/" style={{ textDecoration: 'none' }}>
                        <Text size="xl" weight={700}>KFenlon.com</Text>
                    </Anchor>
                    <Group spacing="xl">
                        <Anchor component={Link} to="/" style={{ textDecoration: 'none' }}>
                            <Text>Home</Text>
                        </Anchor>
                        <Anchor component={Link} to="/projects" style={{ textDecoration: 'none' }}>
                            <Text>Projects</Text>
                        </Anchor>
                        <Anchor component={Link} to="/blog" style={{ textDecoration: 'none' }}>
                            <Text>Blog</Text>
                        </Anchor>
                        {/* <Anchor component={Link} to="/contact" style={{ textDecoration: 'none' }}>
              <Text>Contact</Text>
            </Anchor> */}
                    </Group>
                </Group>
            </Container>
        </div>
    );
};

export default NavBar;
