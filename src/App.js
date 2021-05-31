// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import Coursel from './components/Coursel';

var details = {
  username :"praveen Sokhal",
  projectname : "Rangeela"
}
function App() {
  return (
    <div >
     <Navbar details = {details} >Kids</Navbar>
    <Coursel></Coursel>

    <Cake></Cake>
      <Signup></Signup>
   
    </div>
  );
}

export default App;
