import { useGetAllMoviesQuery } from "@/redux/api/baseApi";

const AllMovies = () => {
  const { data, isLoading } = useGetAllMoviesQuery({});
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data.data);
  return (
    <div>
      <p>all movies list in data</p>
      <div>
        {
          data?.data?.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.director}</h2>
              <p>{movie.description}</p>
              <img className="border-2 justify-center items-center mx-auto border-pink-500 p-2 w-72" src={movie.image} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AllMovies;
