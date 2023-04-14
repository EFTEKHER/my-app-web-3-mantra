import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from './data.json';
function App() {

  return (
    <div className="App">
  <Header/>
<div className="main">
{
  movies.map((element,key)=>{
   return(
    
    <Movie
    
    key={element.imdbID}
    title={element.Title} 
    year={element.Year} 
    image={element.Poster}/>
   )

})
}

</div>
    </div>
  );
}

export default App;
