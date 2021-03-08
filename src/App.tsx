import React from 'react';
import {Flights} from "./types";

interface Props {
  flights: Flights,
}

function App(props: Props) {
  const {flights} = props;

  return (
    <div>{flights.length}</div>
  );
}

export default App;
