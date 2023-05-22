using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;

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


        /* 2. Problem Two: Create a function that reverses a string, utilizing recursion
        Do not use any built-in Python methods to reverse the string */

        public string ReverseString(string inputString)
        {
            string result = "";
            for (int i = inputString.Length - 1; i > -1; i--)
            {
                result += inputString[i];
            }
            return result;
        }


        /* 3. Problem Three: Create a function that counts the number of vowels and consonants within a given string
        This method should return a dictionary with two keys -  “vowels” and “consonants”, and values of the number of times each appears in the string */

        public Dictionary<string, int> VowelCounter(string inputString)
        {
            Dictionary<string, int> result = new Dictionary<string, int>
            {
                { "vowels", 0 },
                { "consonants", 0 }
            };

            string lowercaseInput = inputString.ToLower();
            
            for (int i = 0; i < lowercaseInput.Length; i++)
            {
                char c = lowercaseInput[i];

                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                {
                    result["vowels"]++;
                }
                else
                {
                    result["consonants"]++;
                }
            }
            return result;
        }


        public static void Main(string[] args)
        {
            ChallengeSolutions solution = new ChallengeSolutions();

            // Uncomment the Problem Solution that you want to run or debug

            //Problem 1------------
            //string testString = "Tallahassee";
            //Dictionary<char, int> duplicates = solution.FindDupes(testString);
            //string answer = $"Input String: {testString}\n";
            //foreach (var kvp in duplicates)
            //{
            //    answer += ($"Duplicate character: {kvp.Key}, Count: {kvp.Value}\n");
            //}
            //Console.WriteLine(answer);

            //Problem 2------------
            //string testString = "gargantuan";
            //string answer = solution.ReverseString(testString);
            //Console.WriteLine(answer);

            //Problem 3------------
            //string testString = "gargantuan";
            //Dictionary<string, int> answer = solution.VowelCounter(testString);
            //foreach (string key in answer.Keys)
            //{
            //    Console.WriteLine($"{key}: {answer[key]}");
            //}


            // Keep the console window open
            Console.ReadLine();
        }
    }
}