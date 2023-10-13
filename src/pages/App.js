import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './home/Home';
import Alimentos from './alimentos/Alimentos';
import Calculadoras from './calculadoras/Calculadoras';
import Contato from './contato/Contato';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
	return (
		<main className='container'>
			<Header>
				<Navbar />
			</Header>
			<section className='content'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/alimentos' element={<Alimentos />} />
					<Route path='/calculadora' element={<Calculadoras />} />
					<Route path='/contato' element={<Contato />} />
				</Routes>
			</section>

			<Footer>
			</Footer>
		</main>
	);
}

export default App;
