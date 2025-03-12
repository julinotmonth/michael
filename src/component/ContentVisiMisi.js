import { Col, Row } from "react-bootstrap";
import foto_kepala_biro from "../img/foto_kepala_biro.jpg"
import kepala_desa from "../img/kepala_desa.png"

function ContentVisiMisi () {
    return (
        <div className="wadah_contentVisiMisi">
            <div className="margin_kanankiri">
                <div className="wadah_content_visi_misi_1 margin_bottom_wadah_content_visi_misi_1">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12}>
                            <div className="wadah_content_visi_misi_2 border_bottom_visi">
                                <img src={kepala_desa} className="content_img_visi_misi" />
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12}>
                            <div className="wadah_content_visi_misi_3 padding_15px_visimisi border_left_visimisi">
                                <div className="wadah_visi border_bottom_visimisi padding_top_visimisi_1">
                                    <span className="span_judul_visi">Pengertian Visi & Misi</span>
                                    <p className="deskripsi_visi">Visi dan Misi merupakan grand target yang ditetapkan oleh Kepala Daerah dan Wakil Kepala Daerah pada Perubahan Rencana Pembangunan Jangka Menengah Daerah (RPJMD) Provinsi Jawa Timur tahun 2019-2024 yang kemudian diterjemahkan kedalam Perubahan Rencana Strategis (Renstra) Perangkat Daerah Biro Administrasi Pimpinan tahun 2019-2024, Adapun keterkaitan Visi, Misi, Tujuan dan Sasaran Biro Administrasi Pimpinan sebagai berikut :</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Visi</span>
                                    <p className="deskripsi_visi">MENUJU DESA SUMBERPITU YANG RELEGIUS,
SEJAHTERAH, BERKEADILAN, MASYARAKAT
CERDAS, BERKUALITAS MENUJU KEMAKMURAN
MASYARAKAT YANG ADIL DAN MERATA</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Misi</span>
                                    <p className="deskripsi_visi">Mewujudkan pemerataan pembangunan dan hasil-hasilnya
yang dapat dirasakan oleh masyarakat desa tanpa
memandang kepentingan politik, sara antar golongan</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Tujuan</span>
                                    <p className="deskripsi_visi">Memperkuat insfratruktur untuk mendukung
                                    pengembangan ekonomi dan pelayanan dasar.</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Sasaran</span>
                                    <p className="deskripsi_visi">Publikasi dan Informasi Kepada Masyarakat, Meningkatkan Kapasitas Tenaga Keamanan dan Ketertiban
                                    Umum, Kesiapsiagaan Menghadapi Keadaan Mendesak/ Darurat, Memperlancar Transportasi Masyarakat</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ContentVisiMisi;