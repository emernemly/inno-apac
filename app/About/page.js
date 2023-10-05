import ChooseUs from '../componet/AboutUsComponet/ChooseUs';
import Experienced from '../componet/AboutUsComponet/Experienced';
import Mission from '../componet/AboutUsComponet/Mission';
import OurTeam from '../componet/AboutUsComponet/OurTeam';
import AboutImage from '../componet/IntroImages/AboutImage';

export default function About() {
  return (
    <main>
      <AboutImage />
      <Experienced />
      <Mission />
      <ChooseUs />
      <OurTeam />
    </main>
  );
}
