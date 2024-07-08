import React from 'react';
import './css/FeaturedIn.css';

const posts = [
    {
      title: '5 boutique hotels in Mumbai you had no idea about',
      link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
      image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
      publishedDate: '2023-12-31',
      updatedDate: '2024-06-22',
      author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
      excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
      categories: [
        { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
      ]
    },
    {
        title: '5 boutique hotels in Mumbai you had no idea about',
        link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
        image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
        publishedDate: '2023-12-31',
        updatedDate: '2024-06-22',
        author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
        excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
        categories: [
          { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
        ]
      },
      {
        title: '5 boutique hotels in Mumbai you had no idea about',
        link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
        image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
        publishedDate: '2023-12-31',
        updatedDate: '2024-06-22',
        author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
        excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
        categories: [
          { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
        ]
      },
      {
        title: '5 boutique hotels in Mumbai you had no idea about',
        link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
        image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
        publishedDate: '2023-12-31',
        updatedDate: '2024-06-22',
        author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
        excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
        categories: [
          { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
        ]
      },
      {
        title: '5 boutique hotels in Mumbai you had no idea about',
        link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
        image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
        publishedDate: '2023-12-31',
        updatedDate: '2024-06-22',
        author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
        excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
        categories: [
          { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
        ]
      },
      {
        title: '5 boutique hotels in Mumbai you had no idea about',
        link: 'https://lesutra.in/5-boutique-hotels-in-mumbai-you-had-no-idea-about/',
        image: 'https://lesutra.in/wp-content/uploads/2023/08/L-3-1290x540.jpg',
        publishedDate: '2023-12-31',
        updatedDate: '2024-06-22',
        author: { name: 'admin', link: 'https://lesutra.in/author/admin/' },
        excerpt: 'Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…',
        categories: [
          { name: 'Le Sutra News', link: 'https://lesutra.in/category/le-sutra-news/' }
        ]
      },

    // Add more post objects here...
  ];
const FeaturedIn = () => {
  return (
    <div className='contener'>
    <div className="row">
      {posts.map((post, index) => (
        <div key={index} className="col-item">
          <div className="post">
            <div className="thumbnail">
              <span className="categories">
                {post.categories.map((category, idx) => (
                  <a key={idx} href={category.link} className="category-link">{category.name}</a>
                ))}
              </span>
              <img
                src={post.image}
                alt=""
                className="post-image"
              />
            </div>
            <div className="content">
              <h3 className="title">
                <a href={post.link}>{post.title}</a>
              </h3>
              <div className="meta">
                <div className="date">
                  <a href={post.link}>
                    <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                    <time dateTime={post.updatedDate}>{post.updatedDate}</time>
                  </a>
                </div>
                <div className="author">
                  <a href={post.author.link}>{post.author.name}</a>
                </div>
              </div>
              <p className="excerpt">{post.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FeaturedIn;
