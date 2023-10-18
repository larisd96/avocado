import './styles.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button';

const schema = yup
	.object({
		name: yup.string().required('O nome é obrigatório!'),
		email: yup.string().email('digite um email válido').required('O email é obrigatório!'),
		phone: yup.string('+351').required('O phone é obrigatório!'),
		message: yup.string().required('A mensagem é obrigatório!'),
	})
	.required();

const Contact = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	
	const onSubmit = async userData => {
		try {
			await axios.post('http://localhost:5000/contacts', userData);

			alert('Seu Email foi enviado com sucesso !');
			navigate('/');
		} catch (error) {
			alert('Erro ao enviar');
		}
	};

	return (
		<form className='contact-content' onSubmit={handleSubmit(onSubmit)}>
			<label className='form-contact'>
				Nome:
				<input {...register('name', { required: true })} />
				<span>{errors.name?.message}</span>
			</label>
			<label className='form-contact'>
				Email:
				<input {...register('email', { required: true })} />
				<span>{errors.email?.message}</span>
			</label>
			<label className='form-contact'>
				Phone:
				<input {...register('phone', { required: true })} />
				<span>{errors.phone?.message}</span>
			</label>

			<label className='form-contact'>
				Mensagem:
				<span>{errors.message?.message}</span>
				<textarea {...register('message', { required: true })} />
			</label>

			<Button>Enviar</Button>
		</form>
	);
};

export default Contact;
