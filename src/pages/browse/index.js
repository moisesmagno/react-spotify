import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, Title, List, Playlist } from './styles';

class Browse extends Component {

	static propTypes = {
		getPlayListRequest: PropTypes.func.isRequired,
		playlists: PropTypes.shape({
			data: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
				thumbnail: PropTypes.string,
				description: PropTypes.string
			})).isRequired
		})
	}

	componentDidMount(){
		this.props.getPlayListRequest()
	}

	render(){
		return (
			<Container>
				<Title>Navegar</Title>

				<List>
					{
						this.props.playlists.data.map(playlist => (
							<Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
								<img
									src={playlist.thumbnail}
									alt="thumbnail da imagem da playlist."
								/>
								<strong>{ playlist.title }</strong>
								<p>{ playlist.description }</p>
							</Playlist>
						))
					}

				</List>
			</Container>
		)
	}
}

const mapStateProps = state => ({
	playlists: state.playlists
});

const mapDispacthToProps = dispacth => bindActionCreators(PlaylistsActions, dispacth);

export default connect(mapStateProps, mapDispacthToProps)(Browse);
