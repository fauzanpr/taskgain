import Star from "@assets/product/integrated/star-01.svg";
import DownloadIcon from "@assets/product/integrated/downloadIcon.svg";

interface IProps {
  title: string;
  rate: string;
  install: string;
  description: string;
  image: string;
};

function IntegratedCard({ title, description, image, install, rate }: IProps) {
  return (
    <div className="flex items-start gap-4 h-64 w-[450px] mx-4 p-6 bg-[#1B1B1B] border border-[#383838] rounded-xl">
      <img src={image} alt="Logo Slack" />
      <div className="text-gray-400 flex flex-col gap-4">
        <p className="text-white text-lg font-semibold">{ title }</p>
        <div className="flex gap-2">
          <img src={Star.src} alt="Bintang warna kuning" />
          <p>{ rate } rate</p>
          <img src={DownloadIcon.src} alt="Icon download" />
          <p>{ install } installs</p>
        </div>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default IntegratedCard
