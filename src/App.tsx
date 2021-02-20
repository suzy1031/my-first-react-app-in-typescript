import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string
}
// FC function component
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  )
};

App.defaultProps = {
  message: 'Hello defaultProps!',
}
export default App;
