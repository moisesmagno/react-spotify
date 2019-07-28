import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistsDetails";

import { Container, Header, SongList } from "./styles";

import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
	static propType = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.number
			})
		}).isRequired,
		getPlaylistDetailsRequest: PropTypes.func.isRequired,
		playlistDetails: PropTypes.shape({
			loading: PropTypes.bool,
			data: PropTypes.shape({
				thumbnail: PropTypes.string,
				title: PropTypes.string,
				description: PropTypes.string,
				songs: PropTypes.arrayOf(
					PropTypes.shape({
						id: PropTypes.number,
						title: PropTypes.string,
						author: PropTypes.string,
						album: PropTypes.string
					})
				)
			})
		}).isRequired
	};

	componentDidMount() {
		this.loadPlaylistDetails();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.loadPlaylistDetails();
		}
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
						<tr>
							<th />
							<th>Titulo</th>
							<th>Artista</th>
							<th>Álbum</th>
							<th>
								<img src={ClockIcon} alt="Clock Icon" />
							</th>
						</tr>
					</thead>
					<tbody>
						{!playlist.songs ? (
							<tr>
								<td colSpan="5">Nenhuma música cadastrada</td>
							</tr>
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
