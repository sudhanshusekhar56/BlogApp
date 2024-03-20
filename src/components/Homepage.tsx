import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Blog } from "../model/blog.model";
import Loader from "./Skeleton";

const Homepage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Blog[]>(
          "https://nextapi-5d5b.onrender.com/blog"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl py-8 mx-auto min-h-64">
      <p className="px-4 text-xl md:text-2xl font-semibold py-2 text-blue-600">
        Our Collection
      </p>
      {isLoading ? (
        <div className="flex items-center justify-center h-32 z-[100]">
          <Loader /> {/* Assuming Loader is your skeleton loader component */}
        </div>
      ) : (
        <>
          {blogs.map((blog, index) => (
            <div key={index}>
              <Card blog={blog} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Homepage;
