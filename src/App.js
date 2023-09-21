import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Alimentos from './pages/alimentos/Alimentos';
import Calculadoras from './pages/calculadoras/Calculadoras';
import Contato from './pages/contato/Contato';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import ButtonS from './components/Button/ButtonS';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<section>
			<Header>
				<Navbar />
			</Header>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/alimentos' element={<Alimentos />} />
				<Route path='/calculadora' element={<Calculadoras />} />
				<Route path='/contato' element={<Contato />} />
				
			</Routes>
			<Footer>

				
			</Footer>
		</section>
	);
}

export default App;
