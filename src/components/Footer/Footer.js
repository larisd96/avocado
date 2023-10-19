import './styles.css';
const Footer = () => {
	const socialMedia = [
		{
			link: 'https://www.instagram.com/',

			image: 'img/instagram_icon.png',
		},

		{
			link: 'https://www.linkedin.com/in/larissa-de-sousa-4a63a6104/',

			image: 'img/linkedin_icon.png',
		},
		{
			link: 'https://www.youtube.com/',

			image: 'img/youtube-icon.png',
		},
		{
			link: 'https://www.facebook.com/?locale=pt_PT',

			image: 'img/facebook_icon.png',
		},
		{
			link: 'https://www.tiktok.com/',

			image: 'img/tiktok_icon.png',
		},
	];
	return (
		<div className='footer-green'>
			<h2>SIGA-NOS NAS REDES SOCIAIS: </h2>
			<div className='footer-container'>
				{socialMedia.map(item => (
					<div key={item.link} className='footer-social-media'>
						<a href={item.link}>
							<img className='footer-social-media-image' src={item.image} alt='imagem' />
						</a>
					</div>
				))}
			</div>
			<div className='footer-content'>
				<p>Caráter Informativo As informações disponibilizadas não substituem avaliação, diagnóstico, tratamento ou acompanhamento de profissionais.</p>
			</div>
			<div className='footer-copyright'>
				<p>Copyright 2023 - Avocado - Todos os direitos reservados</p>
			</div>
		</div>
	);
};
export default Footer;
