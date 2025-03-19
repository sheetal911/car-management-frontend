import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const CarDetails = () => {
    const [car, setCar] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchCar = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get(`http://localhost:3001/api/cars/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCar(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setTags(response.data.tags.join(', '));
            } catch (err) {
                setError('Failed to load car details.');
            }
        };

        fetchCar();
    }, [id]);

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.put(`http://localhost:3001/api/cars/${id}`, 
                { title, description, tags: tags.split(', ') },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            history.push('/');  // Redirect to car list page
        } catch (err) {
            setError('Failed to update car.');
        }
    };

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:3001/api/cars/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            history.push('/');  // Redirect to car list page
        } catch (err) {
            setError('Failed to delete car.');
        }
    };

    return (
        <div>
            {car ? (
                <>
                    <h2>{car.title}</h2>
                    <img src={car.images[0]} alt={car.title} width="200" />
                    <p>{car.description}</p>
                    <p>Tags: {car.tags.join(', ')}</p>

                    <h3>Edit Car</h3>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Title" 
                    />
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Description"
                    />
                    <input 
                        type="text" 
                        value={tags} 
                        onChange={(e) => setTags(e.target.value)} 
                        placeholder="Tags (comma separated)"
                    />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <p>Loading...</p>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default CarDetails;
