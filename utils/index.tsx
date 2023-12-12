export async function fetchBooks() {
    try {
      const headers = {
        // Add any headers you need
      };
  
      const response = await fetch("https://freetestapi.com/api/v1/books", {
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching books: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error in fetchBooks:", error);
      throw error; // Re-throw the error for handling in the calling code
    }
  }
  