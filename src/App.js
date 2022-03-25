
import './App.css';
import ContextProvider from './Components/Hooks/Contextapi/ContextProvider';
import Header from './Components/Pages/header/Header';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
     <ContextProvider>
       <Header/>
       <Home/>
     </ContextProvider>
    </div>
  );
}

export default App;
