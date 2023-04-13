import "./App.css";
import Header, { Footer } from "./components/Header.jsx";
function App() {
  let name = "Eftekher Ali Efte";
  return (
    <div className="App">
      <Header />
      <h1>{name}</h1>
      <Footer />
    </div>
  );
}

export default App;
