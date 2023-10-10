import './styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Alimentos = () => {
	const baseUrl = 'https://api.edamam.com/api/food-database/v2/parser';
	const queryUrl = `${baseUrl}?app_key=${process.env.REACT_APP_API_KEY}&app_id=${process.env.REACT_APP_APP_ID}`;

	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState();

	useEffect(() => {
		if (search) {
			const getNutri = async () => {
				try {
					const response = await axios.get(search);
					setData(response.data.hints);
				} catch (error) {
					console.error('Erro na busca de dados');
				}
			};
			getNutri();
		}
	}, [search]);

	console.log(data);
	return (
		<div className='content-food'>
			<div className='food-box'>
				<input className='search-text' type='text' placeholder='Pesquise o Alimento' value={query} onChange={event => setQuery(event.target.value)} />

				<button className='button-search' type='button' onClick={() => setSearch(`${queryUrl}&ingr=${query}`)}>
					Search
				</button>
			</div>
			<div className='content-result'>
				<ul className='api-list'>
					{data.map((item, index) => (
						<li className='api-card' key={index}>
							<h1 className='api-label'>{item.food.label}</h1>
							<img className='api-photo' src={item.food.image} alt='Image-food' />
							<div className='content-values'>
								<h2 className='text-names'>Valor energetico: </h2>
								<p className='text-values'>{item.food.nutrients.ENERC_KCAL} kcal</p>
								<h2>Carboidratos:</h2>
								<p>{item.food.nutrients.CHOCDF} Gramas</p>
								<h2>Gorduras:</h2>
								<p>{item.food.nutrients.FAT} Gramas</p>
								<h2>Fibra:</h2>
								<p>{item.food.nutrients.FIBTG} Gramas</p>
								<h2>Proteína:</h2>
								<p>{item.food.nutrients.PROCNT} Gramas</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Alimentos;
