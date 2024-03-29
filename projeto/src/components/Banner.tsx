import LogoBanner from '../assets/LogoMatchTransparent2_resizedbanner.png';
import { ChevronRightCircle } from 'lucide-react';
import { Button } from './Button';

export const Banner = () => {
  return (
    <>
      <div className="w-full h-banner flex items-center border-b-2 border-slate-200 p-8 max-[425px]:flex-col ">
        <div className="w-full justify-center items-center">
          <img
            src={LogoBanner}
            alt="Logo do MatchPoint grande como Banner"
            className="size-[600px]"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-6 max-[425px]:items-center">
          <div className="flex flex-wrap text-6xl text-slate-200 max-[425px]:text-5xl">
            Um projeto pra trazer o esporte para a vida de todos!
          </div>
          <Button icon={<ChevronRightCircle />} texto="Saiba mais" />
        </div>
      </div>
    </>
  );
};
