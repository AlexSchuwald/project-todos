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

E = 0 while (Table 1 has more rows) { Read the first row P in Table 1 Move P to Table 2 while(Table 1 has more rows) { Read the first row Q in Table 1 if(findDuo(P, Q)) { E = E +1 } } Move Q to Table 3 } Move all rows from Table 3 to Table 1 Procedure findDuo (P, Q) if(P.Country Q. Country and P. Medal ! Q.Medal) { return (True) } else{ return(False) } End findDuo

- [ ] Number of players from the same country with different medals

- [ ] Number of players from different countries with the same medals

- [ ] Number of pairs of players from the same country with different medals

- [ ] Number of pairs of players from different countries with the same medals

3\. Given the “Library” dataset with the condition that all authors have distinct names and each book is written by a single author, what will `N` represent at the end of the execution?

4\. What will `count` represent at the end of the execution of the following pseudocode?

5\. Select the correct code fragment to complete the pseudocode for calculating the ratio of customers who purchased both “Soap” and “Facewash” to the number of customers who purchased “Facewash” in the “Shopping Bills” dataset.

6\. What will `count` represent at the end of the execution of the following pseudocode using the “Words” dataset?

7\. Identify the lines with potential mistakes in the given pseudocode for counting conjugate pairs in the “Words” dataset. This is a multiple-select question.

8\. Based on the “Scores” dataset, determine the club a student can join with 92 marks in Physics and Mathematics but 84 in Chemistry.

9\. Identify when a student can join more than one club.

10\. What will `A` represent at the end of the execution of the following pseudocode using the “Words” dataset?