import React from 'react';

import { Container, Search, User} from './styles';

const Header = () => (
	<Container>
		<Search>
			<input placeholder="Search"/>
		</Search>
		<User>
			<img src="https://avatars3.githubusercontent.com/u/4347195?v=4" alt=""/>
			Moisés Escurra
		</User>
	</Container>
);

export default Header;
