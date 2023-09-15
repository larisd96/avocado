import './styles.css';

const Header = ({ children }) => {
	return (
		<div className='header'>
			
			<div>{children}</div>
		</div>
	);
};
export default Header;
