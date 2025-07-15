
import React from 'react';
import { Camera, FileText, Video, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MediaUploads {
  resume: File | null;
  headshots: File[];
  demoReel: File | null;
  demoReelUrl: string;
  additionalMedia: { file: File; description: string }[];
}

interface MediaUploadsSectionProps {
  mediaUploads: MediaUploads;
  setMediaUploads: React.Dispatch<React.SetStateAction<MediaUploads>>;
}

const MediaUploadsSection = ({ mediaUploads, setMediaUploads }: MediaUploadsSectionProps) => {
  const handleFileUpload = (type: string, files: FileList | null) => {
    if (!files) return;
    
    const file = files[0];
    
    switch (type) {
      case 'resume':
        if (file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
          setMediaUploads(prev => ({ ...prev, resume: file }));
        } else {
          alert('Resume must be a PDF file under 5MB');
        }
        break;
      case 'headshots':
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (validImageTypes.includes(file.type)) {
          setMediaUploads(prev => ({
            ...prev,
            headshots: [...prev.headshots, file].slice(0, 5)
          }));
        } else {
          alert('Headshots must be JPG, PNG, or JPEG files');
        }
        break;
      case 'demoReel':
        const validVideoTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/mkv', 'video/webm'];
        if (validVideoTypes.includes(file.type) && file.size <= 100 * 1024 * 1024) {
          setMediaUploads(prev => ({ ...prev, demoReel: file }));
        } else {
          alert('Demo reel must be MP4, MOV, AVI, MKV, or WebM under 100MB');
        }
        break;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <Camera className="h-5 w-5 mr-2 text-orange-400" />
        Section 4 - Media Uploads
      </h3>
      
      {/* Resume Upload */}
      <div>
        <Label className="text-gray-300">Resume/CV (PDF only, 5MB limit)</Label>
        <div className="mt-2">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileUpload('resume', e.target.files)}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
          >
            <FileText className="h-6 w-6 mr-2 text-gray-400" />
            <span className="text-gray-400">Upload Resume/CV</span>
          </label>
          {mediaUploads.resume && (
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="outline" className="border-orange-500 text-orange-400">
                {mediaUploads.resume.name}
              </Badge>
              <Button type="button" size="sm" variant="outline">
                Preview
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Headshots Upload */}
      <div>
        <Label className="text-gray-300">Headshots (JPG, PNG, JPEG - Max 5 images)</Label>
        <div className="mt-2">
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png"
            onChange={(e) => handleFileUpload('headshots', e.target.files)}
            className="hidden"
            id="headshots-upload"
          />
          <label
            htmlFor="headshots-upload"
            className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
          >
            <ImageIcon className="h-6 w-6 mr-2 text-gray-400" />
            <span className="text-gray-400">Upload Headshots</span>
          </label>
          {mediaUploads.headshots.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {mediaUploads.headshots.map((file, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Badge variant="outline" className="border-orange-500 text-orange-400">
                    {file.name}
                  </Badge>
                  <Button type="button" size="sm" variant="outline">
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Demo Reel */}
      <div>
        <Label className="text-gray-300">Demo Reel</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <Label className="text-gray-300 text-sm">Upload Video (MP4, MOV, AVI, MKV, WebM - 100MB limit)</Label>
            <input
              type="file"
              accept=".mp4,.mov,.avi,.mkv,.webm"
              onChange={(e) => handleFileUpload('demoReel', e.target.files)}
              className="hidden"
              id="demo-reel-upload"
            />
            <label
              htmlFor="demo-reel-upload"
              className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
            >
              <Video className="h-6 w-6 mr-2 text-gray-400" />
              <span className="text-gray-400">Upload Demo Reel</span>
            </label>
          </div>
          <div>
            <Label className="text-gray-300 text-sm">Or provide URL</Label>
            <Input
              value={mediaUploads.demoReelUrl}
              onChange={(e) => setMediaUploads(prev => ({ ...prev, demoReelUrl: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
        </div>
        {mediaUploads.demoReel && (
          <Badge variant="outline" className="mt-2 border-orange-500 text-orange-400">
            {mediaUploads.demoReel.name}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default MediaUploadsSection;
