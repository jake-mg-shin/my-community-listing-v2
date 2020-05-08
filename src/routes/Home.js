import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { Divider, Container, Dimmer, Loader } from 'semantic-ui-react';
import Parser from 'rss-parser';

import SectionCover from '../components/Home/SectionCover';
import SectionCards from '../components/Home/SectionCards';
import SectionGraph from '../components/Home/SectionGraph';
import SectionNews from '../components/Home/SectionNews';
import ComsData from '../components/DB/ComsData.json';
import HomesData from '../components/DB/HomesData.json';

function Home() {
    const [Communities, setCommunities] = useState([]);
    const [loadingCards, setLoadingCards] = useState(true);

    const [Homes, setHomes] = useState([]);
    const [loadingGraph, setLoadingGraph] = useState(true);

    const [News, setNews] = useState([]);
    const [LoadingNews, setLoadingNews] = useState(true);

    useEffect(() => {
        // const getCommunities = async () => {
        //     const { data } = await axios.get(
        //         'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities'
        //     );

        //     // ordering alphabetically
        //     data.sort((a, b) => a.name.localeCompare(b.name));

        //     setCommunities(data);
        //     setLoadingCards(false);
        // };
        const getCommunities = () => {
            const data = ComsData;

            // ordering alphabetically
            data.sort((a, b) => a.name.localeCompare(b.name));

            setCommunities(data);
            setLoadingCards(false);
        };

        // const getHomes = async () => {
        //     const { data } = await axios.get(
        //         'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'
        //     );
        //     setHomes(data);
        //     setLoadingGraph(false);
        // };
        const getHomes = () => {
            setHomes(HomesData);
            setLoadingGraph(false);
        };

        const getNews = async () => {
            const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
            let parser = new Parser();
            let feed = await parser.parseURL(
                CORS_PROXY + 'https://calgary.com/blog/rss/'
            );

            let results = [];
            for (let i = 0; i < 4; i++) {
                results.push(feed.items[i]);
            }

            setNews(results);
            setLoadingNews(false);
        };

        getCommunities();
        getHomes();
        getNews();
    }, [setCommunities, setHomes, setNews]);

    // console.log(Communities);

    return (
        <>
            <SectionCover />
            {loadingCards ? (
                <Dimmer active>
                    <Loader active inline='centered' />
                </Dimmer>
            ) : (
                <SectionCards data={Communities} homes={Homes} />
            )}
            <br />
            <br />
            <Container>
                <Divider />
                <br />
                <br />
                {loadingGraph ? (
                    <Loader active inline='centered' />
                ) : (
                    <SectionGraph data={Homes} />
                )}
                <br />
                <br />
                <br />
            </Container>
            <NewsWrapper>
                <br />
                <br />
                {LoadingNews ? (
                    <Loader active inline='centered' />
                ) : (
                    <SectionNews news={News} />
                )}
                <br />
            </NewsWrapper>
        </>
    );
}

export default Home;

const NewsWrapper = styled.div`
    background-color: #f7f1e3;
`;
