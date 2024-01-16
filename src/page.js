import * as FEAAS from "@sitecore-feaas/clientside/react";
//import style from "./page.module.css";

export default async function ExternalComponents() {
  return (
    <div>
      {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
      <h1>Rendering BYOC components</h1>
      <p>External components can be rendered directly in react tree</p>
      <section>
        <FEAAS.ExternalComponent
          componentName="clientside-only"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="hybrid"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="swapped"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="augmented"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          
          componentName="serverside-only"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          
          componentName="wrapper"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
      </section>

      <h1>In FEAAS component</h1>
      <p>
        External components can be also rendered as a part of FEAAS component or
      </p>
      
    
    </div>
  );
}