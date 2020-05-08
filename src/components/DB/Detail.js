import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Price from '../components/Price';
import { Container, Icon, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homes: [],
            price: 0,
            present: [],
            priceWithComma: [],
        };
    }

    numberWithComma = (x) => {
        x = this.state.price;
        const _x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.setState({ priceWithComma: _x });
    };

    getHome = async () => {
        const { data } = await axios.get(
            'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'
        );

        const id = this.props.match.params.id;
        // console.log(id);

        // console.log(data);
        this.setState({ homes: data });

        let price = 0;
        let present = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].communityId === id) {
                price = price + data[i].price;
                present.push(data[i]);
            }
        }
        // console.log(present);
        this.setState({ present: present });

        // avg price
        price = Math.round(price / this.state.present.length);
        // console.log(this.state.present.length);

        // console.log(price);
        this.setState({ price: price });

        this.numberWithComma();
    };

    componentDidMount() {
        this.getHome();
    }

    render() {
        const { priceWithComma } = this.state;
        const { present } = this.state;
        const { price } = this.state;

        return (
            <Container>
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
                            The average price of all the homes of this community
                            : ${priceWithComma}
                        </MainDesc>
                    </p>
                    <Link
                        to={{
                            pathname: `/`,
                        }}
                    >
                        <button className='ui icon left labeled button'>
                            <i
                                aria-hidden='true'
                                className='left arrow icon'
                            ></i>
                            Back
                        </button>
                    </Link>
                </div>
                <Divider />
                <br />
                <br />
                <br />
                <br />
                <CardGrid>
                    {present.map((p) => (
                        <Padding key={p.id}>
                            <Price
                                key={p.id}
                                id={p.id}
                                communityId={p.communityId}
                                price={p.price}
                                area={p.area}
                                type={p.type}
                            />
                        </Padding>
                    ))}
                </CardGrid>
                <br />
                <br />
            </Container>
        );
    }
}

export default withRouter(Detail);

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
