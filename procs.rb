class Response

  def initialize(format)
    @format = format
  end

  def html
    "html"
  end

  def xml
    @format == "xml" ? "xml" : nil
  end

  def response
    @format
  end
end


def respond_to(&prc)
  prc.call(Response.new("HTML"))
end


def index
  respond_to do |format|
    format.html
    format.xml
  end
end

def map(&prc)
  arr = [1,2,4]
  arr << prc.call(arr[1])
  arr
end

class Array

  def my_map(&prc)
    arr = []
    length.times do |idx|
      arr << prc.call(self[idx])
    end
    arr
  end

end


print([1,2,3].my_map { |el| el * 2 })
