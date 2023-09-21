import './styles.css';
const Banner = () => {
	return (
		<div className='box'>
			<h1 className='title-1'> Mantenha-se Saudável & Conquiste seus Objetivos com a Nutrição Certa ! </h1>

			<img className='photo-salad' src='/img/salad-pepino.png' alt='Salada' />
			<p className='text-sobre'>
				O site oferece informações sobre valores nutricionais, contagem de calorias, calculadora de Índice de Massa Corporal (IMC) e taxa basal (TMB), uma ferramenta valiosa para ajudar as pessoas a
				entenderem e monitorarem sua saúde.
			
			</p>
			
		</div>
	);
};

export default Banner;
