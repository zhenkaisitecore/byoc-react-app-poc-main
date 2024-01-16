import "./App.css";
import * as FEAAS from "@sitecore-feaas/clientside/react";

import Button from "./Components/Button.tsx"; // Import the Button component
import "./byoc/ExampleClientsideComponent.tsx";
import "./Components/StaticHTML.tsx";
import StaticButton from "./Components/StaticHTML.tsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEd_NkbXA_llA/profile-displayphoto-shrink_200_200/0/1517726227744?e=1706140800&v=beta&t=qcI8TVPzEdTC0F8DO-1bPYw1x4mn29vZJuWDyY5pzVM"
          className="App-logo"
          alt="logo"
        />
        <p>Rotating D</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text={undefined}
            variant={undefined}
            size={undefined}
            onClick={undefined}
          />
          <FEAAS.ExternalComponent
            componentName="clientside-only"
            firstName="John"
            lastName="Doe"
            telephone={5551234}
          />
          <FEAAS.ExternalComponent componentName="StaticButton" />
          <StaticButton />
        </a>
      </header>
    </div>
  );
}
export default App;
