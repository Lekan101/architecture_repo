import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

const projects = [
  { title: "Nomus Art House", type: "Cultural / 2024", image: "/h1-port-img-02.jpg", alt: "Warmly lit contemporary art house interior" },
  { title: "Northline Residence", type: "Residential / 2023", image: "/h1-port-img-03-1.jpg", alt: "Modern residence framed by a quiet landscape" },
];

const team = [
  ["Robert Johnson", "Founder / Architect", "/h1-team-img-01.jpg"],
  ["Aida Betul", "Main Contractor", "/h1-team-img-02.jpg"],
  ["Rebecca Wales", "Architect", "/h1-team-img-03.jpg"],
  ["Guillermo Medici", "Product Designer", "/h1-team-img-04.jpg"],
];

const journal = [
  ["Studio Hiroshi Cuisine and Bar", "/blog-4.jpg"],
  ["The material language of a facade", "/blog-3.jpg"],
  ["Coexisting with the landscape", "/blog-2.jpg"],
];

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <header className={styles.hero} id="home">
        <div className={styles.heroOverlay} />
        <div className={styles.heroMeta}><span>Studio Hiroshi</span><span>Architecture / Interiors / Objects</span></div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Independent architecture studio - Bergen / Oslo</p>
          <h1>Spaces with a<br /><em>lasting presence.</em></h1>
          <a className={styles.textLink} href="#page">Explore our work <span aria-hidden="true">-&gt;</span></a>
        </div>
        <div className={styles.heroCaption}><span>01 - 06</span><span>Willie house in Bergen</span></div>
      </header>
      <main>
        <section className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.sectionLabel}><span>01</span><span>Studio</span></div>
          <div className={styles.introGrid}><h2 id="intro-title">We shape the quiet moments between people and place.</h2><div className={styles.introCopy}><p>Studio Hiroshi is an architecture and design practice working across scales, from enduring homes to thoughtful public interiors.</p><p>Our work begins with close attention: to light, material, weather, and the life that will unfold in a space.</p><a className={styles.textLinkDark} href="#contact">More about the studio <span aria-hidden="true">-&gt;</span></a></div></div>
        </section>
        <section className={styles.work} id="page" aria-labelledby="work-title">
          <div className={styles.sectionHeading}><div className={styles.sectionLabel}><span>02</span><span>Selected work</span></div><h2 id="work-title">Built for<br /><em>real life.</em></h2></div>
          <div className={styles.projectGrid}>{projects.map((project, index) => <article className={`${styles.project} ${index === 1 ? styles.projectOffset : ""}`} key={project.title}><div className={styles.projectImage}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 45vw" /><span className={styles.projectNumber}>0{index + 1}</span></div><div className={styles.projectInfo}><h3>{project.title}</h3><p>{project.type}</p><span aria-hidden="true">-&gt;</span></div></article>)}</div>
        </section>
        <section className={styles.statement} id="portfolio"><div className={styles.statementImage}><Image src="/h1-img-07.jpg" alt="Architectural detail in natural light" fill sizes="(max-width: 700px) 100vw, 42vw" /></div><div className={styles.statementCopy}><p className={styles.eyebrow}>Our approach</p><h2>Good architecture does more with less.</h2><p>We make clear, generous spaces through proportion, honest materials, and a deep respect for the context around them.</p><div className={styles.principles}><span>01 / Context</span><span>02 / Material</span><span>03 / Light</span></div></div></section>
        <section className={styles.services} id="shop" aria-labelledby="services-title"><div className={styles.sectionLabel}><span>03</span><span>What we do</span></div><h2 id="services-title">From first sketch<br /><em>to final detail.</em></h2><div className={styles.serviceList}><div><span>01</span><h3>Architecture</h3><p>Homes, cultural spaces, and places made to belong.</p></div><div><span>02</span><h3>Interior design</h3><p>Material palettes and rooms that support daily rituals.</p></div><div><span>03</span><h3>Objects &amp; landscape</h3><p>The considered elements that complete a place.</p></div></div></section>
        <section className={styles.team} id="blog" aria-labelledby="team-title"><div className={styles.sectionHeading}><div className={styles.sectionLabel}><span>04</span><span>The people</span></div><h2 id="team-title">A small studio<br /><em>with a wide view.</em></h2></div><div className={styles.teamGrid}>{team.map(([name, role, image]) => <div className={styles.teamMember} key={name}><div className={styles.teamImage}><Image src={image} alt={`${name}, ${role}`} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><h3>{name}</h3><p>{role}</p></div>)}</div></section>
        <section className={styles.journal} id="landing" aria-labelledby="journal-title"><div className={styles.sectionHeading}><div className={styles.sectionLabel}><span>05</span><span>Journal</span></div><h2 id="journal-title">Notes from<br /><em>the practice.</em></h2></div><div className={styles.journalGrid}>{journal.map(([title, image]) => <article key={title}><div className={styles.journalImage}><Image src={image} alt={title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p>Journal / 14.12.24</p><h3>{title}</h3><a href="#contact" aria-label={`Read ${title}`}>Read story -&gt;</a></article>)}</div></section>
        <section className={styles.contact} id="contact"><p className={styles.eyebrow}>Have a project in mind?</p><h2>Let&apos;s make<br /><em>something lasting.</em></h2><a className={styles.contactLink} href="mailto:studio@hiroshi.no">studio@hiroshi.no <span aria-hidden="true">-&gt;</span></a></section>
      </main>
      <footer className={styles.footer}><div><Image src="/hiroshi-logo-big-2.png" alt="Studio Hiroshi" width={100} height={20} /></div><div><p>Frognerveien 12<br />0263 Oslo, Norway</p></div><div><p>Instagram<br />Vimeo<br />LinkedIn</p></div><div><p>© 2024 Studio Hiroshi<br />All rights reserved</p></div></footer>
    </div>
  );
}
