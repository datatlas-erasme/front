import type { EqualityFn } from 'react-redux/es/types';
import type { RootState } from '../store';

declare module 'react-redux' {
  export declare const useSelector: <T>(
    selector: (state: RootState) => T,
    equalityFn?: EqualityFn<T>,
  ) => T;
}
