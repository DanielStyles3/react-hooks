import React, { useState } from 'react';
import Movielist from './components/Movielist';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'RRR',
      description: 'Action, Family',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 8,
    },
    // Add more movies here...
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, filterValue) => {
    let filtered = movies;

    if (filterType === 'title') {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'rating') {
      filtered = movies.filter((movie) => movie.rating >= filterValue);
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <div className="app" style={{textAlign: 'center'}}>
      <h1>My Movie App</h1>
      <Filter handleFilter={handleFilter} />
      <Movielist movies={filteredMovies} />

      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Poster URL:
          <input
            type="text"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
