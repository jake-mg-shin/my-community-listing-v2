import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

import SectionHomes from '../components/Detail/SectionHomes';
import SectionMap from '../components/Detail/SectionMap';
import HomesData from '../components/DB/HomesData.json';

function Detail(props) {
    const [Homes, setHomes] = useState([]);
    const [avg, setAvg] = useState([]);
    const [loadingHome, setLoadingHome] = useState(true);

    useEffect(() => {
        // const getHomes = async () => {
        //     // const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        //     const { data } = await axios.get(
        //         // CORS_PROXY +
        //         'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'
        //     );

        //     let price = 0;
        //     let present = [];
        //     for (let i = 0; i < data.length; i++) {
        //         if (data[i].communityId === props.match.params.id) {
        //             price = price + data[i].price;
        //             present.push(data[i]);
        //         }
        //     }

        //     // avg price
        //     price = Math.round(price / present.length);
        //     setAvg(price);

        //     setHomes(present);
        //     setLoadingHome(false);
        // };
        const getHomes = () => {
            const data = HomesData;
            let price = 0;
            let present = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].communityId === props.match.params.id) {
                    price = price + data[i].price;
                    present.push(data[i]);
                }
            }

            price = Math.round(price / present.length); // avg price
            const _price = price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // with comma
            setAvg(_price);

            setHomes(present);
            setLoadingHome(false);
        };

        getHomes();
    }, [props.match.params.id]);

    return (
        <Container>
            {loadingHome ? (
                <Dimmer active>
                    <Loader active inline='centered' />
                </Dimmer>
            ) : (
                <>
                    <SectionHomes homes={Homes} avg={avg} />
                    <SectionMap id={props.match.params.id} />
                </>
            )}
        </Container>
    );
}

export default withRouter(Detail);
