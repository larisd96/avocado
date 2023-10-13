import './styles.css';
import Contact from '../../components/FormContact/Contact';
const Contato = () => {
	return (
		<div>
			<h1>Entre em contato conosco</h1>
			<p>Para sugestões de melhorias da plataforma ou duvidas. </p>
			<div className='contact-container'>
				<img className='photo-contact' src='/img/Contact.png' alt='' />
				<Contact></Contact>
			</div>
		</div>
	);
};

export default Contato;
