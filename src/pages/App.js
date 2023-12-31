import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './home/Home';
import Alimentos from './alimentos/Alimentos';
import Calculadoras from './calculadoras/Calculadoras';
import Contato from './contato/Contato';
import Blog from './blog/Blog';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreatePost from '../api/CreatePost';
import UpdatePost from '../api/UpdatePost';
import DeletePost from '../api/DeletePost';

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
					<Route path='/blog' element={<Blog />} />
					<Route path='/create' element={<CreatePost />} />
					<Route path='/update/:id' element={<UpdatePost />} />
					<Route path='/delete/:id' element={<DeletePost />} />
				</Routes>
			</section>

			<Footer></Footer>
		</main>
	);
}

export default App;
