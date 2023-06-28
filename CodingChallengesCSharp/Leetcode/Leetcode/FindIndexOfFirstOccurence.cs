using System;

public class Solution
{
    public int StrStr(string haystack, string needle)
    {
        if (string.IsNullOrEmpty(needle))
            return 0;

        int n = needle.Length;
        for (int i = 0; i <= haystack.Length - n; i++)
        {
            if (haystack.Substring(i, n) == needle)
                return i;
        }

        return -1;
    }
}

public class FindIndexOfFirstOccurence
{
    public static void Main(string[] args)
    {
        Solution solution = new Solution();

        Console.WriteLine(solution.StrStr("sadbutsad", "sad"));  // Output: 0
        Console.WriteLine(solution.StrStr("leetcode", "leeto"));  // Output: -1
    }
}
