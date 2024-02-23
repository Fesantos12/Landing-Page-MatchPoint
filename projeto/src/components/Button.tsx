import { ReactNode } from 'react';

interface buttonProps {
  texto: string;
  icon: ReactNode;
}

export const Button = ({ texto, icon }: buttonProps) => {
  return (
    <>
      <a
        href="https://www.instagram.com/matchpointprojeto/"
        target="_blank"
        className="w-52 h-16 bg-red-700 rounded-xl flex items-center justify-center gap-3 text-2xl cursor-pointer transition-colors hover:bg-red-900"
      >
        {icon}
        {texto}
      </a>
    </>
  );
};
