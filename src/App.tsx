import NavBar from 'components/navBar/NavBar';
import AboutPage from 'pages/about/AboutPage';
import Form from 'pages/form/Form';
import MainPage from 'pages/main/MainPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </>
  );
}
