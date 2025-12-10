import React from "react";
import Navbar from "../Navbar/Navbar";
import FocusBanner from "../FocusBanner/FocusBanner";
import Casting from "../Casting/Casting";
import Footer from "../Footer/Footer";

const FocusPage = () => {
  return (
    <div>
      <Navbar />
      <FocusBanner
        backgroundImage="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/5h2EsPKNDdB3MAtOk9MB9Ycg9Rz.jpg"
        posterImage="https://image.tmdb.org/t/p/w500/qq6MfHFDvBEzHhkE0Q5ozbkbde4.jpg"
        score={77}
        title="Zootopia 2"
        year="2025"
        date="26/11/2025"
        genre="Animation, Aventure"
        duration="1h 30m"
        synopsis="Judy Hopps et Nick Wilde, après avoir résolu la plus grande affaire criminelle de l'histoire de Zootopie, découvrent que leur collaboration n'est pas aussi solide qu'ils le pensaient lorsque le chef Bogo leur ordonne de participer à un programme de thérapie réservé aux coéquipiers en crise. Leur partenariat sera même soumis à rude épreuve lorsqu'ils devront éclaircir - sous couverture et dans des quartiers inconnus de la ville - un nouveau mystère et s'engager sur la piste sinueuse d'un serpent venimeux fraîchement arrivé dans la cité animale..."
      />
      <Casting />
      <Footer />
    </div>
  );
};

export default FocusPage;
