import { combineReducers } from "redux";

import playlists from "./playlists";
import playlistDetails from "./playlistsDetails";

export default combineReducers({
	playlists,
	playlistDetails
});
