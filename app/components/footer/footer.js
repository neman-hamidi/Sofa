import sections from "./Text";
import "./footer.css";
export default function footer() {
  return (
    <section className="container-fluid footer text-start">
      <div className="row pt-5 text-white div-row-footer">
        <div className="col-3">
          <h3 className="fw-bold fs-4 pb-3">Let’s get in touch</h3>
          <p className="fs-5 mb-3 ">
            Sign up for our newsletter and receive 10% off your
          </p>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.co"
          />
        </div>
        {sections.map((section, index) => (
          <div key={index} className="col-3">
            <p className="fw-bold">{section.title}</p>
            {section.links &&
              section.links.map((link, i) => (
                <p key={i} className={link.className}>
                  {link.text}
                </p>
              ))}
            {section.description && (
              <p className="py-3">{section.description}</p>
            )}
            {section.icons && (
              <div className="div-icons-footer mb-4">
                {section.icons.map((icon, i) => (
                  <div key={i}>{icon.icon}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
