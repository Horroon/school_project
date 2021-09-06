import { useEffect } from "react";
import { Header, Footer } from "../components/index";
import { AuthenticationService } from "../services/index";

const MainScreen = () => {
  const { isLoggedIn, setLoggedIn } = AuthenticationService(true);
  useEffect(() => {
    setLoggedIn(true);
  }, []);
  console.log("isLoggedIn", isLoggedIn);
  return (
    <div>
      <Header />
      <div className="content-container">main body</div>
      <Footer />
    </div>
  );
};

export default MainScreen;
