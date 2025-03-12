import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import img_politik from "../img/img_politik_1.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import img_hukum_1 from "../img/img_hukum_1.webp"
import img_hukum_2 from "../img/img_hukum_2.webp"
import img_hukum_3 from "../img/img_hukum_3.webp"
import img_hukum_4 from "../img/img_hukum_4.webp"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatDistanceToNow } from "date-fns";  // Import fungsi dari date-fns
import { id } from 'date-fns/locale';

function ComponentBerita () {

    // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("https://apisetda.vercel.app/products");
        setProducts(response.data)
    };
    return (
        <div className="wadah_component_berita margin_bottom_wadah_component_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_component_berita">
                    <div className="wadah_content_component_berita_2">
                        <div className="wadah_content_editor margin_bottom_editor">
                            <h4 className="judul_content_editor">Berita</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                                <Row>
                                {products.map((product) => (
                                    <Col xl={3} lg={3} md={6} sm={12} key={product.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={product.url} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`${product.id}`} className="link_deskrip_politik">
                                                {truncateText(product.name, 60)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Row>                                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentBerita;