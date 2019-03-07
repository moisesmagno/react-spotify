import React, { Fragment } from 'react';

// Styles global
import GlobalStyle  from './styles/global';

import Sidebar from './components/Sidebar';

const App = () => (
	<Fragment>
		<GlobalStyle />
		<Sidebar />
	</Fragment>
);

export default App;
