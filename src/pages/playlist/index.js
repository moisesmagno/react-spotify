import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistsDetails";

import { Container, Header, SongList } from "./styles";

import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
	componentDidMount() {
		this.loadPlaylistDetails();
	}

	loadPlaylistDetails() {
		//Recupera dados da url.
		const { id } = this.props.match.params;
		this.props.getPlaylistDetailsRequest(id);
	}

	renderDetails = () => {
		const playlist = this.props.playlistsDetails.data;
		return (
			<Container>
				<Header>
					<img src={playlist.thumbnail} alt={playlist.title} />
					<div>
						<span>PLAYLIST</span>
						<h1>{playlist.title}</h1>
						{!!playlist.songs && (
							<p>{playlist.songs.length} músicas</p>
						)}

						<button>PLAY</button>
					</div>
				</Header>
				<SongList cellPadding={0}>
					<thead>
						<th />
						<th>Titulo</th>
						<th>Artista</th>
						<th>Álbum</th>
						<th>
							<img src={ClockIcon} alt="Clock Icon" />
						</th>
					</thead>
					<tbody>
						{!playlist.songs ? (
							<td colspan="5">Nenhuma música cadastrada</td>
						) : (
							playlist.songs.map(song => (
								<tr key={song.id}>
									<td>
										<img src={PlusIcon} alt="Adicionar" />
									</td>
									<td>{song.title}</td>
									<td>{song.author}</td>
									<td>{song.album}</td>
									<td>3:26</td>
								</tr>
							))
						)}
					</tbody>
				</SongList>
			</Container>
		);
	};

	render() {
		return this.props.playlistsDetails.Loading ? (
			<Container loading>
				<Loading />
			</Container>
		) : (
			this.renderDetails()
		);
	}
}

const mapStateToProps = state => ({
	playlistsDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Playlist);
