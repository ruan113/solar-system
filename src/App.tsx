import { useState } from "react";
import "./App.css";
import Planet from "./components/planet";
import { OnPlanetClickProps } from "./utils/types";

function App() {
  const rotationMultiplier = 3;
  const radiusMultiplier = 1;

  const [selectedPlanet, setSelectedPlanet] = useState<
    OnPlanetClickProps | undefined
  >(undefined);

  const onPlanetClicked = (props: OnPlanetClickProps) => {
    if (selectedPlanet?.planetName === props.planetName)
      return setSelectedPlanet(undefined);
    setSelectedPlanet(props);
  };

  return (
    <>
      <div className="main-container">
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/sun.png"
          planetSize={radiusMultiplier * 50}
          radiusFromCenter={0}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/mercury.png"
          planetSize={radiusMultiplier * 15}
          radiusFromCenter={radiusMultiplier * 125}
          rotationVelocity={rotationMultiplier * 4}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/venus.png"
          planetSize={radiusMultiplier * 30}
          radiusFromCenter={radiusMultiplier * 200}
          rotationVelocity={rotationMultiplier * 7}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/earth.png"
          planetSize={radiusMultiplier * 30}
          radiusFromCenter={radiusMultiplier * 300}
          rotationVelocity={rotationMultiplier * 13}
        >
          <Planet
            onClick={onPlanetClicked}
            imgPath="assets/moon.png"
            planetSize={radiusMultiplier * 7}
            radiusFromCenter={radiusMultiplier * 40}
            rotationVelocity={rotationMultiplier * 16}
          />
        </Planet>
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/mars.png"
          planetSize={radiusMultiplier * 25}
          radiusFromCenter={radiusMultiplier * 400}
          rotationVelocity={rotationMultiplier * 19}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/jupiter.png"
          planetSize={radiusMultiplier * 60}
          radiusFromCenter={radiusMultiplier * 525}
          rotationVelocity={rotationMultiplier * 22}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/saturn.png"
          planetSize={radiusMultiplier * 70}
          radiusFromCenter={radiusMultiplier * 650}
          rotationVelocity={rotationMultiplier * 25}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/uranus.png"
          planetSize={radiusMultiplier * 35}
          radiusFromCenter={radiusMultiplier * 750}
          rotationVelocity={rotationMultiplier * 28}
        />
        <Planet
          onClick={onPlanetClicked}
          imgPath="assets/neptune.png"
          planetSize={radiusMultiplier * 30}
          radiusFromCenter={radiusMultiplier * 850}
          rotationVelocity={rotationMultiplier * 31}
        />
      </div>
      {selectedPlanet && (
        <div className="selected-planet-info-container">
          <div className="selected-planet-info-img-container">
            <img src={selectedPlanet.planetImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
