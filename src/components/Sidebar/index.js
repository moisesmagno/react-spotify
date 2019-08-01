import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import Loading from "../../components/Loading";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
	static propTypes = {
		getPlayListRequest: PropTypes.func.isRequired,
		playlists: PropTypes.shape({
			data: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					title: PropTypes.string
				})
			),
			loading: PropTypes.bool
		}).isRequired
	};

	//Se executa assim que o componente terminar de ser renderizado em tela.
	componentDidMount() {
		this.props.getPlayListRequest();
	}

	render() {
		return (
			<Container>
				<div>
					<Nav main>
						<li>
							<a href="/">Navegar</a>
						</li>
						<li>
							<a href="/">Rádio</a>
						</li>
					</Nav>

					<Nav>
						<li>
							<span>Sua biblioteca</span>
						</li>
						<li>
							<a href="#">Seu Daily Mix</a>
						</li>
						<li>
							<a href="#">Tocados recentemente</a>
						</li>
						<li>
							<a href="#">Músicas</a>
						</li>
						<li>
							<a href="#">Álbuns</a>
						</li>
						<li>
							<a href="#">Artistas</a>
						</li>
						<li>
							<a href="#">Estações</a>
						</li>
						<li>
							<a href="#">Arquivos Locais</a>
						</li>
						<li>
							<a href="#">Vídeos</a>
						</li>
						<li>
							<a href="#">Podcast</a>
						</li>
					</Nav>

					<Nav>
						<li>
							<span>Playlist</span>
							{this.props.playlists.loading && <Loading />}
						</li>
						{this.props.playlists.data.map(playlist => (
							<li key={playlist.id}>
								<Link to={`/playlists/${playlist.id}`}>
									{playlist.title}
								</Link>
							</li>
						))}
					</Nav>
				</div>
				<NewPlaylist>
					<img src={AddPlaylistIcon} alt="Nova Playlist" />
					Nova Playlist
				</NewPlaylist>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistsActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);
