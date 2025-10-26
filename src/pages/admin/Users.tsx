import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Users = () => {
  const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      joined: '2024-12-01',
      orders: 5,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      joined: '2024-11-15',
      orders: 8,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Users</h1>
        <p className="text-muted-foreground mt-2">Manage registered users</p>
      </div>

      <div className="grid gap-4">
        {mockUsers.map((user) => (
          <Card key={user.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Joined: {new Date(user.joined).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{user.orders}</p>
                  <p className="text-sm text-muted-foreground">Orders</p>
                </div>
                <Button variant="outline">View Profile</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
