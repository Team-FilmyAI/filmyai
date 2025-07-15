
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<'user' | 'business'>('user');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeToTerms: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { accountType, ...formData });
      // Handle successful form submission here
      alert('Account created successfully!');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Filmy<span className="text-orange-400">AI</span>
          </h1>
          <p className="text-gray-400">Create your account</p>
        </div>

        {/* Account Type Toggle */}
        <div className="flex bg-gray-800 rounded-lg p-1 mb-8">
          <button
            type="button"
            onClick={() => setAccountType('user')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              accountType === 'user'
                ? 'bg-orange-500 text-black'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            User
          </button>
          <button
            type="button"
            onClick={() => setAccountType('business')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              accountType === 'business'
                ? 'bg-orange-500 text-black'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Business
          </button>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName" className="text-gray-300">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName" className="text-gray-300">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-gray-300">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="text-gray-300">
              Password *
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-300 leading-5">
                I agree to the{' '}
                <button type="button" className="text-orange-400 hover:underline">
                  Terms and Conditions
                </button>{' '}
                and{' '}
                <button type="button" className="text-orange-400 hover:underline">
                  Privacy Policy
                </button>
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-500">{errors.agreeToTerms}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-3 text-base"
          >
            Sign Up
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signin')}
              className="text-orange-400 hover:underline font-medium"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
