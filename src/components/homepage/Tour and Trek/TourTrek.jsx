import React from 'react'
import Header from '../../../shared_components/Header'
import SecondBar from './SecondBar'
import DetailsItinerary from './DetailsItinerary'
import PackageIncludes from './PackageIncludes'
import PackageExcludes from './PackageExculdes'
import Associations from '../../../shared_components/Associations'
import Newsletter from '../../../shared_components/Newsletter'
import Footer from '../../../shared_components/Footer'
import FAQSection from '../FAQSection'

function TourTrek() {
  return (
    <>
    
    <Header/>
    <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6 w-full">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-700 mt-2">[RANDOM COMPANY AND PEOPLE PICTURES]</p>
      </section>
      <SecondBar/>
      <DetailsItinerary/>
      <PackageIncludes/>
      <PackageExcludes/>
      <h2 className='text-red-400 '> Essential Packing List for Your Epic Journey!</h2>
      <div className=""></div>
      <FAQSection/>
       <Associations />
            <Newsletter />
            <Footer />
   

    </>
  )
}

export default TourTrek