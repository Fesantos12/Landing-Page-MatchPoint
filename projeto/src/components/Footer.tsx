export const Footer = () => {
  return (
    <>
      <div className=" bg-red-700 w-full h-16 border-t-2 border-slate-200 flex items-center justify-around">
        <a
          href="https://www.instagram.com/fe_santos95/"
          target="_blank"
          className="text-base font-medium cursor-pointer transition-colors hover:text-zinc-400"
        >
          ©Fellipe Santos
        </a>
        <a
          href="https://www.instagram.com/matchpointprojeto/"
          target="_blank"
          className="text-base font-medium cursor-pointer transition-colors hover:text-zinc-400"
        >
          @matchpointprojeto
        </a>
      </div>
    </>
  );
};
