import axios from 'axios';
import { useState, useEffect } from 'react';
const Alimentos = () => {
	const [nutri, setNutri] = useState([]);

	const getNutri = async (query = 'beans') => {
		try {
			const response = await axios.get(`https://api.edamam.com/auto-complete?app_id=0b650757&app_key=5ce57803a5c4cbd68ebcee1104cc491f&q=${query}`);

			const data = response.data;
			setNutri(data);
		} catch (error) {
			console.error('Erro na busca de dados');
		}
	};

	useEffect(() => {
		getNutri();
	}, []);
};

export default Alimentos;
