import './styles.css';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
	peso: yup.number().required(),
	altura: yup.number().required(),
});

const FormImc = () => {
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

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
					<Controller name='peso' control={control} defaultValue='' render={({ field }) => <input {...field} type='number'></input>}></Controller>
					{errors.altura && <span className='imc-span'> O peso é obrigartório ! </span>}
				</div>

				<div>
					<label htmlFor='altura'>ALTURA (cm):</label>
					<Controller name='altura' control={control} defaultValue='' render={({ field }) => <input {...field} type='number'></input>}></Controller>
					{errors.peso && <span className='imc-span'> A altura é obrigatória ! </span>}
				</div>

				<button className='calcular-button' type='Calcular'>
					Calcular IMC
				</button>
			</form>
		</div>
	);
};
export default FormImc;
