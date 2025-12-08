import { Link } from 'react-router-dom';
import { Calendar, Clock, Play } from 'lucide-react';

import UILink from '@/UI/link/UILink';

import './Blog.scss';

const Blog = () => {
  const blogPosts = [
    {
      image: '/homepage/blog/blog-1.jpg',
      category: 'Marketing',
      title: 'What is traffic arbitrage and does it really make money?',
      date: 'September 1, 2024',
      readTime: '5 min read',
      link: '/single-post',
    },
    {
      image: '/homepage/blog/blog-2.jpg',
      category: 'Management',
      title: 'How to build a customer service department',
      date: 'August 15, 2024',
      readTime: '7 min read',
      link: '/single-post',
    },
    {
      image: '/homepage/blog/blog-3.jpg',
      category: 'Design',
      title: 'Design trends 2024: What to expect',
      date: 'August 10, 2024',
      readTime: '4 min read',
      link: '/single-post',
    },
    {
      image: '/homepage/blog/blog-4.jpg',
      category: 'HR & Recruiting',
      title: 'Best practices for remote team management',
      date: 'July 28, 2024',
      readTime: '6 min read',
      link: '/single-post',
    },
    {
      image: '/homepage/blog/blog-5.jpg',
      category: 'Development',
      title: 'Modern web development tools and frameworks',
      date: 'July 20, 2024',
      readTime: '8 min read',
      link: '/single-post',
    },
    {
      image: '/homepage/blog/blog-6.jpg',
      category: 'Marketing',
      title: 'Social media marketing strategies for 2024',
      date: 'July 15, 2024',
      readTime: '5 min read',
      link: '/single-post',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="blog-page-hero">
        <div className="container">
          <div className="blog-breadcrumb">
            <UILink isBg={false} whoElem="regular" link="/" title="Home" />
            <span className="blog-breadcrumb-separator">/</span>
            <span className="blog-breadcrumb-text">Blog</span>
          </div>
          <h1 className="blog-page-title">Our Blog</h1>
          <p className="blog-page-description">
            Read our latest articles and insights about online education, career development, and more.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        <div className="container">
          <div className="blog-grid-container">
            {blogPosts.map((post, index) => (
              <Link key={index} to={post.link} className="blog-card">
                <div className="blog-card-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <div className="blog-card-icon">
                    <Play size={20} />
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <div className="blog-card-meta-item">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="blog-card-meta-item">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="blog-card-category">
                    <span className="blog-card-category-text">{post.category}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
