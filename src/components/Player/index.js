import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

const Player = ({ player }) => (
	<Container>
		{!!player.currentSong && (
			<Sound url={player.currentSong.file} playStatus={player.status} />
		)}

		<Current>
			<img
				src="data:image/jpeg;base64,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"
				alt="Foo Fighters"
			/>
			<div>
				<span>Times like These</span>
				<small>Foo figthers</small>
			</div>
		</Current>
		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="" />
				</button>
				<button>
					<img src={BackwardIcon} alt="" />
				</button>
				<button>
					<img src={PlayIcon} alt="" />
				</button>
				<button>
					<img src={PauseIcon} alt="" />
				</button>
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
			file: PropTypes.string
		}),
		status: PropTypes.string
	}).isRequired
};

const mapStateToProps = state => ({
	player: state.player
});

export default connect(mapStateToProps)(Player);
