import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // Simulate Google Sign In
    setSuccess("Successfully signed in with Google!");
    setError("");
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    setShowOtp(true);
    setError("");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    setSuccess("Successfully verified!");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Hero Content */}
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Fitness Journey
            </h1>
            <p className="text-xl mb-8">
              Personalized workouts, nutrition plans, and expert guidance - all
              in one place. Start your fitness transformation today.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400" />
                <span>Custom Workout Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400" />
                <span>Nutrition Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="lg:w-1/2 w-full max-w-md">
            <Card className="backdrop-blur-lg bg-white/10 border-none text-white">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription className="text-gray-300">
                  Sign in to access your personalized fitness journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="phone">Phone</TabsTrigger>
                  </TabsList>

                  <TabsContent value="email">
                    <form onSubmit={handleEmailSignIn}>
                      <div className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                        />
                        <Button className="w-full" type="submit">
                          Continue with Google
                          <Mail className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="phone">
                    <form
                      onSubmit={showOtp ? handleOtpSubmit : handlePhoneSubmit}
                    >
                      <div className="space-y-4">
                        {!showOtp ? (
                          <Input
                            type="tel"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                          />
                        ) : (
                          <Input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
                          />
                        )}
                        <Button className="w-full" type="submit">
                          {!showOtp ? (
                            <>
                              Send OTP
                              <Phone className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Verify OTP
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>

                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="mt-4 bg-green-500/20 text-green-300 border-green-500/50">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
