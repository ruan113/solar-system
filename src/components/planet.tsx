import { ReactElement } from "react";
import "./planet.css";
import { OnPlanetClickProps } from "../utils/types";

function Planet(props: PlanetProps) {
  const pathSplitted = props.imgPath.split("/");
  const id = pathSplitted[pathSplitted.length - 1].split(".")[0];

  return (
    <div
      className="planet-wrapper"
      id={id}
      style={
        props.rotationVelocity
          ? {
              animation: `spin ${props.rotationVelocity}s infinite`,
              animationTimingFunction: "linear",
            }
          : {}
      }
    >
      <div className="planet-container">
        <div
          className="img-container"
          onClick={() =>
            props.onClick({ planetName: id, planetImg: props.imgPath })
          }
          style={{
            right:
              props.radiusFromCenter > 0
                ? (props.planetSize + props.radiusFromCenter / 2) * -1
                : -props.planetSize,
            top: 0,
            ...(props.children
              ? { width: props.planetSize, height: props.planetSize }
              : {}),
          }}
        >
          <img
            src={props.imgPath}
            style={{
              width: props.planetSize,
              height: props.planetSize,
            }}
            alt={props.imgPath.split("/")[props.imgPath.length - 1]}
          />
          {props.children}
        </div>
        {props.radiusFromCenter > 0 && (
          <div
            className="circle"
            style={{
              width: props.radiusFromCenter,
              height: props.radiusFromCenter,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Planet;

type PlanetProps = {
  imgPath: string;
  radiusFromCenter: number;
  planetSize: number;
  children?: ReactElement<any, any>;
  rotationVelocity?: number;
  onClick: (props: OnPlanetClickProps) => void;
};
