import { TypeAnimation } from 'react-type-animation';

const Animtext = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1000,
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Animtext; 