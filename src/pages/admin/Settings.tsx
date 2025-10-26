import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Settings = () => {
  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Configure your store</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Store Name</Label>
            <Input defaultValue="Zaika Toast" />
          </div>
          <div className="space-y-2">
            <Label>Contact Email</Label>
            <Input defaultValue="hello@zaikatoast.com" />
          </div>
          <div className="space-y-2">
            <Label>Contact Phone</Label>
            <Input defaultValue="+1 (555) 123-4567" />
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Standard Delivery Charge (₹)</Label>
            <Input type="number" defaultValue="50" />
          </div>
          <div className="space-y-2">
            <Label>Free Delivery Above (₹)</Label>
            <Input type="number" defaultValue="500" />
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Gateway</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Payment Provider</Label>
            <Input defaultValue="Razorpay" disabled />
          </div>
          <div className="space-y-2">
            <Label>API Key</Label>
            <Input type="password" placeholder="Enter API key" />
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
