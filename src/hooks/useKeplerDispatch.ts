import { useDispatch } from 'react-redux';
import { forwardTo } from 'erasme-kepler.gl/actions';

export default function useKeplerDispatch() {
  const dispatch = useDispatch();

  return forwardTo('map', dispatch);
}
