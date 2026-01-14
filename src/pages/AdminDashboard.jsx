import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVideos: 0,
    totalApplications: 0,
    activeUsers: 0
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: usersData, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching profiles:', error);
      }

      if (usersData) {
        // Filter out admin users
        const nonAdminUsers = usersData.filter(u => u.role !== 'admin');
        setUsers(nonAdminUsers);
        setStats({
          totalUsers: nonAdminUsers.length,
          totalVideos: 0,
          totalApplications: 0,
          activeUsers: nonAdminUsers.length
        });
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const StatCard = ({ icon, label, value, color }) => (
    <div className="admin-stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );

  const getPageTitle = () => {
    const titles = {
      overview: 'Dashboard Overview',
      moderation: 'Content Moderation',
      payments: 'Payments & Plans',
      jobs: 'Jobs Management',
      jobseekers: 'Job Seekers',
      hiring: 'Hiring Managers',
      recruiters: 'Recruiters',
      coaches: 'Career Coaches',
      analytics: 'Analytics & Reports',
      settings: 'System Settings'
    };
    return titles[activeTab] || 'Dashboard';
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="admin-logo">SoapBoxGen</h1>
          <span className="admin-badge">Admin</span>
        </div>

        <nav className="sidebar-nav">
          {/* Dashboard Overview */}
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Dashboard
          </button>

          {/* Content Moderation */}
          <button
            className={`nav-item ${activeTab === 'moderation' ? 'active' : ''}`}
            onClick={() => setActiveTab('moderation')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            Content Moderation
          </button>

          {/* Payments & Plans */}
          <button
            className={`nav-item ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            Payments & Plans
          </button>

          {/* Jobs */}
          <button
            className={`nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Jobs
          </button>

          {/* Job Seekers */}
          <button
            className={`nav-item ${activeTab === 'jobseekers' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobseekers')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Job Seekers
          </button>

          {/* Hiring Managers */}
          <button
            className={`nav-item ${activeTab === 'hiring' ? 'active' : ''}`}
            onClick={() => setActiveTab('hiring')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Hiring Managers
          </button>

          {/* Recruiters */}
          <button
            className={`nav-item ${activeTab === 'recruiters' ? 'active' : ''}`}
            onClick={() => setActiveTab('recruiters')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Recruiters
          </button>

          {/* Career Coaches */}
          <button
            className={`nav-item ${activeTab === 'coaches' ? 'active' : ''}`}
            onClick={() => setActiveTab('coaches')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            Career Coaches
          </button>

          {/* Analytics & Reports */}
          <button
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            Analytics & Reports
          </button>

          {/* System Settings */}
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            System Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <span className="user-name">Admin</span>
              <span className="user-email">{user?.email}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={handleSignOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h2>{getPageTitle()}</h2>
            <p className="header-date">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="header-right">
            <button className="header-btn notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        <div className="admin-content">
          {/* Dashboard Overview */}
          {activeTab === 'overview' && (
            <>
              <div className="stats-grid">
                <StatCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  }
                  label="Total Users"
                  value={stats.totalUsers}
                  color="blue"
                />
                <StatCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  }
                  label="Total Videos"
                  value={stats.totalVideos}
                  color="green"
                />
                <StatCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  }
                  label="Applications"
                  value={stats.totalApplications}
                  color="purple"
                />
                <StatCard
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  }
                  label="Active Users"
                  value={stats.activeUsers}
                  color="orange"
                />
              </div>

              <div className="admin-card full-width">
                <div className="card-header">
                  <h3>Recent Users</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab('jobseekers')}>View All</button>
                </div>
                <div className="card-content">
                  {loading ? (
                    <p className="loading-text">Loading...</p>
                  ) : users.length > 0 ? (
                    <ul className="user-list">
                      {users.slice(0, 5).map((u, index) => (
                        <li key={index} className="user-list-item">
                          <div className="user-avatar small">
                            {u.email?.charAt(0).toUpperCase()}
                          </div>
                          <div className="user-list-info">
                            <span className="user-list-name">{u.full_name || u.email}</span>
                            <span className="user-list-email">{u.email}</span>
                          </div>
                          <span className={`role-badge ${u.role}`}>{u.role || 'user'}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="empty-text">No users found</p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Content Moderation */}
          {activeTab === 'moderation' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Content Moderation</h3>
                <div className="card-actions">
                  <select className="filter-select">
                    <option value="all">All Content</option>
                    <option value="pending">Pending Review</option>
                    <option value="flagged">Flagged</option>
                    <option value="approved">Approved</option>
                  </select>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">No content pending moderation</p>
              </div>
            </div>
          )}

          {/* Payments & Plans */}
          {activeTab === 'payments' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Payments & Subscription Plans</h3>
                <button className="add-btn">+ Add Plan</button>
              </div>
              <div className="card-content">
                <p className="empty-text">Payment management coming soon...</p>
              </div>
            </div>
          )}

          {/* Jobs */}
          {activeTab === 'jobs' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Jobs Management</h3>
                <div className="card-actions">
                  <input type="text" placeholder="Search jobs..." className="search-input" />
                  <button className="add-btn">+ Add Job</button>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">No jobs listed yet</p>
              </div>
            </div>
          )}

          {/* Job Seekers */}
          {activeTab === 'jobseekers' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Job Seekers</h3>
                <div className="card-actions">
                  <input type="text" placeholder="Search job seekers..." className="search-input" />
                </div>
              </div>
              <div className="card-content">
                {loading ? (
                  <p className="loading-text">Loading...</p>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Joined</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u, index) => (
                        <tr key={index}>
                          <td>
                            <div className="table-user">
                              <div className="user-avatar small">
                                {u.email?.charAt(0).toUpperCase()}
                              </div>
                              <span>{u.full_name || 'N/A'}</span>
                            </div>
                          </td>
                          <td>{u.email}</td>
                          <td>
                            <span className={`role-badge ${u.role}`}>{u.role || 'user'}</span>
                          </td>
                          <td>{new Date(u.created_at).toLocaleDateString()}</td>
                          <td>
                            <div className="table-actions">
                              <button className="action-btn edit">View</button>
                              <button className="action-btn delete">Remove</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* Hiring Managers */}
          {activeTab === 'hiring' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Hiring Managers</h3>
                <div className="card-actions">
                  <input type="text" placeholder="Search hiring managers..." className="search-input" />
                  <button className="add-btn">+ Invite Manager</button>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">No hiring managers registered yet</p>
              </div>
            </div>
          )}

          {/* Recruiters */}
          {activeTab === 'recruiters' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Recruiters</h3>
                <div className="card-actions">
                  <input type="text" placeholder="Search recruiters..." className="search-input" />
                  <button className="add-btn">+ Add Recruiter</button>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">No recruiters registered yet</p>
              </div>
            </div>
          )}

          {/* Career Coaches */}
          {activeTab === 'coaches' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Career Coaches</h3>
                <div className="card-actions">
                  <input type="text" placeholder="Search coaches..." className="search-input" />
                  <button className="add-btn">+ Add Coach</button>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">No career coaches registered yet</p>
              </div>
            </div>
          )}

          {/* Analytics & Reports */}
          {activeTab === 'analytics' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>Analytics & Reports</h3>
                <div className="card-actions">
                  <select className="filter-select">
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                    <option value="all">All time</option>
                  </select>
                  <button className="add-btn">Export Report</button>
                </div>
              </div>
              <div className="card-content">
                <p className="empty-text">Analytics dashboard coming soon...</p>
              </div>
            </div>
          )}

          {/* System Settings */}
          {activeTab === 'settings' && (
            <div className="admin-card full-width">
              <div className="card-header">
                <h3>System Settings</h3>
              </div>
              <div className="card-content">
                <div className="settings-section">
                  <h4>General Settings</h4>
                  <p className="empty-text">System settings coming soon...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
