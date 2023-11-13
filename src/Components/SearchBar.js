import React from 'react';
import './SearchBar.css';

const sortOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};


class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {Object.keys(sortOptions).map(option => {
                            return <li key={sortOptions[option]}>{option}</li>;
                        })}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <button type="submit">Let's Go</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;