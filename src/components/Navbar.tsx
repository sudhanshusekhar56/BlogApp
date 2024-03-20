import logo from "../assets/image-removebg-preview.png";
function Navbar({
  scrollToBlogsSection,
  scrollToHeroSection,
  scrollToBottomSection,
}: {
  scrollToBlogsSection: () => void;
  scrollToHeroSection: () => void;
  scrollToBottomSection: () => void;
}) {
  const handleScrollToBlogs = () => {
    scrollToBlogsSection();
  };
  const handleScrollToHero = () => {
    scrollToHeroSection();
  };
  const handleScrollToBottom = () => {
    scrollToBottomSection();
  };

  return (
    <nav className="bg-gray-100 shadow shadow-gray-200 w-full px-8 md:px-auto sticky top-0">
      <div className="md:h-16 h-20 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-28 object-cover" />

        <div className="hidden md:block text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {/* Active Link = text-blue-500, Inactive Link = hover:text-blue-500 */}
            <li
              className="md:px-4 md:py-2 text-blue-500 cursor-pointer"
              onClick={handleScrollToHero}
            >
              <p>Home</p>
            </li>
            <li
              className="md:px-4 md:py-2 text-blue-500 cursor-pointer"
              onClick={handleScrollToBlogs}
            >
              <p>Blogs</p>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-gray-50 rounded-lg flex items-center gap-2 cursor-pointer"
            onClick={handleScrollToBottom}
          >
            <span>Follow Me</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
