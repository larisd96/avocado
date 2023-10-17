import './styles.css';
import { useForm } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';
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
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmitn = userData => {
		console.log(userData);
	};

	return (
		<form className='contact-content' onSubmit={handleSubmit(onSubmitn)}>
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
			<Button>
				Enviar
			</Button>
		</form>
	);
};

export default Contact;
