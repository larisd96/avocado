import { Link } from 'react-router-dom';
import './styles.css';

const navbarItems = [
	{ path: '/', name: 'Home' },
	{ path: '/alimentos', name: 'Alimentos' },
	{ path: '/calculadora', name: 'Calculadora' },
	{ path: '/contato', name: 'Contato' },
	{ path: '/blog', name: 'Blog' },
];
// Map
const Navbar = () => {
	return (
		<nav className='nav-bar'>
			{navbarItems.map(value => (
				<Link className='nav-bar-item' key={value.name} to={value.path}>
					{value.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
