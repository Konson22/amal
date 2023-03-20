import Header from './Header'
// import Sponsorship from './Sponsorship'
import WhatWeFocusOn from './WhatWeFocusOn'
// import { FiHome } from 'react-icons/fi'

export default function Home() {
  return (
    <div>
      <Header />
      {/*  */}
      <div className="lg:w-[70%] mx-auto my-0 py-[3rem] px-3">
        <h2 className="lg:text-4xl text-2xl font-bold lg:text-center mb-3">You can help end poverty for good by sponsoring a child</h2>
        <p className="text-xl lg:text-center">
          Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
        </p>
      </div>
      {/* <Sponsorship /> */}
      <WhatWeFocusOn />
    </div>
  )
}



