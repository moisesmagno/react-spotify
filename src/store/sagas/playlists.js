import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as errorActions } from "../ducks/error";

export function* getPlaylists() {
	try {
		const response = yield call(api.get, "/playlists");
		yield put(PlaylistsActions.getPlayListSuccess(response.data));
	} catch (err) {
		yield put(errorActions.setError("Não foi possível listar as Playlist"));
	}
}
