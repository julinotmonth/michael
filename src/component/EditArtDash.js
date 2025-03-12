import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import NavbarDash from "./NavbarDash";
import Footer from "./Footer";

const EditArtDash = () => {
    const [link, setLink] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getVideoById();
    }, []);

    const getVideoById = async () => {
        const response = await axios.get(`https://apisetda.vercel.app/video/${id}`);
        setLink(response.data.link);
    }

    const updateVideo = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("link", link);
        try {
            await axios.patch(`https://apisetda.vercel.app/video/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/dashboard/video")
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
      <>
      <NavbarDash />
      <div className="margin_kanankiri">
      <Row>
          <Col xl={11} lg={11} md={11} sm={9} xs={9}>
              <h4 className="judul_content_editor" style={{marginTop: '20px'}}>Edit Video</h4>
          </Col>
      </Row>
      <div className="wadah_garis_editor">
          <div className="wadah_garis_editor_2"></div>
      </div>
        <div className="columns is-centered">
      <div className="column is-half" style={{marginTop: '25px'}}>
        <form onSubmit={updateVideo}>
          <div className="field">
            <label className="styling_name_produk_add">LINK VIDEO</label>
            <Row>
              <Col xl={6} lg={6}>
                <div className="control">
                  <input
                    type="text"
                    className="input_name_produk_add"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="masukkan link video"
                  />
                </div>
              </Col>
            </Row>
          </div>
            
          <div className="field" style={{marginTop: '15px', marginBottom: '25px'}}>
            <div className="control">
              <button type="submit" className="button_send_simpan">
                UPDATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    <Footer />
    </>
    );

};

export default EditArtDash;