import logo from './logo.svg';
import './App.css';
import DataFetch from './components/DataFetch.js';
import DataFectOneByOne from "./components/DataFetchOneByOne.js";
function App() {
  return (
    <div className="App">
      <DataFectOneByOne></DataFectOneByOne>
      {/* <DataFetch></DataFetch> */}
    </div>
  );
}

export default App;
