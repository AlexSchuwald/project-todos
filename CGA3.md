# CGA3

**Questions**

1. The following pseudocode is executed using the “Words” dataset. What will P represent at the end of the execution?

`P = 0`

`Q = 0`

`while Table1.hasmore_rows():`

`    X = Table1.readtop_row()`

`    if X.LetterCount % 2 == 0:`

`        P += 1`

`    else:`

`        if X.PartOfSpeech == "Adverb":`

`            Q += 1`

`    Table_2.move(X)`

- [x] Number of words with an even letter count

- [ ] Number of words with an odd letter count

- [ ] Number of adverbs with an even letter count

- [ ] Number of adverbs with an odd letter count

2. What will Q represent at the end of execution?

- [ ] Number of adverbs with an even letter count

- [x] Number of adverbs with an odd letter count

- [ ] Number of words with any letter count

- [ ] Number of adverbs with any letter count

3. The following pseudocode is executed using the “Scores” dataset.

`E = True`

`while Table1.hasmore_rows():`

`    X = Table1.readtop_row()`

`    if X.Gender == 'F':`

`        if X.Physics < 60 or X.Chemistry < 60 or X.Maths < 60:`

`            E = False`

`    Table_2.move(X`)

At the end of the execution, E will be True if

- [ ] All female students have scores greater than or equal to 60 in either Physics, Chemistry or Maths

- [ ] All female students have scores less than 60 in either Physics, Chemistry or Maths

- [ ] There is at least one female student with scores less than 60 in Physics, Chemistry or Maths

- [x] All female students have scores greater than or equal to 60 in Physics, Chemistry and Maths  

4. The following pseudocode is executed using the “Shopping Bills” dataset. Procedure checkShoppingBills accepts a card Y and returns True if the minimum total bill amount of shop is greater than the average total bill amount of shop from where the card Y is generated otherwise returns False. Choose the correct code fragments to complete the procedure. It is a Multiple Select Question (MSQ). Note : MAX_VALUE represent the maximum bill amount of shop Y.  

`def checkShoppingBills(Y):`

`    count = 0`

`    totalAmount = 0`

`    minAmount = float('inf')  # Set minAmount to a very large value initially`

`    while Pile1.hasmore_cards():`

`        X = Pile1.readtop_card()`

`        if X.ShopName == Y.ShopName:`

`            count += 1`

`            totalAmount += X.TotalBillAmount`

`            minAmount = min(minAmount, X.TotalBillAmount)`

`        Pile_2.move(X)`

`    if count > 0:`

`        averageAmount = totalAmount / count`

`        # Fill the code here`

`    else:`

`        averageAmount = 0`

`    return averageAmount`

## D

5\. The following pseudocode is executed using the "Scores" dataset. What will A represent at the end of the execution?

A = 0

while Table_1\.has_more_rows():

    X = Table_1\.read_top_row()

    B = True

    if X.Physics >= 60 and X.Chemistry >= 60 and X.Mathematics >= 60:

        B = False

    if B:

        A += 1

    Table_2.move(X)

- [ ] Number of students scored above 60 in all three subjects

- [ ] Number of students scored below 60 in at least any one subject

- [ ] A will always be 0

- [ ] Number of students scored exactly 60 in all three subjects

6. The following pseudocode is executed using the “Scores” dataset. At the end of the execution, variable Count captures the number of students whose total marks are more than the average (of total marks) of entire dataset but have scored below the subject average in any two subjects. Assume that the variable AvgT holds the value of the average total marks. Similarly, the variables AvgP, AvgC and AvgM hold the value of the average marks of Physics, Chemistry and Mathematics respectively. Choose the correct code fragment to complete the pseudocode. It is a Multiple Select Question(MSQ).  

7\. The following pseudocode is executed using the “Scores” dataset.

At the end of the execution, A represents the number of students from Madurai having total marks.............

- [ ] greater than the average marks of students

- [ ] greater than the average marks of students from Vellore and Chennai

- [ ] greater than the average marks of students from Vellore but less than that of Chennai

- [ ] greater than the average marks of students from Chennai but less than that of Vellore

8. The following pseudocode is executed using the "Scores" dataset. At the end of the execution, A captures the number of female students who are below average in at least one subject. Assume that the variables M, P and C hold the average marks of the subjects Mathematics, Physics and Chemistry respectively. The pseudocode may have mistakes. Identify all such mistakes (if any). Assume that all statements not listed in the options below are free of errors. It is a Multiple Select Question (MSQ).  

- [ ] Line 1: Incorrect initialization of A  

- [ ] Line 3: Incorrect initialization of B

- [ ] Line 7: Incorrect Update of B

- [ ] Line 13: Incorrect Update of B

- [ ] No error in the code

9. The following pseudocode is executed using the “Scores” dataset. What will A represent at the end of the execution?

- [ ] Number of students with highest marks only in Mathematics out of their three subjects' marks

- [ ] Number of students with highest marks only in Mathematics and lowest marks only in Physics

- [ ] Number of students with highest marks only in Chemistry out of their three subjects' marks

- [ ] Number of students with lowest marks only in Physics out of their three subjects' marks

10. The following pseudocode is executed using the “Words” dataset. What will A represent at the end of the execution?

- [ ] Number of words that end with a comma.

- [ ] Number of words that end with a comma and have a letter count greater than ratio of number of words to sum of letter count.

- [ ] Number of words that end with a comma and have a letter count less than or equal to the average letter count of dataset.

- [ ] Number of words that end with a comma and have a letter count greater than the average letter count of dataset.