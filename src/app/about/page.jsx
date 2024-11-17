/**
 * @author Sameh Mohamed
 * date : 14-oct-2024
 * created the page of the about us
 * @page
 * @returns {JSX.Element} The rendered About Page
 */

import AboutHead from '../../components/about/AboutHead';
import WhyUsAbout from '../../components/about/WhyUsAbout';
import About2 from '../../components/about/About2';
export default function About() {
  return (
    <div className="container mx-auto">
      <AboutHead />
      <WhyUsAbout />
      <About2 />
    </div>
  );
}
