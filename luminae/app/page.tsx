import Cover from "./organisms/Cover/Cover"
import FlashSales from "./organisms/FlashSales/FlashSales"
import Footer from "./organisms/Footer/Footer"
import Header from "./organisms/Header/Header"
import Trending from "./organisms/Trending/Trending"

const page = () => {
  return (
    <div>
      <Header />
      <Cover />
      <FlashSales />
      <Trending />
      <Footer />
    </div>
  )
}

export default page