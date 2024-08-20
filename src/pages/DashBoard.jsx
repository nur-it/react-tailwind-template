import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SummeryCard from "../components/screens/dashboard/SummeryCard";
import TestTable from "../components/screens/TestTable";
import { RightArrow } from "../components/shared/svg/RightArrow";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import DatePicker from "../components/ui/DatePicker";
import MultipleImageUpload from "../components/ui/MultipleImageUpload";
import MultiSelectOption from "../components/ui/MultiSelectOption";
import Pagination from "../components/ui/Pagination";
import RadioButton from "../components/ui/RadioButton";
import SingleImageUpload from "../components/ui/SingleImageUpload";
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

  const [date, setDate] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (option) => {
    console.log("Selected:", option);
  };

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
  };

  const handleImagesChange = (images) => {
    console.log("Uploaded images:", images);
  };

  console.log("Selected date:", date);

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

          {/* ========================================= 
          testing ui render started
          ========================================= */}
          <div className="mt-6">
            <label className="text-lg font-semibold">Choose Date</label>
            <br />
            <DatePicker
              size="large"
              variant="primary"
              placeholder="Select a date"
              date={date}
              setDate={setDate}
            />
          </div>

          <div className="mt-6">
            <h4>Alert</h4>
            <div className="inline-flex flex-col p-8">
              <Alert type="primary" size="medium" closable>
                A simple primary alert - check it out!
              </Alert>
              <Alert type="secondary" size="medium" closable>
                A simple secondary alert - check it out!
              </Alert>
              <Alert type="success" size="medium" closable>
                A simple success alert - check it out!
              </Alert>
              <Alert type="danger" size="medium" closable>
                A simple danger alert - check it out!
              </Alert>

              <Alert type="primary" size="small" closable>
                Small primary alert!
              </Alert>
              <Alert type="success" size="large" closable>
                Large success alert!
              </Alert>
            </div>
            <h4>Badge</h4>
            <div className="flex items-center justify-start space-x-3">
              <Badge color="secondary" size="small">
                Disabled
              </Badge>
              <Badge color="info" size="medium">
                Info
              </Badge>
              <Badge color="success" size="large">
                Success
              </Badge>
              <Badge color="warn" size="medium">
                Warning
              </Badge>
              <Badge color="danger" size="small">
                Error
              </Badge>
              <Badge color="primary" size="small">
                New
              </Badge>
            </div>
            <div className="mt-6">
              <h4>Breadcrumb</h4>
              <Breadcrumb
                links={[
                  { href: "#", label: "Home", title: "Back to homepage" },
                  { href: "#", label: "Parent", title: "Parent page" },
                  { href: "#", label: "Parent", title: "Parent page" },
                  {
                    href: "#",
                    label: "Current",
                    title: "Current page",
                    active: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4>Single Image Upload</h4>
            <SingleImageUpload
              id="profile-image-upload"
              className="max-w-[400px]"
              onFileUpload={handleFileUpload}
            />
            <h4 className="pt-6">Multiple Image Upload</h4>
            <MultipleImageUpload
              id="multiple-image-upload"
              className="max-w-[400px]"
              columns="three"
              onImagesChange={handleImagesChange}
            />
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
            <Checkbox size="medium" variant="default" />
            <span className="ml-2">Large Disabled Checkbox</span>
          </div>

          <div className="my-6">
            <ToggleButton
              id="toggle1"
              name="toggle1"
              status="active"
              checked={true}
              size="small"
            />
          </div>

          <TestTable />

          <div className="mt-6">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              variant="primary"
              size="large"
              siblingCount={2} // Adjust the number of pages shown around the current page
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
