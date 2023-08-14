import Dropdown from "./Dropdown";

export default function Banner() {
  return (
    <div className="w-full p-0 bg-[#2F1931] mx-auto">
      <div className="flex items-center justify-center mx-auto">
        <img src="./coffee-cup.svg" />
        <span className="flex mt-3">
          <p className="font-rooney mt-2 px-2 text-white text-xl">Order fresh coffee with ArcPay at</p>
          <img src="./devconnect.svg" className="mt-3.5" />
        </span>
        <Dropdown />
      </div>
    </div>
  );
}