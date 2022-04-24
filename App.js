import * as React from 'react';

// You can import from local files
import Navigation from "./templates/navigation/index";
import Header from "./templates/header/index";
import ContextProvider from "./templates/context/index";

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ContextProvider>
    <Header/>
      <Navigation>
      {
          /* 
          
          This navigation tag will deal with moving around the app.

          To add pages:

          1. Create file in root of project
          2. Go into templates/navigation/index.js 
          3. Add page to code by importing file and adding (Follow pattern seen)

          */
      }
      </Navigation>
      </ContextProvider>
  );
}

