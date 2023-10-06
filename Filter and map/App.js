import './App.css';
import Welcome from '../Welcome';
import { useState } from 'react';
import ExampleComponent from '../UseEffect';
import Joker from '../UseEffect';
import Counter from '../UseReducer';
import Rendering from '../Rendering';
import Basic from '../Basic';
import ToDo from '../toDo';
import TodoManager from '../TodoManager';
import AsyncAwait from '../AsyncAwait';
import JackSon from '../JackSon';
import ParentComponent from '../ParentComponent';
import Product from '../Product1';
import ProductList from '../ProductList';
import Desturcturing from '../Desturcturing'
import Create from '../Employee Details/Create';
import Read from '../Employee Details/Read';
import Update from '../Employee Details/Update';
import Yahoo from '../Yahoo';
import EmployeeManagement from '../Employee Details/Create';
import Basics from '../Basics';
import Hookz from '../Hookz.js'
import RouterExample from '../Router/RouterExample';
import RouterBasics from '../Router/RouterBasics';
import Routerx from '../Router/Routerx';
import Queryx from '../Router/Queryx';
import MovieList from './MovieList';


function App() {

  const[searchTerm,setSearchTerm] = useState('')

  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
    { id: 4, title: 'Movie 4' }
  ];

 const filteredMovies = movies.filter((movie)=>
 movie.title.toLowerCase().includes(searchTerm.toLowerCase())
 );

  return (
    <div className="App">
      <header className="App-header">
          {/* <Welcome/> */}
          {/* <Joker/> */}
          {/* <Counter/> */}
          {/* <Rendering/> */}
          {/* <Basic age={10}/> */}
          {/* <ToDo/>
          <AsyncAwait/> */}
          {/* <JackSon/> */}
          {/* <ParentComponent/> */}
          {/* <ProductList/> */}
          {/* <Desturcturing/> */}
          {/* <Create addEmployee={addEmployee}/> */}
        
          {/* <Update/> */}
          {/* <Yahoo/> */}
          {/* <EmployeeManagement/> 
          <Read employees={employees}/> */}
          {/* <Basics/> */}
          {/* <Hookz/> */}
          {/* <RouterExample/> */}
          {/* <RouterBasics/> */}
          {/* <Routerx/> */}
          {/* <Queryx/> */}


          <h1>Movie Filter App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MovieList filteredMovies={filteredMovies} />
      </header>
    </div>
  );
}

export default App;
