import { block } from 'bem-cn'; 
import "./BalloonLayout.scss";

const cnStyles = block("Balloons");

const Balloon = () => {
  return `
        <div class=${cnStyles()}>
            <img src={{ properties.balloonContentHeader|default:"Title" }} class=${cnStyles(
              "avatar"
            )} />
            <div class=${cnStyles("info")}>
                <p  class=${cnStyles(
                  "info-people"
                )}>{{ properties.balloonContentBody|default:"Title" }}</p>
                <p  class=${cnStyles(
                  "info-city"
                )}>{{ properties.balloonContentFooter|default:"Title" }}</p>
            </div>
        </div>
`;
};

export default Balloon;
