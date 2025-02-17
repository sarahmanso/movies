import axios from "axios";
import { useState } from "react";

function AddMovie({ onMovieAdded }) {
    const [title, setTitle] = useState("");  
    const [year, setYear] = useState("");    
    const [message, setMessage] = useState(""); 

    function addMovie() {
        // If fields are empty, show a message
        if (!title || !year) {
            setMessage("Please fill in all fields girl");
        } else {
            // Send data to the server
            axios.post("http://localhost:5000/movies", { title, year })
                .then(() => {
                    setMessage("The Movie added successfully yayy"); 
                    setTitle(""); // Clears the title input field
                    setYear("");  // Clears the year input field

                    // If onMovieAdded is provided as a prop,
                    //  call it to refresh the movie list after adding a new movie

                    if (onMovieAdded) {
                        onMovieAdded();
                    }
                })
                .catch(() => {
                    setMessage(" Error adding movie Try again miss girl");
                });
        }
    }

    return (
        <div>
            <h2>Add a Movie here</h2>

            <p>{message}</p>

            <input 
                type="text" 
                placeholder="Movie Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Release Year" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
            />

            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}

export default AddMovie;