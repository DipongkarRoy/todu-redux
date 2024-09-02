import { Button } from "./components/ui/button";
import AllMovies from "./movis/AllMovies";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button className="p-4 bg-pink-300 hover:bg-orange-300">click me hire</Button>
    <AllMovies/>
    </div>
  );
};

export default App;