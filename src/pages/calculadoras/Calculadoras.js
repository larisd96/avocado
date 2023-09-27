import './styles.css';
import FormImc from '../../components/FormImc/FormImc';
import FormBasal from '../../components/FormBasal/FormBasal';
const Calculadoras = () => {
	return (
		<div>
			<h1>Calcule seu IMC</h1>
			<p>
				O IMC é uma medida comum usada para avaliar se uma pessoa está em um peso saudável. Uma calculadora de IMC permitiria aos usuários inserir sua altura e peso e receber uma classificação que
				indica se estão abaixo do peso, com peso saudável, com sobrepeso ou obesos.
			</p>
			<img className='photo-fitness' src='/img/personal.svg' alt='Personal' />
			<FormImc />

			<h1>Calcule sua Taxa Metabolica Basal</h1>
			<p>
				A taxa basal (ou taxa metabólica basal - TMB) é a quantidade mínima de energia que o corpo humano precisa para manter suas funções vitais em repouso, como manter a temperatura corporal, a
				função cerebral, a respiração, a circulação sanguínea e outras funções essenciais. A TMB é medida em calorias por dia e pode variar de pessoa para pessoa, dependendo de diversos fatores,
				incluindo idade, sexo, composição corporal e níveis de atividade física. Geralmente, a TMB é responsável pela maior parte das calorias que uma pessoa queima ao longo do dia, representando
				cerca de 60% a 75% do gasto calórico total diário. Para calcular a TMB, podem ser usadas várias fórmulas, sendo uma das mais conhecidas a Equação de Harris-Benedict. Essa fórmula considera
				informações como o sexo, a idade, o peso e a altura da pessoa. Aqui estão as equações básicas para calcular a TMB de acordo com o sexo: Para homens: TMB = 88,362 + (13,397 x peso em kg) +
				(4,799 x altura em cm) - (5,677 x idade em anos) Para mulheres: TMB = 447,593 + (9,247 x peso em kg) + (3,098 x altura em cm) - (4,330 x idade em anos) Após calcular a TMB, você pode ajustar
				essa quantidade de calorias com base na atividade física diária da pessoa usando um fator de atividade. O resultado final ajudará a determinar a quantidade de calorias necessárias para manter
				o peso atual, perder peso ou ganhar peso, dependendo dos objetivos individuais de saúde e condicionamento físico. Lembrando que a TMB é apenas um ponto de partida, e outros fatores, como
				genética, metabolismo individual e saúde geral, também podem influenciar o gasto calórico de uma pessoa. Portanto, é importante consultar um profissional de saúde ou nutricionista para obter
				uma estimativa precisa e personalizada das necessidades calóricas.
			</p>
			<img  className='photo-halter'src="/img/halter-fitness.png" alt="" />
			<FormBasal />
		</div>
	);
};

export default Calculadoras;
