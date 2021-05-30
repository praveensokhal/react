import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Coursel from './components/Coursel';

var details = {
  username :"praveen Sokhal",
  projectname : "strutshop"
}
function App() {
  return (
    <div >
     <Navbar details = {details} >hsmbgadg</Navbar>
    <Coursel></Coursel>
    <Signup></Signup>
    </div>
  );
}

export default App;
