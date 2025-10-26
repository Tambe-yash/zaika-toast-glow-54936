import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, DollarSign, ShoppingBag } from 'lucide-react';

const Dashboard = () => {
  const { isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/auth');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAdmin) return null;

  const stats = [
    { title: 'Total Orders', value: '156', icon: ShoppingBag, color: 'text-blue-600' },
    { title: 'Total Users', value: '89', icon: Users, color: 'text-green-600' },
    { title: 'Revenue', value: '₹45,230', icon: DollarSign, color: 'text-yellow-600' },
    { title: 'Products', value: '24', icon: Package, color: 'text-purple-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome to your admin panel</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            No recent orders to display
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
