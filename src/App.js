
import './App.css';
import Navbar from './Components/Navbar/Navbar.js'
import Status from './Actions/Status/Status.js'
import Priority from './Actions/Priority/Priority.js';
import Byuser from './Actions/User/Byuser.js';
import { useState } from 'react';



function App() {
  const [Grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  const [Order, setOrder] = useState(localStorage.getItem('order'));
  const setGroupingValue = (newValue) => {
    if (newValue === 'status' || newValue === 'priority' || newValue === 'user') {
      setGrouping(newValue);
    } else {
      console.error('Invalid grouping value provided:', newValue);
    }
  };

  const setOrderingValue = (newValue) => {
    if (newValue === 'Priority' || newValue === 'Title') {
      setOrder(newValue);
    } else {
      console.error('Invalid ordering value provided:', newValue);
    }
  };
  let content;

  if (Grouping === 'status') {
    content = <Status order={Order}  />;
  } else if (Grouping === 'priority') {
    content = <Priority order={Order} />;
  } else {
    content = <Byuser order={Order} />;
  }
  return (
    <div className='fullBody'>

      <Navbar order={Order} grouping={Grouping} setGroupingValue={setGroupingValue} setOrderingValue={setOrderingValue}></Navbar>
      {content}
      {/* <Router>
        <Navbar order={Order} grouping={Grouping}></Navbar>
        <Routes>


          <Route path='/' element={<Status />} />
          <Route path='/user' element={<Byuser />} />
          <Route path='/priority' element={<Priority />} />

        </Routes>
      </Router> */}

    </div>
  );
}

export default App;