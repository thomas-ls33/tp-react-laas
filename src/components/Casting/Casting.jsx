import React from "react";
import ActorCard from "../ActorCard/ActorCard";
import "./Casting.scss";

const Casting = () => {
  return (
    <div className="casting">
      <h2>Casting</h2>
      <div className="actors">
        <ActorCard
          image="https://image.tmdb.org/t/p/w138_and_h175_face/n8XOnjgyfYvqRUDcnkAckRqSaNN.jpg"
          name="Ginnifer Goodwin"
          character="Judy Hopps (voice)"
        />
        <ActorCard
          image="https://image.tmdb.org/t/p/w138_and_h175_face/8e6mt0vGjPo6eW52gqRuXy5YnfN.jpg"
          name="Jason Bateman"
          character="Nick Wilde (voice)"
        />
        <ActorCard
          image="https://image.tmdb.org/t/p/w138_and_h175_face/iestHyn7PLuVowj5Jaa1SGPboQ4.jpg"
          name="Ke Huy Quan"
          character="Gary De'Snake (voice)"
        />
        <ActorCard
          image="https://image.tmdb.org/t/p/w138_and_h175_face/aCV6S7Tuh9iUmF9on6EwaXC3rCI.jpg"
          name="Fortune Feimster"
          character="Nibbles Maplestick (voice)"
        />
      </div>
    </div>
  );
};

export default Casting;
