import * as ReactDOM from 'react-dom';

import button from "./button";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

console.log('root..', root)

root.render(button)