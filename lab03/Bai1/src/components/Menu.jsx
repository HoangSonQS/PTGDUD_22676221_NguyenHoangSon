
import './Menu.css'
import listFilter from '../images/list_filter.png';
import slider from '../images/slider.png'
import rating5 from '../images/rating_5.png'
import rating4 from '../images/rating_4.png'
import rating3 from '../images/rating_3.png'
import rating2 from '../images/rating_2.png'
import rating1 from '../images/rating_1.png'

function Menu() {
    return (
        <div className="menu">
            <div id="menu" className="container">
            <div id="top">
                    <img src={listFilter} alt="Filter Icon" />
                    <h3><b>FILTERS</b></h3>
                </div>
                <div id="center">
                    <div id="type">
                        <div id="title-header">
                        <b>Type</b>
                        <b>^</b>
                        </div>
                    </div>
                    <div id='check'>
                        <label><input type="checkbox" id="check1" /> Pan-fried</label>
                        <label><input type="checkbox" id="check2" /> Grilled</label>
                        <label><input type="checkbox" id="check3" /> Sauteed</label>
                        <label><input type="checkbox" id="check4" /> Steamed</label>
                        <label><input type="checkbox" id="check5" /> Stir-fried</label>
                        <label><input type="checkbox" id="check6" /> Roasted</label>
                        <label><input type="checkbox" id="check7" /> Baked</label>
                        <label><input type="checkbox" id="check8" /> Stewed</label>
                    </div>
                    <div id="Time">
                        <div id="title-header">
                            <b>Time</b>
                            <b>^</b>
                        </div>
                        <div id="minutes">
                            <p>30 minutes</p>
                            <p>50 minutes</p>
                        </div>
                        <img src={slider} alt="" />
                    </div>
                    <div id="Rating">
                        <div id="title-header">
                            <b>Rating</b>
                            <b>^</b>
                        </div>
                        <div id="check-rating">
                            <label><input type="checkbox" id='rating5'/><img src={rating5} alt="" /></label>
                            <label><input type="checkbox" id='rating4'/><img src={rating4} alt="" /></label>
                            <label><input type="checkbox" id='rating3'/><img src={rating3} alt="" /></label>
                            <label><input type="checkbox" id='rating2'/><img src={rating2} alt="" /></label>
                            <label><input type="checkbox" id='rating1'/><img src={rating1} alt="" /></label>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
}
export default Menu;