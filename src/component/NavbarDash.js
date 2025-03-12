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
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import pasuruan from "../img/pasuruan.png"

function NavbarDash () {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Hook untuk navigasi
    
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

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
 
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

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
                            <div className={`wadah_icon_close_navbar ${isNavbarVisible ? 'wadah_icon_close_navbar_close' : ''}`}>
                                <div className="wadah_icon_close_navbar_2">
                                    <div className="wadah_icon_close_navbar_3" onClick={closeNavbar}>
                                        <IoMdClose className="icon_close_navbar" />
                                    </div>
                                </div>
                                <div className="wadah_link_navbar_2">
                                    <input type="search" onChange={handleSearch} value={searchTerm} onKeyDown={handleKeyPress} placeholder="Search" className="content_search display_none_search" />
                                    <Link to="/hubungi-kami" className="content_link_navbar_2 condawal_none">
                                        <FaUser className="icon_user_dashboard margin_right_user_icon" />
                                        <span>{name.toUpperCase()}</span>
                                    </Link>
                                    <Link to="/dashboard" className="content_link_navbar_2">DASHBOARD</Link>
                                    <Link to="/dashboard/berita"  className="content_link_navbar_2">BERITA</Link>
                                    <Link to="/dashboard/video" className="content_link_navbar_2">VIDEO</Link>
                                    <Link to="#" className="content_link_navbar_2 margin_left_user display_none_search">
                                        <FaUser className="icon_user_dashboard" />
                                    </Link>
                                    <Link className="content_link_navbar_2 display_none_search">{name.toUpperCase()}</Link>  
                                    <Link onClick={Logout} className="content_link_navbar_2">LOGOUT</Link>                              
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

export default NavbarDash;