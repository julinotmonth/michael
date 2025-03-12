import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavbarHome () {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const date = new Date();
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = [
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
          'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
    
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
    
        setCurrentDate(`${dayName}, ${day} ${month} ${year}`);
      }, []);
    return (
        <div className="wadah_navbar">
            <div className='margin_kanankiri'>
                <div className='wadah_content_1'>
                    <Row>
                        <Col xl={8}>
                            <div className='wadah_content_navbar_1'>
                                <Link to="/login" className='link_content_navbar_1 margin_right_content_navbar_1'>Login</Link>
                                <Link to="/berita" className='link_content_navbar_1 margin_right_content_navbar_1'>Berita</Link>
                                <Link to="/video" className='link_content_navbar_1'>Video</Link>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className='wadah_icon_navbar'>
                                <span className='content_tanggal_now'>{currentDate}</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default NavbarHome;