import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function LocNowBerita () {
    return (
        <div className="wadah_locnow">
            <div className="margin_kanankiri">
                <div className="wadah_all_locnow">
                    <Link to="/" className="link_home_antara">
                        <FaHome className="wadah_icon_home_locnow" />
                        <span>BERANDA</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to="/berita" className="link_politik_now">
                        <span>Berita</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LocNowBerita;