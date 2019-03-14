import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Styles global
import GlobalStyle  from './styles/global';
import { Wrapper, Conteiner, Content } from './styles/components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import Routes from './routes';

const App = () => (
	<BrowserRouter>
		<Fragment>
			<GlobalStyle />
			<Wrapper>
				<Conteiner>
					<Sidebar />
					<Content>
						<Header />
						<Routes />
					</Content>
				</Conteiner>
				<Player />
			</Wrapper>
		</Fragment>
	</BrowserRouter>
);

export default App;
