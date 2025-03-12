import { Col, Row } from "react-bootstrap";
import img_politik from "../img/img_politik_1.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import popular_1 from "../img/popular_1.webp"
import popular_2 from "../img/popular_2.webp"
import popular_3 from "../img/popular_3.webp"
import popular_4 from "../img/popular_4.webp"
import popular_5 from "../img/popular_5.webp"
import popular_6 from "../img/popular_6.webp"
import popular_7 from "../img/popular_7.webp"
import poster_ultra_mikro from "../img/poster_ultra_mikro.jpg"
import img_hukum_1 from "../img/img_hukum_1.webp"
import img_hukum_2 from "../img/img_hukum_2.webp"
import img_hukum_3 from "../img/img_hukum_3.webp"
import img_hukum_4 from "../img/img_hukum_4.webp"
import { Link } from "react-router-dom";
import img_most_popular_1 from "../img/img_most_popular_1.webp"
import img_most_popular_2 from "../img/img_most_popular_2.webp"
import img_most_popular_3 from "../img/img_most_popular_3.webp"
import img_most_popular_4 from "../img/img_most_popular_4.webp"
import img_most_popular_5 from "../img/img_most_popular_5.webp"
import img_anti_hoax from "../img/img_anti_hoax.webp"
import img_anti_hoax_2 from "../img/img_anti_hoax_2.webp"
import img_anti_hoax_3 from "../img/img_anti_hoax_3.webp"
import img_terkini_1 from "../img/img_terkini_1.jpeg"
import img_terkini_2 from "../img/img_terkini_2.jpeg"
import img_terkini_3 from "../img/img_terkini_3.jpeg"
import img_terkini_4 from "../img/img_terkini_4.jpeg"
import img_terkini_5 from "../img/img_terkini_5.jpeg"
import img_terkini_6 from "../img/img_terkini_6.jpeg"
import img_terkini_7 from "../img/img_terkini_7.jpeg"
import img_terkini_8 from "../img/img_terkini_8.jpeg"
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { id } from 'date-fns/locale';
import { formatDistanceToNow } from "date-fns";


function Politik () {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  const [data, setData] = useState([]);
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Carousel will trigger when 10% is visible
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    fetch('https://apisetda.vercel.app/productsBytime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setData(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/artikelByTime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setDataArtikel(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="wadah_politik" style={{marginTop: '20px'}}>
            <div className="margin_kanankiri">
                <div className="wadah_content_politik">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12}>
                            <div className="wadah_content_editor margin_bottom_editor">
                                <h4 className="judul_content_editor">Berita Terkini</h4>
                                <div className="wadah_garis_editor">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                            </div>
                            <div className={`wadah_content_politik_2 ${isVisible ? "slide-in" : ""}`} ref={carouselRef}>
                                <Row>
                                {data
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 9) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={4} lg={4} md={6} sm={12} key={item.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_politik">
                                            <div className="wadah_img_politik">
                                                <img src={item.url} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`/berita/${item.id}`} className="link_deskrip_politik">{truncateText(item.name, 50)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                      ))}
                                </Row>                                                                   
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Politik;