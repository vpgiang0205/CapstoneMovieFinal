import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <footer className="bg-danger p-3 m-0 text-center">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Capstone Movie. All rights reserved.</p>
                <p>Contact us: example@example.com</p>
                <p className='text-light'>Follow us on social media: 
                <br />
                <a href="https://www.facebook.com/profile.php?id=100012829152690">Giang's Facebook</a> || <a href="https://www.facebook.com/phamngohoanghuy95">Huy's Facebook</a></p>
            </div>
        </footer>
    );
}
