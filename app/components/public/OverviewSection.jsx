// components/OverviewSection.jsx
export default function OverviewSection() {
  const beige = '#fffcf0';
  const vertMain = '#61B57B';
  const vertVieux = '#48594C';
  const vertPassif = '#084e4f';

  return (
    <>
      {/* Google fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <section
        id="overview"
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: beige, fontFamily: "'Lato', sans-serif" }}
      >
        <div className="w-full max-w-5xl">
          {/* exemples de boutons couleurs */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: vertMain }}
            >
              vert-main
            </button>
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: vertVieux }}
            >
              vert-vieux
            </button>
          </div>

          {/* carte unique */}
          <div className="mx-auto grid place-items-center">
            <div
              className="rounded-4xl p-4 text-white"
              style={{ backgroundColor: vertMain, width: '25rem' }}
            >
              {/* partie visuelle */}
              <div className="relative h-72 bg-white rounded-t-2xl overflow-hidden">
                <img
                  src="https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg"
                  alt="Trust & Co."
                  className="w-full h-full object-contain"
                />
{/* 
                {/* bouton curved */}
                <div
                  className="absolute -bottom-1.5 -right-1.5 w-24 h-24 rounded-tl-full
                             before:absolute before:bottom-1.5 before:-left-5 before:w-5 before:h-5
                             before:rounded-br-2xl before:shadow-[5px_5px_0_5px_var(--tw-shadow-color)]
                             after:absolute after:-top-5 after:right-1.5 after:w-5 after:h-5
                             after:rounded-br-2xl after:shadow-[5px_5px_0_5px_var(--tw-shadow-color)]"
                  style={{
                    '--tw-shadow-color': vertMain,
                    backgroundColor: vertMain,
                  }}
                >
                  <a
                    href="#"
                    className="absolute inset-2.5 bg-white rounded-full
                               flex items-center justify-center
                               hover:scale-110 transition-transform"
                  >
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ color: vertMain }}
                    >
                      arrow_outward
                    </span>
                  </a>
                </div> */}
              </div>

              {/* contenu texte */}
              <div className="px-2.5 py-4">
                <h3 className="text-2xl capitalize mb-2">trust & co.</h3>
                <p className="mb-5" style={{ color: '#ffffffd6' }}>
                  Fill out the form and the algorithm will offer the right team of experts
                </p>

                <ul className="flex flex-wrap gap-2">
                  <li
                    className="px-2.5 py-1 text-xs font-bold uppercase rounded-sm"
                    style={{ backgroundColor: '#d3b19a', color: '#704a31' }}
                  >
                    branding
                  </li>
                  <li
                    className="px-2.5 py-1 text-xs font-bold uppercase rounded-sm"
                    style={{ backgroundColor: '#70b3b1', color: '#1e3938' }}
                  >
                    packaging
                  </li>
                  <li
                    className="px-2.5 py-1 text-xs font-bold uppercase rounded-sm"
                    style={{ backgroundColor: '#d05fa2', color: '#4d1637' }}
                  >
                    marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}