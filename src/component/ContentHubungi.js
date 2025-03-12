import { Col, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import icon_instagram from "../img/icon_instagram.png";
import icon_facebook from "../img/icon_facebook.png"
import icon_twitter from "../img/icon_twitter.png"

function ContentHubungi () {
    return (
        <div className="wadah_content_hubungi padding_top_content_hubungi">
            <div className="margin_kanankiri">
                <div className="content_content_hubungi">
                    <div className="content_content_hubungi_2">
                        <Row>
                            <Col xl={6} lg={6} md={6}>
                                <div className="wadah_content_contact_us">
                                    <div className="wadah_hubungi_kami margin_bottom_hubungi_kami">
                                        <span className="span_hubungi_kami">Kontak Kami</span>
                                        <span className="judul_hubungi_kami">Hubungi Kami</span>
                                    </div>

                                    <div className="wadah_contact_person">
                                        <Link to="#">
                                            <div className="wadah_icon_contact">
                                                <BsFillTelephoneFill className="icon_contact_person" />
                                            </div>
                                        </Link>
                                        <div className="wadah_no_ponsel">
                                            <Link className="link_no_ponsel">
                                                Phone : 087761586485
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="wadah_contact_person margin_top_contact_person">
                                        <Link to="#">
                                            <div className="wadah_icon_contact">
                                                <FaWhatsapp  className="icon_contact_person" />
                                            </div>
                                        </Link>
                                        <div className="wadah_no_ponsel">
                                            <Link className="link_no_ponsel">
                                                Whatsapp : 087761586485
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="wadah_contact_person margin_top_contact_person">
                                        <Link to="#">
                                            <div className="wadah_icon_contact">
                                                <TbWorld   className="icon_contact_person" />
                                            </div>
                                        </Link>
                                        <div className="wadah_no_ponsel">
                                            <Link className="link_no_ponsel">
                                                https://balaidesa.sumberpitu.go.id/
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="wadah_alamat_contact">
                                        <div className="wadah_judul_alamat_contact">
                                            <span className="span_judul_alamat_contact">Alamat</span>
                                        </div>
                                        <div className="wadah_judul_alamat_company">
                                            <span className="span_alamat_company">Desa Sumber Pitu, Kec. Tutur, Pasuruan, Jawa Timur 67165</span>
                                        </div>
                                    </div>

                                    <div className="wadah_icon_medsos_contact margin_top_medsos_contacts_1">
                                        <div className="wadah_icon_medsos_contact margin_right_medsos_contact">
                                            <Link>
                                                <img src={icon_instagram} className="icon_medsos" />
                                            </Link>
                                        </div>
                                        <div className="wadah_icon_medsos_contact margin_right_medsos_contact">
                                            <Link>
                                                <img src={icon_facebook} className="icon_medsos" />
                                            </Link>
                                        </div>

                                        <div className="wadah_icon_medsos_contact margin_right_medsos_contact margin_bottom_last_icon">
                                            <Link>
                                                <img src={icon_twitter} className="icon_medsos_twitter" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6}>
                                <div className="wadah_from_contact_1">
                                    <div className="wadah_from_contact_2">
                                        <div className="wadah_leave_message">
                                            <span className="judul_leave_message">Leave A Message</span>
                                        </div>
                                        <div className="wadah_form_input_message">
                                            <form action="mailto:akhmdjzl17@gmail.com">
                                                <div className="wadah_input_emal margin_bottom_input_email">
                                                    <input type="text" className="content_input_email" placeholder="Nama" />
                                                </div>
                                                <div className="wadah_input_emal margin_bottom_input_email">
                                                    <input type="text" className="content_input_email" placeholder="E-mail" />
                                                </div>
                                                <div className="wadah_input_emal margin_bottom_input_email">
                                                    <input type="text" className="content_input_email" placeholder="Nomor Hp" />
                                                </div>
                                                <div className="wadah_text_area">
                                                    <textarea placeholder="Pesan" className="content_text_area" rows="6"></textarea>
                                                </div>
                                                <div className="wadah_button_kirim_pesan">
                                                    <button className="button_kirim_pesan">Kirim Pesan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <div className="wadah_maps">
                                    <div style={{width: '100%'}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=-7.836483290445437,%20112.80870008261319+(Balai%20Desa%20Sumberpitu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentHubungi;