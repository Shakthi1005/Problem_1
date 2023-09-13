#problem 1
n=input("enter:").split(',')
result=[]
for x in n:
    if x>=35:
        result.append("pass")
    else:
        result.append("fail")
print(result)
