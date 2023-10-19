import './styles.css';
const Nutrition = ({ nutrients }) => {
	return (
		<div className='nutri-content-values'>
			<h2 className='nutri-text-names'>Valor energetico: </h2>
			<p className='nutri-text-values'>{nutrients.ENERC_KCAL} kcal</p>
			<h2>Carboidratos:</h2>
			<p>{nutrients.CHOCDF} Gramas</p>
			<h2>Gorduras:</h2>
			<p>{nutrients.FAT} Gramas</p>
			<h2>Fibra:</h2>
			<p>{nutrients.FIBTG} Gramas</p>
			<h2>Proteína:</h2>
			<p>{nutrients.PROCNT} Gramas</p>
		</div>
	);
};

export default Nutrition;
