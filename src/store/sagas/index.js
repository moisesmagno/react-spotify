import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../ducks/playlists";
import { Types as playlistsDetailsTypes } from "../ducks/playlistsDetails";

import { getPlaylists } from "./playlists";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
	yield all([
		takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
		takeLatest(playlistsDetailsTypes.GET_REQUEST, getPlaylistDetails)
	]);
}
