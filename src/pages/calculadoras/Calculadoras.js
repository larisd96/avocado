import './styles.css';
import Form from '../../components/Form/Form';

const Calculadoras = () => {
	return (
		<div>
			<h1>Calcule seu IMC</h1>
			<p>
				O IMC é uma medida comum usada para avaliar se uma pessoa está em um peso saudável. Uma calculadora de IMC permitiria aos usuários inserir sua altura e peso e receber uma classificação que
				indica se estão abaixo do peso, com peso saudável, com sobrepeso ou obesos.
			</p>
			<img className='photo-fitness' src='/img/personal.svg' alt='Personal' />
			<Form />;
		</div>
	);
};

export default Calculadoras;
