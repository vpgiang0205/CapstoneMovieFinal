import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-dark text-light py-2'>
      <div className='container text-center'>
        <p>&copy; {new Date().getFullYear()} Movie Capstone Project</p>
        <p>Created by Your Name</p>
      </div>
    </footer>
  );
}
