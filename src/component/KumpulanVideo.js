import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { YouTubeEmbed } from 'react-social-media-embed';

function KumpulanVideo () {
    const [link, setLink] = useState([]);
        useEffect(() => {
            getVideo();
        }, []);
    const getVideo = async () => {
        const response = await axios.get("http://localhost:5000/video");
        setLink(response.data)
    };
    return (
        <div className="wadah_kumpulan_video margin_bottom_kumpulan_video">
            <div className="margin_kanankiri">
                <div className="wadah_content_video_all">
                    <div className="wadah_cobtent_video_1">
                        <div className="wadah_content_editor margin_bottom_editor">
                            <h4 className="judul_content_editor">Video</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                        <Row>
                            {link.map((links) => (
                            <Col xl={4} lg={4} md={6} key={links.id}>
                                <div className="wadah_video_yt_column margin_bottom_video_column">
                                    <YouTubeEmbed url={links.link} width="100%"  />
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

export default KumpulanVideo;