import { Col, Row } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import img_politik from "../img/img_politik_1.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import img_hukum_1 from "../img/img_hukum_1.webp"
import img_hukum_2 from "../img/img_hukum_2.webp"
import img_hukum_3 from "../img/img_hukum_3.webp"
import img_hukum_4 from "../img/img_hukum_4.webp"
import axios from "axios"
import { formatDistanceToNow } from "date-fns";  // Import fungsi dari date-fns
import { id } from 'date-fns/locale';
import { useEffect, useState } from "react"

function ComponentSearch () {
     // Fungsi untuk mengambil query parameter dari URL
     const useQuery = () => {
        return new URLSearchParams(useLocation().search);
      };

      const [articles, setArticles] = useState([]); // State untuk menyimpan data artikel
      const [loading, setLoading] = useState(true); // State untuk menandai apakah data masih dalam proses pengambilan
      const [pengumuman, setPengumuman] = useState([]); // State untuk menyimpan data pengumuman
      const [products, setProducts] = useState([]); // State untuk menyimpan data produk
      const [error, setError] = useState(null); // State untuk menyimpan error
      const query = useQuery();
      const searchTerm = query.get('query') || ''; // Mengambil query dari URL
      const navigate = useNavigate(); // Hook untuk navigasi

      useEffect(() => {
        if (!searchTerm.trim()) {
          navigate('/as'); // Redirect ke halaman utama jika tidak ada searchTerm
        }
      }, [searchTerm, navigate]);

      useEffect(() => {
        const fetchArticles = async () => {
          try {
            setLoading(true);
            const [articlesRes, pengumumanRes, productsRes] = await Promise.all([
              axios.get('https://apisetda.vercel.app/artikel'),    // API untuk artikel
              axios.get('https://apisetda.vercel.app/pengumuman'), // API untuk pengumuman
              axios.get('https://apisetda.vercel.app/products')    // API untuk produk
            ]);
          setArticles(articlesRes.data); // Menyimpan data artikel
          setPengumuman(pengumumanRes.data); // Menyimpan data pengumuman
          setProducts(productsRes.data); // Menyimpan data produk
          } catch (err) {
            setError('Gagal mengambil data dari API'); // Menyimpan error
          } finally {
            setLoading(false); // Mengakhiri loading
          }
        };
    
        fetchArticles(); // Panggil fungsi fetch data
      }, []);
    
    // Filter artikel, pengumuman, dan produk berdasarkan query dari URL
  const filteredArticles = articles.filter((article) =>
    article.name_artikel?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPengumuman = pengumuman.filter((item) =>
    item.name_pengumuman?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

    if (loading) {
      return <div>Loading...</div>; // Tampilkan pesan loading
    }

    if (error) {
      return <div>{error}</div>; // Tampilkan pesan error jika ada
    }

    // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="wadah_component_berita margin_bottom_wadah_component_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_component_berita">
                    <div className="wadah_content_component_berita_2">
                        <div className="wadah_content_editor margin_bottom_editor">
                            <h4 className="judul_content_editor">Search</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                                <Row>
                                    {filteredArticles.map((artikel) => (
                                    <Col xl={3} lg={3} md={6} sm={12} key={artikel.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={artikel.url_artikel} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`/artikel/${artikel.id}`} className="link_deskrip_politik">{truncateText(artikel.name_artikel, 55)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(artikel.createdAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                     ))}

                                    {filteredProducts.map((product) => (
                                    <Col xl={3} lg={3} md={6} sm={12} key={product.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={product.url} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`/berita/${product.id}`} className="link_deskrip_politik">{truncateText(product.name, 55)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                     ))}

                                    {filteredPengumuman.map((pengumuman) => (
                                    <Col xl={3} lg={3} md={6} sm={12} key={pengumuman.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={pengumuman.url_pengumuman} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`/pengumuman/${pengumuman.id}`} className="link_deskrip_politik">{truncateText(pengumuman.name_pengumuman, 55)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(pengumuman.createdAt), { addSuffix: true, locale: id })}</span>
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

export default ComponentSearch;