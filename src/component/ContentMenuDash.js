import { Button, Card, Col, Row } from "react-bootstrap";
import news from "../img/news.jpg"
import artikel from "../img/artikel.jpg"
import pengumuman from "../img/pengumuman.png"
import { Link } from "react-router-dom";

function ContentMenuDash () {
    return (
        <div className="wadah_content_menu_dash">
            <div className="margin_kanankiri">
                <div className="content_menu_dash">
                    <Row>
                            <Col xl={4} lg={4}>
                                <div className="content_menu_dash_2">
                                    <Card>
                                    <Card.Img variant="top" src={news} />
                                    <Card.Body>
                                        <Card.Title className="fontsizebold">Berita</Card.Title>
                                        <Card.Text>
                                            Masuk jika ingin melihat menambahkan atau menghapus berita
                                        </Card.Text>
                                        <Link to="berita">
                                            <Button variant="primary">Masuk</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </Col>  

                            <Col xl={4} lg={4}>
                                <div className="content_menu_dash_2">
                                    <Card>
                                    <Card.Img variant="top" src={artikel} />
                                    <Card.Body>
                                        <Card.Title className="fontsizebold">Artikel</Card.Title>
                                        <Card.Text>
                                            Masuk jika ingin melihat menambahkan atau menghapus Artikel
                                        </Card.Text>
                                        <Link to="artikel">
                                            <Button variant="primary">Masuk</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col xl={4} lg={4}>
                                <div className="content_menu_dash_2">
                                    <Card>
                                    <Card.Img variant="top" src={news} />
                                    <Card.Body>
                                        <Card.Title className="fontsizebold">Pengumuman</Card.Title>
                                        <Card.Text>
                                            Masuk jika ingin melihat menambahkan atau menghapus Artikel
                                        </Card.Text>
                                        <Link to="pengumuman">
                                            <Button variant="primary">Masuk</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ContentMenuDash;