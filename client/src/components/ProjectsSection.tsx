import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import paysokoImage from "@assets/stock_images/paysoko.png";
import altumImage from "@assets/stock_images/agtscreenshot.png";
import dadasokoImage from "@assets/stock_images/dadasoko.png";
import chamanetImage from "@assets/stock_images/chamanetscreenshot.png";
import bdcpImage from "@assets/stock_images/bdcp.png";
import kaawaImage from "@assets/stock_images/kaawa.png";
import coffeeklubImage from "@assets/stock_images/coffeeklub.png";
import sweetspotImage from "@assets/stock_images/sweetspot.png";
import mkatianoImage from "@assets/stock_images/mkatiano.png";
import metrotransImage from "@assets/stock_images/metrotrans.png";

const projects: Omit<ProjectCardProps, "index">[] = [
  {
    title: "PaySoko Systems",
    description:
      "Enterprise financial management system providing comprehensive payment solutions and corporate financial services for businesses across Africa.",
    image: paysokoImage,
    liveUrl: "https://corp.paysoko.com",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "ChamaNet Kenya",
    description:
      "Digital platform revolutionizing group savings and investment management for Chama groups, featuring member management and financial tracking.",
    image: chamanetImage,
    liveUrl: "https://chamanet.co.ke/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "DadaSoko",
    description:
      "DadaSoko empowers women entrepreneurs with the tools and support they need to thrive. They provide digital tools, financial assistance services, business development services, and technical support to help women grow their businesses and become confident leaders.",
    image: dadasokoImage,
    liveUrl: "https://dadasoko.com/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "MetroTrans",
    description:
      "MetroTrans provides professional and dependable transportation for patients who require medical transfers without the urgency of emergency services. From hospital visits to dialysis appointments, we ensure every ride is safe, timely, and comfortable.",
    image: metrotransImage,
    liveUrl: "https://metrotrans.org/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "Altum Global Tax Advisory",
    description:
      "Professional tax advisory and consulting platform offering expert guidance on international tax compliance and strategic tax planning services.",
    image: altumImage,
    liveUrl: "https://www.altumglobaltaxadvisory.com/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "Best Damn Coffee Period",
    description:
      "E-commerce platform for premium coffee, featuring online ordering, subscription services, and showcasing the rich coffee culture of Kenya.",
    image: bdcpImage,
    liveUrl: "https://bestdamncoffeeperiod.com/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "Coffee Klub",
    description:
      "Whether you’re seeking expert guidance, professional training, or premium coffee-infused products, Coffee Klub is dedicated to providing you with an exceptional experience that’s tailored to your unique preferences.",
    image: coffeeklubImage,
    liveUrl: "https://coffeeklub.co.ke/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "Kaawa Coffee",
    description:
      "Welcome to our Coffee Subscription Platform, where we bring you the finest coffee treasures from East Africa! Discover a world of rich flavors and captivating aromas, handpicked from the heart of this enchanting region.",
    image: kaawaImage,
    liveUrl: "https://kaawacoffee.com/",
    githubUrl: "https://github.com/joseey23",
  },

  {
    title: "Sweetspot KE",
    description:
      "Full-service experience agency offering end-to-end planning, styling, catering, and management for events of every scale.",
    image: sweetspotImage,
    liveUrl: "https://sweetspot.ke/",
    githubUrl: "https://github.com/joseey23",
  },
  {
    title: "Mkatiano KE",
    description:
      "Mkatiano is a professional dating site where the host helps brave participants find love through authentic conversations and unforgettable moments after AI does the matchmaking between partners.",
    image: mkatianoImage,
    liveUrl: "https://mkatiano.ke/",
    githubUrl: "https://github.com/joseey23",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6 bg-card"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          data-testid="text-projects-title"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
