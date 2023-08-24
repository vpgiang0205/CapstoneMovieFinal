import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <footer className="bg-danger p-3 text-center">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Capstone Movie. All rights reserved.</p>
                <p>Contact us: example@example.com</p>
                <p>Follow us on social media: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>
            </div>
        </footer>
    );
}
