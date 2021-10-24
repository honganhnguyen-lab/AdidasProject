
import './App.css';
import {Button} from '@material-ui/core';
import Header from './layouts/main/MainNavbar';
import Footer from './layouts/main/MainFooter';

function App() {
  return (
    <div className="App">
      <div className="header">
      <Header/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
       
    
    </div>
  );
}

export default App;
