// Function to extract text from the "entry-content" div
const extractText = () => {
  const container = document.querySelector('.entry-content');
  if (!container) {
    console.warn('No element with class "entry-content" found.');
    return '';
  }

  // Extract text content
  const text = container.innerText || '';
  return text;
};

export default extractText;