import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-sections">

                    {/* About Us */}
                    <div className="footer-about">
                        <h2 className="footer-heading">About Us</h2>
                        <p className="footer-text">
                            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                        </p>
                        <div className="footer-form">
                            <input type="email" placeholder="Enter your email" className="footer-input" />
                            <button className="footer-button">Send</button>
                        </div>
                    </div>

                    {/* Learn More */}
                    <div className="footer-learn-shop">
                        <div className="footer-column" style={{width: "100%"}}>
                            <h2 className="footer-heading">Learn More</h2>
                            <ul>
                                <li><a href="#">Our Cooks</a></li>
                                <li><a href="#">See Our Features</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Shop */}
                        <div className="footer-column" style={{width: "100%"}}>
                            <h2 className="footer-heading">Shop</h2>
                            <ul>
                                <li><a href="#">Gift Subscription</a></li>
                                <li><a href="#">Send Us Feedback</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Recipes */}
                    <div className="footer-column">
                        <h2 className="footer-heading">Recipes</h2>
                        <ul>
                            <li><a href="#">What to Cook This Week</a></li>
                            <li><a href="#">Pasta</a></li>
                            <li><a href="#">Dinner</a></li>
                            <li><a href="#">Healthy</a></li>
                            <li><a href="#">Vegetarian</a></li>
                            <li><a href="#">Vegan</a></li>
                            <li><a href="#">Christmas</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <div className="footer-brand">
                        <img src="../img/Group 9.png" alt="Chefify logo" />
                        
                    </div>
                    <div className="footer-links">
                        <span>2023 Chefify Company</span>
                        <span className="divider">|</span>
                        <a href="#">Terms of Service</a>
                        <span className="divider">|</span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
