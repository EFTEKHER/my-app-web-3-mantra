import "./App.css";
import Student from "./components/Student";

function App() {

  return (
    <div className="App">
    <Student name="Efte" age={20}/>
    <Student name="Tonmoy" age={30}/>
    <Student name="Efte" age={60}/>
    </div>
  );
}

export default App;
