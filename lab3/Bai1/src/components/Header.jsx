import chefifyImage from '../images/chefify.png';
import checkPhoto from '../images/check.png'
import avatar from '../images/AVT.jpg'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div id="header" className='flex-container'>
                <div>
                    <img src={chefifyImage} alt="logo" />
                </div>
                <div>
                    <input id="myInput" />
                </div>
                <div className='myNav'>
                    <nav>
                        <ul>
                            <li><a href="">What to cook</a></li>
                            <li><a href="">Recipes</a></li>
                            <li><a href="">Ingredients</a></li>
                            <li><a href="">Occasions</a></li>
                            <li><a href="">About us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="profile">
                    <div id="photo">
                        <img src={checkPhoto} alt="check" />
                        <p>Your Recipe Box</p>
                    </div>
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Header;