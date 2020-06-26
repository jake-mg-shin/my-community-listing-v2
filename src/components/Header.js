import React from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import mainLogo from './images/logo.png';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends React.Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Container>
                <Head>
                    <MarginBottom>
                        <Menu secondary stackable>
                            <Menu.Item position='left'>
                                <Image src={mainLogo} size='mini' />
                                <LogoText>Dev.JakeShin</LogoText>
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={this.handleItemClick}
                                    href='#'
                                />
                                <Menu.Item
                                    name='listing'
                                    active={activeItem === 'listing'}
                                    onClick={this.handleItemClick}
                                >
                                    <>
                                        <AnchorLink href='#listing'>
                                            Listings
                                        </AnchorLink>
                                    </>
                                </Menu.Item>
                                <Menu.Item
                                    name='news'
                                    active={activeItem === 'news'}
                                    onClick={this.handleItemClick}
                                >
                                    <>
                                        <AnchorLink href='#news'>
                                            News
                                        </AnchorLink>
                                    </>
                                </Menu.Item>
                                <Menu.Item
                                    name='about'
                                    active={activeItem === 'about'}
                                    onClick={this.handleItemClick}
                                    href='#'
                                />
                            </Menu.Menu>
                        </Menu>
                    </MarginBottom>
                </Head>
            </Container>
        );
    }
}

export default Header;

// Style of Header.js
const Head = styled.div`
    margin-top: 0px;
`;
const LogoText = styled.div`
    color: var(--clr-dark);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    padding-left: 5px;
`;
const MarginBottom = styled.div`
    margin-bottom: 5px !important;
`;
