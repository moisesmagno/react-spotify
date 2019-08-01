import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

import CloseIcon from "../../assets/images/close.svg";

import { Container } from "./styles";

const ErrorBox = ({ error: { message, visible }, setHide }) =>
	visible && (
		<Container>
			<p>{message}</p>
			<button onClick={setHide}>
				<img src={CloseIcon} alt="Fechar" />
			</button>
		</Container>
	);

ErrorBox.propTypes = {
	setHide: PropTypes.func.isRequired,
	error: PropTypes.shape({
		message: PropTypes.string,
		visible: PropTypes.bool
	}).isRequired
};

const mapStateToProps = state => ({
	error: state.error
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(ErrorActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorBox);
