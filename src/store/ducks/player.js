import sound from "react-sound";

export const Types = {
	LOAD: "player/LOAD",
	PLAY: "player/PLAY",
	PAUSE: "player/PAUSE"
};

const INITIAL_STATE = {
	currentSong: null,
	status: sound.status.PLAYING
};

export default function player(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.LOAD:
			return {
				...state,
				currentSong: action.payload.song,
				status: sound.status.PLAYING //do pacote react-sound
			};
		case Types.PLAY:
			return {
				...state,
				status: sound.status.PLAYING //do pacote react-sound
			};
		case Types.PAUSE:
			return {
				...state,
				status: sound.status.PAUSED //do pacote react-sound
			};

		default:
			return state;
	}
}

export const Creators = {
	loadSong: song => ({
		type: Types.LOAD,
		payload: { song }
	}),
	play: () => ({ type: Types.PLAY }),
	pause: () => ({ type: Types.PAUSE })
};
