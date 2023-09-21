import './styles.css';
import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<div className='container'>
			<form className='Calculator' action=''>
				<label>Peso em KG :</label>
				<input {...register('peso', { required: true })} />
				<label>Altura em CM</label>
				<input {...register('Altura', { required: true })} />
				<label>Idade em anos</label>
				<input {...register('idade', { required: true })} />
				<button type='Calcular'>Calcular</button>
			</form>
		</div>
	);
};

export default Form;
