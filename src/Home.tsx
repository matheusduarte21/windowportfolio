import { ContentMain } from "./components/contentMain/ContentMain";
import { Footer } from "./components/footer/footer";
import { NavBarHours } from "./components/navBarHours/navBarHours";

const Home =() => {
  return (
    <div>
      <NavBarHours/>
      <ContentMain/>
      <Footer />
    </div>
  );
}

export default Home;
