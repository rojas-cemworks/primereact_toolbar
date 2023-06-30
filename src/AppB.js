import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import { SplitButton } from "primereact/splitbutton";
import { Divider } from "primereact/divider";

export default function EDA_Toolbar() {
  const exportActions = [
    {
      label: "GBR file",
      icon: "pi pi-file"
    },
    {
      label: "SVG",
      icon: "pi pi-file"
    }
  ];

  const startContent = (
    <React.Fragment>
      <Button
        label="Import"
        icon="pi pi-file-import"
        style={{
          backgroundColor: "#007BFF",
          borderColor: "#007BFF",
          color: "white"
        }}
        className="custom-button mr-2"
      />
      <Button
        label="Save"
        icon="pi pi-save"
        style={{
          backgroundColor: "#4CAF50",
          borderColor: "#4CAF50",
          color: "white"
        }}
        className="custom-button mr-2"
      />
      <SplitButton
        label="Export"
        icon="pi pi-external-link"
        model={exportActions}
        className="p-button-success mr-2"
      />
      <Divider layout="vertical" />
      <Button
        label="Reset Zoom"
        icon="pi pi-refresh"
        className="custom-button custom-button mr-2"
      />
      <Button
        label="Zoom In"
        icon="pi pi-search-plus"
        className="custom-button mr-2"
      />
      <Button
        label="Zoom Out"
        icon="pi pi-search-minus"
        className="custom-button mr-2"
      />
      <Button
        label="Pan"
        icon="pi pi-hand-pointer"
        className="custom-button mr-2"
      />
      <Divider layout="vertical" />
      <Button
        label="Setup"
        icon="pi pi-cog"
        className="custom-button p-button-setup mr-2"
      />
      <Button
        label="Run"
        icon="pi pi-play"
        className="custom-button p-button-success mr-2"
      />
      <Button
        label="Stop"
        icon="pi pi-stop"
        className="custom-button p-button-danger mr-2"
      />
    </React.Fragment>
  );
  /*
  const centerContent = (
    <React.Fragment>
      <Button
        label="Reset Zoom"
        icon="pi pi-refresh"
        className="custom-button custom-button mr-2"
      />
      <Button
        label="Zoom In"
        icon="pi pi-search-plus"
        className="custom-button mr-2"
      />
      <Button
        label="Zoom Out"
        icon="pi pi-search-minus"
        className="custom-button mr-2"
      />
      <Button
        label="Pan"
        icon="pi pi-hand-pointer"
        className="custom-button mr-2"
      />
      <Divider layout="vertical" />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Button
        label="Setup"
        icon="pi pi-cog"
        className="custom-button p-button-setup mr-2"
      />
      <Button
        label="Run"
        icon="pi pi-play"
        className="custom-button p-button-success mr-2"
      />
      <Button
        label="Stop"
        icon="pi pi-stop"
        className="custom-button p-button-danger mr-2"
      />
    </React.Fragment>
  );
*/
  return (
    <div className="card">
      <Toolbar start={startContent} />
    </div>
  );
}
