import "./index.css";

export default function App() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Jesús Mrtz</h1>
        <h2 className="title">
          Desarrollador Web
          <span> Frontend & Backend</span>
        </h2>
        <p>
          Desarrollo soluciones modernas con React, Node.js y APIs REST.
          Enfocado en código limpio, escalable y funcional.
        </p>

        <div className="buttons">
          <button
            onClick={() =>
              document
                .getElementById("proyectos")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver proyectos
          </button>

          <button
            className="outline"
            onClick={() =>
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contacto
          </button>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="section">
        <h3>Sobre mí</h3>
        <p>
          Desarrollador enfocado en construir aplicaciones web completas,
          desde APIs backend hasta interfaces modernas.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h3>Skills</h3>

        {[
          { name: "JavaScript", level: 90, icon: "🟨" },
          { name: "React", level: 80, icon: "⚛️" },
          { name: "Node.js", level: 85, icon: "🟩" },
          { name: "APIs REST", level: 88, icon: "🔗" }
        ].map((skill) => (
          <div key={skill.name} className="skill">
            <span>
              {skill.icon} {skill.name}
            </span>

            <div className="bar">
              <div
                className="progress"
                style={{ width: skill.level + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <h3>Proyectos</h3>

        <div className="card">
          <h4>📦 Papelería Juanis</h4>
          <p>
            Sistema de ventas e inventario con control de stock en tiempo real,
            carrito dinámico, dashboard y búsqueda de productos.
          </p>
          <a
            href="https://papeleria-juanis.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Ver demo</button>
          </a>
        </div>

        <div className="card">
          <h4>🏢 Intranet Empresarial</h4>
          <p>
            Intranet con autenticación simulada, dashboard, gestión de empleados
            con estados dinámicos y diseño tipo SaaS.
          </p>
          <a
            href="https://intranet-sage.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Ver demo</button>
          </a>
        </div>

        <div className="card">
          <h4>📋 CRUD de Tareas</h4>
          <p>
            Sistema CRUD completo con gestión de tareas y catálogo de estatus
            (Activo, En proceso, Cerrado, Cancelado).
          </p>
          <a
            href="https://crud-two-inky.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Ver demo</button>
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <h3>Contacto</h3>
        <p>Email: jesus.0703110@outlook.com</p>
        <p>GitHub: github.com/chucho17sa-am</p>

        <a
          href="https://wa.me/525581792000"
          target="_blank"
          rel="noreferrer"
        >
          <button className="whatsapp-btn">
            💬 Contáctame por WhatsApp
          </button>
        </a>
      </section>
    </div>
  );
}