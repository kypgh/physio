import NavigationBar from "../components/NavigationBar";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
