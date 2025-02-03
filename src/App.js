
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index.jsx';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/index.jsx';
function App() {
  return (
    <div className="App ">
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;
