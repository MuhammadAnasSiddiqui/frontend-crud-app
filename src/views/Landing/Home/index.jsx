import { useMutation } from "@tanstack/react-query";
import { Navbar } from "../../../components";
import { useEffect, useState } from "react";
import api from "../../../config/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { mutate: fetchAllPosts, isPending: fetchingAllPosts } = useMutation({
    mutationFn: () => api.getAllPosts(),
    onSuccess: ({ data }) => {
      setPosts(data?.data);
      console.log("🚀 ~ Home ~ data:", data);
    },
    onError: (error) => {
      console.log("🚀 ~ Home ~ error:", error);
    },
  });

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to My Blog
      </h1>
      <p className="text-center mt-4 text-gray-600">
        This is a simple blog application built with React and Node.js.
      </p>
      {fetchingAllPosts ? (
        // Skeleton Loader
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden animate-pulse flex flex-col"
              >
                {/* Image skeleton */}
                <div className="h-48 w-full bg-gray-200"></div>

                {/* Content skeleton */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>

                  {/* Button skeleton */}
                  <div className="mt-auto pt-4">
                    <div className="h-9 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Posts Grid
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col  border border-gray-200"
              >
                {/* Image */}
                <div className="h-96 w-full overflow-hidden">
                  <img
                    src={post?.image || "https://placehold.co/600x400"}
                    alt={post?.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {post?.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {post?.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-4">
                    <button
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm"
                      onClick={() => console.log("Open post", post._id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data display */}
    </div>
  );
};

export default Home;
