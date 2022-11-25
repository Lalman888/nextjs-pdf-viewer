import Signature from "./Signature";

const PDfFooter = () => (
  <div className="px-24 flex justify-between">
    <div className="invisible"></div>
    <div className="flex flex-col justify-between items-end">
      <div className="px-4 flex justify-center items-center">
        <img
          src="/embassy-sign.png"
          alt="embassy signature"
          className="h-16 -rotate-12 "
        />
      </div>
      {/* <Signature /> */}
      <div className="flex flex-col justify-center font-serif text-center items-center">
        <p className="font-bold">(Chandra Kanta Parajuli)</p>
        <p>Third Secretary</p>
      </div>
    </div>
  </div>
);

export default PDfFooter;
