import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import {
	Container,
	Current,
	Progress,
	Controls,
	Time,
	ProgressSlider,
	Volume
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({
	player,
	play,
	pause,
	next,
	prev,
	playing,
	position,
	duration,
	handlePosition,
	setPosition,
	positionShown,
	progress,
	setVolume
}) => (
	<Container>
		{!!player.currentSong && (
			// Gerencia o arquivo de som.
			// url = Possui o arquivo de música.
			// playStatus = Da comandos para a música, play, pause. Ele recebe os dados do redux.
			// onFinishedPlaying - Pula para próxima música.
			// onPlaying - passa informações de duração e posição.
			<Sound
				url={player.currentSong.file}
				playStatus={player.status}
				onFinishedPlaying={next}
				onPlaying={playing}
				position={player.position}
				volume={player.volume}
			/>
		)}

		<Current>
			{!!player.currentSong && (
				<Fragment>
					<img
						src={player.currentSong.thumbnail}
						alt={player.currentSong.title}
					/>
					<div>
						<span>{player.currentSong.title}</span>
						<small>{player.currentSong.author}</small>
					</div>
				</Fragment>
			)}
		</Current>

		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="" />
				</button>
				<button onClick={prev}>
					<img src={BackwardIcon} alt="" />
				</button>

				{!!player.currentSong &&
				player.status === Sound.status.PLAYING ? (
					<button onClick={pause}>
						<img src={PauseIcon} alt="" />
					</button>
				) : (
					<button onClick={play}>
						<img src={PlayIcon} alt="" />
					</button>
				)}
				<button onClick={next}>
					<img src={ForwardIcon} alt="" />
				</button>
				<button>
					<img src={RepeatIcon} alt="" />
				</button>
			</Controls>

			<Time>
				<span>{positionShown || position}</span>
				<ProgressSlider>
					<Slider
						railStyle={{ background: "#404040", borderRadius: 10 }}
						trackStyle={{ background: "#1ED760" }}
						handleStyle={{ border: 0 }}
						max={1000}
						onChange={value => handlePosition(value / 1000)}
						onAfterChange={value => setPosition(value / 1000)}
						value={progress}
					/>
				</ProgressSlider>
				<span>{duration}</span>
			</Time>
		</Progress>

		<Volume>
			<img src={VolumeIcon} alt="" />
			<Slider
				railStyle={{ background: "#404040", borderRadius: 10 }}
				trackStyle={{ background: "#fff" }}
				handleStyle={{ display: "none" }}
				value={player.volume}
				onChange={setVolume}
			/>
		</Volume>
	</Container>
);

Player.propTypes = {
	player: PropTypes.shape({
		currentSong: PropTypes.shape({
			thumbnail: PropTypes.string,
			title: PropTypes.string,
			author: PropTypes.string,
			file: PropTypes.string
		}),
		status: PropTypes.string
	}).isRequired,
	pause: PropTypes.func.isRequired,
	play: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	prev: PropTypes.func.isRequired,
	playing: PropTypes.func.isRequired,
	duration: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	handlePosition: PropTypes.func.isRequired,
	setPosition: PropTypes.func.isRequired,
	positionShown: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
	setVolume: PropTypes.func.isRequired
};

function msToTime(duration) {
	if (!duration) return null;

	let seconds = parseInt((duration / 1000) % 60);
	const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

	seconds = seconds < 10 ? `0${seconds}` : seconds;

	return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
	player: state.player,
	position: msToTime(state.player.position),
	duration: msToTime(state.player.duration),
	positionShown: msToTime(state.player.positionShown),
	progress:
		parseInt(
			(state.player.positionShown || state.player.position) *
				(1000 / state.player.duration),
			10
		) || 0
});

const mapDispathToProps = dispatch =>
	bindActionCreators(PlayerActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispathToProps
)(Player);
