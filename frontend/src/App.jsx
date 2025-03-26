import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import './App.css';

import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import AccessDenied from './pages/AccessDenied';
import ArticlesPage from './pages/ArticlesPage';
import CreateArticlePage from './pages/CreateArticlePage';
import CreateVideoPage from './pages/CreateVideoPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';

import Navbar from './components/Navbar';

function App() {
{/*
  useEffect(() => {
    document.body.style.backgroundColor = "#c3c2cc";
    document.body.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    }
  }, [])
*/}
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="createArticle" element={<CreateArticlePage />} />
        <Route path="videos" element={<VideosPage />} />
        <Route path="createVideo" element={<CreateVideoPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="accessDenied" element={<AccessDenied />} />
      </Routes>
    </div>
  )
}

export default App
