import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Icon, Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';

function Cards({ id, name, imgUrl, group }) {
    const imgComing =
        'https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg';
    return (
        <Link
            to={{
                pathname: `/detail/${id}`,
                state: id,
            }}
        >
            <Card fluid className='__hover'>
                <Image
                    src={!imgUrl ? imgComing : imgUrl}
                    alt={name}
                    title={name}
                    height='160'
                />
                <Card.Content style={{ height: '80px' }}>
                    <Card.Description style={{ fontWeight: '700' }}>
                        {name}
                    </Card.Description>
                    <Card.Meta textAlign='right'>{group}</Card.Meta>
                </Card.Content>
            </Card>
        </Link>
    );
}

Cards.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

function SectionCards({ data, homes }) {
    return (
        <Container>
            <br />
            <MainTitle>You can see our listing in Calgary</MainTitle>
            <p>
                <Icon name='bullhorn' size='large' color='red' />
                <MainDesc>We have {homes.length} stunning houses</MainDesc>
            </p>
            <CardGrid>
                {data.map((c, i) => (
                    <CardPadding key={i}>
                        <Cards
                            id={c.id}
                            name={c.name}
                            imgUrl={c.imgUrl}
                            group={c.group}
                        />
                    </CardPadding>
                ))}
            </CardGrid>
        </Container>
    );
}

export default SectionCards;

const MainTitle = styled.p`
    color: var(--clr-dark);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    margin-top: 2rem;
`;
const MainDesc = styled.span`
    font-size: var(--fs-body);
`;
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const CardPadding = styled.div`
    padding: 5px;
`;
