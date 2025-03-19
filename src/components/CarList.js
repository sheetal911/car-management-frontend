import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3001/api/cars', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCars(response.data);
        };

        fetchCars();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCars = cars.filter((car) => 
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div>
            <h2>Car List</h2>
            <input 
                type="text" 
                placeholder="Search cars" 
                value={searchQuery} 
                onChange={handleSearch} 
            />
            <ul>
                {filteredCars.map((car) => (
                    <li key={car._id}>
                        <Link to={`/car/${car._id}`}>{car.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
