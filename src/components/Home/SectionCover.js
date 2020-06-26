import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

function SectionCover() {
    return (
        <BgImage>
            <Container textAlign='left'>
                <Cover>
                    <CoverTitle>Welcome</CoverTitle>
                    <CoverSubtitle>My Community Listings</CoverSubtitle>
                    <CoverDesc>
                        We provide local listings for Calgary community
                    </CoverDesc>
                    <ButtonsFlex>
                        <Padding>
                            <Button color='facebook'>
                                <Icon name='facebook' /> Facebook
                            </Button>
                        </Padding>
                        <Padding>
                            <Button color='linkedin'>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                        </Padding>
                        <Padding>
                            <Button color='instagram'>
                                <Icon name='instagram' /> Instagram
                            </Button>
                        </Padding>
                        <Padding>
                            <Button color='youtube'>
                                <Icon name='youtube' /> YouTube
                            </Button>
                        </Padding>
                    </ButtonsFlex>
                </Cover>
            </Container>
        </BgImage>
    );
}

export default SectionCover;

const BgImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;

    @media only screen and (max-width: 991px) {
        height: 600px;
    }
    @media only screen and (max-width: 767px) {
        height: 500px;
    }
`;
const slideFade = keyframes`
100% {
    opacity: 1;
}
`;
const Cover = styled.div`
    padding-top: 15%;
    opacity: 0;
    animation: 2s ${slideFade} 1s forwards;

    @media only screen and (max-width: 991px) {
        padding-top: 15%;
    }
    @media only screen and (max-width: 767px) {
        padding-top: 18%;
    }
`;
const CoverTitle = styled.p`
    color: var(--clr-dark);
    font-size: var(--fs-h1);
    font-weight: var(--fw-bold);
    margin-bottom: 0;
`;
const CoverSubtitle = styled.p`
    color: var(--clr-accent);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    margin-bottom: 0;
`;
const CoverDesc = styled.p`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
`;
const ButtonsFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Padding = styled.div`
    padding-right: 5px;
    padding-bottom: 5px;
`;
