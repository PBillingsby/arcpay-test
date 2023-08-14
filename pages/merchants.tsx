import { FunctionComponent } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ForMerchants: FunctionComponent = () => {
  return (
    <div className="merchants w-full">
      <Navbar />
      <div className='merchant-one md:min-h-[90vh] w-full text-[#2F1931] text-center'>
        <img src="/merchants/character.svg" className="mx-auto pb-[20px]" />
        <p className="font-inter tracking-[.125em] leading-10 font-bold">ARCPAY for MERCHANTS</p>
        <p className="md:text-7xl text-4xl md:max-w-[860px] mx-auto font-rooney pt-12 pb-12 font-extrabold">The easiest way to accept crypto payments</p>
        <p className="text-lg md:text-3xl font-rooney font-extrabold">With a tiny 0.1% flat fee, capped at 20c.</p>
        <p className="text-lg md:text-3xl font-rooney font-extrabold">Take payments in ETH, USDT & USDC.</p>
        <div className="flex justify-center space-x-4 pt-12">
          <a href="#appstorelink">
            <img src="/app-store.svg" className="" />
          </a>
          <a href="#googlestorelink">
            <img src="/google-play.svg" className="" />
          </a>
        </div>
      </div>
      <div className="comp-2 w-full py-12 bg-white text-center">
        <p className="text-[#7B3ACE] text-4xl md:text-7xl mx-auto md:pt-10 md:pb-12 font-rooney">Pain-free payments</p>
        <div className="flex flex-col md:flex-row justify-center md:w-[1000px] mx-auto py-4 md:gap-4">
          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center md:h-[min-content]">
            <img src="./merchants/icon-1.svg" className="mx-auto" />
            <p className="text-[#7B3ACE] w-[280px] text-2xl md:text-4xl font-bold p-6">Easy-peasy to setup</p>
            <p className="text-lg w-[280px] mx-auto text-center font-light">Download the mobile app and you&apos;re ready to go.</p>
          </div>
          <div className="px-[4rem] md:visible hidden md:flex pt-[8rem]">
            <svg width="2" height="245" viewBox="0 0 2 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.972656 0.77948V833.958" stroke="#CBA3FF" stroke-linecap="round" />
            </svg>
          </div>
          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center md:h-[min-content]">
            <img src="./merchants/icon-2.svg" className="mx-auto" />
            <p className="text-[#7B3ACE] text-2xl md:text-4xl font-bold p-6">Instant Transactions</p>
            <p className="text-lg max-w-[280px] mx-auto text-center font-light">Payments happen in milliseconds, just the same as when you accept payments from credit or debit cards.</p>
          </div>
          <div className="px-[4rem] md:visible hidden md:flex pt-[8rem]">
            <svg width="2" height="245" viewBox="0 0 2 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.972656 0.77948V833.958" stroke="#CBA3FF" stroke-linecap="round" />
            </svg>
          </div>
          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center md:h-[min-content]">
            <img src="./merchants/icon-3.svg" className="mx-auto" />
            <p className="text-[#7B3ACE] text-2xl md:text-4xl font-bold p-6">No disputes or chargebacks</p>
            <p className="text-lg max-w-[280px] mx-auto text-center font-light">ArcPay transactions offer full and final settlement. When the crypto hits your account, that&apos;s it, you&apos;re done.</p>
          </div>
        </div>
      </div>

      <div className="merchant-three pb-12 bg-white w-full h-auto overflow-hidden text-center text-lg text-black">
        <svg className="mx-auto w-full md:w-auto my-12" width="752" height="2" viewBox="0 0 702 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M800.532 0.999023L0.532231 0.999023" stroke="#CBA3FF" stroke-linecap="round" />
        </svg>
        <p className="font-rooney text-4xl md:text-7xl max-w-[840px] mx-auto pt-6 mb-16">Create a smooth experience</p>
        <div className="flex flex-col md:flex-row justify-center sm:p-12 p-4 mt-12 mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-5xl pt-6 md:pt-0 md:max-w-[50%] font-extrabold text-center md:text-left font-rooney">
              Taking payments is easy.
            </p>
            <ul className="list-decimal list-inside max-w-[300px] md:mx-0 mx-auto text-left pt-8 font-light">
              <li className="py-2 first-letter font-light tracking-wide">Tap in the payment method.</li>
              <li className="py-2 first-letter font-light tracking-wide">Show the customer a QR code they can scan with their phone.</li>
              <li className="py-2 first-letter font-light tracking-wide">The customer sees the final amount and confirms the payment.</li>
              <li className="py-2 first-letter font-light tracking-wide">The payment is complete by the time you&apos;ve said your thank yous.</li>
            </ul>
            <p className="font-light md:text-left pt-12 text-center">That&apos;s it!</p>
          </div>
          <div className="order-1 md:order-2">
            <img src="./merchants/merchant-img.png" className="mx-auto" />
          </div>
        </div>
        <svg className="mx-auto w-full md:w-auto my-12" width="752" height="2" viewBox="0 0 702 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M800.532 0.999023L0.532231 0.999023" stroke="#CBA3FF" stroke-linecap="round" />
        </svg>
        <div className="flex justify-center mx-auto bg-white py-[100px]">
          <div className="md:max-w-full flex flex-col md:flex-row md:items-center">
            <p className="text-[#7B3ACE] text-3xl md:text-2xl text-center font-bold font-rooney">Start accepting crypto payments today</p>
            <div className="flex mx-auto gap-4 md:ml-12">
              <a href="#appstore-link">
                <img
                  className=""
                  alt=""
                  src="./app-store.svg"
                />
              </a>
              <a href="#googlestorelink">
                <img
                  className=""
                  alt=""
                  src="./google-play.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto text-center text-4xl p-12 font-rooney text-[#7B3ACE]">
        <p>
          Some kind of merchant-relevant call to action?
        </p>
        <p>
          A contact for sales questions?
        </p>
      </div>
      <Footer />

    </div >
  );
};

export default ForMerchants;
