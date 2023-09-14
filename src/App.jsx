import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Solutions from './components/Solutions/Solutions';
import ContactUs from './components/ContactUs/ContactUs';
// Service Components
import EndUserSupport from './Pages/ServicePages/EndUserSupport';
import HardwareServices from './Pages/ServicePages/HardwareServices';
import MobileSupport from './Pages/ServicePages/MobileSupport';
import NetworkSupport from './Pages/ServicePages/NetworkSupport';
import SecuritySoftware from './Pages/ServicePages/SecuritySoftware';
import MaintenanceBackup from './Pages/ServicePages/MaintenanceBackup';
import CloudBased from './Pages/ServicePages/CloudBased';
import ITSupport from './Pages/ServicePages/ITSupport';

// Service-specific components

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Solutions />
                <ContactUs />
              </>
            }
          />
          {/* Individual service pages */}
          <Route path="/end-user-support" element={<EndUserSupport />} />
          <Route path="/hardware-services" element={<HardwareServices />} />
          <Route path="/mobile-support" element={<MobileSupport />} />
          <Route path="/network-support" element={<NetworkSupport />} />
          <Route path="/security-software" element={<SecuritySoftware />} />
          <Route path="/maintenance-backup" element={<MaintenanceBackup />} />
          <Route path="/cloud-based" element={<CloudBased />} />
          <Route path="/it-support" element={<ITSupport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
