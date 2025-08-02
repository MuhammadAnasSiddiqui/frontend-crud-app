import { Navbar } from "../../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to My Blog
      </h1>
      <p className="text-center mt-4 text-gray-600">
        This is a simple blog application built with React and Node.js.
      </p>
    </div>
  );
};

export default Home;
