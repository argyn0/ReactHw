import './App.css';
import { useState } from 'react';

import Task1 from './components/Task1.jsx';
import Task2 from './components/Task2.jsx';
import Task3 from './components/Task3.jsx';
import Task4 from './components/Task4.jsx';
import Task5 from './components/Task5.jsx';
import Task6 from './components/Task6.jsx';


function App() {
  const [data, setData] = useState({
    filmName: 'Name',
    FIO: 'FIO',
    releaseYear: '2023',
    studioName: 'Studio name',
  });

  const MyData = {
    FIO: 'Akhmetov Argyn',
    Phone: '09876543210',
    Email: 'asd@gmail.com',
    City: 'Astana',
  };
  return (
    <div className="App">
      <Task1></Task1>
      <hr></hr>
      <Task2></Task2>
      <hr></hr>
      <Task3></Task3>
      <hr></hr>
      <Task4></Task4>
      <hr></hr>
      <Task5
        filmName={data.filmName}
        FIO={data.FIO}
        releaseYear={data.releaseYear}
        studioName={data.studioName}>
      </Task5>
      <hr></hr>
      <Task6
        FIO={MyData.FIO}
        Phone={MyData.Phone}
        Email={MyData.Email}
        City={MyData.City}>
      </Task6>
    </div>
  );
}

export default App;
