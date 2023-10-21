import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

console.log(data);
let albums = data.albums.items;

export const App = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="album-container">
        <Album albumData={data} />
    
      </div>
    </div>
  );
};
