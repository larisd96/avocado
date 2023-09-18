import Logo from '../Logo/Logo';

import './styles.css';

const Header = ({ children }) => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-children'>{children}</div>
		</div>
	);
};
export default Header;
