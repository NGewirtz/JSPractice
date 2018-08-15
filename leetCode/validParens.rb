def is_valid(s)
  stack = []
  pairs = {
    "}" => "{",
    ")" => "(",
    "]" => "["
  }
  
  s.chars.each do |char|
    if pairs[char]
      if pairs[char] == stack[-1]
        stack.pop
      else
        return false
      end
    else
      stack << char
    end
  end

  return false unless stack.empty?
  true
end
