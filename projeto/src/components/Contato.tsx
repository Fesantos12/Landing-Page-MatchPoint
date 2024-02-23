import { UserRound } from 'lucide-react';
import AlunosProjeto from '../assets/alunosprojetogrande.jpeg';
import { Button } from './Button';

export const Contato = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-20 gap-20">
        <h2 className="text-[4rem] font-bold text-slate-200">Contato</h2>
        <div className="flex flex-col gap-8 items-center">
          <h3 className="text-5xl font-bold text-slate-200 max-md:text-center">
            Venha nos conhecer melhor!
          </h3>
          <img
            className="w-[500px] h-96"
            src={AlunosProjeto}
            alt="Foto dos alunos do projeto MatchPoint em tamanho maior"
          />
          <h3 className="text-4xl font-bold text-slate-200 max-md:text-center">
            Fale conosco e tire dúvidas no nosso instagram do Projeto
          </h3>
          <Button texto="Contato" icon={<UserRound />} />
        </div>
      </div>
    </>
  );
};
