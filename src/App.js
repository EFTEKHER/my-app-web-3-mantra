import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from './data.json';
function App() {
let login=true;
  return (
    
    <div className="App">

    {
      (()=>{
      if(login)
      {
        return <h1 style={{color:'black'}}>see this </h1>;
      }
      else{
        return <h1 style={{color:'pink'}}>Not see this</h1>
      }
      })()
    }
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
