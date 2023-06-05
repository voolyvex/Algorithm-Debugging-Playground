# Write a function that accepts an integer n and a string s 
# as parameters, and returns a string of s repeated exactly n times.

def string_repeater(n, s)
  count = 0
  repeated_string = ""

  until count >= n do
      repeated_string << s
      count += 1
  end

  return repeated_string
end

puts string_repeater(999, "Bananas!!bananas!!!Banaanaaas!")
