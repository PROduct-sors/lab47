import { Link } from 'react-router';
import { posts } from '../data/posts';

export default function HomePage() {
  return (
    <section>
      <h1>Останні пости</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <span className="tag">#{post.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}