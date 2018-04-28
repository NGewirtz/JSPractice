def bubble_sort(arr)
  unsorted = true
  while unsorted
    unsorted = false
    arr.each_with_index do |el, idx|
      if arr[idx + 1] && el > arr[idx + 1]
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        unsorted = true
      end
    end
  end
  arr
end

test_arr = [4,8,1,2,7,1,23,1,12,11,14,19,5,21]
puts(bubble_sort(test_arr))
