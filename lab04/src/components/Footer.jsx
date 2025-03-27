import ChefifyWhite from '../images/chefifywhite.png'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div id="about-us">
                <b id='footer-text'>About Us</b>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <input id="input-email" type="text" placeholder="Enter your email" />
                <button id="btn-send">Send</button>
                <div id='chefifyWhite'>
                    <img src={ChefifyWhite} alt="logo trắng" />
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service Privacy Policy</p>
                </div>
            </div>
            <div id="learnMore">
                <b>Learn More</b>
                <p><a href="#">Our Cook</a></p>
                <p><a href="#">See Our Features</a></p>
                <p><a href="#">FAQ</a></p>
                <div id='shop'>
                    <b>Shop</b>
                    <p><a href="#">Gift Subscription</a></p>
                    <p><a href="#">Send Us Feedback</a></p>
                </div>
            </div>
            <div id="recipes">
                <b>Recipes</b>
                <p><a href="#">What to Cook This Week</a></p>
                <p><a href="#">Pasta</a></p>
                <p><a href="#">Dinner</a></p>
                <p><a href="#">Healthy</a></p>
                <p><a href="#">Vegetarian</a></p>
                <p><a href="#">Vegan</a></p>
                <p><a href="#">Christmas</a></p>
            </div>
        </div>
    );
}
export default Footer;