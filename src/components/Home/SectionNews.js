import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

function NewsFeed({ title, creator, date, snippet, link }) {
    return (
        <Padding>
            <NewsTitle>
                <Icon name='newspaper' size='large' color='blue'></Icon>
                {` ${title}`}
            </NewsTitle>
            <NewsDate>{creator}</NewsDate>
            <NewsDate>{date}</NewsDate>
            <NewsSummary>{`"${snippet.slice(0, 250)}..."`}</NewsSummary>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                Read More
            </a>
            <hr />
        </Padding>
    );
}
const NewsTitle = styled.div`
    font-size: var(--fs-h3);
`;
const NewsDate = styled.div`
    color: var(--clr-accent);
    text-align: right;
`;
const NewsSummary = styled.div`
    color: var(--clr-dark);
    font-size: var(--fs-body);
`;
const Padding = styled.div`
    line-height: 2;
    padding-left: 100px;
    padding-right: 70px;

    @media only screen and (max-width: 1024px) {
        padding-left: 80px;
        padding-right: 55px;
    }
    @media only screen and (max-width: 768px) {
        padding-left: 60px;
        padding-right: 40px;
    }
    @media only screen and (max-width: 600px) {
        padding-left: 30px;
        padding-right: 20px;
    }
    @media only screen and (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

function News({ news }) {
    return (
        <Container>
            <MainTitle>News</MainTitle>
            <p>
                <Icon
                    name='hand point right outline'
                    size='large'
                    color='red'
                />
                <MainDesc>
                    The source of News from{' '}
                    <EM>"https://calgary.com/blog/rss/" by Justin Havre</EM>
                </MainDesc>
            </p>
            <br />
            <Container>
                {news.map((feed, i) => (
                    <NewsFeed
                        key={i}
                        title={feed.title}
                        creator={feed.creator}
                        date={feed.pubDate}
                        snippet={feed.contentSnippet}
                        link={feed.link}
                    />
                ))}
                <br />
            </Container>
        </Container>
    );
}

export default News;

const MainTitle = styled.p`
    color: var(--clr-dark);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
`;
const MainDesc = styled.span`
    font-size: var(--fs-body);
`;
const EM = styled.em``;
