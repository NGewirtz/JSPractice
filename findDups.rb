require 'date'

class Array

  def find_duplicates
    hash = {}
    dups = []
    self.each do |item|
      if hash[item]
        dups << item
      else
        hash[item] = true
      end
    end
    dups
  end


end


print([1,2,3,4,4,4,1].find_duplicates)
invoices = [
  { company: 'Google', amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow' },
  { company: 'Yahoo',  amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow' },
  { company: 'Google', amount: 500, date: Date.new(2015, 07, 31).to_s, employee: 'Jon Snow' },
  { company: 'Google', amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow' },
  { company: 'Google', amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow' },
  { company: 'Google', amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow', notes: 'Some notes' },
  { company: 'Google', amount: 500, date: Date.new(2017, 01, 01).to_s, employee: 'Jon Snow', notes: 'Some notes' },
]

puts(invoices.find_duplicates)
