import { FaReact,FaMicrosoft, FaBook,FaUserTie,FaTools } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'projects',
    links: [
      { label: 'REACTJS', icon: <FaReact />, url: '/projects' },
      { label: 'ASP.NET MVC', icon: <FaMicrosoft />, url: '/projects' },
      { label: 'ASP.NET API', icon: <FaMicrosoft />, url: '/projects' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'about me',
    links: [
      { label: 'introduction', icon: <FaUserTie />, url: '/aboutme' },
      { label: 'technicatil skills', icon: <FaTools />, url: '/aboutme' },
    ],
  },
];
export default sublinks;