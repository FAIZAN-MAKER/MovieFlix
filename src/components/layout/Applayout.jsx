import { Outlet, useNavigation } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

const Applayout = () => {
  const navigation = useNavigation();
  // if(navigation.state === "loading") {
  // return <Loading/>
  // }
  if(true){
  return <Loading/>
  }
  return(
    <div>
      <Header/>
      <main style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
export default Applayout
