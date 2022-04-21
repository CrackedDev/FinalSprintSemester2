import React from "react";
import IMAGES from "./images/index.js";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      {/* Grid layout of movie posters with Titles underneath */}
      <div class="wrapper">
        <div class="one">
          <img src={IMAGES.movie300} alt="" width="300" /> <br />
          300
        </div>
        <div class="two">
          <img src={IMAGES.avengersEndgame} alt="" width="300" />
          <br /> Avengers Endgame
        </div>
        <div class="three">
          <img src={IMAGES.avengersInfinity} alt="" width="300" />
          <br /> Avengers Infinity War
        </div>
        <div class="four">
          <img src={IMAGES.backToTheFuture} alt="" width="300" /> <br />
          Back To The Future
        </div>
        <div class="five">
          <img src={IMAGES.brooklynNineNine} alt="" width="300" /> <br />
          Brooklyn Nine Nine
        </div>

        <div class="six">
          <img src={IMAGES.doctorStrange} alt="" width="300" /> <br />
          Doctor Strange
        </div>
        <div class="seven">
          <img src={IMAGES.doctorStrangeMulti} alt="" width="300" />
          <br /> Doctor Strange: Multiverse of Madness
        </div>
        <div class="eight">
          <img src={IMAGES.deadPool} alt="" width="300" />
          <br /> Deadpool
        </div>
        <div class="nine">
          <img src={IMAGES.godzilla} alt="" width="300" />
          <br />
          Godzilla
        </div>
        <div class="ten">
          <img src={IMAGES.harryPotter} alt="" width="300" />
          <br />
          Harry Potter
        </div>
        <div class="eleven">
          <img src={IMAGES.inception} alt="" width="300" />
          <br />
          Inception
        </div>
        <div class="twelve">
          <img src={IMAGES.ironMan} alt="" width="300" />
          <br />
          Iron Man
        </div>
        <div class="thirteen">
          <img src={IMAGES.jaws} alt="" width="300" />
          <br />
          Jaws
        </div>
        <div class="fourteen">
          <img src={IMAGES.joker} alt="" width="300" />
          <br />
          Joker
        </div>
        <div class="fifteen">
          <img src={IMAGES.mandalorian} alt="" width="300" />
          <br />
          Mandalorian
        </div>
        <div class="sixteen">
          <img src={IMAGES.pulpFiction} alt="" width="300" />
          <br />
          Pulp Fiction
        </div>
        <div class="seventeen">
          <img src={IMAGES.rocky} alt="" width="300" />
          <br />
          Rocky
        </div>
        <div class="eighteen">
          <img src={IMAGES.starWarsPhantom} alt="" width="300" />
          <br />
          Star Wars: the Phantom Menace
        </div>
        <div class="nineteen">
          <img src={IMAGES.starWarsReturn} alt="" width="300" />
          <br />
          Star Wars: The Return of the Jedi
        </div>
        <div class="twenty">
          <img src={IMAGES.theBatman} alt="" width="300" />
          <br />
          The Batman
        </div>
        <div class="twentytwo">
          <img src={IMAGES.theShining} alt="" width="300" />
          <br />
          The Shining
        </div>
        <div class="twentythree">
          <img src={IMAGES.warrior} alt="" width="300" />
          <br />
          The Warrior
        </div>
      </div>
    </div>
  );
}
