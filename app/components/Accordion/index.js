import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const AccordionWrapper = styled.div`
  display: dlex;
  flex-direction: column;
`;

const items = [
  {
    id: 1,
    title: 'Jan Brzechwa - Samochwała',
    text: `Samochwała w kącie stała
I wciąż tak opowiadała:
"Zdolna jestem niesłychanie,
Najpiękniejsze mam ubranie,
Moja buzia tryska zdrowiem,
Jak coś powiem, to już powiem,
Jak odpowiem, to roztropnie,
W szkole mam najlepsze stopnie,
Śpiewam lepiej niż w operze,
Świetnie jeżdżę na rowerze,
Znakomicie muchy łapię,
Wiem, gdzie Wisła jest na mapie,
Jestem mądra, jestem zgrabna,
Wiotka, słodka i powabna,
A w dodatku, daję słowo,
Mam rodzinę wyjątkową:
Tato mój do pieca sięga,
Moja mama - taka tęga
Moja siostra - taka mała,
A ja jestem - samochwała!"`,
  },
  {
    id: 2,
    title: 'Скороговорка 1',
    text: `W Szczebrzeszynie chrząszcz brzmi w trzcinie`,
  },
  {
    id: 3,
    title: 'Скороговорка 2',
    text: 'Czy rak trzyma w szczypcach strzęp szczawiu czy trzy części trzciny',
  },
  {
    id: 4,
    title: 'Скороговорка 3',
    text: 'Król Karol kupił królowej Karolinie korale koloru koralowego',
  },
];

function Accordion() {
  const renderAccordionItems = () =>
    items.map(v => <AccordionItem key={v.id} title={v.title} text={v.text} />);

  return <AccordionWrapper>{renderAccordionItems()}</AccordionWrapper>;
}

export default Accordion;
