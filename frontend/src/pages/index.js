import { useState } from 'react';
import FileUploader from '../components/FileUploader';
import InsightsReport from '../components/InsightsReport';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className=\"min-h-screen p-8 bg-gray-100 font-sans\">
      <h1 className=\"text-3xl font-bold mb-6\">AI Financial Statement Analyzer</h1>

      <FileUploader onResult={setResult} />

      {result && <InsightsReport result={result} />}
    </div>
  );
}
