import React, { Fragment } from 'react';

// Styles global
import GlobalStyle  from './styles/global';
import { Wrapper, Conteiner, Content } from './styles/components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
	<Fragment>
		<GlobalStyle />
		<Wrapper>
			<Conteiner>
				<Sidebar />
				<Content>
					<Header />
				</Content>
			</Conteiner>
			<Player />
		</Wrapper>
	</Fragment>
);

export default App;
