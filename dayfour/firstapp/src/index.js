import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Square from "./components/Square";
import Board from "./components/Board";
import Game from "./components/Game";

const root = createRoot(document.getElementById("root"));
root.render(<Game />);
//root.render(<Square />);
//root.render(<Board />);
