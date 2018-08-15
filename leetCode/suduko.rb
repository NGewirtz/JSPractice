class Sudoku
  def initialize(board)
    @board = board
  end

  def boxes
    groups = [[0,1,2], [3,4,5], [6,7,8]]
    boxes = []
    groups.each do |group|
      box = []

      9.times do |x| #0,1,2
        group.each do |y|
          box << @board[x][y]
        end
        boxes << box if box.length == 9
        box = [] if box.length == 9
      end
    end
    boxes
  end

  def group?
    boxes.all? do |box|
      box = box.reject{ |el| el == "."}
      box.uniq == box
    end
  end

  def horizontal?
    @board.all? do |row|
      row = row.reject{ |el| el == "."}
      row.uniq == row
    end
  end

  def vertical?
    @board.each_with_index do |el, i|
      set = {}
      @board.each_with_index do |el2, j|
        unless @board[j][i] == "."
          if set[@board[j][i]]
            return false
          else
            set[@board[j][i]] = true
          end
        end
      end
    end
    true
  end

  def evaluate
    vertical? && horizontal? && group?
  end

end

ex4 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]]

ex3 = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]
]

ex1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

ex2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

sudo = Sudoku.new(ex4)
print(sudo.vertical?)
print(sudo.horizontal?)
print(sudo.group?)
