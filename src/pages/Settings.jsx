import { Helmet } from "react-helmet";
// internal imports
import AddPhoto from "../components/screens/setting/AddPhoto";
import PersonalInfo from "../components/screens/setting/PersonalInfo";
import Breadcrumbs from "../components/shared/breadcrumb/Breadcrumbs";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Settings</title>
      </Helmet>

      <div className="container_fluid">
        <div className="mx-auto max-w-242.5">
          <Breadcrumbs pageName={"Settings "} />

          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-3">
              <PersonalInfo />
            </div>

            <div className="col-span-5 xl:col-span-2">
              <AddPhoto />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
