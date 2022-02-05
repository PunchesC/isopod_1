import BottomLeftContainer from './BottomLeftContainer';
import EtsyContainer from './EtsyContainer';
import InfoCard from './InfoCard';
import './Main.css';
import SocialMediaContainer from './SocialMediaContainer';

function Main() {
  return (
    <div className='Main'>
      <div className="container1">
      <InfoCard />
      </div>
      <div className="container2">
      <EtsyContainer />
      </div>
      <div className="container3">
      <BottomLeftContainer />
      </div>
      <div className="container4">
      <SocialMediaContainer />
      </div>
    </div>
  );
}

export default Main;



