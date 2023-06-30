import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { SplitButton } from "primereact/splitbutton";

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
      <Fieldset legend="Design" className="custom-fieldset mr-2 gap-1">
        <Button
          label="Import"
          icon="pi pi-file-import"
          className="custom-button mr-2"
        />
        <Button label="Save" icon="pi pi-save" className="custom-button mr-2" />
        <SplitButton
          label="Export"
          icon="pi pi-external-link"
          model={exportActions}
          className="p-button-success mr-2"
        />
      </Fieldset>
      <Fieldset legend="View" className="custom-fieldset mr-2 gap-1">
        <Button
          label="Reset"
          icon="pi pi-refresh"
          className="custom-button mr-2"
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
          icon="pi pi-arrows-alt"
          className="custom-button mr-2"
        />
      </Fieldset>
      <Fieldset legend="Simulation" className="custom-fieldset mr-2">
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
      </Fieldset>
    </React.Fragment>
  );
  /*
  const centerContent = (
    <React.Fragment>
      <Fieldset legend="View">
        <Button label="Reset Zoom" icon="pi pi-refresh" className="mr-2" />
        <Button label="Zoom In" icon="pi pi-search-plus" className="mr-2" />
        <Button label="Zoom Out" icon="pi pi-search-minus" className="mr-2" />
        <Button label="Pan" icon="pi pi-hand-pointer" className="mr-2" />
      </Fieldset>
      <Fieldset legend="Simulation">
        <Button
          label="Setup"
          icon="pi pi-cog"
          className="p-button-setup mr-2"
        />
        <Button
          label="Run"
          icon="pi pi-play"
          className="p-button-success mr-2"
        />
        <Button
          label="Stop"
          icon="pi pi-stop"
          className="p-button-danger mr-2"
        />
      </Fieldset>
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Fieldset legend="Simulation">
        <Button
          label="Setup"
          icon="pi pi-cog"
          className="p-button-setup mr-2"
        />
        <Button
          label="Run"
          icon="pi pi-play"
          className="p-button-success mr-2"
        />
        <Button
          label="Stop"
          icon="pi pi-stop"
          className="p-button-danger mr-2"
        />
      </Fieldset>
    </React.Fragment>
  );
*/
  return (
    <div className="card">
      <Toolbar start={startContent} />
    </div>
  );
}
