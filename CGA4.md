# CGA4

### 1\. What will `A` represent at the end of the execution of the following pseudocode using the “Words” dataset?

`A = 0`

`while Table1.hasmore_rows():`

`    X = Table1.readtop_row()`

`    i = 1`

`    B = False`

`    while i <= X.LetterCount:`

`        if X.word[i - 1] in "aeiou":`

`            B = True`

`        i += 1`

`    if B:`

`        A += 1`

`    Table_2.move(X)/`

- [ ] Number of words with at most one letter followed by a vowel

- [ ] Number of words with exactly one letter followed by a vowel

- [ ] Number of words without any letters followed by a vowel

- [ ] Number of words with at least one letter followed by a vowel

### 2\. What will `E` represent at the end of the execution of the following pseudocode using the “Olympics” dataset, assuming no player has won more than one medal?

```
E = 0

while (Table 1 has more rows) {
    Read the first row P in Table 1
    Move P to Table 2
    while(Table 1 has more rows) {
        Read the first row Q in Table 1
        if(findDuo(P, Q)) {
            E = E +1
        }
    }
    Move Q to Table 3
}
Move all rows from Table 3 to Table 1

Procedure findDuo (P, Q)
    if(P.Country Q. Country and P. Medal ! Q.Medal) {
        return (True)
    } else{
        return(False)
    }
End findDuo
```

- [ ] Number of players from the same country with different medals

- [ ] Number of players from different countries with the same medals

- [ ] Number of pairs of players from the same country with different medals

- [ ] Number of pairs of players from different countries with the same medals

### 3\. Given the “Library” dataset with the condition that all authors have distinct names and each book is written by a single author, what will `N` represent at the end of the execution?

```
A = 1, N = 0, count = 0, value = 0

while (Table 1 has more rows) {
    Read the first row X in Table 1
    Move X to Table 2
    while (Table 1 has more rows) {
        Read the first row Y in Table 1   
        if(X.Author == Y. Author) {
            A = A + 1
        } else {
            Move Y to Table 3
        }
    }
    if(A > N) {
        N = A
    }
    A = 1
    count = count + 1
    Delete all rows of Table 2
    Move all rows from Table 3 to Table 1
}
```

What will N represent at the end of execution?

- [ ] Maximum number of books published by an author

- [ ] Maximum number of books published by a pair of authors

- [ ] Maximum number of books published by an author in a year

- [ ] Maximum number of books published by a pair of authors in a year

### 4\. What will `count` represent at the end of the execution of the following pseudocode?

- [ ] Total number of books

- [ ] Number of authors

- [ ] Number of books of same genre

- [ ] Number of authors who wrote books of same genre

### 5\. Select the correct code fragment to complete the pseudocode for calculating the ratio of customers who purchased both “Soap” and “Facewash” to the number of customers who purchased “Facewash” in the “Shopping Bills” dataset.

```
mCount = 0, bCount = 0

while (Pile 1 has more cards) {
    Read the top card x in Pile 1
    // Fill the code
    Move X to Pile 2.
}

frac = bCount / mCount

Procedure isItem (Y, A)
    C = False
    while (Card Y has more items) {
        Read an item z from ItemList of card Y
        if(z.Item    == A) {
            C = True
        }
        Remove z from ItemList of Y
    }
    return (C)

End isItem
```

if (isItem(X, "Facewash")) { mCount = mCount + 1 } if (isItem(X, "Soap")) { bCount = bCount + 1 }

if (isItem(X, "Soap")) { bCount = bCount + 1 if (isItem(X, "Facewash")) { mCount = mCount + 1 } }

