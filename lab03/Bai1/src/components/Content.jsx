import Nothing from '../images/nothing.png'
import Button from './Button.jsx';
import './Content.css'

function Content() {
    return (
        <div className="content">
            <div className="container-content">
                <h2>Sorry, no results were found for &quot;cakescascsa&quot;</h2>
                <img src={Nothing} alt="" />
                <p>We have all your independence Day sweets covered.</p>
                <div id="button-center">
                    <Button color="#ff69b4" text="Sweet Cake " bg="#ffc9e480"/>
                    <Button color="blueviolet" text="Black Cake" bg="#e0afff80"/>
                    <Button color="#ff69b4" text="Pozoke Verde" bg="#ffc9e480"/>
                    <Button color="green" text="Heakthy food" bg="#afe7ff80"/>
                    
                </div>
            </div>
        </div>
    );
}
export default Content;