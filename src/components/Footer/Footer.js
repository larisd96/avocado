import './styles.css';
const Footer = () => {
	return (
		<div className='footer-green'>
			<h2>SIGA-NOS NAS REDES SOCIAIS: </h2>
			<div className='footer-container'>
				<div className='footer-inst'>
					<a href='https://www.instagram.com/'>
						<img src='img/instagram_icon.png' alt='imagem' />
					</a>
				</div>
				<div className='footer-in'>
					<a href='https://www.linkedin.com/in/larissa-de-sousa-4a63a6104/'>
						<img src='img/linkedin_icon.png' alt='imagem' />
					</a>
				</div>
				<div className='footer-you'>
					<a href='https://www.youtube.com/'>
						<img src='img/youtube-icon.png' alt='imagem' />
					</a>
				</div>
				<div className='footer-face'>
					<a href='https://www.facebook.com/?locale=pt_PT'>
						<img src='img/facebook_icon.png' alt='imagem' />
					</a>
				</div>
				<div className='footer-tiktok'>
					<a href='https://www.tiktok.com/'>
						<img src='img/tiktok_icon.png' alt='imagem' />
					</a>
				</div>
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
