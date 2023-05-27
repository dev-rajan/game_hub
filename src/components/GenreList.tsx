import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        {data?.results.map((el) => (
          <ListItem key={el.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(el.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                fontWeight={el.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(el)}
              >
                {el.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
