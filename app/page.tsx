import Image from "next/image";
import React from "react";

const PARAGRAPHS = [
  "O Brasil perdeu no último dia 6 de setembro uma de suas maiores referências da refrigeração, o refrigerista Sérgio Fernandes. Ele partiu aos 80 anos, mas sua marca e influência devem permanecer por muitas gerações no País.",
  "Nascido em 11 de maio de 1943, Sérgio dedicou mais de 50 anos de sua vida à profissão. Seu compromisso era tão profundo que, mesmo com a idade avançada, ele trabalhou até o último dia útil de sua vida, no sábado, 2 de setembro.",
  "Sérgio foi um visionário, um pioneiro. Na década de 1980, sob a égide dos saudosos Sebastião Garcia da Embraco e Paulo Pena Neulander da antiga Hoechst Frigen fundou o Sindigel, o primeiro sindicato dos profissionais de refrigeração do Brasil, uma iniciativa que visava dar maior representatividade para a categoria junto aos fabricantes e lojistas do setor. Também foi o fundador do Conselho Nacional dos Trabalhadores Refrigeristas (CNTR) e idealizador do Dia do Refrigerista, data originalmente celebrada em 7 de junho, e não em 7 de julho como ocorre atualmente. Aliás, ele sempre batalhou para que essa confusão fosse revista pela indústria e o comércio.",
  "Foi também sob sua liderança que nasceu o extinto Jornal do Refrigerista, que mais tarde foi elevado a um novo patamar editorial por seu grande amigo Oswaldo Moreira (in memoriam), fundador da Revista do Frio.",
  "Sérgio Fernandes foi um homem de visão, sempre buscando a integração e união para valorizar o mercado de refrigeração. Ele sonhou com a criação de uma cooperativa de crédito para os refrigeristas, o Credigel. E, mesmo que nem todos os seus sonhos tenham se concretizado, sua incansável busca por melhorias para a categoria foi percebida e reconhecida por muitos.",
  "Graças à sua luta, o mercado brasileiro de refrigeração e ar condicionado deverá seguir prosperando. Obrigado, Sérgio Fernandes, por sua paixão, dedicação e por tudo que fez pela profissão, e que você descanse em paz.",
];

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl sm:text-2xl md:text-4xl  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10  md:leading-14">
            Sérgio Fernandes, uma vida dedicada à refrigeração
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col  space-x-2 pt-8">
            <Image
              src="/static/images/foto.png"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Sérgio Fernandes
            </h3>
            <div className="text-gray-500 dark:text-gray-400 self-start">
              22/09/2023
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {React.Children.toArray(
              PARAGRAPHS.map((p) => <p className="mb-4 text-lg">{p}</p>)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
