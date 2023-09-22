import './styles.css';
import { useForm } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<form className='contact-content' action=''>
			<label></label>
			<label className='form-contact'>Nome:</label>
			<input {...register('nome', { required: true })} />
			<label className='form-contact'>Email: </label>
			<input {...register('email', { required: true })} />
			<label className='form-contact'>Phone:</label>
			<input {...register('phone', { required: true })} />
			<label className='form-contact'>Mensagem</label>
			<textarea {...register('Mensagem', { required: true })} />

			<button className='contact-button' type='enviar-button'>
				Enviar
			</button>
		</form>
	);
};

export default Contact;
