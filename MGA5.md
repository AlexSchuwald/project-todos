# CGA5

### Question-1

Statement\
What will be the value of mList at the end of the execution of the given pseudocode?

```
L = [[0, 210], [1, 198], [2, 188], [3, 173], [4, 240]]  
mList = []  
foreach element in L{  
    mList = mList ++ [last(element)]  
}  
```

Options

- [ ] (a)\
  \[0, 210, 1, 198, 2, 188, 3, 173, 4, 240\]

- [ ] (b)\
  \[0, 1, 2, 3, 4\]

- [ ] (c)\
  \[\[0, 210\], \[1, 198\], \[2, 188\], \[3, 173\], \[4, 240\]\]

- [x] (d)\
  \[210, 198, 188, 173, 240\]

### Question-2

**Statement**

What will be the value of `mList` at the end of the execution of the given pseudocode?

```
1  L = [[0, 210, 78], [1, 198, 91], [2, 188, 77], [3, 173, 78], [4, 240, 89]]
2  mList = []
3  foreach element in L{
4      mList = mList ++ [last(init(element))]
5  }
```

**Options**

- [ ] **(a)**\
  \[0, 210, 1, 198, 2, 188, 3, 173, 4, 240\]

- [ ] **(b)**\
  \[0, 1, 2, 3, 4\]

- [ ] **(c)**\
  \[\[0, 210\], \[1, 198\], \[2, 188\], \[3, 173\], \[4, 240\]\]

- [x] **(d)**\
  \[210, 198, 188, 173, 240\]

### Question 3 \[3 Marks\]

**Statement**

Let N be a list of first 50 positive integers (i.e., N = \[1, 2, 3, ……, 49, 50\]). What will be the value of count at the end of the execution of the given pseudocode? (NAT)

```
1   count = 0
2   A = someList(N)
3   B = someList(rest(N))
4   foreach Y in A{
5       foreach Z in B{
6           if(Z == Y){
7               count = count + 1
8           }
9       }
10  }
11  Procedure someList(X)
12      outList = [], newList = X
13      while(length(newList) > 0){
14          outList = outList ++ [first(newList)]
15          newList = rest(rest(newList))
16      }
17      return(outList)
18  End someList
```

\--> 0

## **Statement**

Consider the procedure given below. If L1 and L2 are two lists, and L = eliminate(L1, L2), then answer the following questions.

```
1  Procedure eliminate(L1, L2)
2  L3 = [], Found = False
3  foreach i in L1{
4    foreach j in L2{
5      if(i == j){
6        Found == True
7      }
8    }
9    if(not Found){
10     L3 = L3 ++ [i]
11   }
12   Found = False
13 }
14 return(L3)
15 End eliminate
```

### **Question 4 \[4 Marks\]**

**Statement**

Choose the correct options(s) regarding L. It is a Multiple Select Question (MSQ).

**Options**

- [ ] (a)\
  It will contain all the elements of L2 that are not present in L1

- [x] (b)\
  It will contain all the elements of L1 that are not present in L2

- [ ] (c)\
  It will contain all the elements common to L1 and L2

- [ ] (d)\
  It will contain the elements present in L1 or L2 but not both

### Question 5 \[3 Marks\]

**Statement**

Which of the following option(s) is/are always correct? It is a Multiple Select Question (MSQ).

**Options**

- [ ] **(a)**\
  length(L1) - length(L2) = Length(L)

- [ ] **(b)**\
  length(L1) > length(L2)

- [x] **(c)**\
  length(L1) >= length(L)

- [ ] **(d)**\
  length(L2) <= length(L)

### Question 6 \[5 Marks\]

**Statement**

A word is said to be perfect if no letter is repeated. Let `isPerfect` be a procedure that takes a row X in the "Words" table as input and returns True if the word in row X is a perfect word otherwise returns False. Choose the correct implementation of the procedure `isPerfect`.

**Options**

**(a)**

```
Procedure isPerfect(X)
  C = []
  i = 1
  while(i <= X.LetterCount){
    A = ith letter in X.Word
    if(member(C,A)){
      return(False)
    }
    else{
      return(True)
    }
    i = i + 1
  }
End isPerfect
```

**(b)**

```
Procedure isPerfect(X)
  C = []
  i = 1
  while(i <= X.LetterCount){
    A = ith letter in X.Word
    if(member(C,A)){
      return(False)
    }
    else{
      C = C ++ [A]
    }
    i = i + 1
  }
  return(True)
End isPerfect
```

**(c)**

