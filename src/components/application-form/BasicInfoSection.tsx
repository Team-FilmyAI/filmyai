
import React from 'react';
import { User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BasicInfo {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  currentLocationAvailable: string;
  currentLocation: string;
}

interface BasicInfoSectionProps {
  basicInfo: BasicInfo;
  setBasicInfo: React.Dispatch<React.SetStateAction<BasicInfo>>;
}

const BasicInfoSection = ({ basicInfo, setBasicInfo }: BasicInfoSectionProps) => {
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Germany', 'France'];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <User className="h-5 w-5 mr-2 text-orange-400" />
        Section 1 - Basic Profile Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
          <Input
            id="firstName"
            value={basicInfo.firstName}
            onChange={(e) => setBasicInfo(prev => ({ ...prev, firstName: e.target.value.slice(0, 50) }))}
            className="bg-gray-800 border-gray-700 text-white"
            maxLength={50}
            required
          />
          <p className="text-xs text-gray-400 mt-1">{basicInfo.firstName.length}/50 characters</p>
        </div>
        <div>
          <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
          <Input
            id="lastName"
            value={basicInfo.lastName}
            onChange={(e) => setBasicInfo(prev => ({ ...prev, lastName: e.target.value.slice(0, 50) }))}
            className="bg-gray-800 border-gray-700 text-white"
            maxLength={50}
            required
          />
          <p className="text-xs text-gray-400 mt-1">{basicInfo.lastName.length}/50 characters</p>
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={basicInfo.email}
            onChange={(e) => setBasicInfo(prev => ({ ...prev, email: e.target.value }))}
            className="bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
          <div className="flex gap-2">
            <Select value={basicInfo.countryCode} onValueChange={(value) => setBasicInfo(prev => ({ ...prev, countryCode: value }))}>
              <SelectTrigger className="w-20 bg-gray-800 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+61">+61</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="phone"
              value={basicInfo.phoneNumber}
              onChange={(e) => setBasicInfo(prev => ({ ...prev, phoneNumber: e.target.value }))}
              className="flex-1 bg-gray-800 border-gray-700 text-white"
              placeholder="Phone number"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="country" className="text-gray-300">Country *</Label>
          <Select value={basicInfo.country} onValueChange={(value) => setBasicInfo(prev => ({ ...prev, country: value, state: '', city: '' }))}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map(country => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="state" className="text-gray-300">State *</Label>
          <Select value={basicInfo.state} onValueChange={(value) => setBasicInfo(prev => ({ ...prev, state: value, city: '' }))}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="california">California</SelectItem>
              <SelectItem value="newyork">New York</SelectItem>
              <SelectItem value="texas">Texas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="city" className="text-gray-300">City *</Label>
          <Select value={basicInfo.city} onValueChange={(value) => setBasicInfo(prev => ({ ...prev, city: value }))}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="losangeles">Los Angeles</SelectItem>
              <SelectItem value="sanfrancisco">San Francisco</SelectItem>
              <SelectItem value="sandiego">San Diego</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="text-gray-300">Current Location Availability *</Label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="locationAvailable"
              value="yes"
              checked={basicInfo.currentLocationAvailable === 'yes'}
              onChange={(e) => setBasicInfo(prev => ({ ...prev, currentLocationAvailable: e.target.value }))}
              className="mr-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="locationAvailable"
              value="no"
              checked={basicInfo.currentLocationAvailable === 'no'}
              onChange={(e) => setBasicInfo(prev => ({ ...prev, currentLocationAvailable: e.target.value }))}
              className="mr-2"
            />
            <span className="text-white">No</span>
          </label>
        </div>
        {basicInfo.currentLocationAvailable === 'yes' && (
          <div className="mt-4">
            <Label htmlFor="currentLocation" className="text-gray-300">Current Location</Label>
            <Input
              id="currentLocation"
              value={basicInfo.currentLocation}
              onChange={(e) => setBasicInfo(prev => ({ ...prev, currentLocation: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Enter your current location"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfoSection;
