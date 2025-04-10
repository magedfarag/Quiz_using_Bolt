import { jsPDF } from 'jspdf';

export const generateQuizReport = (resultData) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Quiz Results Report', 105, 20, { align: 'center' });
  
  // Add student info
  doc.setFontSize(12);
  doc.text(`Student: ${resultData.studentName}`, 20, 40);
  doc.text(`Date: ${new Date(resultData.timestamp).toLocaleDateString()}`, 20, 50);
  
  // Add score summary
  doc.setFontSize(16);
  const percentage = (resultData.score / resultData.totalQuestions * 100).toFixed(1);
  doc.text(`Score: ${resultData.score}/${resultData.totalQuestions} (${percentage}%)`, 20, 70);
  
  // Add question review
  doc.setFontSize(14);
  doc.text('Question Review:', 20, 90);
  
  let yPosition = 100;
  resultData.answers.forEach((answer, index) => {
    if (yPosition > 280) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${answer.questionText}`, 20, yPosition);
    doc.text(`Your answer: ${answer.selectedAnswer}`, 30, yPosition + 10);
    doc.text(`Correct answer: ${answer.correctAnswer}`, 30, yPosition + 20);
    doc.text(`Status: ${answer.isCorrect ? 'Correct' : 'Incorrect'}`, 30, yPosition + 30);
    
    yPosition += 40;
  });
  
  return doc.output('datauristring');
};
