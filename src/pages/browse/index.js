import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
	<Container>
		<Title>Navegar</Title>

		<List>
			<Playlist href="">
				<img
					src="https://avatars3.githubusercontent.com/u/4347195?v=4"
					alt="Playlist"
				/>
				<strong>Rock dos bons</strong>
				<p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
			</Playlist>
			<Playlist href="">
				<img
					src="https://avatars3.githubusercontent.com/u/4347195?v=4"
					alt="Playlist"
				/>
				<strong>Rock dos bons</strong>
				<p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
			</Playlist>
			<Playlist href="">
				<img
					src="https://avatars3.githubusercontent.com/u/4347195?v=4"
					alt="Playlist"
				/>
				<strong>Rock dos bons</strong>
				<p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
			</Playlist>
			<Playlist href="">
				<img
					src="https://avatars3.githubusercontent.com/u/4347195?v=4"
					alt="Playlist"
				/>
				<strong>Rock dos bons</strong>
				<p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
			</Playlist>
		</List>
	</Container>
);

export default Browse;

