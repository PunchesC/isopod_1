import EtsyPhoto from '../assets/img1.jpg';
import './EtsyContainer.css';

function EtsyContainer() {
  return (
    <div className="EtsyContainer">
      <p>Please Purchase on Etsy</p>
      <a href="https://www.etsy.com/people/BlueMoon42">
        <img title="Click the link to go to Olivia's etsy" src={EtsyPhoto}></img>
      </a>
    </div>
  );
}

export default EtsyContainer;
