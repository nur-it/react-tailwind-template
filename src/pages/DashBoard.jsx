import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SummeryCard from "../components/screens/dashboard/SummeryCard";
import { RightArrow } from "../components/shared/svg/RightArrow";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import MultiSelectOption from "../components/ui/MultiSelectOption";
import RadioButton from "../components/ui/RadioButton";
import SingleSelectOption from "../components/ui/SingleSelectOption";
import ToggleButton from "../components/ui/ToggleButton";

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

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (option) => {
    console.log("Selected:", option);
  };

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
            <Button
              icon={{ Icon: RightArrow, float: "right" }}
              className={"mt-6 rounded-md shadow-2xl"}
              size="small"
            >
              Dynamic Button
            </Button>
          </Link>
          <div className="mt-6 space-x-6">
            <SingleSelectOption
              id="custom-select"
              name="custom-select"
              options={options}
              onChange={handleSelectChange}
              size="medium"
              variant="primary"
            />
            <MultiSelectOption
              id="custom-select"
              name="custom-select"
              options={options}
              onChange={handleSelectChange}
              size="medium"
              variant="primary"
            />
          </div>
          <div className="mt-6 flex flex-col gap-6">
            <RadioButton
              id="radio1"
              name="example"
              value="option1"
              onChange={(e) => console.log(e.target.value)}
              variant="primary"
              size="small"
              label="Option 1"
              custom={true}
            />
            <RadioButton
              id="radio2"
              name="example"
              value="option2"
              onChange={(e) => console.log(e.target.value)}
              variant="primary"
              size="small"
              label="Option 2"
              custom={true}
            />
            <RadioButton
              id="radio3"
              name="example"
              value="option3"
              onChange={(e) => console.log(e.target.value)}
              variant="primary"
              size="small"
              label="Option 3"
              custom={true}
            />
          </div>
          <div className="mt-6 flex items-center">
            <Checkbox size="small" variant="default" />
            <span className="ml-2">Large Disabled Checkbox</span>
          </div>
          <div className="mt-6">
            <ToggleButton
              id="toggle1"
              name="toggle1"
              status="active"
              size="small"
            />
          </div>
          <div className="mt-6"></div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
