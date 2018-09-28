def amendTheSentence(s)
  str = ""
  caps = ("A".."Z").to_a
  s[1..-1].chars.each do |char|
    if caps.include?(char)
      str << " #{char.downcase}"
    else
      str << char
    end
  end
  s[0].downcase + str
end
