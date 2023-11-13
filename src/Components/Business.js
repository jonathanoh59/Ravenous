import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src="URL_OF_AN_IMAGE" alt="Business" />
                </div>
                <h2>Business Name</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>123 Main St</p>
                        <p>Boulder</p>
                        <p>CO 80301</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>CATEGORY</h3>
                        <h3 className="rating">4.5 stars</h3>
                        <p>90 reviews</p>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Business;