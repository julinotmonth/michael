import { Col, Row } from "react-bootstrap";
import img_ekonomi_1 from "../img/img_ekonomi_1.webp"
import img_ekonomi_2 from "../img/img_ekonomi_2.webp"
import img_ekonomi_3 from "../img/img_ekonomi_3.webp"
import img_ekonomi_4 from "../img/img_ekonomi_4.webp"
import img_mata_1 from "../img/img_mata_1.webp"
import img_mata_2 from "../img/img_mata_2.webp"
import img_mata_3 from "../img/img_mata_3.webp"
import img_mata_4 from "../img/img_mata_4.webp"
import img_content_antara from "../img/img_content_antara.webp"
import img_content_antara_2 from "../img/img_content_antara_2.webp"
import img_content_antara_3 from "../img/img_content_antara_3.webp"
import img_content_antara_4 from "../img/img_content_antara_4.webp"
import img_background_antara from "../img/img_background_antara.png"
import img_metro_1 from "../img/img_metro_1.webp"
import img_metro_2 from "../img/img_metro_2.webp"
import img_metro_3 from "../img/img_metro_3.webp"
import img_metro_4 from "../img/img_metro_4.webp"
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { InstagramEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';
import poster_hari_anak from "../img/poster_hari_anak.jpeg"
import { XEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';


function Ekonomi () {
    return (
        <div className="wadah_ekonomi" style={{marginTop: '20px'}}>
            <div className="margin_kanankiri">
                <div className="wadah_content_ekonomi">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12}>
                            <div className="wadah_content_editor margin_bottom_editor">
                                <h4 className="judul_content_editor">Facebook</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="wadah_content_politik_2">
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_facebook margin_bottom_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/157324148011531/photos/pb.100064600665360.-2207520000/452949275115682/?type=3" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_facebook margin_bottom_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/157324148011531/photos/pb.100064600665360.-2207520000/395472644196679/?type=3" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_facebook margin_bottom_facebook_767">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/permalink.php?story_fbid=pfbid02ThfMEfie5koMPHDtsJZAJdHi7teZEixSw5UEzWNX7jbZ6bE3mG2USTQMd7U56fx9l&id=157324148011531" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/157324148011531/photos/pb.100064600665360.-2207520000/387988621611748/?type=3" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            </div>  
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Ekonomi;