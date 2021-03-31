def f( a, b, c, d):
    l=list({a,b,c,d})
    sorted(l)
    print(l[0])
a,b,c,d=map(int,input().split())
f(a,b,c,d)