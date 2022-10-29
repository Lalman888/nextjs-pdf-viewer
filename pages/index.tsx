import type { NextPage } from "next";
import MyDocument from "@components/MyDocument";

const Home: NextPage = () => {
  return (
    <div className="mx-auto bg-red-200">
      <MyDocument />;
    </div>
  );
};

export default Home;
