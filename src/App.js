import logo from './logo.svg';
import './App.css';
import SortIcon from '@mui/icons-material/Sort';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Advertising } from './pages/Advertising';
import { navList } from './Raw_data/nav_list';
import { NavItem } from './Hoc/NavItem';
function App() {
  let [option, setoption] = useState("Advertising")



  return (
    <div >
      <div className="profile">
        <div className="profile_icon">

        </div>
      </div>
      <BrowserRouter>

        <div className="App">

          <div className="nav" >


            <div className="nav_items" >
              <SortIcon className='icon' />
              <ul>
                {navList.map(val => <li>
                  <Link to={`/${val.name}`}><NavItem icon={val.icon} name={val.name} option={option} setoption={setoption} /></Link>
                </li>)}

              </ul>
            </div>
          </div>
          <Routes>

            <Route path="/" element={<Advertising />} />
            <Route path="/Advertising" element={<Advertising />} />

            <Route path="*" element={<Page />} />



          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}
function Page() {
  return (
    <div className="page">
      <h2>Sorry this page is not developed yet</h2>
    </div>
  )
}
export default App;
