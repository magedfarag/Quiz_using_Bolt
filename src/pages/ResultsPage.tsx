import { generateQuizReport } from '@/api/reports';

export default function ResultsPage() {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  
  const handleGenerateReport = async () => {
    const pdfData = await generateQuizReport(resultData);
    const link = document.createElement('a');
    link.href = pdfData;
    link.download = `quiz-results-${new Date().toISOString().split('T')[0]}.pdf`;
    link.click();
  };

  const handleEmailResults = async () => {
    try {
      await submitResults({ ...resultData, email });
      setShowEmailDialog(false);
      alert('Results emailed successfully!');
    } catch (error) {
      alert('Failed to email results');
    }
  };

  return (
    <div>
      {/* Existing results display */}
      
      <div className="flex gap-4 mt-6">
        <button 
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Download PDF Report
        </button>
        
        <button 
          onClick={() => setShowEmailDialog(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Email My Results
        </button>
      </div>

      {showEmailDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Email Results</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setShowEmailDialog(false)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={handleEmailResults}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
