import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import './styles.css';

const Blog = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios('http://localhost:5000/posts');

				if (!response.data) {
					throw new Error('Network response foi nos piriquitos :(');
				}

				const data = response.data;
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
		<section id='blog' className='blog'>
			<div className='container_blog'>
				<div className='blog__wrapper'>
					<div className='blog__header'>
						<button onClick={() => navigate('/create')} className='blog-title'>
							Criar nova publicação
						</button>
					</div>

					<div className='blog__posts'>
						{error && <h4>{error.message}</h4>}

						{currentPosts.map(post => (
							<article className='blog__post' key={post.id}>
								<h3>
									{post.id} - {post.title}
								</h3>
								<p>{post.body}</p>
								<button onClick={() => navigate(`/update/${post.id}`)} className='blog-title'>
									Editar Publicação
								</button>
								<button onClick={() => navigate(`/delete/${post.id}`)} className='blog-title'>
									Apagar Publicação
								</button>
							</article>
						))}
					</div>
					{posts.length > 4 && <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />}
				</div>
			</div>
		</section>
	);
};

export default Blog;
