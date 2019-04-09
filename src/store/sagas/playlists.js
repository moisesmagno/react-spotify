import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
	try {

		const response = yield call(api.get, '/playlists')
		yield put(PlaylistsActions.getPlayListSuccess(response.data))

	} catch(err) {
		console.log('ERRO!!!')
		console.log(err);
	}
}
