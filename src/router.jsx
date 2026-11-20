
import { createBrowserRouter, Navigate } from 'react-router';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import { postsLoader, postLoader } from './api/posts';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage, loader: postsLoader },
      { path: 'posts/:postId', Component: PostPage, loader: postLoader },
      {
        path: 'about',
        lazy: async () => {
          const { default: Component } = await import('./pages/AboutPage');
          return { Component };
        },
      },
      { path: 'login', Component: LoginPage },
        {
         Component: ProtectedRoute,
          children: [{ path: 'admin', Component: AdminPage }],
        },
      { path: 'blog', element: <Navigate to="/" replace /> },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);