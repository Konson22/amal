import AnimateComponent from "../../components/AnimateComponent"
import BlogSection from "./BlogSection"
import Header from "./Header"
import MoneyUtilization from "./MoneyUtilization"
import OurTeamSection from "./OurTeamSection"


export default function Main() {
  return (
    <AnimateComponent>
      <Header />
      <BlogSection />
      <OurTeamSection />
      <MoneyUtilization />
    </AnimateComponent>
  )
}
