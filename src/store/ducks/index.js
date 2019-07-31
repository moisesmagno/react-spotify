import { combineReducers } from "redux";

import playlists from "./playlists";
import playlistDetails from "./playlistsDetails";
import error from "./error";

export default combineReducers({
	playlists,
	playlistDetails,
	error
});
