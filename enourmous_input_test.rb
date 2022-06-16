n = gets.chomp.split()
k = n[1]
n = n[0]
count = 0
n = n.to_i
k = k.to_i
for t in 1..n do
    t = gets.to_i
    if t % k == 0 
        count += 1 
    end 
end
puts count

