import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2'; // Import Navbar2
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Solutions from './components/Solutions/Solutions';
import ContactUs from './components/ContactUs/ContactUs';
import AboutPage from './Pages/AboutPage/AboutPage';

// Service Components
import EndUserSupport from './Pages/ServicePages/EndUserSupport';
import HardwareServices from './Pages/ServicePages/HardwareServices';
import MobileSupport from './Pages/ServicePages/MobileSupport';
import NetworkSupport from './Pages/ServicePages/NetworkSupport';
import SecuritySoftware from './Pages/ServicePages/SecuritySoftware';
import MaintenanceBackup from './Pages/ServicePages/MaintenanceBackup';
import CloudBased from './Pages/ServicePages/CloudBased';
import ITSupport from './Pages/ServicePages/ITSupport';

// Solution components
import DatabaseFolder from './Pages/SolutionPages/DatabaseFolder';
import PreAccounting from './Pages/SolutionPages/PreAccounting';
import RemotePrint from './Pages/SolutionPages/RemotePrint';
import SalesOffers from './Pages/SolutionPages/SalesOffers';
import TechnicalService from './Pages/SolutionPages/TechnicalService';
import TelegramBots from './Pages/SolutionPages/TelegramBots';
import ValueManagement from './Pages/SolutionPages/ValueManagement';
import WebBasedPDF from './Pages/SolutionPages/WebBasedPDF';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router className="scroll-link">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Services />
                <Solutions />
                <ContactUs />
              </>
            }
          />
          {/* Individual service pages */}
          <Route
            path="/end-user-support"
            element={
              <>
                <Navbar2 />
                <EndUserSupport />
              </>
            }
          />
          <Route
            path="/hardware-services"
            element={
              <>
                <Navbar2 />
                <HardwareServices />
              </>
            }
          />
          <Route
            path="/mobile-support"
            element={
              <>
                <Navbar2 />
                <MobileSupport />
              </>
            }
          />
          <Route
            path="/network-support"
            element={
              <>
                <Navbar2 />
                <NetworkSupport />
              </>
            }
          />
          <Route
            path="/security-software"
            element={
              <>
                <Navbar2 />
                <SecuritySoftware />
              </>
            }
          />
          <Route
            path="/maintenance-backup"
            element={
              <>
                <Navbar2 />
                <MaintenanceBackup />
              </>
            }
          />
          <Route
            path="/cloud-based"
            element={
              <>
                <Navbar2 />
                <CloudBased />
              </>
            }
          />
          <Route
            path="/it-support"
            element={
              <>
                <Navbar2 />
                <ITSupport />
              </>
            }
          />

          {/* INDIVIDUAL SOLUTION PAGES */}
          <Route
            path="/database-folder"
            element={
              <>
                <Navbar2 />
                <DatabaseFolder />
              </>
            }
          />
          <Route
            path="/pre-accounting"
            element={
              <>
                <Navbar2 />
                <PreAccounting />
              </>
            }
          />
          <Route
            path="/remote-print"
            element={
              <>
                <Navbar2 />
                <RemotePrint />
              </>
            }
          />
          <Route
            path="/sales-offers"
            element={
              <>
                <Navbar2 />
                <SalesOffers />
              </>
            }
          />
          <Route
            path="/technical-service"
            element={
              <>
                <Navbar2 />
                <TechnicalService />
              </>
            }
          />
          <Route
            path="/telegram-bots"
            element={
              <>
                <Navbar2 />
                <TelegramBots />
              </>
            }
          />
          <Route
            path="/value-management"
            element={
              <>
                <Navbar2 />
                <ValueManagement />
              </>
            }
          />
          <Route
            path="/web-based-pdf"
            element={
              <>
                <Navbar2 />
                <WebBasedPDF />
              </>
            }
          />

          {/* SEPARATE CONTACT US */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUs />
              </>
            }
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <h1>404 Page Not Found</h1>
              </>
            }
          />

          {/* SEPARATE ABOUT US */}
          <Route
            path="/about"
            element={
              <>
                <Navbar2 />
                <AboutPage />
                <ContactUs />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
