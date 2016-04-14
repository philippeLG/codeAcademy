tring_1 = "Camelot"
string_2 = "place"

print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)

my_string = "test demo"
print len(my_string)
print my_string.upper()


# translator 
print 'Welcome to the Pig Latin Translator!'

# Start coding here!
original = raw_input("Enter a word:")

if len(original) > 0 and original.isalpha():
    word = original.lower()
    first = word[0]
    new_word = word + first + pyg
    new_word = new_word[1:len(new_word)]
    print new_word
else:
    print 'empty'


for letter in word:
    # Only print out the letter i
    if letter == "i":
        print letter
