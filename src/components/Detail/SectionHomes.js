import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

import SectionHomeCard from './SectionHomeCard';

function SectionHomes({ homes, avg }) {
    return (
        <>
            <div className='ui floating blue message'>
                <div className='content'>
                    <p>Let's see our listing</p>
                </div>
            </div>
            <div>
                <MainTitle>Listing</MainTitle>
                <p>
                    <Icon name='alarm' size='large' color='yellow'></Icon>
                    <MainDesc>
                        The average price of all the homes of this community : $
                        {avg}
                    </MainDesc>
                </p>
                <Link
                    to={{
                        pathname: `/`,
                    }}
                >
                    <button className='ui icon left labeled button'>
                        <i aria-hidden='true' className='left arrow icon'></i>
                        Back
                    </button>
                </Link>
            </div>
            <Divider />

            <CardGrid>
                {homes.map((h) => (
                    <Padding key={h.id}>
                        <SectionHomeCard
                            key={h.id}
                            id={h.id}
                            communityId={h.communityId}
                            price={h.price}
                            area={h.area}
                            type={h.type}
                        />
                    </Padding>
                ))}
            </CardGrid>
            <br />
        </>
    );
}

export default SectionHomes;

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
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 540px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Padding = styled.div`
    padding: 5px;
`;
