import styled, { ThemeProvider, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Bio, experiences, metrics, processHighlights, projects, skillGroups } from "./data/constants";
import { darkTheme } from "./utils/Themes";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(14px, -18px, 0) rotate(2deg); }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Page = styled.div`
  min-height: 100vh;
  color: var(--text-primary);
  background:
    radial-gradient(circle at 15% 15%, rgba(72, 191, 255, 0.2), transparent 28rem),
    radial-gradient(circle at 85% 4%, rgba(150, 96, 255, 0.22), transparent 26rem),
    radial-gradient(circle at 65% 55%, rgba(8, 218, 179, 0.14), transparent 24rem),
    var(--bg);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 78%);
    z-index: 0;
  }
`;

const AmbientOrb = styled.div`
  position: fixed;
  width: 28rem;
  height: 28rem;
  border-radius: 999px;
  background: ${({ $tone }) => $tone};
  filter: blur(26px);
  opacity: 0.18;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  animation: ${float} 9s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;

const Shell = styled.main`
  position: relative;
  z-index: 1;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(20px);
  background: rgba(6, 10, 24, 0.72);
  border-bottom: 1px solid var(--border);
`;

const NavInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -0.04em;

  span {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #020617;
    box-shadow: 0 0 28px rgba(73, 211, 255, 0.35);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 999px;
  transition: 180ms ease;

  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.07);
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ $variant }) => ($variant === "ghost" ? "var(--border-strong)" : "transparent")};
  border-radius: 999px;
  padding: 12px 18px;
  min-height: 46px;
  color: ${({ $variant }) => ($variant === "ghost" ? "var(--text-primary)" : "#020617")};
  background: ${({ $variant }) =>
    $variant === "ghost"
      ? "rgba(255, 255, 255, 0.06)"
      : "linear-gradient(135deg, var(--accent), var(--accent-3))"};
  text-decoration: none;
  font-weight: 800;
  box-shadow: ${({ $variant }) => ($variant === "ghost" ? "none" : "0 18px 44px rgba(73, 211, 255, 0.24)")};
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: 0 22px 60px rgba(73, 211, 255, 0.28);
  }
`;

const Hero = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(32px, 6vw, 86px);
  padding: clamp(54px, 8vw, 108px) 0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const Eyebrow = styled.p`
  width: fit-content;
  color: var(--accent);
  border: 1px solid rgba(73, 211, 255, 0.26);
  background: rgba(73, 211, 255, 0.08);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const HeroTitle = styled.h1`
  margin: 20px 0 0;
  max-width: 900px;
  font-size: clamp(3rem, 9vw, 7.8rem);
  line-height: 0.88;
  letter-spacing: -0.085em;
  color: var(--text-primary);

  span {
    display: block;
    background: linear-gradient(120deg, var(--text-primary), var(--accent), var(--accent-2), var(--accent-3));
    background-size: 220% 220%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: ${shimmer} 8s ease infinite;
  }
`;

const HeroCopy = styled.p`
  max-width: 680px;
  margin: 24px 0 0;
  color: var(--text-secondary);
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.8;
`;

const RoleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;

const RolePill = styled.span`
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 9px 12px;
  font-size: 0.88rem;
  font-weight: 700;
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
`;

const HeroPanel = styled(motion.div)`
  position: relative;
  border: 1px solid var(--border);
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.045)),
    rgba(9, 15, 34, 0.72);
  box-shadow: var(--shadow);
  padding: clamp(20px, 4vw, 34px);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(73, 211, 255, 0.42), transparent 34%, rgba(157, 115, 255, 0.36));
    opacity: 0.35;
    pointer-events: none;
  }
`;

const PanelContent = styled.div`
  position: relative;
  z-index: 1;
`;

const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--accent);

    &:nth-child(2) {
      background: var(--accent-3);
    }

    &:nth-child(3) {
      background: var(--accent-2);
    }
  }
`;

const InterfaceStack = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 22px;
`;

const StackCard = styled(motion.div)`
  padding: 18px;
  border-radius: 22px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.07);

  h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--text-primary);
  }

  p {
    margin: 8px 0 0;
    color: var(--text-muted);
    line-height: 1.6;
  }
`;

const CodeCard = styled(StackCard)`
  background: rgba(2, 6, 23, 0.72);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;

  pre {
    margin: 0;
    white-space: pre-wrap;
    color: var(--accent);
    font-size: 0.88rem;
    line-height: 1.7;
  }
`;

const Section = styled(motion.section)`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: clamp(56px, 9vw, 110px) 0;
`;

const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(260px, 0.65fr);
  align-items: end;
  gap: 24px;
  margin-bottom: 30px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin: 10px 0 0;
    font-size: clamp(2rem, 5vw, 4.5rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.75;
  }
`;

