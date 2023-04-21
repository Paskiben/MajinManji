import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Frases = () => {
  let contenido = [
    { titulo: "hola", texto: "hola como estas?" },
    { titulo: "chao", texto: "que te vaya bien!" },
    { titulo: "chao cabeza de pescado", texto: "pero con respeto!" },
  ];

  return (
    <Accordion>
      {contenido.map((item, index) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {index + 1 + item.titulo}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.texto}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default Frases;