![](https://backend.seek.onlinedegree.iitm.ac.in/24t3_cs1001/assets/img/ct-w4-q5b.JPG)

![](https://backend.seek.onlinedegree.iitm.ac.in/24t3_cs1001/assets/img/ct-w4-q5c.JPG)

![-scale0.50](https://backend.seek.onlinedegree.iitm.ac.in/24t3_cs1001/assets/img/ct-w4-q5d.JPG)

### 6\. What will `count` represent at the end of the execution of the following pseudocode using the “Words” dataset?

```
count = 0

while (Table 1 has more rows) {
    Read the first row x in Table 1
    Move X to Table 2
    while (Table 1 has more rows) {
        Read the first row y in Table 1   
        if(customCheck(x) and customCheck(y)) {
            count = count + 1
        }
        Move Y to Table 3
    }
    Move all rows from Table 3 to Table 1
}

Procedure customCheck (P)
    A = 0, i = 1
    B = False, Flag = False
    while (i <= P.LetterCount) {
        if(ith letter of P.word is a consonant) {
            A = 1
        }
        B = True
    } else {
        B = False
    }
    i = i + 1
    if(A == 1) {
        Flag = True
    }
    return (Flag)

End customCheck
```

- [ ] Number of pairs of words with exactly two consonants

- [ ] Number of pairs of words with at least two consonants

- [ ] Number of pairs of words with exactly two consecutive consonants

- [ ] Number of pairs of words with at least two consecutive consonants

### 7\. Two words are said to be conjugate if they fulfill following conditions:

- Number of vowels are same in both the words

- Number of consonants are same in both the words

The given pseudocode is executed using the “Words” dataset. The variable **count** in the given

pseudocode counts the number of conjugate pairs. But the pseudocode may have mistakes in one

or more lines. Identify all such lines (if any). Assume that all statements not listed in the options

below are free of errors. It is a Multiple Select Question

```
count = 0

while (Table 1 has more rows) {
    Read the first row X in Table 1
    Move X to Table 2
    while (Table 1 has more rows) {
        Read the first row Y in Table 1   
        if(X.LetterCount == Y.LetterCount) {
            if(vCount(X) == vCount(Y)) {
                count = count + 1
            }
        }
        Move Y to Table 3
    }
    Move all rows from Table 3 to Table 1
}

Procedure vCount (Z)
    vowelCount = 0,    i = 0
    while (i <= Z.LetterCount) {
        if(ith letter of Z.word is a vowel) {
            vowelCount = vowelCount + 1
        }
        i = i + 1
    }
    return (vowelCount)

End vCount
```

- [ ] Line 8: Invalid parameter is used to call the procedure inside the conditional statement

- [ ] Line 8: Incorrect condition to update **count** as the number of consonants are not being compared

- [ ] Line 17: Incorrect initialization of **vowelCount**

- [ ] Line 17: Incorrect initialization of **i**

- [ ] No mistake

### 8\. The following pseudocode is executed using the “Scores” dataset. A student can join a subject club if his/her subject score is above the score mentioned. The variables M, P and C store the number of students in Mathematics, Physics and Chemistry clubs respectively.

```
M = 0, P = 0, C = 0

while (Table 1 has more rows) {
    Read the first row x in Table 1
    subject = maxSubject(X)
    if(subject == "Mathematics" and X.Mathematics > 95) {
        M = M + 1
    }
    if(subject == "Physics" and X.Physics > 90) {
        P = P + 1
    }
    if(subject == "Chemistry" and X.Chemistry > 90) {
        C = C + 1
    }
    Move X to Table 2
}

Procedure maxSubject (Z)
    if(Z.Physics > Z.Mathematics) {
        if(Z.Physics > Z.Chemistry) {
            return("Physics")
        } else {
            return("Chemistry")
        }
    } else {
        if(Z.Mathematics > Z.Chemistry) {
            return ("Mathematics")
        } else {
            return("Chemistry")
        }
    }

End maxSubject
```

Which club can a student join if he/she gets 92 marks in Physics and Mathematics but 84 in Chemistry?

- [ ] Physics club

- [ ] Chemistry club

- [ ] Mathematics

- [ ] The student cannot join any club

### 9\. Identify when a student can join more than one club.

- [ ] If the student gets more than 90 marks in at least two subjects

- [ ] If the student gets more than 90 marks in Physics and Chemistry

- [ ] If the student gets more than 90 marks and the same marks in Physics and Chemistry

- [ ] A student cannot join more than one club

### 10\. What will `A` represent at the end of the execution of the following pseudocode using the “Words” dataset?

```
A = 0, B = 0
P = True, Q = False

while (Table 1 has more rows) {
    Read the first row X in Table 1
    if (X.PartOfSpeech == "Adverb" and P) {
        P = False
        Q = True
    } else {
        if(not Q) {
            A = A + 1
        }
    }
    if(X.word ends with a full stop) {
        P = True
        Q = False
    }
    Move X to Table 2
}
```

- [ ] Number of adverbs before the first adverb in every sentence

- [ ] Number of words after the first adverb in every sentence

- [ ] Number of words before the first adverb or full stop in every sentence

- [ ] Number of adjectives before the first adverb in every sentence

- [ ] Number of words before the first adverb in every sentence