import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

  import { Home } from "./pages/Home";
  import { Login } from "./pages/Login";
  import { Freed } from "./pages/Freed";

export function App(){
    return(
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/freed' element={<Freed/>}/>
        </Routes>
      </Router>
    )
}

