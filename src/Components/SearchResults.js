import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import './SearchResults.css';

// Mock data - replace with your actual data or API calls
const searchData = [
  { id: 1, title: "Child Homeopathy Care", type: "service", link: "/services/child-care" },
  { id: 2, title: "Skin Treatment with Homeopathy", type: "service", link: "/services/skin-treatment" },
  { id: 3, title: "About Dr. Zanje", type: "page", link: "/about" },
  { id: 4, title: "Homeopathy for Chronic Conditions", type: "blog", link: "/blog/chronic-conditions" },
  { id: 5, title: "Homeopathy FAQs", type: "faq", link: "/faqs" },
  { id: 6, title: "Contact Us", type: "contact", link: "/contact" },
  { id: 7, title: "Homeopathy for Mental Health", type: "service", link: "/services/mental-health" },
];

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);

    if (searchQuery) {
      // In a real app, you would make an API call here
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [location]);

  return (
    <div className="search-results-container">
      <h1>Search Results for "{query}"</h1>
      
      {results.length > 0 ? (
        <div className="results-list">
          {results.map((item) => (
            <div key={item.id} className="result-item">
              <a href={item.link} className="result-link">
                <h3>{item.title}</h3>
                <span className="result-type">{item.type}</span>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p>Try different keywords or browse our services:</p>
          <a href="/services" className="browse-link">View All Services</a>
        </div>
      )}
    </div>
  );
};

export default SearchResults;