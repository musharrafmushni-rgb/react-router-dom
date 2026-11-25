// API URL
const API_URL = "https://dummyjson.com/products";

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.products; // API response-ல் 'products' என்ற array உள்ளது
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Error-ஐ parent-க்கு அனுப்புகிறோம்
  }
};