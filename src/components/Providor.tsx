import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../modules/store';

// ===
// @view
const Provider: React.FC<{}> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

// ===
// @export
export default Provider;
