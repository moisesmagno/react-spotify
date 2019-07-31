import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as playlistsDetailsActions } from "../ducks/playlistsDetails";
import { Creators as errorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
	try {
		const response = yield call(
			api.get,
			`/playlists/${action.payload.id}?_embed=songs`
		);

		yield put(
			playlistsDetailsActions.getPlaylistDetailsSuccess(response.data)
		);
	} catch (error) {
		yield put(
			errorActions.setError(
				"Não foi possivel listar os detalhes da playlist"
			)
		);
	}
}
