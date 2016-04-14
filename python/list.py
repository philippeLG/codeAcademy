

_animals = ["pangolin", "cassowary", "sloth","cat" ];
if len(zoo_animals) > 3:
	print "The first animal at the zoo is the " + zoo_animals[0]
	print "The second animal at the zoo is the " + zoo_animals[1]
	print "The third animal at the zoo is the " + zoo_animals[2]
	print "The fourth animal at the zoo is the " + zoo_animals[3]




numbers = [5, 6, 7, 8]
print "Adding the numbers at indices 0 and 2..."
print numbers[0] + numbers[2]
print "Adding the numbers at indices 1 and 3..."
print numbers[1] + numbers[3]




suitcase = [] 
suitcase.append("sunglasses")
suitcase.append("shirt")
suitcase.append("short")
suitcase.append("truc")

list_length = len(suitcase) # Set this to the length of suitcase

print "There are %d items in the suitcase." % (list_length)
print suitcase



suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]
first  = suitcase[0:2]  # The first and second items (index zero and one)
middle = suitcase[2:4]  # Third and fourth items (index two and three)
last   = suitcase[4:6]  # The last two items (index four and five)



animals = "catdogfrog"
cat  = animals[:3]   # The first three characters of animals
dog  = animals[3:6]  # The fourth through sixth characters
frog = animals[6:]              # From the seventh character to the end



animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = animals.index("duck")
animals.insert(duck_index,"cobra")
print animals # Observe what prints after the insert operation


my_list = [1,9,3,8,5,7]
for number in my_list:
    print 2 * number



start_list = [5, 3, 1, 2, 4]
square_list = []
for number in start_list:
    square_list.append(number ** 2)
square_list.sort()
print square_list



backpack = ['xylophone', 'dagger', 'tent', 'bread loaf']
backpack.remove('dagger')



a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
for num in a:
    if num % 2 == 0:
        print num

#
n.pop(index) will remove the item at index and return it
n.remove(item) will remove the actual item
del(n[1]) is like .pop in that it will remove the item at the given index but don t return it


#
range(6) # => [0,1,2,3,4,5]
range(1,6) # => [1,2,3,4,5]
range(1,6,3) # => [1,4]

for item in list:
    print item

for i in range(len(list)):
    print list[i]


#
n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
# Add your function here
def flatten(lists):
    results =[]
    for numbers in lists:
        for number in numbers:
            results.append(number)
    return results

