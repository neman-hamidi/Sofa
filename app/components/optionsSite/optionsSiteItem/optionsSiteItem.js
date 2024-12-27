import "./optionsSiteItem.css"

export default function optionsSiteItem({ title, paragraph, children }) {
  return (
    <div>
        <div className="row">
            <div className="col-9">
                <p className="mb-2 text-start">{title}</p>
                <p className="text-secondary text-start">{paragraph}</p>
            </div>
            <div className="col-3">
                <div className="div-icon-options-site">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
