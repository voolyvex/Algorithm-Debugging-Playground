class Solution(object):
    class Node:
        def __init__(self, data) -> None:
            self.next = None
            self.data = data
    
    class LinkedList:
        def __init__(self) -> None:
            self.head = None
            self.tail = None

        def addNode(self, data):
            new_node = Solution.Node(data)
            if self.head is None:
                self.head = new_node
                self.tail = new_node
            else:
                self.tail.next = new_node
                self.tail = new_node
    
    def addTwoNumbers(self, l1, l2):
        result = Solution.LinkedList()
        carry = 0
        
        while l1 or l2 or carry:
            val1 = l1.data if l1 else 0
            val2 = l2.data if l2 else 0
            
            sum_val = val1 + val2 + carry
            carry = sum_val // 10
            digit = sum_val % 10
            
            result.addNode(digit)
            
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        
        return result.head

# Enter the test case input
test_input = [[2,4,3], [5,6,4]]

# Create linked lists and populate them with the input
list1 = Solution.LinkedList()
for num in test_input[0]:
    list1.addNode(num)

list2 = Solution.LinkedList()
for num in test_input[1]:
    list2.addNode(num)

# Create an instance of the Solution class
my_solution = Solution()

# Call the addTwoNumbers method with the input lists
result = my_solution.addTwoNumbers(list1.head, list2.head)

# Print the resulting linked list
resultlist = []
while result:
    resultlist.append(result.data)
    result = result.next
print(resultlist)
