import './styles.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button';

const PostForm = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		if (action === 'delete') {
			onSubmit();
			return;
		}

		let url = 'http://localhost:5000/posts';

		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			action === 'update' ? await axios.put(url, { title, body }) : await axios.post(url, { title, body });

			navigate('/blog');
		} catch (error) {
			console.error(`Failed to ${action} post.`, error);
		}
	};

	return (
		<section className='contacts'>
			<div className='contacts__wrapper'>
				<form onSubmit={handleSubmit} className='contacts__form'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Deletar Post' : 'Escreva uma publicação'}</h3>
					<div className='contacts__input'>
						<label placeholder='Título'>Título</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>
					<div className='contacts__input'>
						<label>Escreva o texto</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>
					<div className='contacts__input'>
						{action === 'delete' ? (
							<div className='form__btns'>
								<Button type='button' onClick={onSubmit}>
									Excluir
								</Button>
								<Button onClick={() => navigate('/blog')}>Cancela</Button>
							</div>
						) : (
							<div className='form__btns'>
								<Button>{action === 'update' ? 'Update' : 'Submeter'}</Button>
								<Button onClick={() => navigate('/blog')}>Cancela</Button>
							</div>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default PostForm;
