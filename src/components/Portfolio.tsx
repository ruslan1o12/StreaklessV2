import { useState, useEffect } from 'react';
import { Upload, X, LogIn } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  before_image_url: string;
  after_image_url: string;
  created_at: string;
}

export default function Portfolio() {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    checkAuth();
    fetchImages();
  }, []);

  const checkAuth = async () => {
    const session = (await supabase.auth.getSession()).data.session;
    setIsAuthenticated(!!session);
  };

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      setIsAuthenticated(true);
      setShowAuth(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Sign in failed');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setShowUpload(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 mb-12">Loading our work...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
            <p className="text-gray-600">Before & After Gallery</p>
          </div>

          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setShowUpload(!showUpload)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Upload size={20} />
                  Add Photos
                </button>
                <button
                  onClick={handleSignOut}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuth(!showAuth)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <LogIn size={20} />
                Admin Login
              </button>
            )}
          </div>
        </div>

        {showAuth && !isAuthenticated && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h3>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {authError && <p className="text-red-600 text-sm">{authError}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        )}

        {showUpload && isAuthenticated && <UploadForm onSuccess={() => { fetchImages(); setShowUpload(false); }} />}

        {images.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center">
            <p className="text-gray-500 text-lg mb-4">No portfolio images yet</p>
            {isAuthenticated && (
              <p className="text-gray-600">Click "Add Photos" to upload your first before & after images</p>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.id} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-2 gap-2 bg-gray-100 p-2">
                    <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                      <img
                        src={image.before_image_url}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                      <img
                        src={image.after_image_url}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{image.title}</h4>
                    {image.description && (
                      <p className="text-gray-600 text-sm mb-3">{image.description}</p>
                    )}
                    {isAuthenticated && (
                      <button
                        onClick={() => deleteImage(image.id, () => fetchImages())}
                        className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface UploadFormProps {
  onSuccess: () => void;
}

function UploadForm({ onSuccess }: UploadFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [beforePreview, setBeforePreview] = useState('');
  const [afterPreview, setAfterPreview] = useState('');

  const handleFileSelect = (file: File, type: 'before' | 'after') => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (type === 'before') {
      setBeforeFile(file);
      setBeforePreview(URL.createObjectURL(file));
    } else {
      setAfterFile(file);
      setAfterPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title || !beforeFile || !afterFile) {
      setError('Please fill in all required fields');
      return;
    }

    setUploading(true);

    try {
      const timestamp = Date.now();
      const beforePath = `portfolio/${timestamp}-before-${beforeFile.name}`;
      const afterPath = `portfolio/${timestamp}-after-${afterFile.name}`;

      const { error: beforeUploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(beforePath, beforeFile);

      if (beforeUploadError) throw beforeUploadError;

      const { error: afterUploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(afterPath, afterFile);

      if (afterUploadError) throw afterUploadError;

      const beforeUrl = supabase.storage.from('portfolio-images').getPublicUrl(beforePath).data.publicUrl;
      const afterUrl = supabase.storage.from('portfolio-images').getPublicUrl(afterPath).data.publicUrl;

      const { error: insertError } = await supabase.from('portfolio_images').insert({
        title,
        description,
        before_image_url: beforeUrl,
        after_image_url: afterUrl,
      });

      if (insertError) throw insertError;

      setTitle('');
      setDescription('');
      setBeforeFile(null);
      setAfterFile(null);
      setBeforePreview('');
      setAfterPreview('');
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Add Portfolio Images</h3>
        <button
          onClick={() => window.location.reload()}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Downtown Office Building"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Optional details about the project"
            rows={3}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Before Image *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0], 'before')}
                className="hidden"
                id="before-upload"
              />
              <label htmlFor="before-upload" className="cursor-pointer">
                {beforePreview ? (
                  <img src={beforePreview} alt="Preview" className="w-full h-40 object-cover rounded" />
                ) : (
                  <div>
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-600">Click to upload before photo</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">After Image *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0], 'after')}
                className="hidden"
                id="after-upload"
              />
              <label htmlFor="after-upload" className="cursor-pointer">
                {afterPreview ? (
                  <img src={afterPreview} alt="Preview" className="w-full h-40 object-cover rounded" />
                ) : (
                  <div>
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-600">Click to upload after photo</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        >
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
      </form>
    </div>
  );
}

async function deleteImage(id: string, onSuccess: () => void) {
  if (!confirm('Are you sure you want to delete this portfolio entry?')) return;

  try {
    const { error } = await supabase.from('portfolio_images').delete().eq('id', id);
    if (error) throw error;
    onSuccess();
  } catch (err) {
    alert(err instanceof Error ? err.message : 'Delete failed');
  }
}
