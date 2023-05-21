import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
