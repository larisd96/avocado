import './styles.css';
import { useForm, Controller } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';

const FormImc = () => {
	const { handleSubmit, control, watch, formState } = useForm();
	const onSubmit = data => {
		const alturaMetros = data.altura / 100;
		const imc = (data.peso / (alturaMetros * alturaMetros)).toFixed(2);
		alert(`Seu Imc é ${imc}`);
	};

	return (
		<div className='container'>
			<form className='calculator' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='calculator-title '>Calculadora IMC</h1>
				<div>
					<label htmlFor='peso'>PESO (kg):</label>
					<Controller name='peso' control={control} defaultValue='' rules={{ required: 'Campo obrigatório' }} render={({ field }) => <input {...field} type='number'></input>}></Controller>
				</div>

				<div>
					<label htmlFor='altura'>ALTURA (cm):</label>
					<Controller name='altura' control={control} defaultValue='' rules={{ required: 'Campo obrigatório' }} render={({ field }) => <input {...field} type='number'></input>}></Controller>
				</div>

				<button className='calcular-button' type='Calcular'>
					Calcular IMC
				</button>
			</form>
			{formState.errors.peso && <span>{formState.errors.peso.message}</span>}
			{formState.errors.altura && <span>{formState.errors.altura.message}</span>}
		</div>
	);
};
export default FormImc;
