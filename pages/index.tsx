import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="[background:linear-gradient(180deg,_#ffeeba,_#ffdd87)] mx-auto">
      <Navbar />
      <div className="home w-full min-h-screen overflow-scroll text-left text-[13.16px] text-grey flex">
        <div className="flex flex-col md:flex-row md:justify-between mx-auto content-center">
          <div className="home-two md:sticky relative order-2 z-10 md:bg-inherit lg:bg-inherit bg-[#ffe59f] md:mt-0 mt-[22rem] md:order-1 h-[539px] text-[66.43px] text-gray-100 font-rooney">
            <div className="md:visible hidden md:flex relative pb-6">
              <img
                alt=""
                className="z-10"
                src="./character-main.png"
              />
              <img
                alt=""
                className="absolute left-[8.5rem] bottom-[4rem]"
                src="./bolt.png"
              />
            </div>
            <div className="home-2 md:ml-8 bg-inherit md:h-[300.92px] md:w-[686.26px]">
              <p className="leading-[70.42px] pl-4 font-rooney inline-block md:w-[606.26px] md:h-[183.03px] text-[#2F1931] text-5xl md:text-7xl">The fastest way to send ETH</p>
              <div className="pl-4 md:w-[214.61px] md:h-[130.84px] text-[16.73px]">
                <div className="leading-[42.75px] text-[#2F1931]">
                  <div className="flex items-center">
                    <img
                      className="w-[44.75px] h-[35.16px]"
                      alt=""
                      src="./coinslot.svg"
                    />
                    <p className="font-bold ml-2 mt-3">20c max fee</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-[44.75px] h-[35.16px] md:max-w-full"
                      alt=""
                      src="./group-73.svg"
                    />
                    <span className="flex">
                      <p className="font-bold ml-2 md:ml-4">Instant</p>
                      <p className="font-normal">&nbsp;transactions</p>
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="w-[33.71px] h-[33.65px] md:max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="./group-75.svg"
                    />
                    <p className="font-bold ml-4">Full self-custody</p>
                  </div>
                </div>


              </div>
            </div>
            <div className="flex justify-center md:justify-normal mt-6 md:mt-[4rem] md:ml-8">
              <a href="#appstore-link">
                <img
                  alt=""
                  src="./app-store.svg"
                />
              </a>
              <a href="#googlestorelink">
                <img
                  alt=""
                  src="./google-play.svg"
                />
              </a>
            </div>
          </div>
          <div className="home-one absolute md:static order-1 p-[-24px] md:order-2 mx-auto md:mt-12 text-white px-4">
            <img src="./screenshot.svg" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
