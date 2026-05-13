import Cover from "./organisms/Cover/Cover"
import Explore from "./organisms/Explore/Explore"
import FlashSales from "./organisms/FlashSales/FlashSales"
import Footer from "./organisms/Footer/Footer"
import Header from "./organisms/Header/Header"
import Top100 from "./organisms/Top100/Top100"
import Trending from "./organisms/Trending/Trending"

const page = () => {
  return (
    <div>
      <Header />
      <Cover />
      <FlashSales />
      <Trending />
      <Top100 />
      <Explore />
      <Footer />
    </div>
  )
}

export default page