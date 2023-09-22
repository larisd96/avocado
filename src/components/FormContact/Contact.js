import './styles.css';
import { useForm } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required('O nome é obrigatório!'),
		email: yup.string().email('digite um email válido').required('O email é obrigatório!'),
		phone: yup.number('+351').min(12).integer().required('O phone é obrigatório!'),
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
			<label className='form-contact'>Nome:</label>
			<input {...register('name', { required: true })} />
			{errors.name && <span>{errors.name?.message}</span>}
			<label className='form-contact'>Email: </label>
			<input {...register('email', { required: true })} 
			/>
			<label className='form-contact'>Phone:</label>
			<input {...register('phone', { required: true })} />
			<label className='form-contact'>Mensagem:</label>
			<textarea {...register('Mensagem', { required: true })} />

			<button className='contact-button' type='enviar-button'>
				Enviar
			</button>
		</form>
	);
};

export default Contact;
