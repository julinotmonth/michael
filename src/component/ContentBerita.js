import { Carousel, Col, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import berita_politik_1 from "../img/berita_politik_1.webp"
import { FaQuoteLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import img_politik_terkini_1 from "../img/img_politik_terkini_1.webp"
import img_politik_terkini_2 from "../img/img_politik_terkini_2.webp"
import img_politik_terkini_3 from "../img/img_politik_terkini_3.webp"
import img_politik_terkini_4 from "../img/img_politik_terkini_4.webp"
import img_politik_terkini_5 from "../img/img_politik_terkini_5.webp"
import img_politik_terkini_6 from "../img/img_politik_terkini_6.webp"
import img_politik_terkini_7 from "../img/img_politik_terkini_7.webp"
import img_politik_terkini_8 from "../img/img_politik_terkini_8.webp"
import img_politik_terkini_9 from "../img/img_politik_terkini_9.webp"
import img_politik_terkini_10 from "../img/img_politik_terkini_10.webp"
import img_politik_terkini_11 from "../img/img_politik_terkini_11.webp"
import img_politik_terkini_12 from "../img/img_politik_terkini_12.webp"
import img_politik_terkini_13 from "../img/img_politik_terkini_13.webp"
import img_most_popular_1 from "../img/img_most_popular_1.webp"
import img_most_popular_2 from "../img/img_most_popular_2.webp"
import img_most_popular_3 from "../img/img_most_popular_3.webp"
import img_most_popular_4 from "../img/img_most_popular_4.webp"
import img_most_popular_5 from "../img/img_most_popular_5.webp"
import content_terkini_1 from "../img/content_terkini_1.webp"
import content_terkini_2 from "../img/content_terkini_2.webp"
import content_terkini_3 from "../img/content_terkini_3.webp"
import content_terkini_4 from "../img/content_terkini_4.webp"
import content_terkini_5 from "../img/content_terkini_5.webp"
import img_politik from "../img/img_politik_1.webp"
import img_info_grafik_1 from "../img/img_info_grafik_1.webp"
import img_info_grafik_2 from "../img/img_info_grafik_2.webp"
import img_info_grafik_3 from "../img/img_info_grafik_3.webp"
import img_crousel_politik_1 from "../img/img_crousel_politik_1.webp"
import img_crousel_politik_2 from "../img/img_crousel_politik_2.webp"
import img_crousel_politik_3 from "../img/img_crousel_politik_3.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import crousel_sekda_1 from "../img/crousel_sekda_1.jpeg"
import crousel_sekda_2 from "../img/crousel_sekda_2.jpeg"
import crousel_sekda_3 from "../img/crousel_sekda_3.jpeg"
import crousel_sekda_4 from "../img/crousel_sekda_4.jpeg"
import crousel_sekda_5 from "../img/crousel_sekda_5.jpeg"
import crousel_sekda_6 from "../img/crousel_sekda_6.jpeg"
import crousel_sekda_7 from "../img/crousel_sekda_7.jpeg"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { id as localeId } from 'date-fns/locale';


function ContentBerita () {
  // Mengambil nilai awal dari localStorage jika tersedia, jika tidak, gunakan nilai default
  const { id } = useParams(); // Mengambil ID dari parameter URL
  const [likes, setLikes] = useState(() => Number(localStorage.getItem(`likes_${id}`)) || 0);
  const [dislikes, setDislikes] = useState(() => Number(localStorage.getItem(`dislikes_${id}`)) || 0);
  const [hasLiked, setHasLiked] = useState(() => JSON.parse(localStorage.getItem(`hasLiked_${id}`)) || false);
  const [hasDisliked, setHasDisliked] = useState(() => JSON.parse(localStorage.getItem(`hasDisliked_${id}`)) || false);
  const [products, setProducts] = useState(null);
  const [totalVotes, setTotalVotes] = useState({ likes: likes, dislikes: dislikes });
  const [data, setData] = useState([]);
  const [dataArtikel, setDataArtikel] = useState([]);
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [links, setLinks] = useState([]);

  // Fungsi untuk handle like (termasuk toggle)
  const handleLikeClick = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
      setTotalVotes({ likes: likes - 1, dislikes: dislikes });
    } else if (hasDisliked) {
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setHasLiked(true);
      setHasDisliked(false);
      setTotalVotes({ likes: likes + 1, dislikes: dislikes - 1 });
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
      setTotalVotes({ likes: likes + 1, dislikes: dislikes });
    }
  };

  // Fungsi untuk handle dislike (termasuk toggle)
  const handleDislikeClick = () => {
    if (hasDisliked) {
      setDislikes(dislikes - 1);
      setHasDisliked(false);
      setTotalVotes({ likes: likes, dislikes: dislikes - 1 });
    } else if (hasLiked) {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setHasDisliked(true);
      setHasLiked(false);
      setTotalVotes({ likes: likes - 1, dislikes: dislikes + 1 });
    } else {
      setDislikes(dislikes + 1);
      setHasDisliked(true);
      setTotalVotes({ likes: likes, dislikes: dislikes + 1 });
    }
  };

  useEffect(() => {
    getVideos();
}, []);

const getVideos = async () => {
    try {
        const response = await axios.get("https://apisetda.vercel.app/video");
        const latestVideos = response.data.slice(-2); // Ambil 2 terakhir
        setLinks(latestVideos);
    } catch (error) {
        console.error("Error fetching videos:", error);
    }
};

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
    fetch('https://apisetda.vercel.app/artikelByTime')
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

  useEffect(() => {
    fetch('https://apisetda.vercel.app/pengumumanByTime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setDataPengumuman(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Menyimpan nilai like, dislike, dan status like/dislike ke localStorage saat berubah
  useEffect(() => {
    localStorage.setItem(`likes_${id}`, likes);
    localStorage.setItem(`dislikes_${id}`, dislikes);
    localStorage.setItem(`hasLiked_${id}`, hasLiked);
    localStorage.setItem(`hasDisliked_${id}`, hasDisliked);
  }, [likes, dislikes, hasLiked, hasDisliked]);


    useEffect(() => {
        // Misalnya ini API untuk mengambil data produk
        fetch(`https://apisetda.vercel.app/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Misalnya Anda hanya mengambil produk pertama dari hasil API
                setProducts(data); // Jika hanya satu produk, ambil langsung data[0]
            })
            .catch((error) => console.error(error));
    }, [id]); 

    if (!products) {
        return <div>Loading...</div>;
    }
    
    console.log(`Total Votes: Likes = ${totalVotes.likes}, Dislikes = ${totalVotes.dislikes}`);


  // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="wadah_content_berita margin_bottom_content_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_content_berita">
                    <div className="wadah_column_kiri">
                        <Row>
                            <Col xl={8} lg={8} md={12} sm={12}>
                                <div className="wadah_content_column_berita margin_right_politik_left">
                                    <h1 className="judul_berita_h1">{products.name}</h1>
                                    <div className="wadah_tanggal_hari_jam">
                                        <FaCalendar className="icon_calendar_content_politik margin_right_icon_calendar_content_politik" />
                                        <span className="span_calendar_content_politik">{format(new Date(products.updatedAt), "EEEE, d MMMM yyyy HH:mm 'WIB'", { locale: localeId })}</span>
                                    </div>
                                    <div className="wadah_img_deskrip">
                                        <div className="wadah_img_berita_politik">
                                            <img src={products.url} className="img_content_berita_politik" />
                                        </div>
                                        <div className="wadah_deskripsi_berita_politik">
                                            <span className="deskripsi_berita_politik">
                                                {products.deskrip_img}
                                            </span>
                                        </div>
                                        <div className="wadah_quotes_berita_politik">
                                            <span className="span_quotes_berita_politik">
                                                {products.parag_highlight}
                                            </span>
                                        </div>
                                        <div className="wadah_deskripsi_berita_all">
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_1}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_2}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_3}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_4}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_5}</span>
                                            </div>
                                            {links.map((video, index) => (
                                            <div key={index} className="wadah_baca_juga">
                                                <span className="span_baca_juga">Lihat juga: </span>
                                                <Link to={video.link} className="link_baca_juga">{video.link}</Link>
                                            </div>
                                            ))}
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_8}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_9}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_10}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_11}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{products.parag_12}</span>
                                            </div>
                                        </div>
                                        <div className="wadah_name_pewarta_editor_copyright">
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Penulis: {products.penulis}</span>
                                            </div>
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Editor: {products.editor}</span>
                                            </div>
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Copyright © ANTARA 2024</span>
                                            </div>
                                        </div>
                                        <div className="wadah_button_like_dislike margin_bottom_wadah_button_like_dislike">
                                            <div className="wadah_icon_like" onClick={handleLikeClick}>
                                                <AiOutlineLike className="icon_like" />
                                                <span className="total_like">{likes}</span>
                                            </div>
                                            <div className="wadah_icon_dislike" onClick={handleDislikeClick}>
                                                <AiOutlineDislike className="icon_dislike" />
                                                <span className="total_dislike">{dislikes}</span>
                                            </div>
                                        </div>
                                    </div>
                            <div className="wadah_content_politik_2">
                            </div>
                                </div>
                            </Col>                                                     
                            <Col xl={4} lg={4} md={12} sm={12}>
                                <div className="wadah_right_politik_all">
                                <div className="wadah_content_editor margin_bottom_editor margin_top_heading_terpopuler">
                                    <h4 className="judul_content_editor">Berita Terkini</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_sidebar margin_top_sidebar">
                                <Row>
                                {data
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 6) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={12} lg={12} md={12} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik margin_bottom_wadah_berita">
                                            <div className="wadah_img_politik">
                                                <img src={item.url} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <a href={`/berita/${item.id}`} className="link_deskrip_politik" onClick={() => window.location.reload()}>{truncateText(item.name, 50)}</a>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true, locale: localeId })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Row>
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentBerita;