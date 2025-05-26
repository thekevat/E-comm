
import { pipeline } from '@xenova/transformers';


let embedder;

// Load the model only once during the app's lifetime
async function loadEmbedder() {
  try {
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    console.log("Model loaded successfully!");
  } catch (err) {
    console.error("Error loading model:", err);
  }
}

// Function to get embedding for the input text
async function getEmbedding(text) {
  if (!embedder) await loadEmbedder();  // Load model if not loaded yet

  try {
    const output = await embedder(text, { pooling: 'mean', normalize: true });
    return output.data[0];  // Return the embedding vector (1D array)
  } catch (err) {
    console.error("Error generating embedding:", err);
    return [];  // Return an empty array if there's an error
  }
}

module.exports = { getEmbedding };
