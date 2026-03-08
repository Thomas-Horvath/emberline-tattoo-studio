
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Hero from "./components/Hero/Hero";
import Styles from "./components/Styles/Styles";
import Testimonial from "./components/Testimonial/Testimonial";
import Works from "./components/Works/Works";

export default function Home() {
  return (

    <div>
      <Hero />
      <Styles />
      <Works />
      <ContactBanner />
      <Testimonial />
    </div>
  );
}
