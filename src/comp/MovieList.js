import React from "react";
import { useQuery } from '@tanstack/react-query'; 
import axios from "axios";


const fetchMovies = async () => {
    const { data } = await axios.get("http://localhost:5000/movies");
    return data;
};

function MovieList() {
    const { data: movies, error, isLoading } = useQuery({
        queryKey: ['movie'], 
        queryFn: fetchMovies,
        staleTime: 3000 
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading movies.</p>;

    return (
        <div style={styles.movieListContainer}>
            <h1 style={styles.pageTitle}>רשימת הסרטים</h1>
            <ul style={styles.movieList}>
                {movies?.map((movie) => (
                    <li key={movie.id} style={styles.movieItem}>
                        <div style={styles.movieImage}>
                            <img src={movie.imageUrl} alt={movie.title} style={styles.image} />
                        </div>
                        <div style={styles.movieDetails}>
                            <strong style={styles.movieTitle}>{movie.title}</strong>
                            <span style={styles.movieYear}> ({movie.year})</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const styles = {
    movieListContainer: {
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: '#ffe6f2', // Soft pastel pink
        padding: '25px',
        borderRadius: '15px',
        maxWidth: '1100px',
        margin: '40px auto',
        boxShadow: '0 6px 12px rgba(255, 105, 180, 0.3)', // Light pink shadow
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: '36px',
        color: '#d63384', // Deep pink title
        fontWeight: 'bold',
        marginBottom: '30px',
        textShadow: '2px 2px 8px rgba(255, 182, 193, 0.6)' // Soft glowing effect
    },
    movieList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
    },
    movieItem: {
        width: '250px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(255, 105, 180, 0.2)', // Pink glow
        overflow: 'hidden',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        padding: '10px',
    },
    movieItemHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 15px rgba(255, 105, 180, 0.3)',
    },
    movieImage: {
        width: '100%',
        height: '280px',
        overflow: 'hidden',
        borderRadius: '10px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
    },
    imageHover: {
        transform: 'scale(1.1)',
    },
    movieDetails: {
        padding: '12px',
    },
    movieTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#d63384',
    },
    movieYear: {
        fontSize: '14px',
        color: '#666',
    },
};


export default MovieList;
