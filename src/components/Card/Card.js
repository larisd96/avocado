import './styles.css';
//props
const Card = ({ image, cardHeader, text }) => {
	return (
		<div className='card'>
			<img className='photo-food' src={image} alt='' />
			<div className='content-cal'>
				<h3 className='title-cal'>{cardHeader}</h3>
				<p className='text-cal'>{text}</p>
			</div>
		</div>
	);
};

export default Card;
