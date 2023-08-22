import rockImg from './assets/images/rock-scissor-paper/rock.svg';
import scissorImg from './assets/images/rock-scissor-paper/scissor.svg';
import paperImg from './assets/images/rock-scissor-paper/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ className, value }) {
  const src = IMAGES[value];
  return <img className={className} src={src} alt={value} />;
}

export default HandIcon;
