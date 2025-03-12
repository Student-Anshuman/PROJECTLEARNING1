import React from 'react'
import logo from "@/assets/images/logo.png";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GoSignIn } from "react-icons/go";
import SignIn from '@/Pages/SignIn';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20 bg-white">
      <div>
        <img src={logo} width={150} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 w-120 rounded-full p-2"
        ></input>
      </div>
      <div>
        <Button asChild className="bg-blue-500 rounded-full m-10">
          <Link to={SignIn}>
            <GoSignIn />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Topbar
