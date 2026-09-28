import React, { useState } from 'react';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Search content data
  const searchableContent = [
    { title: 'Contact Information', content: 'contact information email phone office address business hours London UK enquiry', section: 'contact', id: 'contact' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleSearchResultClick = (sectionId) => {
    setShowSearchResults(false);
    setSearchQuery('');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchResultClick(searchResults[0].id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
      
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center h-full pt-2">
            <a href="/" className="flex items-center justify-center">
              <img 
                src="/Vector Smart Object.svg" 
                alt="WMP Management Services Ltd" 
                className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#contact" className="text-secondary hover:text-accent-blue font-normal transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <a href="tel:+447930087654" className="text-muted hover:text-accent-blue transition-colors duration-300">
                <Phone size={20} />
              </a>
              <a href="mailto:info@wmp.ltd" className="text-muted hover:text-accent-blue transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center bg-neutral-50 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-accent-blue focus-within:ring-opacity-20">
                <Search size={18} className="text-muted mr-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery.length >= 2 && setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  className="bg-transparent outline-none text-sm text-primary placeholder-muted w-40"
                />
              </div>
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <div className="text-xs text-muted mb-2 px-2">Search Results</div>
                    {searchResults.slice(0, 5).map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result.id)}
                        className="w-full text-left px-3 py-2 hover:bg-neutral-50 rounded text-sm transition-colors"
                      >
                        <div className="font-medium text-primary">{result.title}</div>
                        <div className="text-xs text-muted capitalize">{result.section}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* No Results */}
              {showSearchResults && searchResults.length === 0 && searchQuery.length >= 2 && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 text-center">
                    <div className="text-sm text-muted">No results found for "{searchQuery}"</div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-accent-blue transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-100">
            <div className="flex flex-col space-y-6">
              <a href="#contact" className="text-secondary hover:text-accent-blue font-normal transition-colors duration-300">
                Contact
              </a>
              <div className="flex items-center space-x-6 pt-4 border-t border-neutral-100">
                <a href="tel:+447930087654" className="text-muted hover:text-accent-blue transition-colors duration-300">
                  <Phone size={20} />
                </a>
                <a href="mailto:info@wmp.ltd" className="text-muted hover:text-accent-blue transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className="flex items-center bg-neutral-50 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-accent-blue focus-within:ring-opacity-20">
                    <Search size={18} className="text-muted mr-3" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="bg-transparent outline-none text-sm text-primary placeholder-muted flex-1"
                    />
                  </div>
                  
                  {/* Mobile Search Results */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg">
                      <div className="p-2">
                        <div className="text-xs text-muted mb-2 px-2">Search Results</div>
                        {searchResults.slice(0, 5).map((result, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearchResultClick(result.id)}
                            className="w-full text-left px-3 py-2 hover:bg-neutral-50 rounded text-sm transition-colors"
                          >
                            <div className="font-medium text-primary">{result.title}</div>
                            <div className="text-xs text-muted capitalize">{result.section}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;