import FotoAlex from '../assets/alex.png';
import AlunosProjeto from '../assets/alunos projeto.png';
import AlunosBasquete from '../assets/alunos basquete.png';

export const Sobre = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-20 gap-20 border-b-2 border-slate-200">
        <h2 className="text-[4rem] font-bold text-slate-200">Sobre nós</h2>
        <div className="w-full flex gap-20">
          <div className="w-full flex flex-col flex-wrap items-center gap-5">
            <span className="text-3xl font-semibold text-slate-200 flex flex-wrap">
              Somos um projeto social criado em 2020 pelo Professor Alex Hiath
              com o intuito de trazer o esporte para a vida de todos do bairro e
              da cidade.
            </span>
            <img
              className="w-44 h-72"
              src={FotoAlex}
              alt="Foto do Idealizador do Projeto Alex Hiath"
            />
          </div>
          <div className="w-full flex gap-8">
            <div className="w-full">
              <span className="text-3xl font-semibold text-slate-200 flex flex-wrap">
                Hoje atendemos uma média de 80 alunos, entre meninos e meninas
                de diversas idades, com 3 turmas sendo elas: Feminino iniciação,
                masculino iniciação e masculino avançado (Nosso time de
                competição). Além disso contamos tambem com uma turma de
                Basquete, com uma média de 15 á 20 alunos.
              </span>
            </div>
            <div className="w-full flex flex-col gap-5">
              <img
                src={AlunosProjeto}
                alt="Foto dos alunos do Projeto MatchPoint"
              />
              <img
                src={AlunosBasquete}
                alt="Foto dos alunos de Basquete do projeto MatchPoint"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
