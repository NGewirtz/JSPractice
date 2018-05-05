def find_max_consecutive_ones(nums)
    max = 0
    curr = false
    nums.each do |num|
        if num == 1 && curr
            curr += 1
        elsif num == 1
            curr = 1
        else
            max = curr if curr && curr > max
            curr = false
        end
    end
    max = curr if curr && curr > max
    max
end
