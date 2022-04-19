There will be an input of 15-16 digits
Luhn algorithm
(reverse card number?)<--
parse int inputted String
create array from parseString
to start doubling at index 1 increment of 2--- for loop {or start at -1, then increment -2}
 if new doubled digit is >9 then add [0,1]
add all numbers and if divisible by 10 its valid


Step 3:

Describe: parseString()

Test: turn input string into numbers
Code:
Expected Output: string will be integers

Describe: numberLength()
code: if >=15 or <17 {
return true{
  else return false
}
Expected output: TRUE

Step 2:

Describe: validateCarrier

Test: Will validate card by it starting with 34, 37, 4, 5, or 6
code: if/else-- 
Expected output: true

Step 1: if step 2 AND 3 are TRUE, then move on to step 1.

Describe: numberIdentify()

Test: identify every other number starting with 2nd to last incrementing -2
code: numberPull for loop stuff and -->(4102080860435420)
expected output: 25460004 (or 40006452)

Describe: numberDoubler()

Test: will double every other number starting with second to last incrementing -2
code: for loop above then *2
Expected output: 8102 0808 3083 1440

Describe: digitAdder

Test: will add every double-digit number
code: DONT KNOW
expected output: 0441 3803 8080 2018

Describe: digitTotaler

Test: will add all numbers of number string
code: will figure it out
expected output: 50

cardValidator

test: if step 1, 2, 3 are true, its valid
code is if step 1, 2, 3 are true, its valid
expected output: valid


Add double digits together
add total together
if total ends in 0, TRUE

//TRIM/OR NO SPACES ALLOWED


//THIS IS THE WORKING NUMBER 4102 0808 6043 5420

2 5 4 6 0 0 0 4
4 10 8 12 0 0 0 8
4 1 8 3 0 0 0 8

0441 3803 8080 2018