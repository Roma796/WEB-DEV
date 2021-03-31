n=int(input())
a=list(map(int,input().split()))
cnt=0
ok=False
for  i in range (1,len(a)):
    if a[i]*a[i-1]>0:
        ok=True
if ok:
    print("YES")
else:
    print("NO")