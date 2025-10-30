function Aside() {
  const movieLinks = [
    { title: "Wrath of Man", url: "https://www.imdb.com/title/tt11083552/", img: "https://upload.wikimedia.org/wikipedia/en/a/af/Wrath-of-man.jpg" },
    { title: "Nobody", url: "https://www.imdb.com/title/tt7888964/", img: "https://m.media-amazon.com/images/M/MV5BYmIzOWViNDEtOWRiZS00ZWM4LWFiMmEtNGJjMmQ3NTIxN2U0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    {
      title: "The Wolf of Wall Street",
      url: "https://www.imdb.com/title/tt0993846/", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Wolf_of_Wall_Street_%282013%29.png/250px-The_Wolf_of_Wall_Street_%282013%29.png"
    },
    { title: "War Dogs", url: "https://www.imdb.com/title/tt2005151/", img: "https://m.media-amazon.com/images/M/MV5BYjZiYTQxZTItY2Q2YS00MjM4LWFkMzQtZTRmNDg0NjE3YzU0XkEyXkFqcGc@._V1_.jpg" },
    {
      title: "Lord of War",
      url: "https://www.imdb.com/title/tt0399295/", img: "https://upload.wikimedia.org/wikipedia/en/9/92/Lordofwar.jpg"
    },
  ];

  return (
    <aside className="aside">
        <h3>Länkar till filmer</h3>
        <ol>
            {movieLinks.map((movie, index) => (
                <li key={index}>
                    <a href={movie.url} target="_blank">
                        <p>{movie.title}</p>
                      <img src={movie.img} alt={movie.title} className="movie-poster" />
                    </a>
                </li>
            ))}
        </ol>
    </aside>
  )
}

export default Aside;