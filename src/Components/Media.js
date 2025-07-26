import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaImage, FaVideo, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
// import './Media.css';

const Media = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const processFiles = (files) => {
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    
    const newMedia = validFiles.map(file => ({
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      file,
      type: file.type.startsWith('image/') ? 'image' : 'video',
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      status: 'pending'
    }));
    
    setMediaFiles([...mediaFiles, ...newMedia]);
    simulateUpload(newMedia);
  };

  const simulateUpload = (files) => {
    files.forEach(file => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setMediaFiles(prev => prev.map(item => 
            item.id === file.id ? {...item, status: 'completed'} : item
          ));
        }
        setUploadProgress(prev => ({...prev, [file.id]: progress}));
      }, 300);
    });
  };

  const removeFile = (id) => {
    setMediaFiles(mediaFiles.filter(file => file.id !== id));
    setUploadProgress(prev => {
      const newProgress = {...prev};
      delete newProgress[id];
      return newProgress;
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="media-container">
      <h1 className="media-title">Media Gallery</h1>
      <p className="media-subtitle">Upload and manage your photos & videos</p>
      
      {/* Upload Area */}
      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/*,video/*"
          style={{ display: 'none' }}
        />
        <FaCloudUploadAlt className="upload-icon" />
        <h3>Drag & Drop files here</h3>
        <p>or</p>
        <button className="upload-button">
          Browse Files
        </button>
        <p className="formats-info">Supports: JPG, PNG, GIF, MP4, MOV (Max 50MB each)</p>
      </div>
      
      {/* Media Grid */}
      <div className="media-grid">
        {mediaFiles.length === 0 ? (
          <div className="empty-state">
            <p>No media files uploaded yet</p>
          </div>
        ) : (
          mediaFiles.map(media => (
            <div key={media.id} className="media-card">
              <div className="media-preview">
                {media.type === 'image' ? (
                  <div className="image-container">
                    <img 
                      src={URL.createObjectURL(media.file)} 
                      alt={media.name} 
                      className="media-thumbnail"
                    />
                  </div>
                ) : (
                  <div className="video-container">
                    <video className="media-thumbnail" muted>
                      <source src={URL.createObjectURL(media.file)} type={media.file.type} />
                    </video>
                    <div className="play-icon">▶</div>
                  </div>
                )}
                
                <div className="media-overlay">
                  <button 
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(media.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                
                {media.status === 'completed' && (
                  <div className="upload-complete">
                    <FaCheckCircle className="check-icon" />
                  </div>
                )}
              </div>
              
              <div className="media-info">
                <p className="media-name">{media.name}</p>
                <p className="media-size">{media.size}</p>
                {uploadProgress[media.id] && (
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar"
                      style={{ width: `${uploadProgress[media.id]}%` }}
                    ></div>
                    <span className="progress-text">
                      {Math.round(uploadProgress[media.id])}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Media;