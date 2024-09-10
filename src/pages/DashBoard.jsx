import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DashBoard = () => {
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
            <Link
              to="/components/alert"
              className="border-stroke group inline-flex min-h-44 flex-col items-center justify-center rounded-sm border bg-white px-7 py-6 text-center shadow-md"
            >
              <h3 className="mb-6 text-2xl font-semibold decoration-primary underline-offset-2 group-hover:underline">
                Alert
              </h3>
              <p className="text-sm text-gray-400">
                This will render a large success alert with an icon and a close
                button.
              </p>
            </Link>
            <Link
              to="/components/badge"
              className="border-stroke group inline-flex min-h-44 flex-col items-center justify-center rounded-sm border bg-white px-7 py-6 text-center shadow-md"
            >
              <h3 className="mb-6 text-2xl font-semibold decoration-primary underline-offset-2 group-hover:underline">
                Badge
              </h3>
              <p className="text-sm text-gray-400">
                This will render a large success alert with an icon and a close
                button.
              </p>
            </Link>
          </div>

          {/* ========================================= 
          testing ui render started
          ========================================= */}
          {/*    <div className="mt-6">
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
            siblingCount={2} 
          /> */}
        </div>
      </section>
    </>
  );
};

export default DashBoard;
