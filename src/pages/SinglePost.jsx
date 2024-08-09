import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import PostsServices from "../services/postsServices";

const SinglePost = () => {
  const { postId } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts", postId],
    queryFn: async () => await PostsServices.getSinglePost(postId),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error.message || "Unknown error"}</div>;

  return (
    <section>
      <div className="container px-3">
        <h3 className="text-2xl">{data.id}</h3>
        <h3 className="text-2xl">{data.userId}</h3>
        <h4 className="text-2xl">{data.title}</h4>
        <p className="text-md">{data.body}</p>

        <Link to="/" className="text-md bg-red-500 px-2 py-1 text-white">
          Home
        </Link>
      </div>
    </section>
  );
};

export default SinglePost;
