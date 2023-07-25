import './App.css';
import SearchHeader from './SearchHeader';

function App({search}) {

const handleSubmit =(term)=>{
  console.log(term)
}

  return (
    <div className="App">
      <SearchHeader search ={handleSubmit}/>
    </div>
  );
}

export default App;
