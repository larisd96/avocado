import './styles.css';
const Banner = () => {
	return (
		<div className='box'>
			<div className='banner-group-text'>
				<h1 className='banner-title'> Mantenha-se Saudável & Conquiste seus Objetivos com a Nutrição Certa !</h1>
				<h2>
					O site oferece informações sobre valores nutricionais, contagem de calorias, calculadora de Índice de Massa Corporal (IMC) e taxa basal (TMB), uma ferramenta valiosa para ajudar as pessoas a
					entenderem e monitorarem sua saúde.
				</h2>
			</div>

			<img className='photo-salad' src='/img/salad-pepino.png' alt='Salada' />
		</div>
	);
};

export default Banner;
