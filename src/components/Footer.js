import React from 'react';
import {
	Segment,
	Container,
	Grid,
	Header,
	List,
	Divider,
	Image,
	Icon,
} from 'semantic-ui-react';
import mainLogo from './images/logo.png';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Segment
			inverted
			vertical
			style={{ backgroundColor: 'rgb(32, 23, 77)' }}
		>
			<Container textAlign="center" style={{ padding: '1.5em 0em' }}>
				<Grid columns={3} divided stackable inverted>
					<Grid.Row>
						<Grid.Column width={6}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item as="a">Concept</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={10}>
							<Header inverted as="h4" content="Contact Me!!" />
							<p>
								<Span>
									If you like this Web Site, don't hesitate.
								</Span>
							</p>
							<p>
								<Span>Please, contact me.</Span>
							</p>
							<List horizontal link inverted>
								<List.Item
									as="a"
									href="https://www.linkedin.com/in/developer-js/"
									target="_blank"
								>
									<Icon
										className="__hover2"
										name="linkedin"
										size="big"
										color="teal"
									/>
								</List.Item>
								<List.Item
									as="a"
									href="https://github.com/jake-mg-shin"
									target="_blank"
								>
									<Icon
										className="__hover2"
										name="github"
										size="big"
										color="teal"
									/>
								</List.Item>
								<List.Item as="a" href="#">
									<Icon
										className="__hover2"
										name="home"
										size="big"
										color="teal"
									/>
								</List.Item>
								<List.Item
									as="a"
									href="mailto:jake.mg.shin@gmail.com"
								>
									<Icon
										className="__hover2"
										name="mail"
										size="big"
										color="teal"
									/>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Divider inverted section />
				<Image src={mainLogo} centered size="mini" />
				<List horizontal inverted divided link size="small">
					<List.Item
						as="a"
						href="https://www.linkedin.com/in/developer-js/"
						target="_blank"
					>
						© 2020 Dev.JakeShin. All rights reserved
					</List.Item>
				</List>
			</Container>
		</Segment>
	);
};

export default Footer;

const Span = styled.em``;
