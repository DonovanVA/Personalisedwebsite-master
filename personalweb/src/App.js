import Introduction from './Components/Introduction';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';


//**For react router libraries: npm install react-router-dom@5*/
// 1.React router is :import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// 2.<Router /> at the start to indicate the use of route and
// 3.<Route /> to wrap all of the divs/contents/Css as a route of react
// 4.'exact path' is the initial route
// 5.'path' to link to the path found in other files contianing link 
// 6. Link fn ptr is import {Link} from 'react-router-dom'
function App() {
  return (
   <div><Introduction></Introduction></div>
  )

}

export default App;
