"use client";
import React, { FC } from "react";
import * as FEAAS from "@sitecore-feaas/clientside/react";

const StaticButton = () => {
  return (
    <>
      <button>
        <span>This is static button</span>
      </button>
    </>
  );
};

FEAAS.registerComponent(StaticButton, {
  name: "StaticButton",
  title: "Our own BYOC Button",
  description: "Description of my static Button component",
  thumbnail:
    "https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58",
  group: "D Section",
  type: "object",
  properties: {
    text: {
      type: "string",
      title: "Text",
    },
    variant: {
      type: "string",
      title: "Variant",
    },
    size: {
      type: "string",
      title: "Size",
    },
  },
});

export default StaticButton;