const MetricGrid = styled(motion.div)`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.article)`
  border: 1px solid var(--border);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.06);
  padding: 22px;

  strong {
    display: block;
    font-size: clamp(2rem, 5vw, 3.6rem);
    letter-spacing: -0.06em;
    color: var(--text-primary);
  }

  span {
    display: block;
    margin-top: 8px;
    color: var(--text-muted);
    line-height: 1.5;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.article)`
  border: 1px solid var(--border);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.045));
  padding: 24px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.2);

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    min-height: 82px;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.07);
  color: var(--text-primary);
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.82rem;
  font-weight: 750;
`;

const Timeline = styled.div`
  display: grid;
  gap: 18px;
`;

const ExperienceCard = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(160px, 0.3fr) 1fr;
  gap: 24px;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.065);
  padding: clamp(20px, 4vw, 30px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const DatePill = styled.div`
  color: var(--accent);
  font-weight: 850;
  line-height: 1.5;
`;

const ExperienceBody = styled.div`
  h3 {
    margin: 0;
    font-size: clamp(1.35rem, 3vw, 2rem);
  }

  h4 {
    margin: 8px 0 0;
    color: var(--text-secondary);
    font-size: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.75;
  }

  ul {
    display: grid;
    gap: 8px;
    padding-left: 18px;
    color: var(--text-muted);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.article)`
  border: 1px solid var(--border);
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  min-height: 100%;

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.65;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;

  a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 850;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled(motion.article)`
  border: 1px solid var(--border);
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(73, 211, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 22px;

  h3 {
    margin: 0;
    font-size: 1.12rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.65;
  }
`;

const ContactPanel = styled(motion.section)`
  width: min(1180px, calc(100% - 32px));
  margin: clamp(50px, 8vw, 92px) auto;
  border: 1px solid var(--border);
  border-radius: 36px;
  background:
    radial-gradient(circle at 22% 20%, rgba(73, 211, 255, 0.22), transparent 22rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.055));
  padding: clamp(28px, 6vw, 56px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
  box-shadow: var(--shadow);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin: 0;
    font-size: clamp(2.1rem, 5vw, 4.7rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.75;
    max-width: 720px;
  }
`;

const Footer = styled.footer`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 26px 0 42px;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid var(--border);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

function App() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <ThemeProvider theme={darkTheme}>
      <Page>
        <AmbientOrb $tone="rgba(73, 211, 255, 0.65)" $top="12%" $left="-12rem" />
        <AmbientOrb $tone="rgba(157, 115, 255, 0.62)" $top="42%" $right="-16rem" />
        <Nav aria-label="Primary navigation">
          <NavInner>
            <Logo href="#about" aria-label="Portfolio home">
              <span>DJ</span>
              <strong>React Portfolio</strong>
            </Logo>
            <NavLinks>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </NavLinks>
            <Button href={Bio.github} target="_blank" rel="noreferrer" $variant="ghost">
              GitHub
            </Button>
          </NavInner>
        </Nav>

        <Shell>
          <Hero id="about" aria-labelledby="hero-heading">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}>
                <Eyebrow>Available for React frontend work</Eyebrow>
              </motion.div>
              <motion.div variants={fadeUp}>
                <HeroTitle id="hero-heading">
                  Drew Johnson
                  <span>{Bio.title}</span>
                </HeroTitle>
              </motion.div>
              <motion.div variants={fadeUp}>
                <HeroCopy>{Bio.description}</HeroCopy>
              </motion.div>
              <RoleList>
                {Bio.roles.map((role) => (
                  <RolePill key={role}>{role}</RolePill>
                ))}
              </RoleList>
              <CtaRow>
                <Button href={Bio.resume} target="_blank" rel="noreferrer">
                  View Resume
                </Button>
                <Button href="#projects" $variant="ghost">
                  Explore Projects
                </Button>
              </CtaRow>
            </motion.div>

            <HeroPanel variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.18 }}>
              <PanelContent>
                <BrowserBar>
                  <Dots aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </Dots>
                  <span>frontend-system.tsx</span>
                </BrowserBar>
                <InterfaceStack>
                  <CodeCard whileHover={{ y: -4 }}>
                    <pre>{`const focus = createPortfolio({\n  stack: "React + TypeScript",\n  motion: "intentional",\n  quality: ["tests", "docs", "reuse"],\n});`}</pre>
                  </CodeCard>
                  <StackCard whileHover={{ y: -4 }}>
                    <h3>Interfaces that feel engineered</h3>
                    <p>Data-aware screens, maintainable component boundaries, and motion that supports the user's next action.</p>
                  </StackCard>
                  <StackCard whileHover={{ y: -4 }}>
                    <h3>Built for real teams</h3>
                    <p>Shared packages, onboarding docs, testing habits, and platform thinking baked into frontend delivery.</p>
                  </StackCard>
                </InterfaceStack>
              </PanelContent>
            </HeroPanel>
          </Hero>

          <MetricGrid variants={stagger} initial="hidden" animate="visible" aria-label="Portfolio metrics">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} variants={fadeUp} whileHover={{ y: -5 }}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </MetricCard>
            ))}
          </MetricGrid>

          <Section id="skills" aria-label="Skills" variants={fadeUp} initial="hidden" animate="visible">
            <SectionHeader>
              <div>
                <Eyebrow>Skills</Eyebrow>
                <h2 id="skills-heading">React systems with product polish.</h2>
              </div>
              <p>
                A focused mix of UI engineering, data flow, testing, and collaboration skills that turns product requirements into dependable frontend experiences.
              </p>
            </SectionHeader>
            <CardGrid>
              {skillGroups.map((group) => (
                <SkillCard key={group.title} whileHover={{ y: -6 }}>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <TagList>
                    {group.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </TagList>
                </SkillCard>
              ))}
            </CardGrid>
          </Section>

          <Section id="experience" aria-label="Experience" variants={fadeUp} initial="hidden" animate="visible">
            <SectionHeader>
              <div>
                <Eyebrow>Experience</Eyebrow>
                <h2 id="experience-heading">Production React work across serious workflows.</h2>
              </div>
              <p>
                From SaaS portals to utility applications, the through-line is practical frontend architecture and UI that supports high-information business tasks.
              </p>
            </SectionHeader>
            <Timeline>
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} whileHover={{ y: -5 }}>
                  <DatePill>{experience.date}</DatePill>
                  <ExperienceBody>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                    <p>{experience.desc}</p>
                    <ul>
                      {experience.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <TagList>
                      {experience.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </TagList>
                  </ExperienceBody>
                </ExperienceCard>
              ))}
            </Timeline>
          </Section>

          <Section id="projects" aria-label="Featured projects" variants={fadeUp} initial="hidden" animate="visible">
            <SectionHeader>
              <div>
                <Eyebrow>Featured projects</Eyebrow>
                <h2 id="projects-heading">Interfaces with business outcomes.</h2>
              </div>
              <p>
                Selected work that shows React implementation across SaaS, AI tooling, form-heavy workflows, and customer-facing web experiences.
              </p>
            </SectionHeader>
            <ProjectGrid>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} whileHover={{ y: -7 }}>
                  <img src={project.image} alt={`${project.title} preview`} />
                  <ProjectBody>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <TagList>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagList>
                    <ProjectLinks>
                      {project.webapp && (
                        <a href={project.webapp} target="_blank" rel="noreferrer">
                          Live site
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          Code
                        </a>
                      )}
                    </ProjectLinks>
                  </ProjectBody>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Section>

          <Section id="process" aria-label="Process" variants={fadeUp} initial="hidden" animate="visible">
            <SectionHeader>
              <div>
                <Eyebrow>Process</Eyebrow>
                <h2 id="process-heading">How I build React products.</h2>
              </div>
              <p>
                Strong UI comes from more than visuals. I care about contracts, data behavior, motion, and maintainable delivery.
              </p>
            </SectionHeader>
            <ProcessGrid>
              {processHighlights.map((item) => (
                <ProcessCard key={item.title} whileHover={{ y: -5 }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </ProcessCard>
              ))}
            </ProcessGrid>
          </Section>

          <ContactPanel id="contact" aria-label="Work together" variants={fadeUp} initial="hidden" animate="visible">
            <div>
              <Eyebrow>Work together</Eyebrow>
              <h2 id="contact-heading">Need a React developer who can ship and explain the system?</h2>
              <p>
                I can help modernize product UI, build reusable component systems, improve data-heavy workflows, and bring motion and polish to practical business software.
              </p>
            </div>
            <CtaRow>
              <Button href={`mailto:${Bio.email}`}>Email Drew</Button>
              <Button href={Bio.linkedin} target="_blank" rel="noreferrer" $variant="ghost">
                LinkedIn
              </Button>
            </CtaRow>
          </ContactPanel>
        </Shell>

        <Footer>
          <span>© {new Date().getFullYear()} Drew Johnson. Built with React.</span>
          <span>Animated, accessible, and WebGL-safe.</span>
        </Footer>
      </Page>
    </ThemeProvider>
  );
}

export default App;
