import Cover from "./organisms/Cover/Cover"
import FlashSales from "./organisms/FlashSales/FlashSales"
import Footer from "./organisms/Footer/Footer"
import Header from "./organisms/Header/Header"

const page = () => {
  return (
    <div>
      <Header />
      <Cover />
      <FlashSales />
      <Footer />
    </div>
  )
}

export default page