```
Procedure isPerfect(X)
  C = []
  i = 1
  while(i <= X.LetterCount){
    A = ith letter in X.Word
    if(member(C,A)){
      C = C ++ [A]
    }
    i = i + 1
  }
  return(True)
End isPerfect
```

(d)

`Procedure isPerfect(X)`

` C = []`

` i = 1`

`while(i <= X.LetterCount){`

`A = ith letter in X.Word `

`if(member(C,A)){`

`return(True)`

`} `

`else{ C = C ++ [A] }`

`i = i + 1 }`

`return(False)`

`End isPerfect`

### Question 7 \[5 Marks\]

**Statement**

The given pseudocode is executed using a dataset having the same fields as the “Words” dataset, and contains the following words -

“I ordered this product from Gitark. I am very happy to share my review regarding this awesome product. It is not only nice to use, but also has a very cool look. I think this is the best product which can be bought in this price range.”

Consider the following information:

1. **unique(L)** returns a list of unique elements of list L. For example unique(\["think", "like", "toppers", "think"\]) will return \["think", "like", "toppers"\].

2. **comNo(L1, L2)** returns the number of common elements in lists L1 and L2.

3. Ignore the upper and lower case, and punctuation symbols while comparing with other words

```
1  positiveList = [“happy”, “awesome”, “nice”, “fine”, “best”, “cool”]
2  posSen = 0, L = []
3  while(Table 1 has more rows){
4      Read the first row X in Table 1
5      L = L ++ [X.Word]
6      if(X.Word ends with full stop){
7          L = unique(L)
8          posCount = comNo(positiveList, L)
9          if(posCount >= 2){
10             posSen = posSen + 1
11         }
12         L = []
13     }
14     Move X to Table 2
15 }
```

What will be the value of **posSen** at the end of the execution of the above pseudocode? (NAT)

### Question 8

Statement

Mona tells Sona that at least 50 percent of sentences have nouns just after an adjective. Sona writes the following pseudocode to find if Mona is right or not. At the end of the execution of the pseudocode given below, A stores True if Mona is right otherwise False. But Sona might have made mistakes in one or more lines. Identify such lines (if any). It is a Multiple Select Question (MSQ). Assume that there is at least one adjective in every sentence.

```
1  A = False, trueCount = 0, totalCount = 0, posList = []
2  while(Table 1 has more rows){
3    Read the first row X in Table 1
4    posList = posList ++ [X.PartofSpeech]
5    if(X.Word ends with a full stop){
6      if(isTrue(posList) == 0){
7        trueCount = trueCount ++ [1]
8      }
9      else{
10       totalCount = totalCount + 1
11     }
12     posList = []
13   }
14   Move X to Table 2
15 }
16 if(trueCount / totalCount >= 0.5){
17   A = True
18 }
19 
20 Procedure isTrue(L)
21 count = 0
22 while(length(L) >= 2){
23   if(first(L) == "Adjective"){
24     count = count + 1
25     if(first(rest(L)) == "Noun"){
26       count = count - 1
27     }
28   }
29   L = rest(L)
30 }
31 return(count)
32 End isTrue
```

Options

(a)\
Line 4: Invalid addition operation for appending in posList

(b)\
Line 7: Invalid increment of trueCount

(c)

Line 9 - 11: These three lines should be replaced by

```
totalCount = totalCount + 1
```

(d)

Line 26: The current statement should be replaced by

```
count = count + 1
```

(e)

No mistakes

## Question (9-10)

**Statement**

Let a and b be positive integers. Procedure `remainder(a, b)` returns remainder if a is divided by b.

```
1   Procedure doSomething(X)
2       j = 2, Flag = True
3       if(X == 1){
4           return(False)
5       }
6       While(j < X){
7           if(remainder(X, j) == 0){
8               Flag = False
9               exitloop
10          }
11          j = j + 1
12      }
13      return(Flag)
14  End doSomething
```

### **Question 9 \[4 Marks\]**

**Statement**

When will procedure `doSomething(X)` return True?

**Options**

**(a)**\
X is a prime number

**(b)**\
X is an even number

**(c)**\
X is an odd number

**(d)**\
X is more than 1

### Question 10 \[5 Marks\]

Consider the procedure discussed above. What will be the value of **M** at the end of the execution of the given pseudocode below?

```
1  L = [6, 10, 11, 23, 7, 50]
2  M = []
3  position = 1
4  foreach element in L{
5    if(doSomething(position) and doSomething(element)){
6      M = M ++ [element]
7    }
8    position = position + 1
9  }
```

**Options**

(a)\
**M** = \[11, 7\]

(b)\
**M** = \[11, 23, 7\]

(c)\
**M** = \[11\]

(d)\
**M** = \[23, 7\]