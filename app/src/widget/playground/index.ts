import { store } from 'app-config/app-store';
import playgroundSlice from './model/slice';
import { watchAllPlaygrounds } from './model/saga';

// @ts-ignore
store.injectReducer('playground', playgroundSlice);
// @ts-ignore
store.injectSaga('playground', watchAllPlaygrounds);

export { Playground } from './playground';
