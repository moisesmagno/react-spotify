import React from "react";

import CloseIcon from "../../assets/images/close.svg";

import { Container } from "./styles";

const ErrorBox = () => (
	<Container>
		<p>Mensagem do erro</p>
		<button>
			<img src={CloseIcon} alt="Fechar" />
		</button>
	</Container>
);

export default ErrorBox;
