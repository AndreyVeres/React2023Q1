import Layout from 'router/Layout';
import AboutPage from 'pages/about/AboutPage';
import Form from 'pages/form/Form';
import MainPage from 'pages/main/MainPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);
