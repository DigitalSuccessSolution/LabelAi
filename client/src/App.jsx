import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ImageAnnotation from "./pages/ImageAnnotation";
import VideoAnnotation from "./pages/VideoAnnotation";
import AudioAnnotation from "./pages/AudioAnnotation";
import NaturalLanguageProcessing from "./pages/NaturalLanguageProcessing";
import Lidar3DAnnotation from "./pages/Lidar3DAnnotation";
import MultimodalAnnotation from "./pages/MultimodalAnnotation";
import DataClassification from "./pages/DataClassification";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import AutonomousVehicles from './pages/AutonomousVehicles';
import MedicalHealthcare from './pages/MedicalHealthcare';
import ECommerceRetail from './pages/ECommerceRetail';
import MediaEntertainment from './pages/MediaEntertainment';
import EducationEdtech from './pages/EducationEdtech';
import Manufacturing from './pages/Manufacturing';
import Agriculture from './pages/Agriculture';
import AutonomousMobilityCaseStudy from './pages/case-studies/AutonomousMobility';
import EcommerceRetailCaseStudy from './pages/case-studies/EcommerceRetail';
import AgricultureAgritechCaseStudy from './pages/case-studies/AgricultureAgritech';
import MediaEntertainmentCaseStudy from './pages/case-studies/MediaEntertainment';
import EducationEdtechCaseStudy from './pages/case-studies/EducationEdtech';
import ManufacturingIndustrialCaseStudy from './pages/case-studies/ManufacturingIndustrial';
import MedicalHealthcareCaseStudy from './pages/case-studies/MedicalHealthcare';
import About from './pages/About';
import QualityCompliance from './pages/QualityCompliance';

// Admin Sub-pages
import ContactsTab from './components/admin/ContactsTab';
import JobsTab from './components/admin/JobsTab';
import ApplicationsTab from './components/admin/ApplicationsTab';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality-compliance" element={<QualityCompliance />} />
        <Route path="/services/image-annotation" element={<ImageAnnotation />} />
        <Route path="/services/video-annotation" element={<VideoAnnotation />} />
        <Route path="/services/audio-annotation" element={<AudioAnnotation />} />
        <Route path="/services/nlp-datasets" element={<NaturalLanguageProcessing />} />
        <Route path="/services/lidar-3d" element={<Lidar3DAnnotation />} />
        <Route path="/services/multimodal-annotation" element={<MultimodalAnnotation />} />
        <Route path="/services/data-classification" element={<DataClassification />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Admin Section with Nested Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="enquiries" replace />} />
          <Route path="enquiries" element={<ContactsTab />} />
          <Route path="jobs" element={<JobsTab />} />
          <Route path="applications" element={<ApplicationsTab />} />
        </Route>

        <Route path="/industries/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/industries/autonomous-vehicles" element={<AutonomousVehicles />} />
        <Route path="/industries/healthcare-lifesciences" element={<MedicalHealthcare />} />
        <Route path="/industries/ecommerce-retail" element={<ECommerceRetail />} />
        <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
        <Route path="/industries/education-edtech" element={<EducationEdtech />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/agriculture" element={<Agriculture />} />
        
        {/* Case Studies Routes */}
        <Route path="/case-studies/autonomous" element={<AutonomousMobilityCaseStudy />} />
        <Route path="/case-studies/ecommerce" element={<EcommerceRetailCaseStudy />} />
        <Route path="/case-studies/agriculture" element={<AgricultureAgritechCaseStudy />} />
        <Route path="/case-studies/media" element={<MediaEntertainmentCaseStudy />} />
        <Route path="/case-studies/education" element={<EducationEdtechCaseStudy />} />
        <Route path="/case-studies/manufacturing" element={<ManufacturingIndustrialCaseStudy />} />
        <Route path="/case-studies/medical" element={<MedicalHealthcareCaseStudy />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;
