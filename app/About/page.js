import ChooseUs from '../componet/AboutUsComponet/ChooseUs';
import Experienced from '../componet/AboutUsComponet/Experienced';
import Mission from '../componet/AboutUsComponet/Mission';
import OurTeam from '../componet/AboutUsComponet/OurTeam';
import AboutImage from '../componet/IntroImages/AboutImage';
export const metadata = {
  title: 'About INNO-APAC | INNO-APAC',
  description:
    'Learn about INNO-APAC, our mission, and vision. Explore our commitment to fostering technology innovation and creating a digital ecosystem in the Asia-Pacific region.',
};
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
