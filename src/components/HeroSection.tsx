import { useState } from "react";
import AddBlog from "./AddBlog";

function HeroSection({
  scrollToBlogsSection,
}: {
  scrollToBlogsSection: () => void;
}) {
  const handleClick = () => {
    scrollToBlogsSection();
  };

  const [showAddPopup, setShowAddPopup] = useState<boolean>(false);
  return (
    <>
      {showAddPopup ? (
        <AddBlog
          handlePopupClose={() => {
            setShowAddPopup(!showAddPopup);
          }}
        />
      ) : (
        ""
      )}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 md:py-28 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to Our Blog
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Explore captivating stories, expert opinions, and valuable
              insights on various topics
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full cursor-pointer rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                onClick={handleClick}
              >
                Explore
              </a>
              <a
                className="block w-full cursor-pointer rounded px-8 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring focus:ring-blue-500 active:text-blue-500 sm:w-auto"
                onClick={() => {
                  setShowAddPopup(!showAddPopup);
                }}
              >
                Add New
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
