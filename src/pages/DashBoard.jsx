import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SummeryCard from "../components/screens/dashboard/SummeryCard";
import Circle from "../components/shared/svg/Circle";
import Button from "../components/ui/Button";

const DashBoard = () => {
  const summeryData = [
    {
      title: "Total views",
      count: "3.456K",
      percentage: "0.43%",
      status: true,
    },
    {
      title: "Total Profit",
      count: "$45,2K ",
      percentage: "4.35%",
      status: true,
    },
    {
      title: "Total Product",
      count: "2.450 ",
      percentage: "2.59%",
      status: true,
    },
    {
      title: "Total Users",
      count: "3.456",
      percentage: "0.88%",
      status: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>BoilerPlate | Dashboard</title>
      </Helmet>

      <section>
        <div className="container_fluid">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
            {summeryData.map((item, index) => (
              <SummeryCard key={index} item={item} index={index} />
            ))}
          </div>
          <Link to={"/"}>
            <Button icon={{ Icon: Circle, float: "right" }} className={"mt-6 rounded-full shadow-2xl"}>
              Dynamic Button
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
