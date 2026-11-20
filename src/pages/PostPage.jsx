import { Link, useNavigate, useParams } from 'react-router';
import { getPostById } from '../data/posts';

export default function PostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = getPostById(postId);

  if (!post) {
    return (
      <section>
        <h1>Пост №{postId} не знайдено</h1>
        <Link to="/">До списку постів</Link>
      </section>
    );
  }

  return (
    <article>
      <button onClick={() => navigate(-1)}>← Назад</button>
      <h1>{post.title}</h1>
      <span className="tag">#{post.tag}</span>
      <p>{post.body}</p>
    </article>
  );
}