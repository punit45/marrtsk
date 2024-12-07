import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Sample blog posts
  const posts = [
    { title: "Latest Technology Trends", category: "technology", content: "Stay updated with the latest in technology." },
    { title: "How to Live a Healthy Life", category: "health", content: "Tips for a healthier lifestyle." },
    { title: "Top Lifestyle Habits for Success", category: "lifestyle", content: "Key habits that lead to success." },
    { title: "Tech Innovations to Watch", category: "technology", content: "The future of tech is bright." },
    { title: "Mental Health Awareness", category: "health", content: "Understanding and improving mental health." },
  ];

  // State to manage search query and category
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  // Function to filter posts based on search query and category
  const filteredPosts = posts.filter(post => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase()) || post.content.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category ? post.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>Simple Blog Search</h1>
      </header>

      <div className="container">
        {/* Search box */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="search-box"
        />

        {/* Category filter */}
        <div className="filter">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Results display */}
        <ul className="results">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <li key={index} className="result-item">
                <strong>{post.title}</strong>
                <p>{post.content}</p>
              </li>
            ))
          ) : (
            <li>No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
