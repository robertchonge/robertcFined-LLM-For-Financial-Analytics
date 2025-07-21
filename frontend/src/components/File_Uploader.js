import { useState } from 'react';
import { uploadFinancialFile } from '../utils/api';
import LoadingSpinner from './LoadingSpinner';

export default function FileUploader({ onResult }) {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('csv');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', fileType);

    try {
      const result = await uploadFinancialFile(formData);
      onResult(result);
    } catch (e) {
      alert('Failed to analyze file.');
    }
    setLoading(false);
  };

  return (
    <div className=\"bg-white p-6 rounded shadow mb-6\">
      <input type=\"file\" onChange={(e) => setFile(e.target.files[0])} className=\"mb-4\" />
      <select value={fileType} onChange={(e) => setFileType(e.target.value)} className=\"border rounded p-2 ml-2\">
        <option value=\"csv\">CSV</option>
        <option value=\"xlsx\">Excel</option>
        <option value=\"pdf\">PDF</option>
      </select>
      <br />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className=\"mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700\"
      >
        {loading ? <LoadingSpinner /> : 'Upload & Analyze'}
      </button>
    </div>
  );
          }
