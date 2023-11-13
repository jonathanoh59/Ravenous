import React from 'react';
import Business from './Business'; // Adjust the path as necessary

const sampleBusinesses = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }
];

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    sampleBusinesses.map((business, index) => {
                        return <Business key={index} business={business} />
                    })
                }
            </div>
        );
    }
}

export default BusinessList;