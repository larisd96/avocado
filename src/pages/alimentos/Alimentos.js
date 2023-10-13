import './styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nutrition from '../../components/Nutrition/Nutrition';

const Alimentos = () => {
	const baseUrl = 'https://api.edamam.com/api/food-database/v2/parser';
	const queryUrl = `${baseUrl}?app_key=${process.env.REACT_APP_API_KEY}&app_id=${process.env.REACT_APP_APP_ID}`;

	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);
	const [empty, setEmpty] = useState(false);

	useEffect(() => {
		if (search && query) {
			const getNutri = async () => {
				setLoading(true);
				try {
					const response = await axios.get(search);
					setData(response.data.hints);
					if (response.data.hints.length === 0) {
						setEmpty(true);
					} else if (response.data.hints.length) {
						setEmpty(false);
					}
				} catch (error) {
					console.error('Erro na busca de dados');
				}
			};
			getNutri();
			setLoading(false);
		}
	}, [search]);

	return (
		<div className='content-food'>
			<div className='food-box'>
				<input className='search-text' type='text' placeholder='Pesquise o Alimento' value={query} onChange={event => setQuery(event.target.value)} />

				<button className='button-search' type='button' onClick={() => setSearch(`${queryUrl}&ingr=${query}`)}>
					Search
				</button>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className='content-error'>
					{empty ? (
						<div>
							<p>Nenhum resultado foi encontrado ! </p>
						</div>
					) : (
						<ul className='food-list'>
							{data.map((item, index) => (
								<li className='food-card' key={index}>
									<h2>{item.food.label}</h2>
									<div className='food-details'>
										<img className='food-detail-photo' src={item.food.image ? item.food.image : '/img/placeholderimg.jpeg'} alt='Image-food' />

										<Nutrition nutrients={item.food.nutrients} />
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	);
};

export default Alimentos;
