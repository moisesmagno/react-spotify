import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

// Styles global
import GlobalStyle  from './styles/global';
import { Wrapper, Container, Content } from "./styles/components";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import Routes from './routes';
import store from "./store";

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Fragment>
				<GlobalStyle />
				<Wrapper>
					<Container>
						<Sidebar />
						<Content>
							<Header />
							<Routes />
						</Content>
					</Container>
					<Player />
				</Wrapper>
			</Fragment>
		</BrowserRouter>
	</Provider>
);

export default App;
