import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

import Images from '../DB/Images.json';
import HomeImages from '../DB/HomeImages';

function SectionHomeCard({ id, communityId, price, area, type }) {
    const [listImg, setListImg] = useState([]);

    useEffect(() => {
        function pickUrl() {
            let url = [];
            for (let i = 0; i < Images.length; i++) {
                if (Images[i].type === type) {
                    url = Images[i].url;
                }
            }
            setListImg(url);
        }
        pickUrl();
    }, [type]);

    return (
        <Modal
            closeIcon
            trigger={
                <Card fluid className='__hover'>
                    <Card.Content>
                        <Div>
                            <Float>
                                <Card.Description>
                                    Type: {type}
                                </Card.Description>
                                <Card.Meta>Area: {area} sqft</Card.Meta>
                                <Card.Meta>
                                    Price: $ {Math.floor(price)}
                                </Card.Meta>
                            </Float>
                            <Image src={listImg} size='small' floated='right' />
                        </Div>
                    </Card.Content>
                </Card>
            }
        >
            <Modal.Header>{type}</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    {HomeImages.map((h, i) => (
                        <Padding key={i}>
                            <Image fluid key={i} src={h.url} />
                        </Padding>
                    ))}
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

export default SectionHomeCard;

SectionHomeCard.propTypes = {
    id: PropTypes.string.isRequired,
    communityId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

// Styling of Each Card
const Div = styled.div`
    display: block;
    position: relative;
`;
const Float = styled.div`
    float: left;
`;
const Padding = styled.div`
    padding: 5px;
`;
