class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]

        1) Iterate through every number in the list
        2) Compare each element to each other my adding them
        and seeing if they add up to the target value
        3) Return the INDEXES for the values as a List of integers
        """
        for index_a, value_a in enumerate(nums):
            for index_b, value_b in enumerate(nums):
                if value_a + value_b == target and index_a != index_b:
                    return [index_a, index_b]

my_solution = Solution()

result = my_solution.twoSum([2, 7, 11, 15], 9)

print(result)