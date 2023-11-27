import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";
import Footer from "../components/Footer";
import Flowgram from "../components/Flowgram";
// import Info from "../components/Info";
import ContactForm from "../components/ContactForm";
import heroimage from "../assets/heroimage2.jpg";
import image1 from "../assets/feature1.jpg";
import image2 from "../assets/feature2.gif";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop smooth />
      <Hero
        cName="hero"
        heroimage={heroimage}
        title="Synthetic Data Platform: Powering Businesses into the Future"
        text="Generate artificial datasets with the same characteristics as real data. Develop and test AI models without compromising privacy. Start your synthetic data journey today and progressively unlock the potential of our data privacy solutions."
        url1="https://drive.google.com/file/d/1CqpeLMwGN8z2MF7X9XrIuXDYZ_MNPlj2/view?usp=drive_link"
        url2="https://drive.google.com/file/d/1CqpeLMwGN8z2MF7X9XrIuXDYZ_MNPlj2/view?usp=drive_link"
        btnClass="show"
        buttonText1="Get Brochure"
        buttonText2="Request Briefing"
      />
      <Features
        title="Guaranteeing Data Privacy across Diverse Use-Cases"
        text="In the journey from conceptualization to innovation, your business needs to maximize data utility while ensuring data privacy. Our Data Protection Suite leverages advanced generative AI to enforce robust data protection policies wherever your data goes. This groundbreaking platform enables your legal, privacy, and data teams to collaborate effectively, ensuring every use-case, from testing to production, aligns with the precise level of protection required."
        image1={image1}
        image2={image2}
        cName="first-feature"
      />
      <Flowgram />
      <News />
      <Features
        title="Accelerate your Business Growth with Data-Driven Insights"
        text="Our synthetic data and generative AI solutions boost revenue growth, enhance customer
        satisfaction, promote product innovation, improve operational efficiency, and enable competitive
        differentiation while reducing costs."
        image1={image1}
        image2={image2}
        cName="second-feature"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
