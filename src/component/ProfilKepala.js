import { Col, Row, Table } from "react-bootstrap";
import profil_kepala_biro from "../img/profil_kepala_biro.png"
import profil_kepala_biro_2 from "../img/kepala_biro_2.jpg"
import kepala_desa from "../img/kepala_desa.png"

function ProfilKepala () {
    return (
        <div className="wadah_profilKepala margin_bottom_wadah_profil_kepala">
            <div className="margin_kanankiri">
                <div className="wadah_content_profil_kepala">
                    <div className="wadah_content_profil_kepala_2">
                        <Row>
                            <Col xl={6} lg={6} md={12}>
                                <div className="wadah_bioadata_dan_tugas margin_bottom_wadah_bioadata_dan_tugas">
                                    <span className="span_garis_biodata"></span>
                                    <span className="heading_profil_pejabat">PROFIL KEPALA DESA</span>
                                </div>
                                <div className="wadah_heading_kepala_biro">
                                    <h3 className="heading_kepala_biro_1">Kepala Desa</h3>
                                    <span className="heading_kepala_biro_2">SumberPitu</span>
                                </div>
                                <div className="wadah_sekretariat_daerah">
                                    <span className="span_sekretariat_daearah">Sekretariat Daerah Provinsi Jawa Timur</span>
                                </div>
                                <div className="wadah_table_biodata margin_bottom_table_biodata">
                                    <Table striped>
                                        <tbody className="wadah_table_body">
                                            <tr className="border_column_table">
                                                <td>Nama</td>
                                                <td>:</td>
                                                <td className="last_padding_column">PULUNG CHAUSAR, S.STP, M.Si</td>
                                            </tr>
                                            <tr className="border_column_table">
                                                <td>Agama</td>
                                                <td>:</td>
                                                <td className="last_padding_column">Islam</td>
                                            </tr>
                                            <tr className="border_column_table">
                                                <td>Jabatan</td>
                                                <td>:</td>
                                                <td className="last_padding_column">Kepala Desa SumberPitu</td>
                                            </tr>
                                            <tr className="border_column_table">
                                                <td>Alamat</td>
                                                <td>:</td>
                                                <td className="last_padding_column">Jalan Pahlawan No. 110 Surabaya</td>
                                            </tr>
                                            <tr className="border_column_table">
                                                <td>Latar Belakang</td>
                                                <td>:</td>
                                                <td className="last_padding_column">Lulusan IPDN Angkatan 11</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="wadah_deskrisi_tugas">
                                    <span className="span_tugas_deskripsi">Tugas :</span>
                                    <p className="paragraf_tugas_deskripsi">membantu Asisten Administrasi Umum dalam Menyiapkan pelaksanaan kebijakan, Melaksanakan pemantauan dan evaluasi di bidang perencanaan dan kepegawaian Sekretariat Daerah, materi dan komunikasi pimpinan serta protokol.</p>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <div className="wadah_column_img_1 margin_left_wadah_column_img_1">
                                    <div className="wadah_content_img_2">
                                        <img src={kepala_desa} className="img_content_2" />
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


export default ProfilKepala;