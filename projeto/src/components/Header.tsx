import LogoMatch from '../assets/LogoMatchTransparent2_resized.png';
import { UserRound, Search } from 'lucide-react';

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-red-700 flex items-center justify-around">
        <img
          className="size-20"
          src={LogoMatch}
          alt="Logo do Projeto Social MatchPoint Volei Raiz"
        />
        <div className="flex items-center gap-9">
          <a
            href="#"
            className="text-base font-medium text-slate-200 cursor-pointer transition-colors hover:text-slate-400 flex items-center gap-1"
          >
            <Search className="size-4" />
            Sobre
          </a>
          <a
            href="#"
            className="text-base font-medium text-slate-200 cursor-pointer transition-colors hover:text-slate-400 flex items-center gap-1"
          >
            <UserRound className="size-4" />
            Contato
          </a>
        </div>
      </header>
    </>
  );
};
