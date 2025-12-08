import { useState } from 'react'

import './App.css'
import Home from './Home'
import Trusted from './Trusted'
import Masterclass from './Masterclass'
import Workshop from './Workshop'
import Mentor from './Mentor'
import TestimonialSection from './Testimonials'
import PromiseSection from './PromiseSec'
import FAQSection from './Faq'
import FinalCTASection from './Final'

function App() {
  return (
  <>
   <Home/>
   <Trusted/>
   <Masterclass/>
   <Workshop/>
   <Mentor/>
   <TestimonialSection/>
   {/* <PromiseSection/> */}
   <FAQSection/>
   <FinalCTASection/>
  </>
  )
}

export default App


