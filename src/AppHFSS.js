import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Divider } from "primereact/divider";

export default function BasicDemo() {
  // You can replace these actions with real functionality
  const fileActions = [
    {
      label: "Open Design",
      icon: "pi pi-folder-open"
    },
    {
      label: "Save Design As...",
      icon: "pi pi-copy"
    },
    {
      label: "Export",
      icon: "pi pi-external-link"
    }
  ];

  const designActions = [
    {
      label: "Undo",
      icon: "pi pi-undo"
    },
    {
      label: "Redo",
      icon: "pi pi-refresh"
    },
    {
      label: "Run Simulation",
      icon: "pi pi-play"
    }
  ];

  const viewActions = [
    {
      label: "Zoom In",
      icon: "pi pi-search-plus"
    },
    {
      label: "Zoom Out",
      icon: "pi pi-search-minus"
    },
    {
      label: "Reset View",
      icon: "pi pi-refresh"
    },
    {
      label: "Fit All/Selection",
      icon: "pi pi-expand-all"
    }
  ];

  const startContent = (
    <React.Fragment>
      <Button label="New Design" icon="pi pi-plus" className="mr-2" />
      <SplitButton
        label="File Operations"
        icon="pi pi-folder"
        model={fileActions}
        className="p-button-success mr-2"
      />
      <Button
        label="Validate Simulation"
        icon="pi pi-check"
        className="p-button-warning mr-2"
      />
      <Divider layout="vertical" />
    </React.Fragment>
  );

  const middleContent = (
    <React.Fragment>
      <SplitButton
        label="Design Operations"
        icon="pi pi-pencil"
        model={designActions}
        className="p-button-info mr-2"
      />
      <Divider layout="vertical" />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Button
        label="Measure"
        icon="pi pi-ruler"
        className="p-button-secondary mr-2"
      />
      <Button
        label="Clear Points"
        icon="pi pi-times"
        className="p-button-danger mr-2"
      />
      <SplitButton
        label="View Operations"
        icon="pi pi-eye"
        model={viewActions}
        className="p-button-help"
      />
    </React.Fragment>
  );

  return (
    <div className="card">
      <Toolbar start={startContent} center={middleContent} end={endContent} />
    </div>
  );
}
