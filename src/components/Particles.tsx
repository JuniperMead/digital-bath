import Particles from "react-particles-js";
import "../styles/Particles.css";

function LineParticles() {
  return (
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
            },
          },
          size: {
            value: 1,
            anim: {
              speed: 10,
              size_min: 5,
            },
          },
          line_linked: {
            color: "#1D1D1D",
            enable: true,
          },
          move: {
            random: true,
            speed: 0.5,
            out_mode: "bounce",
          },
        },
      }}
    />
  );
}

export default LineParticles;
