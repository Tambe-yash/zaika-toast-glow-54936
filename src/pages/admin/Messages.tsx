import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Messages = () => {
  const mockMessages = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      subject: 'Product Inquiry',
      message: 'Hello, I would like to know more about your cakes...',
      date: '2025-01-15',
      status: 'new',
    },
    {
      id: '2',
      name: 'Mike Brown',
      email: 'mike@example.com',
      subject: 'Order Issue',
      message: 'I have a question about my recent order...',
      date: '2025-01-14',
      status: 'replied',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Messages</h1>
        <p className="text-muted-foreground mt-2">View customer inquiries</p>
      </div>

      <div className="grid gap-4">
        {mockMessages.map((message) => (
          <Card key={message.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{message.name}</h3>
                    <p className="text-sm text-muted-foreground">{message.email}</p>
                  </div>
                  <Badge variant={message.status === 'new' ? 'default' : 'secondary'}>
                    {message.status}
                  </Badge>
                </div>
                <div>
                  <p className="font-medium">{message.subject}</p>
                  <p className="text-sm text-muted-foreground mt-1">{message.message}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    {new Date(message.date).toLocaleDateString()}
                  </p>
                  <Button variant="outline" size="sm">
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Messages;
