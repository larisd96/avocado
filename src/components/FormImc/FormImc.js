import './styles.css';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
	peso: yup.number().required(),
	altura: yup.number().required(),
});

const FormImc = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [imcResult, setImcResult] = useState(null);

	const onSubmit = data => {
		const alturaMetros = data.altura / 100;
		const imc = (data.peso / (alturaMetros * alturaMetros)).toFixed(2);
		setImcResult(imc);
	};

	return (
		<form className='calculator-container-imc' onSubmit={handleSubmit(onSubmit)}>
			<h1 className='calculator-title '>Calculadora IMC</h1>
			<div>
				<label htmlFor='peso'>PESO (kg):</label>
				<Controller name='peso' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />}></Controller>
				{errors.peso && <span className='imc-span-error'>O peso é obrigatório!</span>}
			</div>

			<div>
				<label htmlFor='altura'>ALTURA (cm):</label>
				<Controller name='altura' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />}></Controller>
				{errors.altura && <span className='imc-span-error'>A altura é obrigatória!</span>}
			</div>

			<div className='calcular-button'>
				<Button type='submit'>Calcular IMC</Button>
			</div>

			<div className='imc-result'>{imcResult !== null && <p>Seu IMC é: {imcResult}</p>}</div>
		</form>
	);
};
export default FormImc;
