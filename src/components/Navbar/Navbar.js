import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
	return (
		<nav className='nav-bar'>
			<Link to='/'>Home</Link>
			<Link to='/alimentos'>Alimentos</Link>
			<Link to='/calculadora'>Calculadora</Link>
			<Link to='/contato'>Contato</Link>
		</nav>
	);
};

export default Navbar;
