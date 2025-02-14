import React from 'react';
import './Aboutuscss.css';

export default function AboutusPage() {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>
                Welcome to Grandior, your number one source for all things fragrance and candles. We're dedicated to giving you the very best of our products, with a focus on quality, customer service, and uniqueness.
            </p>
            <p>
                Founded in 2025 by Yusuf, Grandior has come a long way from its beginnings in a home office. When Yusuf first started out, their passion for creating unique and high-quality fragrances drove them to do tons of research so that Grandior can offer you the world's most exquisite scents. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
            </p>
            <p>
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <br/>
            <h2>Contact Us</h2>
            <p>If you have any questions or comments, please reach out to us:</p>
            <ul className='contact-info'>
                <li className='list'>Email: <br/> <a href="mailto:support@grandior.com" >support@grandior.com</a></li> <br/>
                <li className='list'>Phone: <br/>+1 (123) 456-7890</li><br/>
                <li className='list'>Address: <br/>123 Fragrance Lane, Scent City, SC 12345</li><br/>
            </ul>
        </div>
    );
}