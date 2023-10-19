import './styles.css';
import Contact from '../../components/FormContact/Contact';
const Contato = () => {
	return (
		<div className='contact-container' >
			
			<h1>Entre em contato conosco</h1>
			<p>Para sugestões, melhorias e  duvidas da plataforma. </p>

			<div className='contact-form-box'>
				<img className='photo-contact' src='/img/Contact.png' alt='' />
				<Contact></Contact>
			</div>
		</div>
	);
};

export default Contato;
