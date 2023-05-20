using System;
using System.Collections.Generic;

namespace CodingChallengesCSharp
{
    public class ChallengeSolutions
    {
        /* 1. Problem One: Create a function to detect and print duplicate characters from a given string.
        Modify the function to include the number of times the duplicate character appears in the string */
        public Dictionary<char, int> FindDupes(string inputString)
        {
            Dictionary<char, int> charCounts = new Dictionary<char, int>();

            for (int i = 0; i < inputString.Length; i++)
            {
                char currentChar = char.ToLower(inputString[i]);

                if (charCounts.ContainsKey(currentChar))
                {
                    charCounts[currentChar]++;
                }
                else
                {
                    charCounts[currentChar] = 1;
                }
            }

            Dictionary<char, int> duplicates = new Dictionary<char, int>();

            foreach (var kvp in charCounts)
            {
                if (kvp.Value > 1)
                {
                    duplicates[kvp.Key] = kvp.Value;
                }
            }

            return duplicates;
        }

        



        public static void Main(string[] args)
        {
            ChallengeSolutions solution = new ChallengeSolutions();

            // Comment in/out for the function you want to test

            //Problem 1------------
            string testString = "Tallahassee";
            Dictionary<char, int> duplicates = solution.FindDupes(testString);
            string answer = $"Input String: {testString}\n";
            foreach (var kvp in duplicates)
            {
                answer += ($"Duplicate character: {kvp.Key}, Count: {kvp.Value}\n");
            }

            //Problem 2------------


            //Print the output
            Console.WriteLine(answer);
            

            // Keep the console window open
            Console.ReadLine();
        }
    }
}