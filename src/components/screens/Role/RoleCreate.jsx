import React from "react";
import InputText from "../../ui/InputText";
import LongTextInput from "../../ui/LongTextInput";
import AccordionRolePermission from "./AccordionRolePermission";

const RoleCreate = ({
  setSelectedPermissions,
  name,
  description,
  setName,
  setDescription,
}) => {
  return (
    <section className="pt-16">
      <div className="details bg-primary/5 p-4 lg:p-8">
        <h3 className="text-lg font-medium">Role details</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
          <div className="relative">
            <InputText
              label="Name"
              name={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="name"
              required={true}
              className="border border-primary/50 bg-transparent"
            />
          </div>{" "}
          <div className="relative">
            <LongTextInput
              label="Description"
              name={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              id="description"
              textRow={5}
              required={true}
              className="resize-none border border-primary/50 bg-transparent"
            />
          </div>
        </div>

        {/* role permission accordions */}

        <div className="mt-5 grid grid-cols-1 gap-3 p-4 shadow md:grid-cols-7 md:gap-6 md:p-8">
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium">Permissions</h3>
            <p className="text-sm">
              Only actions bound by a route are listed below.
            </p>
            <AccordionRolePermission
              setSelectedPermissions={setSelectedPermissions}
            />
          </div>
          <div className="bg-secondary/5 p-4 md:col-span-3">
            <h3 className="text-lg font-medium">Advanced settings</h3>
            <p className="text-sm">
              Select the application&apos;s actions or the plugin&apos;s actions
              and click on the cog icon to display the bound route
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleCreate;
