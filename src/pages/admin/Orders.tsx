import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Orders = () => {
  const mockOrders = [
    {
      id: '1',
      orderNumber: 'ORD-001',
      customer: 'John Doe',
      date: '2025-01-15',
      total: 450,
      status: 'pending',
    },
    {
      id: '2',
      orderNumber: 'ORD-002',
      customer: 'Jane Smith',
      date: '2025-01-14',
      total: 780,
      status: 'processing',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-500';
      case 'processing':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Orders</h1>
        <p className="text-muted-foreground mt-2">Manage customer orders</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Order #{order.orderNumber}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customer: {order.customer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Date: {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-xl font-bold">₹{order.total}</p>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
