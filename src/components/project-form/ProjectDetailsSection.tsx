
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Upload, X, Plus } from 'lucide-react';
import { format } from 'date-fns';

interface ProjectDetailsProps {
  projectDetails: any;
  setProjectDetails: (details: any) => void;
}

const ProjectDetailsSection: React.FC<ProjectDetailsProps> = ({ 
  projectDetails, 
  setProjectDetails 
}) => {
  const genres = [
    'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 
    'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror',
    'Music', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'
  ];

  const projectCategories = [
    'Feature Film', 'Short Film', 'TV Series', 'TV Movie', 'Web Series',
    'Documentary', 'Commercial', 'Music Video', 'Theatre', 'Voice Over'
  ];

  const productionCompanies = [
    'Warner Bros', 'Universal Pictures', 'Sony Pictures', 'Paramount Pictures',
    'Disney', '20th Century Studios', 'Netflix', 'Amazon Studios', 'HBO', 'Independent'
  ];

  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const states = {
    'United States': ['California', 'New York', 'Texas', 'Florida'],
    'Canada': ['Ontario', 'British Columbia', 'Quebec', 'Alberta'],
    'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia']
  };
  const cities = {
    'California': ['Los Angeles', 'San Francisco', 'San Diego'],
    'New York': ['New York City', 'Albany', 'Buffalo'],
    'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
    'England': ['London', 'Manchester', 'Birmingham']
  };

  const handleGenreChange = (genre: string) => {
    const updatedGenres = projectDetails.genre.includes(genre)
      ? projectDetails.genre.filter((g: string) => g !== genre)
      : [...projectDetails.genre, genre];
    setProjectDetails({ ...projectDetails, genre: updatedGenres });
  };

  const handleProductionCompanyChange = (company: string) => {
    const updatedCompanies = projectDetails.productionCompany.includes(company)
      ? projectDetails.productionCompany.filter((c: string) => c !== company)
      : [...projectDetails.productionCompany, company];
    setProjectDetails({ ...projectDetails, productionCompany: updatedCompanies });
  };

  const handleFileUpload = (file: File | null, field: string) => {
    setProjectDetails({ ...projectDetails, [field]: file });
  };

  const addShootDate = () => {
    setProjectDetails({
      ...projectDetails,
      shootDates: [...projectDetails.shootDates, { date: undefined, location: '' }]
    });
  };

  const updateShootDate = (index: number, field: string, value: any) => {
    const updatedDates = projectDetails.shootDates.map((item: any, i: number) =>
      i === index ? { ...item, [field]: value } : item
    );
    setProjectDetails({ ...projectDetails, shootDates: updatedDates });
  };

  const removeShootDate = (index: number) => {
    const updatedDates = projectDetails.shootDates.filter((_: any, i: number) => i !== index);
    setProjectDetails({ ...projectDetails, shootDates: updatedDates });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-orange-400 mb-6">Project Details</h3>

      {/* Project Title */}
      <div className="space-y-2">
        <Label htmlFor="projectTitle" className="text-white">Project Title *</Label>
        <Input
          id="projectTitle"
          value={projectDetails.projectTitle}
          onChange={(e) => setProjectDetails({ ...projectDetails, projectTitle: e.target.value })}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="Enter project title"
        />
      </div>

      {/* Genre (Multiple Selection) */}
      <div className="space-y-2">
        <Label className="text-white">Genre * (Multiple selection allowed)</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <Checkbox
                id={genre}
                checked={projectDetails.genre.includes(genre)}
                onCheckedChange={() => handleGenreChange(genre)}
              />
              <Label htmlFor={genre} className="text-sm text-gray-300">{genre}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Synopsis */}
      <div className="space-y-2">
        <Label htmlFor="synopsis" className="text-white">Synopsis *</Label>
        <Textarea
          id="synopsis"
          value={projectDetails.synopsis}
          onChange={(e) => setProjectDetails({ ...projectDetails, synopsis: e.target.value })}
          className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
          placeholder="Enter project synopsis"
        />
      </div>

      {/* Project Category */}
      <div className="space-y-2">
        <Label className="text-white">Project Category *</Label>
        <Select value={projectDetails.projectCategory} onValueChange={(value) => setProjectDetails({ ...projectDetails, projectCategory: value })}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select project category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            {projectCategories.map((category) => (
              <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Production Company (Multiple Selection) */}
      <div className="space-y-2">
        <Label className="text-white">Production Company * (Multiple selection allowed)</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {productionCompanies.map((company) => (
            <div key={company} className="flex items-center space-x-2">
              <Checkbox
                id={company}
                checked={projectDetails.productionCompany.includes(company)}
                onCheckedChange={() => handleProductionCompanyChange(company)}
              />
              <Label htmlFor={company} className="text-sm text-gray-300">{company}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Poster Upload */}
      <div className="space-y-2">
        <Label className="text-white">Project Poster</Label>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e.target.files?.[0] || null, 'poster')}
            className="hidden"
            id="poster-upload"
          />
          <label htmlFor="poster-upload" className="cursor-pointer">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400">Click to upload poster image</p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG, JPEG (Max 5MB)</p>
          </label>
          {projectDetails.poster && (
            <p className="text-orange-400 mt-2">File selected: {projectDetails.poster.name}</p>
          )}
        </div>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-white">Country *</Label>
          <Select value={projectDetails.country} onValueChange={(value) => setProjectDetails({ ...projectDetails, country: value, state: '', city: '' })}>
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {countries.map((country) => (
                <SelectItem key={country} value={country} className="text-white hover:bg-gray-700">
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-white">State *</Label>
          <Select 
            value={projectDetails.state} 
            onValueChange={(value) => setProjectDetails({ ...projectDetails, state: value, city: '' })}
            disabled={!projectDetails.country}
          >
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {projectDetails.country && states[projectDetails.country as keyof typeof states]?.map((state) => (
                <SelectItem key={state} value={state} className="text-white hover:bg-gray-700">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-white">City *</Label>
          <Select 
            value={projectDetails.city} 
            onValueChange={(value) => setProjectDetails({ ...projectDetails, city: value })}
            disabled={!projectDetails.state}
          >
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              {projectDetails.state && cities[projectDetails.state as keyof typeof cities]?.map((city) => (
                <SelectItem key={city} value={city} className="text-white hover:bg-gray-700">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Shoot Dates */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-white">Shoot Dates *</Label>
          <Button
            type="button"
            onClick={addShootDate}
            variant="outline"
            size="sm"
            className="border-orange-500 text-orange-400 hover:bg-orange-900"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Date
          </Button>
        </div>
        {projectDetails.shootDates.map((shootDate: any, index: number) => (
          <div key={index} className="flex gap-4 items-end">
            <div className="flex-1">
              <Label className="text-white text-sm">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {shootDate.date ? format(shootDate.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={shootDate.date}
                    onSelect={(date) => updateShootDate(index, 'date', date)}
                    initialFocus
                    className="bg-gray-800 text-white pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex-1">
              <Label className="text-white text-sm">Location</Label>
              <Input
                value={shootDate.location}
                onChange={(e) => updateShootDate(index, 'location', e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Shoot location"
              />
            </div>
            <Button
              type="button"
              onClick={() => removeShootDate(index)}
              variant="outline"
              size="sm"
              className="border-red-500 text-red-400 hover:bg-red-900"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* NDA Document */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="uploadNDA"
            checked={projectDetails.uploadNDA}
            onCheckedChange={(checked) => setProjectDetails({ ...projectDetails, uploadNDA: checked as boolean })}
          />
          <Label htmlFor="uploadNDA" className="text-white">Upload NDA Document</Label>
        </div>
        
        {projectDetails.uploadNDA && (
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileUpload(e.target.files?.[0] || null, 'ndaDocument')}
              className="hidden"
              id="nda-upload"
            />
            <label htmlFor="nda-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400">Click to upload NDA document</p>
              <p className="text-xs text-gray-500 mt-1">PDF only (Max 5MB)</p>
            </label>
            {projectDetails.ndaDocument && (
              <p className="text-orange-400 mt-2">File selected: {projectDetails.ndaDocument.name}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
