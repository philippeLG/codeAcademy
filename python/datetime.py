rom datetime import datetime

now = datetime.now()

print now.year
print now.month
print now.day

print '%s-%s-%s' % (now.year, now.month, now.day)

print '%s/%s/%s' % (now.day, now.month, now.year)

print '%s:%s:%s' % (now.hour, now.minute, now.second)

print '%s/%s/%s %s:%s:%s' % (now.day, now.month, now.year, now.hour, now.minute, now.second)


