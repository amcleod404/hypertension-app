import LoginButton from '../components/LoginButton'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"
import App from './_app'
import { Component } from 'react'
import Image from "next"

function IndexPage({ pageProps }) {
  return (
    <>
        <div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""></img>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Hypertension Assistant</h2>
          <p class="mt-6 text-gray-600">Hypertension is an official medical term to denote a condition where a patient has high blood pressure. This app aims to assist those with hypertension by providing ways to manage the disease. This includes ensuring that doctor and lab appointments are scheduled and kept, exercise tracking, diet tracking, and staying informed about the disease. </p>
          <p class="mt-4 mb-4 text-gray-600"> To learn more about the disease, please visit the following links:</p>
          <ul class="ml-4 list-disc">
            <li>
              <a href="https://www.cdc.gov/bloodpressure/about.htm#:~:text=High%20blood%20pressure%2C%20also%20called,blood%20pressure%20(or%20hypertension)." class="no-underline hover:underline">CDC</a>
            </li>
            <li>
              <a href="https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410" class="no-underline hover:underline">Mayo Clinic</a>
            </li>
            <li>
              <a href="https://www.heart.org/en/health-topics/high-blood-pressure" class="no-underline hover:underline">Heart.org</a>
            </li>

          </ul>
        </div>
      </div>
  </div>
</div>

<div class="py-16 bg-blue-50">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        
        <div class="md:8/12 lg:w-7/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">We're here to help</h2>
          <p class="mt-6 text-gray-600">Living with hypertension can be difficult. To get started with the hypertension assistant, you can begin by logging your appointments, tracking your diet, or recording your exercise. </p>
          <div class="inline-block mt-6">
          <button class=" mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Appointments
</button>
<button class=" mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Diet
</button>
<button class=" mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Training
</button>
          </div>
          
        </div>
        <div class="md:4/12 lg:w-4/12">
          <img src="logo-color.svg" alt="image" loading="lazy" width="" height=""></img>
        </div>
      </div>
  </div>
</div>
    </>
  )
}

export default IndexPage
