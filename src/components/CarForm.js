import React, { useState } from 'react';
import axios from 'axios';

function CarForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);
    for (let image of images) {
      formData.append('images', image);
    }

    try {
      await axios.post('http://localhost:5000/api/products', formData);
      alert('Car added successfully');
    } catch (err) {
      alert('Failed to add car');
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Car Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input type="file" multiple onChange={handleImageChange} />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
