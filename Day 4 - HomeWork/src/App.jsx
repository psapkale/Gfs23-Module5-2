/* eslint-disable react/prop-types */
import "./App.css";

const MovieCard = ({
   title,
   year,
   director,
   duration,
   genres,
   description,
   poster,
   backdrop,
}) => {
   return (
      <div className="movie-card">
         <div
            className="movie-card-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
         ></div>
         <div className="movie-card-content">
            <img src={poster} alt={title} className="movie-card-poster" />
            <div className="movie-card-details">
               <h2 className="movie-card-title">{title}</h2>
               <p className="movie-card-meta">
                  {year}, {director}
               </p>
               <div className="movie-card-info">
                  <span className="movie-card-duration">{duration} min</span>
                  <span className="movie-card-genres">{genres.join(", ")}</span>
               </div>
               <p className="movie-card-description">{description}</p>
            </div>
         </div>
         <div className="movie-card-actions">
            <button className="movie-card-action">
               <i className="fas fa-share-alt"></i>
            </button>
            <button className="movie-card-action">
               <i className="fas fa-heart"></i>
            </button>
            <button className="movie-card-action">
               <i className="fas fa-comment"></i>
            </button>
         </div>
      </div>
   );
};

const App = () => {
   const movies = [
      {
         title: "Bright",
         year: 2017,
         director: "David Ayer",
         duration: 117,
         genres: ["Action", "Crime", "Fantasy"],
         description:
            "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
         poster:
            "https://lh4.googleusercontent.com/proxy/_iGsRI4ssRvhIpBJBKlvzmSBZ5KfsJVuNRUAxjoILNzO28_uoUH2fjyH33fYGLfAZF9hFjhGFODzi6ZOzVffZgJ1Ez-6-PzJsF4",
      },
      {
         title: "Tomb Raider",
         year: 2018,
         director: "Roar Uthaug",
         duration: 125,
         genres: ["Action", "Fantasy"],
         description:
            "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
         poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl3Ww13qIas0YpD7YIbYVkwwdnjQC9qjimw&s",
      },
      {
         title: "Inception",
         year: 2010,
         director: "Christopher Nolan",
         duration: 148,
         genres: ["Action", "Sci-Fi", "Thriller"],
         description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
         poster:
            "https://www.themoviedb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      },
      {
         title: "The Dark Knight",
         year: 2008,
         director: "Christopher Nolan",
         duration: 152,
         genres: ["Action", "Crime", "Drama"],
         description:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
         poster:
            "https://www.themoviedb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      },
   ];

   return (
      <div className="app">
         {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
         ))}
      </div>
   );
};

export default App;
