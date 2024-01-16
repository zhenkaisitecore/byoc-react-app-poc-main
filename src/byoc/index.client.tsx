"use client";
/**
 * Required boilerplate for BYOC clientside bundle.
 *
 * DO NOT REMOVE
 */

import * as FEAAS from "@sitecore-feaas/clientside/react";
/**
 * Add imports to BYOC components that you would like to be rendered on server below.
 * Clientside components are used for user interactivity.
 */

// Clientside-only component
import "./ExampleClientsideComponent.tsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
  debugger;
  return FEAAS.ExternalComponent(props);
};
