import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import PostsServices from "../services/postsServices";

const HomePage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await PostsServices.getAllPosts(),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error.message || "Unknown error"}</div>;

  return (
    <section>
      <div className="container px-4">
        <div className="grid grid-cols-4 gap-4">
          {data?.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
