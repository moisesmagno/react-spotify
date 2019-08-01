export const Types = {
	SET: "ERROR/SET",
	HIDE: "ERROR/HIDE"
};

const INITIAL_STATE = {
	visible: false,
	message: null
};

export default function error(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SET:
			return { ...state, visible: true, message: action.payload };
		case Types.HIDE:
			return { ...state, visible: false };
		default:
			return state;
	}
}

export const Creators = {
	setError: message => ({
		type: Types.SET,
		payload: message
	}),
	setHide: () => ({ type: Types.HIDE })
};
