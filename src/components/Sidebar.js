import React from 'react';
import { Link } from 'react-router-dom';
import devIcon from '../assets/images/dev.webp';

const Sidebar = () => {
    return (
        <div className="flex flex-row flex-wrap md:px-20 justify-center">


            <Link to="/dev">
                <div className="shadow-md h-28 w-32 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={devIcon} alt="logo"
                        className="h-12 w-12 mx-auto "
                    />
                    <p className="text-xl font-semibold mt-2">Dev.to</p>
                </div>
            </Link>

        </div>
    );
}

export default Sidebar;