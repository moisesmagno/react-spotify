import React, { Fragment } from 'react';

// Styles global
import GlobalStyle  from './styles/global';
import { Wrapper, Conteiner } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
	<Fragment>
		<GlobalStyle />
		<Wrapper>
			<Conteiner>
				<Sidebar />
			</Conteiner>
			<Player />
		</Wrapper>
	</Fragment>
);

export default App;
