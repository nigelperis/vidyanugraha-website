import Link from 'next/link';

function Footer() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/colleges', label: 'Colleges' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Vidyanugraha Education Trust
            </p>
            <p className="text-2xl font-semibold text-[var(--color-muted)]">
              Foundational Education with a Human Touch
            </p>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            We deliver foundational education with a human touch, offering
            faculty recruitment and management services.
          </p>
        </div>
        <div className="grid w-full gap-8 sm:grid-cols-2 md:max-w-2xl">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:vidyanugraha.edu@gmail.com"
                  className="transition hover:text-[var(--color-primary)]"
                >
                  vidyanugraha.edu@gmail.com
                </a>
              </li>
              <li>+91 85480 88424</li>
              <li>Vidyanugraha Education Trust, Moodabidri</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-[var(--color-primary)] py-4 text-center text-sm text-white/90">
        © {new Date().getFullYear()} Vidyanugraha Education Trust. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
