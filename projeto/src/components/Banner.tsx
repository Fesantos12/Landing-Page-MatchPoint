import LogoBanner from '../assets/LogoMatchTransparent2_resizedbanner.png';
import { ChevronRightCircle } from 'lucide-react';

export const Banner = () => {
  return (
    <>
      <div className="w-screen h-[calc(100vh - 80px)] flex items-center">
        <div className="w-full justify-center items-center">
          <img
            src={LogoBanner}
            alt="Logo do MatchPoint grande como Banner"
            className="size-[600px]"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-6">
          <div className="flex flex-wrap text-6xl">
            Um projeto pra trazer o esporte para a vida de todos!
          </div>
          <a
            href="https://www.instagram.com/matchpointprojeto/"
            target="_blank"
            className="w-52 h-16 bg-red-700 rounded-xl flex items-center justify-center gap-3 text-2xl cursor-pointer transition-colors hover:bg-red-900"
          >
            <ChevronRightCircle />
            Saiba mais
          </a>
        </div>
      </div>
    </>
  );
};
