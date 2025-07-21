export default function InsightsReport({ result }) {
  return (
    <div className=\"bg-green-50 p-6 rounded shadow\">
      <h2 className=\"text-xl font-semibold mb-4\">AI Financial Insights</h2>
      <p className=\"mb-2\">Rows Detected: <strong>{result.rows}</strong></p>
      <p className=\"mb-4\">Columns: {result.columns.join(', ')}</p>
      <pre className=\"whitespace-pre-wrap bg-white p-4 rounded border text-gray-700\">
        {result.insights}
      </pre>
    </div>
  );
}
