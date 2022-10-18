import { useDispatch } from 'react-redux';
import { forwardTo } from 'erasme-kepler.gl/actions';

export default function useKeplerDispatch(id: string = 'map') {
  const dispatch = useDispatch();

  return forwardTo(id, dispatch);
}
