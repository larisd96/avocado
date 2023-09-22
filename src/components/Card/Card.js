import './styles.css';
//props
const Card = ({ image, cardHeader, text }) => {
	return (
		<div className='card'>
			<img className='card-photo-food' src={image} alt='' />
			<div className='card-content'>
				<h3 className='card-title'>{cardHeader}</h3>
				<p className='card-text'>{text}</p>
			</div>
		</div>
	);
};

export default Card;
