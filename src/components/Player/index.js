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
import { prototype } from "events";

const Player = ({ player, play, pause }) => (
	<Container>
		{!!player.currentSong && (
			// Gerencia o arquivo de som
			// url = Possui o arquivo de música.
			// playStatus = Da comandos para a música, play, pause. Ele recebe os dados do redux
			<Sound url={player.currentSong.file} playStatus={player.status} />
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
				<button>
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
				<button>
					<img src={ForwardIcon} alt="" />
				</button>
				<button>
					<img src={RepeatIcon} alt="" />
				</button>
			</Controls>

			<Time>
				<span>01:39</span>
				<ProgressSlider>
					<Slider
						railStyle={{ background: "#404040", borderRadius: 10 }}
						trackStyle={{ background: "#1ED760" }}
						handleStyle={{ border: 0 }}
					/>
				</ProgressSlider>
				<span>05:00</span>
			</Time>
		</Progress>

		<Volume>
			<img src={VolumeIcon} alt="" />
			<Slider
				railStyle={{ background: "#404040", borderRadius: 10 }}
				trackStyle={{ background: "#fff" }}
				handleStyle={{ display: "none" }}
				value={100}
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
	play: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	player: state.player
});

const mapDispathToProps = dispatch =>
	bindActionCreators(PlayerActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispathToProps
)(Player);
