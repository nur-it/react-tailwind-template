import { Helmet } from "react-helmet";
import Card from "../components/screens/profile/Card";
import Breadcrumbs from "../components/shared/breadcrumb/Breadcrumbs";

const Profile = () => {
  const user = {
    name: "Danish Heilium",
    prof: "Ui/Ux Designer",
    post: "259",
    Followers: "129",
    Following: "2",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.",
  };

  return (
    <>
      <Helmet>
        <title>NurAdmin | Profile</title>
      </Helmet>

      <div className="container_fluid">
        <div className="mx-auto max-w-242.5">
          <Breadcrumbs pageName={"Profile"} />
          <Card user={user} />
        </div>
      </div>
    </>
  );
};

export default Profile;
