import React from "react";
import IMAGES from "./images/index.js";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        <strong>
          Come on in to our Topsail Road location for the finest selection in
          recent releases, as well as a large selection of classic flims! We are
          located at 655 Topsail Road, in the Waterford Valley Plaza close to
          Jungle Jims!
        </strong>
      </p>
      <br />
      <br />
      {/* Map pulled from Google Maps with store picture beside it in grid layout */}
      <div class="homepage">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="471"
              height="490"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=655%20topsail%20road%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div>
          <img src={IMAGES.store2} alt="" width="600" />
        </div>
      </div>
    </div>
  );
}
