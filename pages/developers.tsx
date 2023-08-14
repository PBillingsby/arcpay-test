'use_client'
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Developers() {

  return (
    <div className="devs w-full">
      <Navbar />
      <div className='dev-one md:min-h-[90vh] w-full text-[#2F1931] text-center pt-12 sm:pb-4'>
        <img src="/devs/character-dev.svg" className="mx-auto pb-[24px]" />
        <p className="font-inter tracking-[.125em] leading-10 font-bold">ARCPAY for DEVELOPERS</p>
        <p className="text-5xl md:text-7xl md:max-w-[660px] mx-auto px-2 pt-12 pb-3 font-rooney font-extrabold">The first safe Validium</p>
        <p className="py-4 text-xl md:text-3xl font-extrabold font-rooney">You own your money, always.</p>
        <p className="py-8 first-letter font-light tracking-wide md:max-w-[400px] mx-auto">Trustlessly withdraw your funds to Ethereum within one month, with our optimistic escape hatch</p>
        <a href="#" className="pb-2">
          <button className="inline-flex w-44 text-white justify-center gap-x-1.5 rounded-md bg-[#7B3ACE] hover:bg-white hover:text-[#7B3ACE] hover:border hover:border-gray-400 px-3 py-2 mb-4 text-sm font-semibold shadow-sm">Learn more</button>
        </a>
      </div>
      <div className="relative mx-auto text-left bg-white w-full md:min-h-[90vh] pt-12 md:pb-[8rem] overflow-hidden text-lg text-black">
        <div className="md:flex flex-col lg:flex-row gap-6 max-w-[70%] mx-auto">
          <div className="w-full h-full order-0 lg:order-1 mx-auto flex justify-center items-center lg:ml-[150px]">
            <img src="/devs/dev-component.svg" />
          </div>
          <div className="w-full h-full">
            <p className="text-[#7B3ACE] text-4xl md:text-7xl md:max-w-[840px] mx-auto md:pt-10 md:pb-12 font-rooney font-extrabold">
              The safety of a rollup, with the scalability of a validium
            </p>
            <p className="text-sm md:text-lg pb-12 first-letter font-light tracking-wide">Like all validia, ArcPay transactions are completely off-chain, and cost zero gas. However, funds can always be recovered on-chain.</p>
            <p className="text-md text-center md:text-left md:text-lg md:py-0 pb-12 font-bold">ArcPay&apos;s main innovation: a new escape hatch.</p>
            <p className="text-sm md:text-lg pb-8 first-letter font-light tracking-wide">If the escape hatch is activated, you will prove ownership of your funds on-chain.</p>
            <p className="text-sm md:text-lg first-letter font-light tracking-wide">Once everyone has had a chance to claim their funds, the claims will be weighed against each other and funds will be distributed.</p>
          </div>
        </div>
      </div>
      <div className="dev-two w-full bg-white text-center">
        <div className="pt-[8rem]">
          <p className="text-3xl md:text-5xl mx-auto md:pt-6 pt-12 font-rooney font-extrabold">ArcPay&apos;s service is Guaranteed by</p>
          <p className="text-3xl md:text-5xl mx-auto md:pt-6 pb-12 text-[#2F1931] font-rooney font-extrabold">
            <text x="10" y="30" className="font-rooney mt-2" fill="black">Ξ</text>
            48.0387 in staked funds <span className="font-thin">(and counting)</span>
          </p>
          <svg className="mx-auto w-full md:w-auto my-12" width="702" height="2" viewBox="0 0 702 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M800.532 0.999023L0.532231 0.999023" stroke="#CBA3FF" stroke-linecap="round" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:w-[1000px] mx-auto py-4 md:gap-4">
          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center">
            <img src="./devs/icon-1.svg" className="mx-auto" />
            <p className="md:text-4xl text-2xl text-[#7B3ACE] font-bold p-6">Censorship Resistance</p>
            <p className="text-[#7B3ACE] font-bold">With low gas onchain forcing.</p>
            <p className="md:text-lg text-center font-light md:py-6">If ArcPay doesn&apos;t execute your transaction you can put it in an on-chain queue where it must be included in the next block.</p>
            <p className="md:text-lg text-center font-light py-2">ArcPay gets no fees for forced transactions, so we will always try to execute your transactions off-chain.</p>
          </div>

          <div className="px-[4rem] md:visible hidden md:flex pt-[6rem]">
            <svg width="2" height="415" viewBox="0 0 2 415" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.972656 0.77948V833.958" stroke="#CBA3FF" stroke-linecap="round" />
            </svg>
          </div>

          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center">
            <img src="./devs/icon-2.svg" className="mx-auto" />
            <p className="md:text-4xl text-2xl text-[#7B3ACE] font-bold p-6">Instant Transactions</p>
            <p className="text-[#7B3ACE] font-bold">With signed promises.</p>
            <p className="md:text-lg text-center font-light md:py-6">When you hit the send button, we will reply milliseconds later promising that your money will be sent.</p>
            <p className="md:text-lg text-center font-light">If you find that a promise was broken, you will earn most of our staked funds as a reward.</p>
          </div>

          <div className="px-6 md:visible hidden md:flex pt-[6rem]">
            <svg width="2" height="415" viewBox="0 0 2 415" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.972656 0.77948V833.958" stroke="#CBA3FF" stroke-linecap="round" />
            </svg>
          </div>

          <div className="py-12 md:py-0 mt-4 md:w-[280px] flex flex-col items-center">
            <img src="./devs/icon-3.svg" className="mx-auto" />
            <p className="md:text-4xl text-2xl text-[#7B3ACE] font-bold p-6">Unbounded Scaling</p>
            <p className="text-[#7B3ACE] font-bold">With Nova ZKPs and fully offchain data.</p>
            <p className="md:text-lg text-center font-light md:py-6">ArcPay transactions cost next-to-nothing, and can scale infinitely.</p>
          </div>
        </div>

        <div className="h-auto text-center text-4xl mt-12 p-12 bg-[#d0d0d0] font-rooney">
          <p>
            Some kind of merchant-relevant call to action?
          </p>
          <p>
            A contact for sales questions?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}