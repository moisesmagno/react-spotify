import React from 'react';

import { Container, NewPlaylist, Nav} from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
	<Container>
		<div>
			<Nav main>
				<li><a href="#">Navegar</a></li>
				<li><a href="#">Rádio</a></li>
			</Nav>

			<Nav>
				<li><span>Sua biblioteca</span></li>
				<li><a href="#">Seu Daily Mix</a></li>
				<li><a href="#">Tocados recentemente</a></li>
				<li><a href="#">Músicas</a></li>
				<li><a href="#">Álbuns</a></li>
				<li><a href="#">Artistas</a></li>
				<li><a href="#">Estações</a></li>
				<li><a href="#">Arquivos Locais</a></li>
				<li><a href="#">Vídeos</a></li>
				<li><a href="#">Podcast</a></li>
			</Nav>

			<Nav>
				<li><span>Playlist</span></li>
				<li><a href="#">Melhores do Rock</a></li>
				<li><a href="#">Eletronicas 2019</a></li>
				<li><a href="#">Melhores do Pop</a></li>
			</Nav>

		</div>
		<NewPlaylist>
			<img src={AddPlaylistIcon} alt="Nova Playlist"/>
			Nova Playlist
		</NewPlaylist>
	</Container>
);

export default Sidebar;
