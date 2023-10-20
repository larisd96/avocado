import './styles.css';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button';

const schema = yup.object().shape({
	sexo: yup.string().required(),
	peso: yup.number().required(),
	altura: yup.number().required(),
	idade: yup.number().required(),
});

const FormBasal = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [tmbCalculada, setTmbCalculada] = React.useState(null);

	const onSubmit = data => {
		let tmbCalculada = 0;

		if (data.sexo === 'homem') {
			tmbCalculada = 88.362 + 13.397 * data.peso + 4.799 * data.altura - 5.677 * data.idade;
		} else if (data.sexo === 'mulher') {
			tmbCalculada = 447.593 + 9.247 * data.peso + 3.098 * data.altura - 4.33 * data.idade;
		}

		setTmbCalculada(tmbCalculada.toFixed(2)); 
		reset();
	};

	return (
		<div className='basal-container'>
			<h1>Calculadora de TMB</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='sexo'>Sexo:</label>
					<Controller
						name='sexo'
						control={control}
						defaultValue=''
						render={({ field, register }) => {
							return (
								<select className='basal-select' {...field}>
									<option value='' defaultValue>
										Selecione
									</option>
									<option value='homem'>Homem</option>
									<option value='mulher'>Mulher</option>
								</select>
							);
						}}
					></Controller>
				</div>
				<div className='basal-input'>
					<label htmlFor='peso'>PESO (kg):</label>
					<Controller name='peso' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
					{errors.peso && <span className='basal-span-error'>O peso é obrigatório!</span>}
				</div>
				<div className='basal-input'>
					<label htmlFor='altura'>ALTURA(cm):</label>
					<Controller name='altura' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
					{errors.altura && <span className='basal-span-error'>A altura é obrigatória!</span>}
				</div>
				<div className='basal-input'>
					<label htmlFor='idade'>IDADE (anos):</label>
					<Controller name='idade' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
					{errors.idade && <span className='basal-span-error'>A idade é obrigatória!</span>}
				</div>
				<div className='basal-button'>
					<Button type='submit'>Calcular TMB</Button>
				</div>
				<div className='basal-result'>{tmbCalculada !== null && <p>Sua Taxa Metabólica Basal é: {tmbCalculada} calorias por dia</p>}</div>
			</form>
		</div>
	);
};

export default FormBasal;
