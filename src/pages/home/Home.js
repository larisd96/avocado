import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
const Home = () => {
	return (
		//caminho da props
		<div>
			<Banner />
			<Card
				image={'/img/circulo-alimentos.png'}
				cardHeader={'Pesquise as calorias dos alimentos'}
				text={
					' O site avocado oferece informações nutricionais de alimentos e permite que os usuários pesquisem calorias, carboidratos, proteínas, gorduras e outros nutrientes em uma variedade de alimentos e bebidas.'
				}
			/>
		</div>
	);
};

export default Home;

// Extrair tudo div p/ Banner
// Banner
