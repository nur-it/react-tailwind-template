import { useState } from "react";
import { FiEdit, FiMail, FiPhone, FiUser } from "react-icons/fi";
import InputTextWithIcon from "../../common/InputTextWithIcon";
import LongTextInputWithIcon from "../../common/LongTextInputWithIcon";

const PersonalInfo = () => {
  // State variable to store form data as an object
  const [formData, setFormData] = useState({
    fullName: "Devid Jhon",
    phoneNumber: "+990 3343 7865",
    emailAddress: "devidjond45@gmail.com",
    username: "devidjhon24",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    // Here you can submit the form data or perform any other actions
    e.preventDefault();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-md">
      <div className="border-b border-stroke px-7 py-4">
        <h3 className="font-medium text-black">Personal Information</h3>
      </div>

      <div className="p-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <InputTextWithIcon
                id={"fullName"}
                name={"fullName"}
                icon={<FiUser />}
                label={"Full Name"}
                onChange={handleChange}
                value={formData.fullName}
                placeholder={"Devid Jhon"}
              />
            </div>

            <div className="w-full md:w-1/2">
              <InputTextWithIcon
                icon={<FiPhone />}
                id={"phoneNumber"}
                name={"phoneNumber"}
                label={"Phone Number"}
                handleChange={handleChange}
                value={formData.phoneNumber}
                placeholder={"+990 3343 7865"}
              />
            </div>
          </div>

          <div className="mb-5">
            <InputTextWithIcon
              id={"emailAddress"}
              name={"emailAddress"}
              icon={<FiMail />}
              label={"Email Address"}
              onChange={handleChange}
              value={formData.emailAddress}
              placeholder={"devidjond45@gmail.com"}
            />
          </div>

          <div className="mb-5">
            <InputTextWithIcon
              id={"username"}
              name={"username"}
              icon={<FiUser />}
              label={"Username"}
              onChange={handleChange}
              value={formData.username}
              placeholder={"devidjhon24"}
            />
          </div>

          <div className="mb-5">
            <LongTextInputWithIcon
              id={"bio"}
              label={"BIO"}
              name={"bio"}
              textRow={"6"}
              icon={<FiEdit />}
              value={formData.bio}
              handleChange={handleChange}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1"
              type="button"
            >
              Cancel
            </button>

            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray-100 hover:bg-opacity-90"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
