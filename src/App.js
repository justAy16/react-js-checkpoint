import React from 'react';
// imported bootstrap into the app
import 'bootstrap/dist/css/bootstrap.min.css';
// imported external components stored in the Component folder
import Navbar from './Component/Navbar';
import Firstrow from './Component/Firstrow';
import Secondrow from './Component/Secondrow';



const App = () => {
  return ( 

    // Created fragments
    <>
    {/* created div with a classname App */}
    <div className="App">
      {/* imported Navbar component, made it sticky, used form for the search segment */}
      <Navbar/>
    {/* made use of grid system to position 3 cards, arranged them into 2 rows, 1 card in the first, 2 in the second row */}
    {/* imported Firstrow component */}
      <Firstrow/>
    {/* imported Secondrow component */}
      <Secondrow/>
    </div>

    </>
  );
}

export default App;



