import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import News from './pages/News';
import AchievingAlumni from './pages/AchievingAlumni';
import TeachersOfTheYear from './pages/TeachersOfTheYear';
import ScrollToTop from './components/ScrollToTop';

// Admin imports
import { AuthProvider } from './admin/context/AuthContext';
import ProtectedRoute from './admin/components/ProtectedRoute';
import AdminLayout from './admin/components/AdminLayout';
import Login from './admin/Login';
import DashboardHome from './admin/pages/DashboardHome';
import HomePageEditor from './admin/pages/HomePageEditor';
import NewsManager from './admin/pages/NewsManager';
import AboutPageEditor from './admin/pages/AboutPageEditor';
import AcademicsPageEditor from './admin/pages/AcademicsPageEditor';
import MediaGallery from './admin/pages/MediaGallery';
import AdmissionsEditor from './admin/pages/AdmissionsEditor';
import ContactEditor from './admin/pages/ContactEditor';
import SettingsPage from './admin/pages/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={
            <AdminLayout>
              <DashboardHome />
            </AdminLayout>
          } />
          <Route path="home-editor" element={
            <AdminLayout>
              <HomePageEditor />
            </AdminLayout>
          } />
          <Route path="news-manager" element={
            <AdminLayout>
              <NewsManager />
            </AdminLayout>
          } />
          <Route path="about-editor" element={
            <AdminLayout>
              <AboutPageEditor />
            </AdminLayout>
          } />
          <Route path="academics-editor" element={
            <AdminLayout>
              <AcademicsPageEditor />
            </AdminLayout>
          } />
          <Route path="media-gallery" element={
            <AdminLayout>
              <MediaGallery />
            </AdminLayout>
          } />
          <Route path="admissions-editor" element={
            <AdminLayout>
              <AdmissionsEditor />
            </AdminLayout>
          } />
          <Route path="contact-editor" element={
            <AdminLayout>
              <ContactEditor />
            </AdminLayout>
          } />
          <Route path="settings" element={
            <AdminLayout>
              <SettingsPage />
            </AdminLayout>
          } />
        </Route>
        
        {/* Public Routes */}
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/academics" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <Academics />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/admissions" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <Admissions />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/news" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <News />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/achieving-alumni" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <AchievingAlumni />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/teachers-of-the-year" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <TeachersOfTheYear />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;