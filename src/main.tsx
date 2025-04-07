import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import HomePage from '@pages/HomePage';
import QuizPage from '@pages/QuizPage';
import ResultsPage from '@pages/ResultsPage';
import AdminLogin from '@pages/admin/AdminLogin';
import AdminDashboard from '@pages/admin/AdminDashboard';
import AdminQuizManagement from '@pages/admin/AdminQuizManagement';
import AdminUserManagement from '@pages/admin/AdminUserManagement';
import AdminAnalytics from '@pages/admin/AdminAnalytics';
import AdminSettings from '@pages/admin/AdminSettings';
import AdminAuditLogs from '@pages/admin/AdminAuditLogs';
import '@/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
  },
  {
    path: '/admin/quiz-management',
    element: <AdminQuizManagement />,
  },
  {
    path: '/admin/user-management',
    element: <AdminUserManagement />,
  },
  {
    path: '/admin/analytics',
    element: <AdminAnalytics />,
  },
  {
    path: '/admin/settings',
    element: <AdminSettings />,
  },
  {
    path: '/admin/audit-logs',
    element: <AdminAuditLogs />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
