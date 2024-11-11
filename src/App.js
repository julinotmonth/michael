import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import PagesPolitik from './pages/PagesPolitik';
import BeritaPolitik from './pages/BeritaPolitik';
import BeritaHukum from './pages/BeritaHukum';
import PagesHukum from './pages/PagesHukum';
import VisiMisi from './pages/VisiMisi';
import TugasFungsi from './pages/TugasFungsi';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import ProfilKb from './pages/ProfilKb';
import Whistle from './pages/Whistle';
import Artikel from './pages/Artikel';
import Berita from './pages/Berita';
import Pengumuman from './pages/Pengumuman';
import Footer from './component/Footer';
import Video from './pages/Video';
import Hubungi from './pages/Hubungi';
import Download from './pages/Download';
import SubBerita from './pages/SubBerita';
import SubArtikel from './pages/SubArtikel';
import SubPengumuman from './pages/SubPengumuman';
import EditProduct from './component/EditProduct';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import AddArtikel from './component/AddArtikel';
import EditArtikel from './component/EditArtikel';
import ArtikelList from './component/ArtikelList';
import EditPengumuman from './component/EditPengumuman';
import AddPengumuman from './component/AddPengumuman';
import PengumumanList from './component/PengumumanList';
import LoginPages from './pages/LoginPages';
import Register from './component/Register';
import PagesDashboard from './pages/PagesDashboard';
import PagesSearch from './pages/PagesSearch';
import NavbarHome from './component/NavbarHome';
import NotFound from './component/NotFound';
import BeritaDashboard from './component/BeritaDashboard';
import PagesDashBerita from './pages/PagesDashBerita';
import AddProDash from './component/AddProDash';
import EditProDash from './component/EditProDash';
import PaDashAr from './pages/PaDashAr';
import EditArtDash from './component/EditArtDash';
import AddArtDash from './component/AddArtDash';
import PengumumanDash from './component/PengumumanDash';
import PapesDash from './pages/PapesDash';
import AddpengDash from './component/AddPengDash';
import EditPengDash from './component/EditPengDash';


function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/michael' element={<LoginPages />} />
              <Route path='/dashboard' element={<PagesDashboard />} />
              <Route path='/dashboard/berita' element={<PagesDashBerita />} />
              <Route path='/dashboard/berita/add-berita' element={<AddProDash />} />
              <Route path='/dashboard/berita/edit-berita/:id' element={<EditProDash />} />
              <Route path='/dashboard/artikel' element={<PaDashAr />} />
              <Route path='/dashboard/artikel/add-artikel' element={<AddArtDash />} />
              <Route path='/dashboard/artikel/edit-artikel/:id' element={<EditArtDash />} />
              <Route path='/dashboard/pengumuman' element={<PapesDash />} />
              <Route path='/dashboard/pengumuman/add-pengumuman' element={<AddpengDash />} />
              <Route path='/dashboard/pengumuman/edit-pengumuman/:id' element={<EditPengDash />} />
              <Route path='/login' element={<LoginPages />} />
              <Route path='/laporan-kinerja' element={<PagesPolitik />} />
              <Route path='/visi-misi' element={<VisiMisi />} />
              <Route path='/tugas&fungsi' element={<TugasFungsi />} />
              <Route path='/struktur-organisasi' element={<StrukturOrganisasi />} />
              <Route path='/profil-kepala-biro' element={<ProfilKb />} />
              <Route path='/whistle-blowing' element={<Whistle />} />
              <Route path='/artikel' element={<Artikel />} />
              <Route path='/artikel/:id' element={<SubArtikel />} />
              <Route path='/berita' element={<Berita />} />
              <Route path='/search' element={<PagesSearch />} />
              <Route path='/berita/:id' element={<SubBerita />} />
              <Route path='/pengumuman' element={<Pengumuman />} />
              <Route path='/pengumuman/:id' element={<SubPengumuman />} />
              <Route path='/download' element={<Download />} />
              <Route path='/video' element={<Video />} />
              <Route path='/hubungi-kami' element={<Hubungi />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
