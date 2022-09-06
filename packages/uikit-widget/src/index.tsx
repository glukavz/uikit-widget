import ReactDOM from 'react-dom/client';
import React from 'react';
import 'uno.css'

import Button from "./button";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Button color="red" />
  <Button color="green" />
  <Button color="blue" />
 </div>
)

