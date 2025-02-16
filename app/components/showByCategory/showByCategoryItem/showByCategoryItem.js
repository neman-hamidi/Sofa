import "./showByCategoryItem.css";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
export default function showByCategoryItem({ img, title, description }) {
  return (
    <div className="showByCategoryItem">
      <div>
        <img src={img} alt="imh" />
        <p className="fs-3 cg-1">{title}</p>
        <p className="fs-5 text-secondary pt-2 cg-2">{description}</p>
        <div className="gerdali">
          <div>
            <FileDownloadDoneOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
