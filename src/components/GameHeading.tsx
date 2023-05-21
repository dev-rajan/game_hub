import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Porps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Porps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as="h1" my={5} fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
