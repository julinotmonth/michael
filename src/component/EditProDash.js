import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavbarDash from "./NavbarDash";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";

const EditProDash = () => {
    const [title, setTitle] = useState("");
    const [deskrip_img, setDeskrip_img] = useState("");
    const [parag_highlight, setParag_highlight] = useState("");
    const [parag_1, setParag_1] = useState("");
    const [parag_2, setParag_2] = useState("");
    const [parag_3, setParag_3] = useState("");
    const [parag_4, setParag_4] = useState("");
    const [parag_5, setParag_5] = useState("");
    const [parag_6, setParag_6] = useState("");
    const [parag_7, setParag_7] = useState("");
    const [parag_8, setParag_8] = useState("");
    const [parag_9, setParag_9] = useState("");
    const [parag_10, setParag_10] = useState("");
    const [parag_11, setParag_11] = useState("");
    const [parag_12, setParag_12] = useState("");
    const [penulis, setPenulis] = useState("");
    const [editor, setEditor] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`https://apisetda-celqmkjh5-jejes-projects-b99a87db.vercel.app/products/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
        setEditor(response.data.editor);
        setPenulis(response.data.penulis);
        setDeskrip_img(response.data.deskrip_img);
        setParag_highlight(response.data.parag_highlight);
        setParag_1(response.data.parag_1);
        setParag_2(response.data.parag_2);
        setParag_3(response.data.parag_3);
        setParag_4(response.data.parag_4);
        setParag_5(response.data.parag_5);
        setParag_6(response.data.parag_6);
        setParag_7(response.data.parag_7);
        setParag_8(response.data.parag_8);
        setParag_9(response.data.parag_9);
        setParag_10(response.data.parag_10);
        setParag_11(response.data.parag_11);
        setParag_12(response.data.parag_12);
    }
    
    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image))
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("deskrip_img", deskrip_img);
        formData.append("parag_highlight", parag_highlight);
        formData.append("parag_1", parag_1);
        formData.append("parag_2", parag_2);
        formData.append("parag_3", parag_3);
        formData.append("parag_4", parag_4);
        formData.append("parag_5", parag_5);
        formData.append("parag_6", parag_6);
        formData.append("parag_7", parag_7);
        formData.append("parag_8", parag_8);
        formData.append("parag_9", parag_9);
        formData.append("parag_10", parag_10);
        formData.append("parag_11", parag_11);
        formData.append("parag_12", parag_12);
        formData.append("penulis", penulis);
        formData.append("editor", editor);
        try {
            await axios.patch(`https://apisetda-celqmkjh5-jejes-projects-b99a87db.vercel.app/products/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/dashboard/berita")
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
              <h4 className="judul_content_editor" style={{marginTop: '20px'}}>Edit Berita</h4>
          </Col>
      </Row>
      <div className="wadah_garis_editor">
          <div className="wadah_garis_editor_2"></div>
      </div>
        <div className="columns is-centered">
      <div className="column is-half" style={{marginTop: '25px'}}>
        <form onSubmit={updateProduct}>
          <div className="field">
            <label className="styling_name_produk_add">DESKRIPSI GAMBAR</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
              <input
                type="text"
                className="input_name_produk_add"
                value={deskrip_img}
                onChange={(e) => setDeskrip_img(e.target.value)}
                placeholder="deskrip_img"
                style={{marginBottom: '15px'}}
              />
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">JUDUL BERITA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
                <input
                    type="text"
                    className="input_name_produk_add"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="judul"
                    style={{marginBottom: '15px'}}
                />
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">HIGHLIGHT BERITA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_highlight}
                onChange={(e) => setParag_highlight(e.target.value)}
                placeholder="parag_highlight"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH PERTAMA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_1}
                onChange={(e) => setParag_1(e.target.value)}
                placeholder="parag_1"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KEDUA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_2}
                onChange={(e) => setParag_2(e.target.value)}
                placeholder="parag_2"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KETIGA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_3}
                onChange={(e) => setParag_3(e.target.value)}
                placeholder="parag_3"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KEEMPAT</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_4}
                onChange={(e) => setParag_4(e.target.value)}
                placeholder="parag_4"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KELIMA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_5}
                onChange={(e) => setParag_5(e.target.value)}
                placeholder="parag_5"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KEENAM</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_6}
                onChange={(e) => setParag_6(e.target.value)}
                placeholder="parag_6"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KETUJUH</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_7}
                onChange={(e) => setParag_7(e.target.value)}
                placeholder="parag_7"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KEDELAPAN</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_8}
                onChange={(e) => setParag_8(e.target.value)}
                placeholder="parag_8"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KESEMBILAN</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_9}
                onChange={(e) => setParag_9(e.target.value)}
                placeholder="parag_9"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KESEPULUH</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_10}
                onChange={(e) => setParag_10(e.target.value)}
                placeholder="parag_10"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KESEBELAS</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_11}
                onChange={(e) => setParag_11(e.target.value)}
                placeholder="parag_11"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PARAGRAPH KEDUABELAS</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={parag_12}
                onChange={(e) => setParag_12(e.target.value)}
                placeholder="parag_12"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">PENULIS BERITA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="penulis"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
            <label className="styling_name_produk_add">EDITOR BERITA</label>
            <Row>
              <Col xl={6} lg={6}>
            <div className="control">
            <input
                type="text"
                className="input_name_produk_add"
                value={editor}
                onChange={(e) => setEditor(e.target.value)}
                placeholder="editor"
                style={{marginBottom: '15px'}}
              />    
            </div>
            </Col>
            </Row>
          </div>
          
          <div className="field">
          <label className="styling_name_produk_add">IMAGE BERITA</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
 
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
 
          <div className="field" style={{marginBottom: '15px', marginTop: '15px'}}>
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

export default EditProDash;