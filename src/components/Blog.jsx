import { useState } from 'react';
import './Blog.css';

function BlogCategory({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="blog-category">
      <div
        className="blog-category-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="blog-category-icon">{category.icon}</span>
        <h3 className="blog-category-title">{category.title}</h3>
        <span className="blog-category-count">{category.items.length}</span>
        <span className={`blog-category-toggle ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      <ul className={`blog-items ${isOpen ? 'open' : ''}`}>
        {category.items.map((item, index) => (
          <li key={index} className="blog-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Blog({ blog }) {
  if (!blog || !blog.categories) return null;

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <h2 className="section-title">{blog.title}</h2>
        <div className="blog-grid">
          {blog.categories.map((category) => (
            <BlogCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
