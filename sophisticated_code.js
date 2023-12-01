/** 
 * Filename: sophisticated_code.js
 * 
 * Description: This code implements a complex and sophisticated algorithm to find the Fibonacci sequence up to a given number of terms. 
 * The implementation includes advanced error handling, memoization for optimization, and special formatting of the output.
 */

// Function to generate the Fibonacci sequence up to a given number of terms
const generateFibonacciSequence = (numTerms) => {
   // Validate the input
   if (typeof numTerms !== 'number' || !Number.isInteger(numTerms) || numTerms <= 0) {
      throw new Error('Invalid input! The number of terms must be a positive integer.');
   }

   // Initialize the sequence with the first two terms
   const sequence = [0, 1];

   // Generate the Fibonacci sequence
   for (let i = 2; i < numTerms; i++) {
      // Calculate the next term using memoization for optimization
      sequence[i] = sequence[i - 1] + sequence[i - 2];
   }

   // Format the sequence in a special way
   const formattedSequence = sequence.map((term, index) => {
      const prefix = index % 2 === 0 ? 'Term' : 'Fibonacci';
      return `${prefix} ${index + 1}: ${term}`;
   });

   // Return the formatted sequence
   return formattedSequence.join('\n');
};

try {
   // Test the function with different inputs
   console.log(generateFibonacciSequence(10));
   console.log(generateFibonacciSequence(15));
   console.log(generateFibonacciSequence(20));
} catch (error) {
   console.error(error.message);
}
