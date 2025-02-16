import "./optionsSiteItem.css";

export default function optionsSiteItem({ title, paragraph, icon }) {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <h3 className="mb-2 text-start">{title}</h3>
          <p className="text-secondary text-start">{paragraph}</p>
        </div>
        <div className="col-3">
          <div className="div-icon-options-site">{icon}</div>
        </div>
      </div>
    </div>
  );
}
