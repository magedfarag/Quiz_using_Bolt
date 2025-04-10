import { useState, useEffect } from 'react';
import { fetchDashboardStats } from '@/api/admin';
import AdminLayout from '@components/AdminLayout';
import StatCard from '@components/StatCard';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    };
    loadStats();
  }, []);

  return (
    <AdminLayout>
      {stats && (
        <div className="grid grid-cols-3 gap-4">
          <StatCard 
            title="Total Questions" 
            value={stats.totalQuestions} 
          />
          <StatCard 
            title="Active Users" 
            value={stats.activeUsers} 
          />
          <StatCard 
            title="Avg. Score" 
            value={`${stats.averageScore}%`} 
          />
        </div>
      )}
    </AdminLayout>
  );
}
