import './styles.css';
import { useForm, Controller } from 'react-hook-form';
import { FaBeer } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

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

	const onSubmit = data => {
		let tmbCalculada = 0;

		if (data.sexo === 'homem') {
			tmbCalculada = 88.362 + 13.397 * data.peso + 4.799 * data.altura - 5.677 * data.idade;
		} else if (data.sexo === 'mulher') {
			tmbCalculada = 447.593 + 9.247 * data.peso + 3.098 * data.altura - 4.33 * data.idade;
		}

		alert(`Sua TMB é: ${tmbCalculada.toFixed(2)} calorias por dia`);
		reset();
	};

	return (
		<div className='basal-content'>
			<h1>Calculadora de TMB</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='sexo'>Sexo:</label>
					<Controller
						name='sexo'
						control={control}
						defaultValue=''
						render={({ field }) => {
							return (
								<select className='basal-select' {...field}>
									<option defaultValue disable='true'>
										Selecione
									</option>
									<option value='homem'> Homem</option>
									<option value='mulher'>Mulher</option>
								</select>
							);
						}}
					></Controller>
					{errors.sexo && <span>O Sexo é obrigatório!</span>}
				</div>
				<div>
					<label htmlFor='peso'>PESO (kg):</label>
					<Controller name='peso' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
					{errors.peso && <span>O peso é obrigatório!</span>}
				</div>
				<div>
					<label htmlFor='altura'>ALTURA(cm):</label>
					<Controller name='altura' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
					{errors.altura && <span>A altura é obrigatória!</span>}
				</div>
				<label htmlFor='idade'>IDADE (anos):</label>
				<Controller name='idade' control={control} defaultValue='' render={({ field }) => <input {...field} type='number' />} />
				{errors.idade && <span>A idade é obrigatória!</span>}
				<button className='basal-button' type='submit'>
					Calcular TMB
				</button>
			</form>
		</div>
	);
};

export default FormBasal;
