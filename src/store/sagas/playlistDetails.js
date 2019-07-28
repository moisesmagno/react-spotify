import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as playlistsDetailsActions } from "../ducks/playlistsDetails";

export function* getPlaylistDetails(action) {
	try {
		const response = yield call(
			api.get,
			`/playlists/${action.payload.id}?_embed=songs`
		);

		yield console.log(response);

		yield put(
			playlistsDetailsActions.getPlaylistDetailsSuccess(response.data)
		);
	} catch (error) {
		console.log(error);
	}
}
