import Choose from "./components/choose";
import Collection from "./components/collection";
import Footer from "./components/footer";
import Header from "./components/header";
import Store from "./components/store";


export default function Home() {
  return (
    <div>
      <Header/>
      <Collection/>
      <Choose/>
      <Store/>
      <Footer/>
    </div>
  );
}
