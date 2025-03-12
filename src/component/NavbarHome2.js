import { Col, NavDropdown, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import antara from "../img/antara.svg"
import kupukupu from "../img/kupukupu.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import img_setda from "../img/img_setda.png"
import { IoSearch } from "react-icons/io5";
import pasuruan from "../img/pasuruan.png"


function NavbarHome2 () {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Hook untuk navigasi

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    const closeNavbar = () => {
        setIsNavbarVisible(false);
    };
    
    // Function untuk mendeteksi scroll dan menambahkan sticky class
  const handleScroll = () => {
    if (window.scrollY > 50) {
        setSticky(true);
    } else {
        setSticky(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Fungsi untuk menangani perubahan input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fungsi untuk menangani tombol Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      // Navigasi ke halaman hasil pencarian
      navigate(`/search?query=${searchTerm}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Bersihkan listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className={`wadah_navbar_2 ${isSticky ? 'sticky' : ''}`}>
            <div className="margin_kanankiri">
                <div className="wadah_content_navbar_2">
                    <Row>
                        <Col xl={3} lg={2} md={3} sm={6} xs={6}>
                            <Link>
                                <img src={pasuruan} className="content_img_logo" />
                            </Link>
                        </Col>
                        <Col xl={9} lg={10} md={9} sm={6} xs={6}>
                            <div style={{textAlign: 'right'}} className={`wadah_icon_close_navbar ${isNavbarVisible ? 'wadah_icon_close_navbar_close' : ''}`}>
                                <div className="wadah_icon_close_navbar_2">
                                    <div className="wadah_icon_close_navbar_3" onClick={closeNavbar}>
                                        <IoMdClose className="icon_close_navbar" />
                                    </div>
                                </div>
                                <div className="wadah_link_navbar_2">
                                    <input type="search" onChange={handleSearch} value={searchTerm} onKeyDown={handleKeyPress} placeholder="Search" className="content_search" />
                                    <Link to="/" className="content_link_navbar_2">BERANDA</Link>
                                    <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="PROFIL"
                                    className="wadah_dropdown content_link_navbar_2"
                                    >
                                    <NavDropdown.Item className="link_dropdown_navbar_2" href="/visi-misi">Visi & Misi</NavDropdown.Item>
                                    <NavDropdown.Item className="link_dropdown_navbar_2" href="/struktur-organisasi">Struktur Organisasi</NavDropdown.Item>
                                    <NavDropdown.Item 
                                    className="link_dropdown_navbar_2" 
                                    href="/profil-kepala-desa"
                                    >Profil Kepala Desa</NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to="/berita" className="content_link_navbar_2">BERITA</Link>
                                    <Link to="/video" className="content_link_navbar_2">VIDEO</Link>
                                    <Link to="/hubungi-kami" className="content_link_navbar_2">HUBUNGI KAMI</Link>
                                    <Link onClick={toggleSearch} className="content_link_navbar_2 display_none_content_search"><IoIosSearch className="content_search_navbar_2" /></Link>
                                </div>
                            </div>

                            <div className="wadah_hamburger_1">
                                <div className="wadah_hamburger" onClick={toggleNavbar}>
                                    <RxHamburgerMenu className="content_hamburger" />
                                </div>
                            </div>
                        </Col> 
                        <Col xl={12}>
                            <div className={`wadah_content_input_search ${isSearchVisible ? 'show' : ''}`}>
                                <input placeholder="Kata Kunci" onChange={handleSearch} value={searchTerm} onKeyDown={handleKeyPress} type="search" className="input_search_navbar" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default NavbarHome2;