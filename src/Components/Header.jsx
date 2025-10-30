function Header() {
  const name = "Ventsislav Dimov";
  const klass = "WEBB25";
  const utbildning = "Fullstack Developer";

  return (
    <header className="header">
      <h1>{utbildning}</h1>
      <h2>
        {name} - {klass}
      </h2>
    </header>
  );
}
export default Header;