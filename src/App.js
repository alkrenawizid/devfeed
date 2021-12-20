import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dev from './components/Dev';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className=" text-center mx-auto ">

      <BrowserRouter>
        <div className="flex md:flex-row flex-col">

          <div className=" bg-blue-600 hover:bg-blue-400 md:w-1/2  md:h-screen h-full py-20">
            <div className="m-8">
              <h1 className="text-4xl font-bold text-white">
                Developers Feed
              </h1>
              <span className="text-white italic font-semibold">
                Get featured posts form the best developer platforms.
              </span>
            </div>

            <Sidebar />
            <div className="mt-8 bg-gray-900 shadow text-white p-3 text-center mx-auto w-16 rounded">
              <a href="login" className="flex">
                <span className="text-sm font-semibold">
                  Login
                </span>
              </a>
            </div>
            <div className="mt-8 bg-gray-900 shadow text-white p-3 text-center mx-auto w-20 rounded">
              <a href="register" className="flex">
                <span className="text-sm font-semibold">
                  Register
                </span>
              </a>
            </div>
            <div className="mt-12 bg-gray-900 shadow text-white p-3 mx-auto w-32 rounded">
              <a href="https://github.com/alkrenawizid/devfeed" target="_blank" rel="noopener noreferrer" className="flex">
                <span className="text-sm font-semibold">
                  Star on Github
                </span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-100  overflow-y-scroll max-h-screen">
            <Routes>
              <Route path="/dev" element={<Dev />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
