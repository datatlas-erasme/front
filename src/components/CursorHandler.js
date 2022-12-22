import { useSelector } from 'react-redux';
import { getHoverInfoLayer } from '../store/kepler';

const CursorHandler = () => {
  // TODO use a kepler factory to handle cursor in the future
  let canvas = document.getElementById('default-deckgl-overlay');
  const pointHover = useSelector(getHoverInfoLayer);
  if (canvas) {
    canvas.style.cursor = pointHover ? 'pointer' : 'default';
  }

  return <div></div>;
};

export default CursorHandler;
