import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import Landing from './Components/Landing';
import Catalog from './Components/Catalog';
import logo from '../src/Assest/logo123.png'
import MovieDetail from './Components/MovieDetail'



function App() {
  return (
    <>
 
    <Router>
    <nav>
    <ul>
    <li><Link to='/'>Home </Link></li>
    <li><Link to='/Catalog'>Catalog </Link></li>
    </ul>
       <img src={logo} width={300} height={50} alt=''  />
    </nav>
    <Routes>
      <Route path='/' element={<Landing/> }/>
      <Route path='/Catalog' element={<Catalog/>}/>
      <Route path='/movies/:movieID' element={ <MovieDetail  />} />
    </Routes>
    </Router>
    </>
  )
}

export default App;
