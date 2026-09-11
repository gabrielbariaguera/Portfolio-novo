import { FormEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { marquee, nav, profile, projects, skills, socials, timeline } from "./data";

function SocialIcon({
  id,
  className = "size-6",
}: {
  id: (typeof socials)[number]["id"];
  className?: string;
}) {
  if (id === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1 .07 1.54 1.05 1.54 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (id === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CodeCard() {
  const lines = [
    { n: 1, nodes: [<Kw key="a">class</Kw>, " Person {"] },
    { n: 2, nodes: ["  ", <Kw key="b">constructor</Kw>, "() {"] },
    {
      n: 3,
      nodes: ["    this.name = ", <Str key="c">{`"${profile.name}"`}</Str>, ";"],
    },
    {
      n: 4,
      nodes: ["    this.traits = [", <Str key="d">"DESIGN"</Str>, ", ", <Str key="e">"DEV"</Str>, "];"],
    },
    {
      n: 5,
      nodes: ["    this.role = ", <Str key="f">{`"${profile.role}"`}</Str>, ";"],
    },
    { n: 6, nodes: ["  }"] },
    { n: 7, nodes: ["}"] },
  ];

  const swatches = ["#14248a", "#3d5bb8", "#7a8fd4", "#0c1233", "#d5d8f2"];

  return (
    <div className="enter enter-3 relative mx-auto w-full max-w-[28rem] pb-4">
      <div className="code-card rounded-2xl px-6 py-7 shadow-[0_18px_50px_rgb(20_36_138_/_0.18)]">
        <ol className="font-mono text-[0.82rem] leading-7 sm:text-[0.92rem]">
          {lines.map((line) => (
            <li key={line.n} className="grid grid-cols-[1.6rem_1fr] gap-4">
              <span className="select-none text-mist/70">{line.n}</span>
              <code className="text-frost">{line.nodes}</code>
            </li>
          ))}
        </ol>
      </div>
      <div className="absolute -bottom-4 -left-3 flex gap-2 rounded-xl bg-elev p-2 shadow-[0_10px_28px_rgb(20_36_138_/_0.16)]">
        {swatches.map((color) => (
          <span
            key={color}
            className="size-6 rounded-md"
            style={{ background: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}

function Kw({ children }: { children: ReactNode }) {
  return <span className="code-kw">{children}</span>;
}

function Str({ children }: { children: ReactNode }) {
  return <span className="text-ice">{children}</span>;
}

function PhotoSlot() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[18rem] lg:mx-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-elev shadow-[0_18px_40px_rgb(8_14_55_/_0.35)]">
        {!failed ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="size-full object-cover object-[58%_32%]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-mist">
            <span className="font-display text-4xl text-ice">GA</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="glass-sm rounded-xl px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wider text-ice uppercase">
      {children}
    </span>
  );
}

function ThemeSwitch({
  theme,
  onChange,
}: {
  theme: "dark" | "light";
  onChange: (theme: "dark" | "light") => void;
}) {
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="glass grid size-10 shrink-0 place-items-center rounded-xl text-frost transition hover:bg-brand/40"
      aria-label={next === "light" ? "Ativar tema claro" : "Ativar tema escuro"}
      title={next === "light" ? "Tema claro" : "Tema escuro"}
      onClick={() => onChange(next)}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4.2" />
          <path
            strokeLinecap="round"
            d="M12 3.2v1.6M12 19.2v1.6M4.8 12H3.2M20.8 12h-1.6M6.3 6.3l-1.1-1.1M18.8 18.8l-1.1-1.1M6.3 17.7l-1.1 1.1M18.8 5.2l-1.1 1.1"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>
          <path d="M21.75 15a9.75 9.75 0 0 1-3.75.75c-5.39 0-9.75-4.36-9.75-9.75 0-1.33.27-2.6.75-3.75A9.75 9.75 0 1 0 21.75 15Z" />
        </svg>
      )}
    </button>
  );
}

function Reveal({
  children,
  className = "",
  delay = "0ms",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

function SectionHead({ title, index }: { title: string; index: string }) {
  return (
    <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-line pb-4">
      <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-normal">{title}</h2>
      <span className="text-sm text-mist">{index}</span>
    </div>
  );
}

export default function App() {
  const [note, setNote] = useState("");
  const [shift, setShift] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const next = saved === "light" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function changeTheme(next: "dark" | "light") {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setShift(progress);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function mailtoFrom(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Contato do portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoFrom(event.currentTarget);
    setNote("Abrindo o e-mail no seu cliente…");
  }

  function onSendClick(event: MouseEvent<HTMLAnchorElement>) {
    const form = event.currentTarget.closest("form");
    if (!form) return;
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    event.currentTarget.href = mailtoFrom(form);
    setNote("Abrindo o e-mail no seu cliente…");
  }

  return (
    <>
    <header className="site-header glass flex items-start justify-between gap-3 px-[4vw] py-3 sm:items-center sm:px-[6vw] sm:py-4">
        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6"
          aria-label="Seções"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[0.72rem] tracking-[0.12em] text-mist uppercase no-underline transition-colors hover:text-frost sm:text-[0.82rem] sm:tracking-[0.14em]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeSwitch theme={theme} onChange={changeTheme} />
      </header>
    <div className="relative min-h-screen">
      <div className="scene" aria-hidden>
        <div
          className="scene-layer scene-a"
          style={{ transform: `translate3d(0, ${shift * 36}px, 0)` }}
        />
        <div
          className="scene-layer scene-b"
          style={{ transform: `translate3d(0, ${shift * -24}px, 0)` }}
        />
        <div
          className="scene-layer scene-c"
          style={{ transform: `translate3d(0, ${shift * 48}px, 0)` }}
        />
      </div>
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.02"
            numOctaves="2"
            seed="4"
            result="n"
          >
            <animate
              attributeName="baseFrequency"
              dur="16s"
              values="0.009 0.02;0.016 0.028;0.009 0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="relative z-10 pt-[4.75rem]">

      <div className="flex min-h-[calc(100dvh-4.75rem)] flex-col">
      <section
        className="grid flex-1 items-center gap-12 px-[6vw] py-14 lg:grid-cols-2 lg:gap-16"
        id="topo"
      >
        <div>
          <p className="enter enter-1 mb-3 text-[1.05rem] font-light text-mist">
            Olá, eu sou
          </p>
          <h1 className="enter enter-2 font-display text-[clamp(1.35rem,7vw,2.7rem)] leading-[1.05] font-normal tracking-tight md:whitespace-nowrap md:text-[clamp(1.05rem,3.1vw,2.7rem)]">
            {profile.name}
          </h1>
          <p className="enter enter-3 mt-4 text-[clamp(0.82rem,3.4vw,1.35rem)] font-light tracking-[0.12em] text-mist uppercase sm:tracking-[0.18em]">
            {profile.role}
          </p>
          <a
            className="enter enter-4 mt-9 inline-flex rounded-xl bg-brand px-6 py-3 text-sm tracking-wide text-white no-underline transition hover:brightness-110"
            href={profile.resume}
            download="Curriculo-Gabriel-Aguera-Baria.pdf"
          >
            Baixar currículo
          </a>
          <div className="hero-socials enter enter-5 mt-8 flex items-center gap-6">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="transition"
                aria-label={item.name}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon id={item.id} />
              </a>
            ))}
          </div>
        </div>
        <CodeCard />
      </section>

      <div className="enter enter-4 glass relative z-10 overflow-hidden py-3.5 whitespace-nowrap" aria-hidden>
        <div className="marquee-track inline-flex gap-10 text-[0.82rem] tracking-[0.16em] text-mist uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              {marquee.join(" · ")} ·&nbsp;
            </span>
          ))}
        </div>
      </div>
      </div>

      <section id="sobre" className="px-[6vw] py-20 lg:py-28">
        <Reveal>
          <SectionHead title="Sobre" index="01 — Perfil" />
        </Reveal>
        <Reveal delay="80ms">
        <div className="grid items-start gap-10 lg:grid-cols-[18rem_1fr_0.95fr] lg:gap-12">
          <PhotoSlot />
          <div className="space-y-4 text-lg leading-relaxed text-frost/90">
            <h3 className="font-display text-3xl font-normal text-frost">{profile.name}</h3>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {skills.map((group) => (
              <div
                className="glass rounded-xl px-5 py-5"
                key={group.group}
              >
                <h3 className="mb-3 text-sm font-medium tracking-[0.12em] text-mist uppercase">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section id="trabalho" className="px-[6vw] py-20 lg:py-28">
        <Reveal>
          <SectionHead title="Trabalho selecionado" index="02 — Projetos" />
        </Reveal>
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={`${i * 90}ms`}>
            <article
              className="group grid items-start gap-4 border-b border-line py-6 transition-transform duration-200 hover:translate-x-1.5 sm:gap-5 lg:grid-cols-[5.5rem_1fr_auto]"
            >
              <div className="pt-1.5 text-mist">{project.year}</div>
              <div className="min-w-0">
                <h3 className="mb-1.5 font-display text-[clamp(1.6rem,4vw,1.9rem)] font-normal lg:text-3xl">{project.title}</h3>
                <Tag>{project.type}</Tag>
                <p className="mt-2 mb-3.5 max-w-[62ch] leading-relaxed text-mist">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-2 self-start lg:flex-col lg:self-center">
                {project.href !== "#" && (
                  <a
                    className="glass grid size-11 place-items-center rounded-xl no-underline transition group-hover:bg-brand/40"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${project.title}`}
                  >
                    {project.href.includes("github.com") ? (
                      <SocialIcon id="github" className="size-5" />
                    ) : (
                      "→"
                    )}
                  </a>
                )}
                {project.repo && project.repo !== project.href && (
                  <a
                    className="glass grid size-11 place-items-center rounded-xl no-underline transition hover:bg-brand/40"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Código de ${project.title}`}
                  >
                    <SocialIcon id="github" className="size-5" />
                  </a>
                )}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experiencia" className="px-[6vw] py-20 lg:py-28">
        <Reveal>
          <SectionHead title="Trajetória" index="03 — Linha do tempo" />
        </Reveal>
        <div>
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={`${i * 80}ms`}>
            <article
              className="grid gap-6 border-b border-line py-6 lg:grid-cols-[11rem_1fr]"
            >
              <time className="text-sm text-ice">{item.period}</time>
              <div>
                <h3 className="font-display mb-1 text-[1.7rem] font-normal">{item.title}</h3>
                <p className="mb-2.5 text-mist">{item.place}</p>
                <p className="leading-relaxed text-mist">{item.text}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative px-[6vw] py-20 lg:py-28" id="contato">
        <Reveal>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-[0.72rem] uppercase tracking-[0.18em] text-ice">Próximo passo</p>
            <h2 className="font-display mb-4 text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] font-normal">
              Vamos construir algo sólido.
            </h2>
            <p className="max-w-[36ch] text-lg leading-relaxed text-mist">
              Aberto a freelance, contrato CLT ou PJ e times de produto.
            </p>
          </div>
          <form
            className="glass grid gap-3.5 rounded-xl p-6"
            onSubmit={onSubmit}
          >
            <label>
              <span className="mb-1.5 block text-xs text-mist">Nome</span>
              <input
                className="w-full border-0 border-b border-line bg-transparent py-2.5 outline-none focus:border-ice"
                name="name"
                required
                autoComplete="name"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs text-mist">E-mail</span>
              <input
                className="w-full border-0 border-b border-line bg-transparent py-2.5 outline-none focus:border-ice"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-xs text-mist">Mensagem</span>
              <textarea
                className="min-h-[110px] w-full resize-y border-0 border-b border-line bg-transparent py-2.5 outline-none focus:border-ice"
                name="message"
                required
              />
            </label>
            <a
              className="mt-2.5 inline-flex justify-self-start rounded-xl bg-brand px-5 py-3 text-[0.78rem] font-semibold tracking-[0.16em] text-white uppercase no-underline transition hover:brightness-110"
              href={`mailto:${profile.email}`}
              onClick={onSendClick}
            >
              Enviar
            </a>
            <p className="min-h-[1.2em] text-sm text-mist" role="status">
              {note}
            </p>
          </form>
        </div>
        </Reveal>
      </section>

      <footer className="border-t border-line px-[6vw] pt-5 pb-9 text-center text-sm text-mist">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
      </div>
    </div>
    </>
  );
}
