
import LoginButton from '../components/LoginButton'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"
import App from './_app'
import Script from 'next/script'

function Appointments({ pageProps }) {
  const handleClick = async (e) => {
    e.preventDefault()
    const visitType = document.getElementById('visit-type').value
    const appointmentDate = Date(document.getElementById('appointment-date').value)
    fetch(`/api/appointments?name=ian_boldea&date=${appointmentDate}&visit=${visitType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <>
    <div class="py-16 bg-white">  
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src="appointments.avif" alt="image" loading="lazy" width="" height="" class="rounded"></img>
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Upcoming Appointments</h2>
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
    <div class="py-24 bg-blue-50">  
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="w-full">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Let's schedule a new appointment!</h2>
              <form class="w-full max-w-lg mt-6 flex flex-row gap-3">
                <input type="date" id="appointment-date" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" class="px-4 py-2 rounded shadow leading-tight"></input>
                <div class="inline-block relative w-64">
                  <select id="visit-type" class="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Regular Checkup</option>
                    <option>Emergency Visit</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={e => handleClick(e)}>
                  Submit
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appointments
