import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { componentLists } from "../data/components.data";

// Reusable Card component

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Boilerplate | Dashboard</title>
      </Helmet>

      <section className="container-fluid p-4 lg:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
          {componentLists.map((component, index) => (
            <Card key={index} {...component} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

/**
 * Card is a reusable component to display a title, description, and link.
 * It uses the Link component from react-router-dom to navigate to the given link.
 *
 * @param {object} props The props object.
 * @param {string} props.title The title of the card.
 * @param {string} props.description The description of the card.
 * @param {string} props.link The link to navigate to when the card is clicked.
 */
const Card = ({ title, description, link }) => (
  <Link
    to={link}
    className="border-stroke group inline-flex min-h-44 flex-col items-center justify-center rounded-sm border bg-white px-7 py-6 text-center shadow-md"
  >
    <h3 className="mb-6 text-2xl font-semibold decoration-primary underline-offset-2 group-hover:underline">
      {title}
    </h3>
    <p className="text-sm text-gray-400">{description}</p>
  </Link>
);
