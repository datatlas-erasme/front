import { useSelector } from 'react-redux';

const CursorHandler = () => {
  // TODO use a kepler factory to handle cursor in the future
  let canvas = document.getElementById('default-deckgl-overlay');
  const pointHover = useSelector((state) => state.keplerGl.map?.visState?.hoverInfo?.layer ?? null);
  if (canvas) {
    canvas.style.cursor = pointHover ? 'pointer' : 'default';
  }

  return <div></div>;
};

export default CursorHandler;
