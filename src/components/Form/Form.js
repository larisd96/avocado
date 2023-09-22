import './styles.css';
import { useForm } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<div className='container'>
			<form className='calculator' action=''>
				<label className='title-cal'>Calculadora IMC</label>
				<label>PESO:</label>
				<input {...register('peso', { required: true })} />
				<label>ALTURA: </label>
				<input {...register('Altura', { required: true })} />
				<label>IDADE:</label>
				<input {...register('idade', { required: true })} />
				<button type='Calcular-button'>Calcular</button>
			</form>
		</div>
	);
};

export default Form;
