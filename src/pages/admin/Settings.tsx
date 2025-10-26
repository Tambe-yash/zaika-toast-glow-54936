import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Eye, EyeOff, Key } from 'lucide-react';

const Settings = () => {
  const [showRazorpayKey, setShowRazorpayKey] = useState(false);
  const [showRazorpaySecret, setShowRazorpaySecret] = useState(false);
  const [showGoogleClientId, setShowGoogleClientId] = useState(false);
  const [showGoogleClientSecret, setShowGoogleClientSecret] = useState(false);

  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Configure your store</p>
      </div>

      <Tabs defaultValue="business" className="space-y-6">
        <TabsList>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="business">
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
        </TabsContent>

        <TabsContent value="delivery">
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
        </TabsContent>

        <TabsContent value="api-keys">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  <CardTitle>Razorpay Payment Gateway</CardTitle>
                </div>
                <CardDescription>
                  Configure your Razorpay credentials for payment processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="razorpay-key">Razorpay Key ID</Label>
                  <div className="relative">
                    <Input
                      id="razorpay-key"
                      type={showRazorpayKey ? 'text' : 'password'}
                      placeholder="rzp_test_xxxxxxxxxx"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRazorpayKey(!showRazorpayKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showRazorpayKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="razorpay-secret">Razorpay Secret Key</Label>
                  <div className="relative">
                    <Input
                      id="razorpay-secret"
                      type={showRazorpaySecret ? 'text' : 'password'}
                      placeholder="Enter secret key"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRazorpaySecret(!showRazorpaySecret)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showRazorpaySecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button onClick={handleSave}>Save Razorpay Keys</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  <CardTitle>Google OAuth</CardTitle>
                </div>
                <CardDescription>
                  Configure Google OAuth for social login
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="google-client-id">Google Client ID</Label>
                  <div className="relative">
                    <Input
                      id="google-client-id"
                      type={showGoogleClientId ? 'text' : 'password'}
                      placeholder="Enter Google Client ID"
                    />
                    <button
                      type="button"
                      onClick={() => setShowGoogleClientId(!showGoogleClientId)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showGoogleClientId ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="google-client-secret">Google Client Secret</Label>
                  <div className="relative">
                    <Input
                      id="google-client-secret"
                      type={showGoogleClientSecret ? 'text' : 'password'}
                      placeholder="Enter Google Client Secret"
                    />
                    <button
                      type="button"
                      onClick={() => setShowGoogleClientSecret(!showGoogleClientSecret)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showGoogleClientSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button onClick={handleSave}>Save Google OAuth Keys</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
