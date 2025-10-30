import TopList from "./TopList";

function Main() {
  const topMovies = [
    "Wrath of Man",
    "Nobody",
    "The Wolf of Wall Street",
    "War Dogs",
    "Lord of War",
  ];

  return (
    <main className="main">
      <h2>Mina topp 5 favoritfilmer</h2>
      <TopList items={topMovies} />
    </main>
  );
}

export default Main;
