import Logo from "./Logo";
const embassyLogo = "/embassy-logo.png";
const embassyTag = "/embassy-tag.png";

const PdfHeader = () => (
  <div className="px-24 flex justify-between items-center pt-6 pb-2">
    <img src={embassyLogo} className="h-24" alt="embassy-logo" />
    <img src={embassyTag} className="h-20" alt="embassy-tag" />
  </div>
);

export default PdfHeader;
