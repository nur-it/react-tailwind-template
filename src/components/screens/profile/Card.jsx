import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
// internal imports
import coverPhoto from "../../../assets/images/cover-01.png";
import userPhoto from "../../../assets/images/user-06.png";

const Card = ({ user }) => {
  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default">
      <div className="relative z-20 h-36 md:h-64">
        <img
          src={coverPhoto}
          alt="profile cover"
          className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
        />
        <div className="absolute bottom-3 right-3 z-10 md:bottom-4 md:right-4">
          <label
            htmlFor="cover"
            className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 md:px-4"
          >
            <input type="file" name="cover" id="cover" className="sr-only" />
            <span>
              <IoCameraOutline className="text-[1rem] md:text-[1.5rem]" />
            </span>
            <span className="text-[.8rem] md:text-lg">Edit</span>
          </label>
        </div>
      </div>
      <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
        <div className="relative z-30 mx-auto -mt-22 h-32 w-full max-w-32 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
          <div className="relative drop-shadow-2">
            <img src={userPhoto} alt="profile" />
            <label
              htmlFor="profile"
              className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
            >
              <IoCameraOutline />
              <input
                type="file"
                name="profile"
                id="profile"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-medium text-black">{user.name}</h3>
          <p className="font-medium">{user.prof}</p>
          <div className="mx-auto mb-5 mt-4 grid max-w-[23.5rem] grid-cols-3 rounded-md border border-stroke py-2 shadow-1">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 md:flex-row">
              <span className="font-semibold text-black ">{user.post}</span>
              <span className="text-sm text-secondary">Posts</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 md:flex-row">
              <span className="font-semibold text-black ">
                {user.Followers}K
              </span>
              <span className="text-sm text-secondary">Followers</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 md:flex-row">
              <span className="font-semibold text-black">
                {user.Following}K
              </span>
              <span className="text-sm text-secondary">Following</span>
            </div>
          </div>

          <div className="mx-auto max-w-[45rem]">
            <h4 className="font-medium text-black">About Me</h4>
            <p className="mt-4 text-sm font-normal text-secondary">
              {user.about}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="mb-3 font-medium text-black">Follow me on</h4>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                target="_black"
                className="hover:text-primary text-secondary"
                name="social-icon"
                aria-label="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_black"
                className="hover:text-primary text-secondary"
                name="social-icon"
                aria-label="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_black"
                className="hover:text-primary text-secondary"
                name="social-icon"
                aria-label="social-icon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                target="_black"
                className="hover:text-primary text-secondary"
                name="social-icon"
                aria-label="social-icon"
              >
                <FaDribbble />
              </a>
              <a
                href="#"
                target="_black"
                className="hover:text-primary text-secondary"
                name="social-icon"
                aria-label="social-icon"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
