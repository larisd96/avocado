import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './styles.css' 

const cardItems = [
	{
		image: '/img/breakfast.png',
		cardHeader: 'PESQUISE A CALORIA DOS ALIMENTOS',
		text: 'O site avocado oferece informações nutricionais de alimentos e permite que os usuários pesquisem calorias, carboidratos, proteínas, gorduras e outros nutrientes em uma variedade de alimentos e bebidas.',
	},
	{
		image: '/img/Healthy_options.png',
		cardHeader: 'CALCULE SEU IMC',
		text: 'Nossa calculadora de Índice de Massa Corporal (IMC) fornece uma avaliação rápida e precisa do seu estado de peso. Descubra se você está no caminho certo para um estilo de vida saudável.',
	},
	{
		image: '/img/Energizer.png',
		cardHeader: 'CONHEÇA SUA TAXA BASAL',
		text: ' Descubra a quantidade de calorias que seu corpo queima em repouso com nossa calculadora de Taxa Basal (TMB). Use essa informação para adaptar sua dieta e alcançar seus objetivos de maneira eficaz.',
	},
];

const Home = () => {
	return (
		
		<div>
			<Banner />
			<h1 className='home-title'>Aqui estão alguns dos principais recursos e informações que esse site pode te oferecer:</h1>
			<div className='home-box-card'>
				{cardItems.map(item => (
					<Card key={item.cardHeader} image={item.image} cardHeader={item.cardHeader} text={item.text} />
				))}
			</div>
		</div>
	);
};

export default Home;

