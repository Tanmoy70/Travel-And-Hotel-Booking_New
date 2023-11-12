import Navbar from "../../Components/Navbar/Navbar";
import Backgroup from "../../Components/Home/Backgroup";
import Middle from "../../Components/Middle/Middle";
import Destinations from "../../Components/Destinations/Destinations";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Reviews from "../../Components/Reviews/Reviews";
import Questions from "../../Components/Questions/Questions";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Footer from "../../Components/Footer/Footer";
import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import PropertyList from "../../Components/propertyList/PropertyList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Backgroup />
      <Middle />
      <Destinations />
      <Featured />
      <PropertyList />
      <FeaturedProperties />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
}
