import type { LessonContent } from "@/lib/lesson-content-types";

export const moderateChapterReviews: LessonContent[] = [
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "whole-numbers-and-arithmetic",
    "lessonSlug": "whole-numbers-and-arithmetic-mastery-review",
    "title": "Whole Numbers and Arithmetic Mastery Review",
    "objectives": [
      "Connect the main ideas across the Whole Numbers and Arithmetic chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Identify the place value of any digit in a whole number",
      "Write whole numbers in expanded form",
      "Compare and order whole numbers",
      "Round whole numbers to a given place"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Whole Numbers and Arithmetic**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Understanding Place Value",
            "text": "Identify the place value of any digit in a whole number"
          },
          {
            "title": "Roman Numerals and Historical Number Systems",
            "text": "Read and write Roman numerals"
          },
          {
            "title": "Addition and Subtraction",
            "text": "Add and subtract multi-digit whole numbers using column methods"
          },
          {
            "title": "Multiplication and Division",
            "text": "Understand multiplication as repeated addition and as arrays"
          },
          {
            "title": "Order of Operations",
            "text": "Apply the standard order of operations (BODMAS / PEMDAS)"
          },
          {
            "title": "Estimation and Approximation",
            "text": "Round numbers to make quick estimates"
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "Each digit of 4,285 sits in a place worth ten times the one to its right.",
        "figure": {
          "type": "placeValue",
          "number": 4285
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Understanding Place Value",
            "In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …",
            "Zero is a placeholder. It keeps the 6 in the hundreds place, so 603 is ten times larger than 63."
          ],
          [
            "Roman Numerals and Historical Number Systems",
            "Roman numerals use seven letters combined by adding, with subtraction for pairs like IV and IX.",
            "A symbol repeats at most three times; use the subtractive form: IV for 4, XL for 40."
          ],
          [
            "Addition and Subtraction",
            "Line numbers up by place value and work from the ones column leftward.",
            "Always align on the right so ones sit under ones and tens under tens."
          ],
          [
            "Multiplication and Division",
            "Multiplication is repeated addition of equal groups; the array picture shows order does not matter.",
            "Multiplying by a tens digit gives tens, so shift left by writing a zero first (34 x 2 becomes 680, not 68)."
          ],
          [
            "Order of Operations",
            "Follow brackets, then indices, then multiplication and division, then addition and subtraction.",
            "Do multiplication and division before addition and subtraction (3 + 4 x 2 = 11)."
          ],
          [
            "Estimation and Approximation",
            "Estimate by rounding numbers to convenient values, then calculating.",
            "Notice the direction of your rounding; rounding both numbers up gives an over-estimate, both down gives an under-estimate."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "What is the value of the digit 7 in 37,412?",
        "steps": [
          "Find the position of 7. Reading from the right: 2 is ones, 1 is tens, 4 is hundreds, 7 is thousands.",
          "Multiply the digit by its position's worth: 7 × 1,000."
        ],
        "answer": "The 7 has a value of 7,000 (seven thousand)."
      },
      {
        "kind": "example",
        "prompt": "Write the year 2024 in Roman numerals.",
        "steps": [
          "Break it into place values: 2000 + 20 + 4.",
          "2000 = MM, 20 = XX, and 4 = IV (subtractive).",
          "Join them from largest to smallest."
        ],
        "answer": "2024 = MMXXIV."
      },
      {
        "kind": "example",
        "prompt": "Add 487 + 256.",
        "steps": [
          "Ones: 7 + 6 = 13. Write 3, carry 1.",
          "Tens: 8 + 5 = 13, plus the carried 1 = 14. Write 4, carry 1.",
          "Hundreds: 4 + 2 = 6, plus the carried 1 = 7."
        ],
        "answer": "487 + 256 = 743."
      },
      {
        "kind": "example",
        "prompt": "Multiply 34 x 27.",
        "steps": [
          "Multiply by the ones digit: 34 x 7 = 238.",
          "Multiply by the tens digit: 34 x 2 = 68, but this is 2 tens, so write 680.",
          "Add the partial products: 238 + 680."
        ],
        "answer": "34 x 27 = 918."
      },
      {
        "kind": "example",
        "prompt": "Evaluate 3 + 4 x 2.",
        "steps": [
          "Multiplication comes before addition: 4 x 2 = 8.",
          "Then add: 3 + 8."
        ],
        "answer": "3 + 4 x 2 = 11 (not 14)."
      },
      {
        "kind": "example",
        "prompt": "Estimate 487 + 312.",
        "steps": [
          "Round each to the nearest hundred: 487 rounds to 500, 312 rounds to 300.",
          "Add the rounded values: 500 + 300."
        ],
        "answer": "About 800 (the exact answer, 799, is very close)."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Treating 603 and 63 as the same because 'the zero is nothing'.",
            "right": "Zero is a placeholder. It keeps the 6 in the hundreds place, so 603 is ten times larger than 63."
          },
          {
            "wrong": "When rounding, looking at the rounding digit itself instead of the digit to its right.",
            "right": "Always check the single digit immediately to the right of the place you are rounding to; that digit decides up or down."
          },
          {
            "wrong": "Reading a digit's value from the digit alone (e.g. saying the 2 in 4,285 is 'two').",
            "right": "A digit's value is the digit times its position. The 2 sits in the hundreds place, so it means 200."
          },
          {
            "wrong": "Writing 4 as IIII or 40 as XXXX.",
            "right": "A symbol repeats at most three times; use the subtractive form: IV for 4, XL for 40."
          },
          {
            "wrong": "Reading IX as 11 by adding the symbols.",
            "right": "A smaller symbol before a larger one is subtracted: IX = 10 - 1 = 9."
          },
          {
            "wrong": "Lining numbers up on the left instead of by place value.",
            "right": "Always align on the right so ones sit under ones and tens under tens."
          },
          {
            "wrong": "Forgetting to add a carried digit into the next column.",
            "right": "Write the carry clearly and include it before moving on."
          },
          {
            "wrong": "Borrowing across a zero incorrectly.",
            "right": "Borrow into the zero from the next place first, then borrow from it."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …"
          },
          {
            "prompt": "True or false: A digit's value equals the digit multiplied by its position's worth.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A digit's value equals the digit multiplied by its position's worth."
          },
          {
            "prompt": "True or false: Zero is a placeholder that keeps other digits in their correct positions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Zero is a placeholder that keeps other digits in their correct positions."
          },
          {
            "prompt": "True or false: Expanded form writes a number as the sum of its place values.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Expanded form writes a number as the sum of its place values."
          },
          {
            "prompt": "True or false: Compare numbers from the largest place down; the first differing place decides.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compare numbers from the largest place down; the first differing place decides."
          },
          {
            "prompt": "True or false: To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down."
          },
          {
            "prompt": "True or false: Treating 603 and 63 as the same because 'the zero is nothing'.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Zero is a placeholder. It keeps the 6 in the hundreds place, so 603 is ten times larger than 63."
          },
          {
            "prompt": "True or false: When rounding, looking at the rounding digit itself instead of the digit to its right.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Always check the single digit immediately to the right of the place you are rounding to; that digit decides up or down."
          },
          {
            "prompt": "True or false: Reading a digit's value from the digit alone (e.g. saying the 2 in 4,285 is 'two').",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "A digit's value is the digit times its position. The 2 sits in the hundreds place, so it means 200."
          },
          {
            "prompt": "True or false: Roman numerals use seven letters combined by adding, with subtraction for pairs like IV and IX.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Roman numerals use seven letters combined by adding, with subtraction for pairs like IV and IX."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …"
          },
          {
            "type": "mc",
            "prompt": "True or false: A digit's value equals the digit multiplied by its position's worth.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "A digit's value equals the digit multiplied by its position's worth."
          },
          {
            "type": "mc",
            "prompt": "True or false: Zero is a placeholder that keeps other digits in their correct positions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Zero is a placeholder that keeps other digits in their correct positions."
          },
          {
            "type": "mc",
            "prompt": "True or false: Expanded form writes a number as the sum of its place values.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Expanded form writes a number as the sum of its place values."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compare numbers from the largest place down; the first differing place decides.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compare numbers from the largest place down; the first differing place decides."
          },
          {
            "type": "mc",
            "prompt": "True or false: To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …",
          "A digit's value equals the digit multiplied by its position's worth.",
          "Zero is a placeholder that keeps other digits in their correct positions.",
          "Expanded form writes a number as the sum of its place values.",
          "Compare numbers from the largest place down; the first differing place decides.",
          "To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down.",
          "Roman numerals use seven letters combined by adding, with subtraction for pairs like IV and IX.",
          "Egyptian numerals were additive; Babylonian numerals used base sixty.",
          "These systems lacked a positional zero, making arithmetic hard.",
          "The place-value system replaced them because it makes calculation simple."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "fractions-and-decimals",
    "lessonSlug": "fractions-and-decimals-mastery-review",
    "title": "Fractions and Decimals Mastery Review",
    "objectives": [
      "Connect the main ideas across the Fractions and Decimals chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Read a fraction in terms of its numerator and denominator",
      "Find equivalent fractions",
      "Simplify a fraction to its lowest terms",
      "Compare and order fractions"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Fractions and Decimals**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Fractions as Parts of a Whole",
            "text": "Read a fraction in terms of its numerator and denominator"
          },
          {
            "title": "Mixed Numbers and Improper Fractions",
            "text": "Convert between improper fractions and mixed numbers"
          },
          {
            "title": "Adding and Subtracting Fractions",
            "text": "Add and subtract fractions with the same denominator"
          },
          {
            "title": "Multiplying and Dividing Fractions",
            "text": "Multiply fractions"
          },
          {
            "title": "Decimal Notation and Operations",
            "text": "Understand decimal place value"
          },
          {
            "title": "Fractions, Decimals and Recurring Decimals",
            "text": "Convert fractions to decimals"
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "3/4 — a whole split into four equal parts, with three shaded.",
        "figure": {
          "type": "fractionBar",
          "parts": 4,
          "shaded": 3
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Fractions as Parts of a Whole",
            "The denominator is how many equal parts the whole is split into; the numerator is how many are taken.",
            "Divide both the numerator and denominator by the same factor, or the value changes."
          ],
          [
            "Mixed Numbers and Improper Fractions",
            "Improper fractions and mixed numbers are two ways of writing the same amount.",
            "Multiply the whole by the denominator and then add the numerator: (2 x 5) + 3 = 13, so 13/5."
          ],
          [
            "Adding and Subtracting Fractions",
            "Fractions can be added or subtracted only when they share a denominator.",
            "Find a common denominator and add only the numerators: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
          ],
          [
            "Multiplying and Dividing Fractions",
            "Multiply fractions by multiplying numerators and denominators, then simplifying.",
            "Multiplication needs no common denominator — just multiply numerators and denominators."
          ],
          [
            "Decimal Notation and Operations",
            "Decimal places are tenths, hundredths, thousandths — each a tenth of the one before.",
            "Align the decimal points so tenths sit under tenths and hundredths under hundredths."
          ],
          [
            "Fractions, Decimals and Recurring Decimals",
            "Convert a fraction to a decimal by dividing the numerator by the denominator.",
            "Only fractions whose lowest-terms denominator uses just the primes 2 and 5 terminate; others recur."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Simplify 12/18.",
        "steps": [
          "Find the greatest common factor of 12 and 18: it is 6.",
          "Divide the numerator and denominator by 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3."
        ],
        "answer": "12/18 = 2/3."
      },
      {
        "kind": "example",
        "prompt": "Convert 23/5 to a mixed number.",
        "steps": [
          "Divide: 23 ÷ 5 = 4 remainder 3.",
          "The whole part is 4; the remainder 3 goes over the denominator 5."
        ],
        "answer": "23/5 = 4 3/5."
      },
      {
        "kind": "example",
        "prompt": "Work out 3/4 + 1/6.",
        "steps": [
          "The lowest common denominator of 4 and 6 is 12.",
          "Rewrite: 3/4 = 9/12 and 1/6 = 2/12.",
          "Add the numerators: 9/12 + 2/12 = 11/12."
        ],
        "answer": "3/4 + 1/6 = 11/12."
      },
      {
        "kind": "example",
        "prompt": "Work out 3/8 x 2/9.",
        "steps": [
          "Cancel common factors: 3 and 9 share 3 (giving 1 and 3); 2 and 8 share 2 (giving 1 and 4).",
          "The problem becomes 1/4 x 1/3.",
          "Multiply across: 1 x 1 over 4 x 3."
        ],
        "answer": "3/8 x 2/9 = 1/12."
      },
      {
        "kind": "example",
        "prompt": "Work out 0.3 x 0.4.",
        "steps": [
          "Ignore the points and multiply: 3 x 4 = 12.",
          "Count decimal places in the factors: one in 0.3 and one in 0.4, so two in total.",
          "Place the point so the answer has two decimal places."
        ],
        "answer": "0.3 x 0.4 = 0.12."
      },
      {
        "kind": "example",
        "prompt": "Convert 5/8 to a decimal.",
        "steps": [
          "Divide: 5 ÷ 8.",
          "8 goes into 5.000: 0.6 gives 4.8, remainder 0.20; 0.62 gives 4.96, remainder 0.04; continue to 0.625 exactly."
        ],
        "answer": "5/8 = 0.625 (a terminating decimal)."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Simplifying only the numerator or only the denominator.",
            "right": "Divide both the numerator and denominator by the same factor, or the value changes."
          },
          {
            "wrong": "Deciding 1/8 is bigger than 1/2 because 8 is bigger than 2.",
            "right": "With the same numerator, a bigger denominator means smaller pieces: 1/2 is much bigger than 1/8."
          },
          {
            "wrong": "Forgetting to add the numerator when converting a mixed number (writing 2 3/5 as 10/5).",
            "right": "Multiply the whole by the denominator and then add the numerator: (2 x 5) + 3 = 13, so 13/5."
          },
          {
            "wrong": "Adding the denominators too: 1/2 + 1/3 = 2/5.",
            "right": "Find a common denominator and add only the numerators: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
          },
          {
            "wrong": "Leaving an answer like 5/4 unconverted in a mixed-number problem.",
            "right": "Convert improper results back to mixed numbers and carry into the whole part: 5/4 = 1 1/4."
          },
          {
            "wrong": "Looking for a common denominator before multiplying.",
            "right": "Multiplication needs no common denominator — just multiply numerators and denominators."
          },
          {
            "wrong": "Flipping the first fraction instead of the divisor when dividing.",
            "right": "Keep the first fraction; multiply by the reciprocal of the second."
          },
          {
            "wrong": "Lining decimals up on the right instead of by the decimal point when adding.",
            "right": "Align the decimal points so tenths sit under tenths and hundredths under hundredths."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: The denominator is how many equal parts the whole is split into; the numerator is how many are taken.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "The denominator is how many equal parts the whole is split into; the numerator is how many are taken."
          },
          {
            "prompt": "True or false: Multiplying or dividing top and bottom by the same number gives an equivalent fraction.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Multiplying or dividing top and bottom by the same number gives an equivalent fraction."
          },
          {
            "prompt": "True or false: Simplify by dividing both parts by their greatest common factor.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Simplify by dividing both parts by their greatest common factor."
          },
          {
            "prompt": "True or false: Compare fractions using a common denominator or by cross-multiplying.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compare fractions using a common denominator or by cross-multiplying."
          },
          {
            "prompt": "True or false: Simplifying only the numerator or only the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Divide both the numerator and denominator by the same factor, or the value changes."
          },
          {
            "prompt": "True or false: Deciding 1/8 is bigger than 1/2 because 8 is bigger than 2.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "With the same numerator, a bigger denominator means smaller pieces: 1/2 is much bigger than 1/8."
          },
          {
            "prompt": "True or false: Improper fractions and mixed numbers are two ways of writing the same amount.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Improper fractions and mixed numbers are two ways of writing the same amount."
          },
          {
            "prompt": "True or false: Improper to mixed: divide, taking the quotient as the whole and the remainder over the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Improper to mixed: divide, taking the quotient as the whole and the remainder over the denominator."
          },
          {
            "prompt": "True or false: Mixed to improper: whole x denominator + numerator, all over the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Mixed to improper: whole x denominator + numerator, all over the denominator."
          },
          {
            "prompt": "True or false: Fractions occupy precise positions between whole numbers on the number line.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Fractions occupy precise positions between whole numbers on the number line."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: The denominator is how many equal parts the whole is split into; the numerator is how many are taken.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "The denominator is how many equal parts the whole is split into; the numerator is how many are taken."
          },
          {
            "type": "mc",
            "prompt": "True or false: Multiplying or dividing top and bottom by the same number gives an equivalent fraction.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Multiplying or dividing top and bottom by the same number gives an equivalent fraction."
          },
          {
            "type": "mc",
            "prompt": "True or false: Simplify by dividing both parts by their greatest common factor.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Simplify by dividing both parts by their greatest common factor."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compare fractions using a common denominator or by cross-multiplying.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compare fractions using a common denominator or by cross-multiplying."
          },
          {
            "type": "mc",
            "prompt": "True or false: Simplifying only the numerator or only the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Divide both the numerator and denominator by the same factor, or the value changes."
          },
          {
            "type": "mc",
            "prompt": "True or false: Deciding 1/8 is bigger than 1/2 because 8 is bigger than 2.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "With the same numerator, a bigger denominator means smaller pieces: 1/2 is much bigger than 1/8."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "The denominator is how many equal parts the whole is split into; the numerator is how many are taken.",
          "Multiplying or dividing top and bottom by the same number gives an equivalent fraction.",
          "Simplify by dividing both parts by their greatest common factor.",
          "Compare fractions using a common denominator or by cross-multiplying.",
          "Improper fractions and mixed numbers are two ways of writing the same amount.",
          "Improper to mixed: divide, taking the quotient as the whole and the remainder over the denominator.",
          "Mixed to improper: whole x denominator + numerator, all over the denominator.",
          "Fractions occupy precise positions between whole numbers on the number line.",
          "Fractions can be added or subtracted only when they share a denominator.",
          "With the same denominator, combine the numerators and keep the denominator."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "percentages-ratio-and-proportion",
    "lessonSlug": "percentages-ratio-and-proportion-mastery-review",
    "title": "Percentages, Ratio and Proportion Mastery Review",
    "objectives": [
      "Connect the main ideas across the Percentages, Ratio and Proportion chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Explain what a percentage is and read the percent symbol correctly.",
      "Convert freely between fractions, decimals and percentages.",
      "Find a given percentage of a quantity using mental, written and calculator methods.",
      "Compare two or more quantities by converting them to percentages."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Percentages, Ratio and Proportion**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Understanding Percentages",
            "text": "Explain what a percentage is and read the percent symbol correctly."
          },
          {
            "title": "Percentage Change and Applications",
            "text": "Calculate the percentage change between an original value and a final value."
          },
          {
            "title": "Ratios",
            "text": "State the meaning of a ratio and use both colon and fraction notation."
          },
          {
            "title": "Direct and Inverse Proportion",
            "text": "Distinguish between direct and inverse proportion."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Understanding Percentages",
            "A percentage is a fraction over 100; $p\\%$ means $\\tfrac{p}{100}$.",
            "$\\%$ means 'divide by 100'. So $37\\% = 0.37$, not 3,700."
          ],
          [
            "Percentage Change and Applications",
            "A $p\\%$ increase multiplies the amount by $1 + \\tfrac{p}{100}$; a $p\\%$ decrease multiplies it by $1 - \\tfrac{p}{100}$.",
            "Always divide the change by the original value, because it represents the starting point."
          ],
          [
            "Ratios",
            "A ratio compares quantities of the same kind, in a specific order.",
            "You must multiply or divide, not add or subtract. $3 : 4$ is not the same as $4 : 5$."
          ],
          [
            "Direct and Inverse Proportion",
            "Direct proportion: $y = kx$; the ratio $\\tfrac{y}{x}$ is constant; the graph is a line through the origin.",
            "Only if $\\tfrac{y}{x}$ is constant is the relationship directly proportional. Otherwise it is just an increasing relationship."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Convert $\\tfrac{3}{8}$ into a percentage.",
        "steps": [
          "Divide the numerator by the denominator: $3 \\div 8 = 0.375$.",
          "Multiply by 100 to change the decimal into a percentage: $0.375 \\times 100 = 37.5$."
        ],
        "answer": "$\\tfrac{3}{8} = 37.5\\%$."
      },
      {
        "kind": "example",
        "prompt": "A monthly salary of ₹4,000 is increased by $8\\%$. Find the new salary.",
        "steps": [
          "Write the multiplier for an $8\\%$ increase: $1 + 0.08 = 1.08$.",
          "Multiply the original salary by the multiplier: $4000 \\times 1.08 = 4320$."
        ],
        "answer": "The new salary is ₹4,320."
      },
      {
        "kind": "example",
        "prompt": "Simplify the ratio $24 : 36$.",
        "steps": [
          "Find the highest common factor of 24 and 36. Both are divisible by 12.",
          "Divide each part by 12: $24 \\div 12 = 2$ and $36 \\div 12 = 3$."
        ],
        "answer": "$24 : 36 = 2 : 3$."
      },
      {
        "kind": "example",
        "prompt": "The table shows the mass of copper wire against its length. Show that mass is directly proportional to length and find the formula.",
        "steps": [
          "Table: 2 m weighs 30 g; 5 m weighs 75 g; 8 m weighs 120 g.",
          "Test $\\dfrac{y}{x}$ in every row: $\\tfrac{30}{2} = 15$, $\\tfrac{75}{5} = 15$, $\\tfrac{120}{8} = 15$.",
          "The ratio is constant, so $y$ is directly proportional to $x$.",
          "The constant of proportionality is $k = 15$ g per metre, giving the formula $y = 15x$."
        ],
        "answer": "Mass $y$ is directly proportional to length $x$ with $y = 15x$, i.e. 15 g per metre."
      },
      {
        "kind": "example",
        "prompt": "Write $6\\%$ as a fraction in its lowest terms.",
        "steps": [
          "Put the number over 100: $6\\% = \\tfrac{6}{100}$.",
          "Divide the numerator and denominator by their highest common factor, 2."
        ],
        "answer": "$6\\% = \\tfrac{3}{50}$."
      },
      {
        "kind": "example",
        "prompt": "Find $15\\%$ of 240 using easy building blocks.",
        "steps": [
          "$10\\%$ of 240 is $240 \\div 10 = 24$.",
          "$5\\%$ is half of $10\\%$, so $5\\%$ of 240 is $24 \\div 2 = 12$.",
          "$15\\% = 10\\% + 5\\%$, so add the two parts: $24 + 12 = 36$."
        ],
        "answer": "$15\\%$ of 240 is 36."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Reading $\\%$ as 'multiply by 100'.",
            "right": "$\\%$ means 'divide by 100'. So $37\\% = 0.37$, not 3,700."
          },
          {
            "wrong": "Thinking that $50\\%$ of any amount is always 50.",
            "right": "$50\\%$ means half of the amount. Half of 40 is 20; half of 80 is 40."
          },
          {
            "wrong": "Comparing raw scores such as 42 out of 60 and 65 out of 90 directly.",
            "right": "Convert each to a percentage first, then compare, because the totals are different."
          },
          {
            "wrong": "Treating $150\\%$ as impossible.",
            "right": "Percentages can be greater than 100. $150\\%$ means one-and-a-half times the whole."
          },
          {
            "wrong": "Dividing by the final value instead of the original value when finding percentage change.",
            "right": "Always divide the change by the original value, because it represents the starting point."
          },
          {
            "wrong": "Applying the discount percentage to the sale price to recover the original price.",
            "right": "To reverse a change, divide the final value by the multiplier (for example, $\\tfrac{\\text{final}}{0.75}$ for a $25\\%$ discount)."
          },
          {
            "wrong": "Adding percentages when they are applied one after the other.",
            "right": "Multiply the multipliers instead. A $10\\%$ increase followed by a $10\\%$ decrease is not zero."
          },
          {
            "wrong": "Forgetting to add the interest to the principal when asked for the final balance.",
            "right": "The balance in simple interest is $P + I$, not just $I$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which fraction is equal to $40\\%$?",
            "options": [
              "$\\tfrac{2}{5}$",
              "$\\tfrac{4}{5}$",
              "$\\tfrac{1}{4}$",
              "$\\tfrac{3}{40}$"
            ],
            "answer": 0,
            "explanation": "$40\\% = \\tfrac{40}{100} = \\tfrac{2}{5}$ after dividing by 20."
          },
          {
            "prompt": "Convert $0.08$ into a percentage.",
            "options": [
              "$0.08\\%$",
              "$0.8\\%$",
              "$8\\%$",
              "$80\\%$"
            ],
            "answer": 2,
            "explanation": "Multiply the decimal by 100: $0.08 \\times 100 = 8$."
          },
          {
            "prompt": "What is $25\\%$ of 160?",
            "options": [
              "25",
              "32",
              "40",
              "64"
            ],
            "answer": 2,
            "explanation": "$25\\% = \\tfrac{1}{4}$, so divide 160 by 4 to obtain 40."
          },
          {
            "prompt": "What is $10\\%$ of 45?",
            "options": [
              "0.45",
              "4.5",
              "45",
              "450"
            ],
            "answer": 1,
            "explanation": "Move the decimal point one place left: $45 \\to 4.5$."
          },
          {
            "prompt": "What is $30\\%$ of 90?",
            "options": [
              "9",
              "18",
              "27",
              "36"
            ],
            "answer": 2,
            "explanation": "$10\\%$ of 90 is 9, so $30\\%$ is $3 \\times 9 = 27$."
          },
          {
            "prompt": "A student scored 24 marks out of 30. What percentage did they achieve?",
            "options": [
              "70%",
              "75%",
              "80%",
              "85%"
            ],
            "answer": 2,
            "explanation": "$\\tfrac{24}{30}\\times 100 = 80\\%$."
          },
          {
            "prompt": "Write $\\tfrac{9}{25}$ as a percentage.",
            "options": [
              "9%",
              "18%",
              "36%",
              "45%"
            ],
            "answer": 2,
            "explanation": "Multiply top and bottom by 4 to get $\\tfrac{36}{100} = 36\\%$."
          },
          {
            "prompt": "A phone battery reads $75\\%$ and holds 3,000 mAh at full charge. How much charge remains?",
            "options": [
              "1,500 mAh",
              "2,000 mAh",
              "2,250 mAh",
              "2,500 mAh"
            ],
            "answer": 2,
            "explanation": "$75\\%$ of 3,000 is $\\tfrac{3}{4}\\times 3000 = 2250$."
          },
          {
            "prompt": "Which multiplier represents a $40\\%$ increase?",
            "options": [
              "0.40",
              "0.60",
              "1.40",
              "4.00"
            ],
            "answer": 2,
            "explanation": "$100\\% + 40\\% = 140\\% = 1.40$."
          },
          {
            "prompt": "Which multiplier represents a $12\\%$ decrease?",
            "options": [
              "0.12",
              "0.88",
              "1.12",
              "1.88"
            ],
            "answer": 1,
            "explanation": "$100\\% - 12\\% = 88\\% = 0.88$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Which of these is equal to $\\tfrac{3}{5}$?",
            "options": [
              "30%",
              "35%",
              "60%",
              "65%"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "$\\tfrac{3}{5} = 0.6 = 60\\%$."
          },
          {
            "type": "mc",
            "prompt": "What is $12\\%$ of 250?",
            "options": [
              "24",
              "26",
              "30",
              "32"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "$0.12 \\times 250 = 30$, or: $10\\% = 25$ and $2\\% = 5$; sum is 30."
          },
          {
            "type": "tf",
            "prompt": "$0.4\\%$ and $40\\%$ mean the same thing.",
            "answer": false,
            "marks": 1,
            "explanation": "$0.4\\% = 0.004$ but $40\\% = 0.4$. They differ by a factor of 100."
          },
          {
            "type": "mc",
            "prompt": "A shirt originally costs ₹180 and is reduced by $20\\%$. What is the sale price?",
            "options": [
              "₹36",
              "₹144",
              "₹150",
              "₹160"
            ],
            "answer": 1,
            "marks": 2,
            "explanation": "$20\\%$ of 180 is 36, and $180 - 36 = 144$."
          },
          {
            "type": "matching",
            "prompt": "Match each fraction to its equivalent percentage.",
            "left": [
              "$\\tfrac{1}{2}$",
              "$\\tfrac{1}{4}$",
              "$\\tfrac{1}{5}$",
              "$\\tfrac{1}{10}$"
            ],
            "options": [
              "10%",
              "20%",
              "25%",
              "50%"
            ],
            "answer": [
              3,
              2,
              1,
              0
            ],
            "marks": 4,
            "explanation": "$\\tfrac{1}{2}=50\\%$, $\\tfrac{1}{4}=25\\%$, $\\tfrac{1}{5}=20\\%$, $\\tfrac{1}{10}=10\\%$."
          },
          {
            "type": "mc",
            "prompt": "Yara scored 18 out of 24 on a maths test. What was her percentage score?",
            "options": [
              "65%",
              "70%",
              "75%",
              "80%"
            ],
            "answer": 2,
            "marks": 2,
            "explanation": "$\\tfrac{18}{24}\\times 100 = 75\\%$."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "A percentage is a fraction over 100; $p\\%$ means $\\tfrac{p}{100}$.",
          "To go from a percentage to a decimal, divide by 100; to go the other way, multiply by 100.",
          "Any percentage of an amount equals the decimal form multiplied by that amount.",
          "Percentages let you compare quantities fairly by putting everything out of the same total.",
          "Discounts, tax, marks, tips and interest are the most common everyday uses.",
          "A $p\\%$ increase multiplies the amount by $1 + \\tfrac{p}{100}$; a $p\\%$ decrease multiplies it by $1 - \\tfrac{p}{100}$.",
          "Percentage change $= \\tfrac{\\text{change}}{\\text{original value}} \\times 100\\%$.",
          "Discounts, tax and simple interest are all percentage changes in disguise.",
          "Reverse a percentage change by dividing the final value by its multiplier.",
          "Combine several percentage changes by multiplying the multipliers, not by adding the percentages."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "exponents-roots-and-scientific-notation",
    "lessonSlug": "exponents-roots-and-scientific-notation-mastery-review",
    "title": "Exponents, Roots and Scientific Notation Mastery Review",
    "objectives": [
      "Connect the main ideas across the Exponents, Roots and Scientific Notation chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Read and write powers using base and exponent notation.",
      "Apply the product, quotient and power-of-a-power laws of indices.",
      "Interpret zero and negative exponents.",
      "Interpret fractional exponents as roots."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Exponents, Roots and Scientific Notation**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Exponents and the Laws of Indices",
            "text": "Read and write powers using base and exponent notation."
          },
          {
            "title": "Square Roots and Cube Roots",
            "text": "Explain what square roots and cube roots mean and how they undo squaring and cubing."
          },
          {
            "title": "Standard Form",
            "text": "Write very large and very small numbers in standard form $a \\times 10^n$ with $1 \\le a < 10$."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Exponents and the Laws of Indices",
            "$a^n$ is repeated multiplication of $n$ copies of $a$.",
            "The base stays the same and the exponents are added: $2^{3} \\times 2^{4} = 2^{7}$."
          ],
          [
            "Square Roots and Cube Roots",
            "$\\sqrt{n}$ undoes squaring and $\\sqrt[3]{n}$ undoes cubing; as indices, $\\sqrt{n} = n^{1/2}$ and $\\sqrt[3]{n} = n^{1/3}$.",
            "The square root asks which number multiplies by itself to give 16: $\\sqrt{16} = 4$."
          ],
          [
            "Standard Form",
            "Standard form writes any number as $a \\times 10^{n}$ with $1 \\le a < 10$ and integer $n$.",
            "The mantissa must be at least 1 and less than 10. Re-standardise: $4.6 \\times 10^{4}$."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Simplify $x^5 \\times x^3$.",
        "steps": [
          "The base is the same, so add the exponents: $5 + 3 = 8$."
        ],
        "answer": "$x^5 \\times x^3 = x^8$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\sqrt{144}$ and $\\sqrt[3]{216}$ without a calculator.",
        "steps": [
          "For the square root, ask: which number squared gives 144? From the table, $12^2 = 144$.",
          "For the cube root, ask: which number cubed gives 216? Since $6^3 = 216$, the answer is 6."
        ],
        "answer": "$\\sqrt{144} = 12$ and $\\sqrt[3]{216} = 6$."
      },
      {
        "kind": "example",
        "prompt": "Write 4,570,000 in standard form.",
        "steps": [
          "Put the decimal point after the first non-zero digit: 4.57.",
          "Count the jumps from the original position (after the final 0) back to after the 4: six places.",
          "The number is large, so the exponent is positive."
        ],
        "answer": "$4{,}570{,}000 = 4.57 \\times 10^{6}$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\dfrac{y^9}{y^4}$.",
        "steps": [
          "Same base, so subtract exponents: $9 - 4 = 5$."
        ],
        "answer": "$\\dfrac{y^9}{y^4} = y^5$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $(x^2)^5$.",
        "steps": [
          "Multiply the exponents: $2 \\times 5 = 10$."
        ],
        "answer": "$(x^2)^5 = x^{10}$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $10^{-3}$.",
        "steps": [
          "Use the negative exponent rule: $10^{-3} = \\dfrac{1}{10^3}$.",
          "Compute $10^3 = 1000$."
        ],
        "answer": "$10^{-3} = \\dfrac{1}{1000} = 0.001$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Adding the bases when multiplying: $2^{3} \\times 2^{4} = 4^{7}$.",
            "right": "The base stays the same and the exponents are added: $2^{3} \\times 2^{4} = 2^{7}$."
          },
          {
            "wrong": "Applying an index law across different bases: $2^{3} \\times 3^{3} = 6^{6}$.",
            "right": "You can combine the bases when the exponents match: $2^{3} \\times 3^{3} = (2 \\times 3)^{3} = 6^{3}$."
          },
          {
            "wrong": "Distributing a power across a sum: $(a + b)^{2} = a^{2} + b^{2}$.",
            "right": "Powers do not distribute over addition. $(a + b)^{2} = a^{2} + 2ab + b^{2}$."
          },
          {
            "wrong": "Reading $-3^{2}$ as $9$ because the number 3 is squared.",
            "right": "Without brackets, only 3 is squared and the minus is applied afterwards: $-3^{2} = -9$. With brackets, $(-3)^{2} = 9$."
          },
          {
            "wrong": "Treating $a^{-1}$ as a negative number.",
            "right": "$a^{-1}$ is the reciprocal $\\tfrac{1}{a}$; if $a$ is positive, so is $a^{-1}$."
          },
          {
            "wrong": "Halving the number to find its square root, e.g. saying $\\sqrt{16} = 8$.",
            "right": "The square root asks which number multiplies by itself to give 16: $\\sqrt{16} = 4$."
          },
          {
            "wrong": "Writing $\\sqrt{25} = \\pm 5$.",
            "right": "The radical symbol means the principal (positive) root: $\\sqrt{25} = 5$. Only the equation $x^2 = 25$ has two solutions."
          },
          {
            "wrong": "Claiming $\\sqrt[3]{-27}$ has no answer.",
            "right": "Cube roots of negative numbers exist: $\\sqrt[3]{-27} = -3$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Simplify $x^7 \\times x^{3}$.",
            "options": [
              "$x^{4}$",
              "$x^{10}$",
              "$x^{21}$",
              "$2x^{10}$"
            ],
            "answer": 1,
            "explanation": "Same base, add exponents: $7 + 3 = 10$."
          },
          {
            "prompt": "Simplify $\\dfrac{y^{8}}{y^{5}}$.",
            "options": [
              "$y^{3}$",
              "$y^{13}$",
              "$y^{40}$",
              "$3y$"
            ],
            "answer": 0,
            "explanation": "Same base, subtract exponents: $8 - 5 = 3$."
          },
          {
            "prompt": "Simplify $(z^{4})^{2}$.",
            "options": [
              "$z^{2}$",
              "$z^{6}$",
              "$z^{8}$",
              "$z^{16}$"
            ],
            "answer": 2,
            "explanation": "Multiply the exponents: $4 \\times 2 = 8$."
          },
          {
            "prompt": "Evaluate $5^{0}$.",
            "options": [
              "0",
              "1",
              "5",
              "Undefined"
            ],
            "answer": 1,
            "explanation": "Any non-zero base to the power zero is 1."
          },
          {
            "prompt": "Evaluate $3^{-2}$.",
            "options": [
              "$-9$",
              "$-\\tfrac{1}{9}$",
              "$\\tfrac{1}{9}$",
              "$9$"
            ],
            "answer": 2,
            "explanation": "$3^{-2} = \\tfrac{1}{3^{2}} = \\tfrac{1}{9}$."
          },
          {
            "prompt": "Evaluate $16^{1/2}$.",
            "options": [
              "4",
              "8",
              "32",
              "256"
            ],
            "answer": 0,
            "explanation": "$16^{1/2} = \\sqrt{16} = 4$."
          },
          {
            "prompt": "Simplify $(2 x^{3})^{2}$.",
            "options": [
              "$2 x^{6}$",
              "$4 x^{5}$",
              "$4 x^{6}$",
              "$4 x^{9}$"
            ],
            "answer": 2,
            "explanation": "$(2 x^{3})^{2} = 2^{2} (x^{3})^{2} = 4 x^{6}$."
          },
          {
            "prompt": "Simplify $\\dfrac{a^{5} \\, b^{2}}{a^{3} \\, b^{5}}$.",
            "options": [
              "$\\dfrac{a^{2}}{b^{3}}$",
              "$a^{2} b^{3}$",
              "$\\dfrac{a^{3}}{b^{2}}$",
              "$a^{8} b^{7}$"
            ],
            "answer": 0,
            "explanation": "Subtract exponents by base: $a^{5-3} = a^{2}$; $b^{2-5} = b^{-3} = \\tfrac{1}{b^{3}}$."
          },
          {
            "prompt": "Write $\\dfrac{1}{81}$ as a power of 3.",
            "options": [
              "$3^{-2}$",
              "$3^{-3}$",
              "$3^{-4}$",
              "$3^{4}$"
            ],
            "answer": 2,
            "explanation": "$81 = 3^{4}$, so $\\tfrac{1}{81} = 3^{-4}$."
          },
          {
            "prompt": "Evaluate $\\sqrt{169}$.",
            "options": [
              "11",
              "12",
              "13",
              "14"
            ],
            "answer": 2,
            "explanation": "$13^2 = 169$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Simplify $a^{6} \\times a^{-2}$.",
            "options": [
              "$a^{-12}$",
              "$a^{4}$",
              "$a^{8}$",
              "$a^{12}$"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "$6 + (-2) = 4$."
          },
          {
            "type": "mc",
            "prompt": "Simplify $\\dfrac{p^{5}}{p^{7}}$.",
            "options": [
              "$p^{-2}$",
              "$p^{2}$",
              "$p^{12}$",
              "$p^{35}$"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$5 - 7 = -2$, so the answer is $p^{-2} = \\tfrac{1}{p^{2}}$."
          },
          {
            "type": "mc",
            "prompt": "Evaluate $2^{-4}$.",
            "options": [
              "$-16$",
              "$-\\tfrac{1}{16}$",
              "$\\tfrac{1}{16}$",
              "$16$"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "$2^{-4} = \\tfrac{1}{2^{4}} = \\tfrac{1}{16}$."
          },
          {
            "type": "mc",
            "prompt": "Evaluate $64^{1/3}$.",
            "options": [
              "3",
              "4",
              "6",
              "8"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The cube root of 64 is 4, because $4^{3} = 64$."
          },
          {
            "type": "mc",
            "prompt": "Evaluate $32^{2/5}$.",
            "options": [
              "2",
              "4",
              "8",
              "16"
            ],
            "answer": 1,
            "marks": 2,
            "explanation": "$32^{1/5} = 2$; squared gives $4$."
          },
          {
            "type": "tf",
            "prompt": "$(a + b)^{2} = a^{2} + b^{2}$ for every choice of $a$ and $b$.",
            "answer": false,
            "marks": 1,
            "explanation": "$(a + b)^{2} = a^{2} + 2ab + b^{2}$; the cross term is missing in the claim."
          }
        ],
        "passMark": 5
      },
      {
        "kind": "summary",
        "points": [
          "$a^n$ is repeated multiplication of $n$ copies of $a$.",
          "Product law: $a^m \\, a^n = a^{m+n}$; Quotient law: $\\dfrac{a^m}{a^n} = a^{m-n}$.",
          "Power of a power: $(a^m)^n = a^{m n}$; powers distribute over products and quotients but not over sums.",
          "Zero exponent: $a^0 = 1$ for every non-zero $a$; negative exponent: $a^{-n} = \\dfrac{1}{a^n}$.",
          "Fractional exponents are roots: $a^{1/n} = \\sqrt[n]{a}$ and $a^{m/n} = \\sqrt[n]{a^m}$.",
          "The same laws are used to multiply and divide numbers in scientific notation.",
          "$\\sqrt{n}$ undoes squaring and $\\sqrt[3]{n}$ undoes cubing; as indices, $\\sqrt{n} = n^{1/2}$ and $\\sqrt[3]{n} = n^{1/3}$.",
          "Memorise squares to $15^2$ and cubes to $10^3$; 64 belongs to both lists.",
          "Trap non-perfect roots between consecutive perfect powers to estimate them.",
          "Simplify square roots by extracting the largest perfect-square factor: $\\sqrt{50} = 5\\sqrt{2}$."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "measurement-and-units",
    "lessonSlug": "measurement-and-units-mastery-review",
    "title": "Measurement and Units Mastery Review",
    "objectives": [
      "Connect the main ideas across the Measurement and Units chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Name the SI metric units for length, mass and capacity and their common multiples.",
      "Convert within the metric system by multiplying or dividing by powers of ten.",
      "Recognise everyday imperial units: inches, feet, yards, miles, ounces, pounds and gallons.",
      "Convert between metric and imperial units using standard conversion factors."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Measurement and Units**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Metric and Imperial Units",
            "text": "Name the SI metric units for length, mass and capacity and their common multiples."
          },
          {
            "title": "Perimeter and Area of Basic Shapes",
            "text": "Explain the difference between perimeter (distance around) and area (space inside) and use the correct units for each."
          },
          {
            "title": "Volume and Surface Area Basics",
            "text": "Explain the difference between volume (space inside a solid) and surface area (total area of its faces)."
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "array",
          "rows": 4,
          "cols": 7
        },
        "caption": "A 7 × 4 rectangle contains 28 unit squares, so its area is 28 square units — area is counting squares."
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Metric and Imperial Units",
            "Metric units scale by powers of ten: mm → cm (×10 back), cm → m (×100 back), m → km (×1,000 back), g → kg → t and ml → l by 1,000.",
            "Larger unit means fewer of them: divide. $500\\text{ g} = 0.5\\text{ kg}$."
          ],
          [
            "Perimeter and Area of Basic Shapes",
            "Perimeter is the distance around (length units); area is the space inside (square units).",
            "Fencing, edging and borders follow the perimeter; tiles, paint and turf cover the area."
          ],
          [
            "Volume and Surface Area Basics",
            "Volume counts unit cubes inside (cm³, m³); surface area measures the faces outside (cm², m²).",
            "Cube the length factor: $1\\text{ m}^3 = 100^3 = 1{,}000{,}000$ cm³."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Convert 4.28 kilometres into metres, and 4,250 millilitres into litres.",
        "steps": [
          "Kilometres to metres is large-to-small, so multiply by 1,000: $4.28 \\times 1000 = 4280$.",
          "Millilitres to litres is small-to-large, so divide by 1,000: $4250 \\div 1000 = 4.25$."
        ],
        "answer": "$4.28\\text{ km} = 4280\\text{ m}$ and $4250\\text{ ml} = 4.25\\text{ l}$."
      },
      {
        "kind": "example",
        "prompt": "A rectangular majlis floor measures 6.5 m by 4 m. Find its perimeter and area.",
        "steps": [
          "Perimeter: $P = 2(l + w) = 2(6.5 + 4) = 2 \\times 10.5 = 21$ m.",
          "Area: $A = l \\times w = 6.5 \\times 4 = 26$ m²."
        ],
        "answer": "Perimeter 21 m; area 26 m²."
      },
      {
        "kind": "example",
        "prompt": "A shipping box measures 40 cm × 30 cm × 25 cm. Find its volume and surface area.",
        "steps": [
          "Volume: $V = lwh = 40 \\times 30 \\times 25 = 30{,}000$ cm³.",
          "Face pairs: $lw = 1200$, $lh = 1000$, $wh = 750$.",
          "Surface area: $S = 2(1200 + 1000 + 750) = 2 \\times 2950 = 5900$ cm²."
        ],
        "answer": "Volume 30,000 cm³ (30 litres); surface area 5,900 cm²."
      },
      {
        "kind": "example",
        "prompt": "A 65-inch television is advertised. What is the screen's diagonal in centimetres?",
        "steps": [
          "Use the exact factor $1\\text{ in} = 2.54\\text{ cm}$.",
          "Multiply: $65 \\times 2.54 = 165.1$."
        ],
        "answer": "The diagonal is exactly $165.1\\text{ cm}$."
      },
      {
        "kind": "example",
        "prompt": "A road sign in the US says the next town is 26 miles away. Roughly how far is that in kilometres?",
        "steps": [
          "Use the approximate factor $1\\text{ mi} \\approx 1.609\\text{ km}$.",
          "Multiply: $26 \\times 1.609 = 41.834$.",
          "Round sensibly and label the answer as approximate."
        ],
        "answer": "The town is approximately $41.8\\text{ km}$ away ($\\approx 42\\text{ km}$)."
      },
      {
        "kind": "example",
        "prompt": "A recipe needs 2 lb of flour. A shop sells flour in 500 g bags. How many bags are needed?",
        "steps": [
          "Convert pounds to grams with $1\\text{ lb} \\approx 453.6\\text{ g}$: $2 \\times 453.6 = 907.2\\text{ g}$.",
          "Each bag holds 500 g, so $907.2 \\div 500 = 1.81\\ldots$ bags.",
          "You cannot buy part of a bag, so round up."
        ],
        "answer": "Two 500 g bags are needed (about 907 g required in total)."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Multiplying when converting to a larger unit, e.g. $500\\text{ g} = 500{,}000\\text{ kg}$.",
            "right": "Larger unit means fewer of them: divide. $500\\text{ g} = 0.5\\text{ kg}$."
          },
          {
            "wrong": "Using 100 for every metric conversion, e.g. $2\\text{ km} = 200\\text{ m}$.",
            "right": "Each pair has its own factor: km–m is 1,000, m–cm is 100, cm–mm is 10. So $2\\text{ km} = 2000\\text{ m}$."
          },
          {
            "wrong": "Writing '26 miles = 41.834 km' as an exact equality.",
            "right": "The mile factor is rounded, so write $26\\text{ mi} \\approx 41.8\\text{ km}$ and round sensibly."
          },
          {
            "wrong": "Adding measurements in different units directly: $1.2\\text{ m} + 45\\text{ cm} = 46.2$.",
            "right": "Convert to a common unit first: $120\\text{ cm} + 45\\text{ cm} = 165\\text{ cm} = 1.65\\text{ m}$."
          },
          {
            "wrong": "Giving a bare number as the final answer.",
            "right": "A measurement always needs its unit: write 165 cm, not just 165."
          },
          {
            "wrong": "Mixing up the two measures — quoting an area when the question asks how much fencing is needed.",
            "right": "Fencing, edging and borders follow the perimeter; tiles, paint and turf cover the area."
          },
          {
            "wrong": "Using a slant side as the height of a triangle or parallelogram.",
            "right": "Height means perpendicular height — the right-angled distance from the base. Slant sides belong in the perimeter only."
          },
          {
            "wrong": "Substituting the diameter into $A = \\pi r^2$.",
            "right": "Halve the diameter first. For $d = 10$: $r = 5$, so $A = 25\\pi$, not $100\\pi$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Convert 5.6 m into centimetres.",
            "options": [
              "0.056 cm",
              "56 cm",
              "560 cm",
              "5,600 cm"
            ],
            "answer": 2,
            "explanation": "Metres to centimetres multiplies by 100: $5.6 \\times 100 = 560$."
          },
          {
            "prompt": "Convert 3,400 g into kilograms.",
            "options": [
              "0.34 kg",
              "3.4 kg",
              "34 kg",
              "340 kg"
            ],
            "answer": 1,
            "explanation": "Divide by 1,000: $3400 \\div 1000 = 3.4$ kg."
          },
          {
            "prompt": "Convert 0.75 l into millilitres.",
            "options": [
              "7.5 ml",
              "75 ml",
              "750 ml",
              "7,500 ml"
            ],
            "answer": 2,
            "explanation": "Multiply by 1,000: $0.75 \\times 1000 = 750$ ml."
          },
          {
            "prompt": "How many millimetres are in 2.07 m?",
            "options": [
              "20.7 mm",
              "207 mm",
              "2,070 mm",
              "20,700 mm"
            ],
            "answer": 2,
            "explanation": "Metres to millimetres multiplies by 1,000: $2.07 \\times 1000 = 2070$."
          },
          {
            "prompt": "A photo frame is 8 inches wide. Its width in centimetres is",
            "options": [
              "exactly 20.32 cm",
              "about 16 cm",
              "exactly 80 cm",
              "about 3.15 cm"
            ],
            "answer": 0,
            "explanation": "$8 \\times 2.54 = 20.32$, and the inch factor is exact."
          },
          {
            "prompt": "A marathon is about 26.2 miles. Roughly how long is it in kilometres?",
            "options": [
              "≈ 16 km",
              "≈ 26 km",
              "≈ 42 km",
              "≈ 52 km"
            ],
            "answer": 2,
            "explanation": "$26.2 \\times 1.609 \\approx 42.2$ km — the famous 42 km distance."
          },
          {
            "prompt": "Which is the most sensible unit for the mass of a delivery truck's cargo?",
            "options": [
              "grams",
              "kilograms",
              "tonnes",
              "ounces"
            ],
            "answer": 2,
            "explanation": "Cargo loads run into thousands of kilograms, so tonnes keep the numbers small."
          },
          {
            "prompt": "A water tank holds 0.4 m³. Given $1\\text{ m}^3 = 1000$ litres, its capacity is",
            "options": [
              "4 l",
              "40 l",
              "400 l",
              "4,000 l"
            ],
            "answer": 2,
            "explanation": "$0.4 \\times 1000 = 400$ litres."
          },
          {
            "prompt": "A US recipe lists 12 oz of butter. Approximately how many grams is that?",
            "options": [
              "≈ 240 g",
              "≈ 280 g",
              "≈ 340 g",
              "≈ 454 g"
            ],
            "answer": 2,
            "explanation": "$12 \\times 28.35 \\approx 340$ g (approximate, rounded factor)."
          },
          {
            "prompt": "Find the perimeter of a rectangle 12 cm by 7 cm.",
            "options": [
              "19 cm",
              "38 cm",
              "84 cm",
              "26 cm"
            ],
            "answer": 1,
            "explanation": "$P = 2(12 + 7) = 2 \\times 19 = 38$ cm."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Convert 7.25 km into metres.",
            "options": [
              "72.5 m",
              "725 m",
              "7,250 m",
              "72,500 m"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "Multiply by 1,000: $7.25 \\times 1000 = 7250$ m."
          },
          {
            "type": "mc",
            "prompt": "Convert castor sugar: 0.62 kg into grams.",
            "options": [
              "6.2 g",
              "62 g",
              "620 g",
              "6,200 g"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "Multiply by 1,000: $0.62 \\times 1000 = 620$ g."
          },
          {
            "type": "tf",
            "prompt": "The conversion 1 inch = 2.54 cm is exact.",
            "answer": true,
            "marks": 1,
            "explanation": "The inch is defined internationally as exactly 2.54 cm, so no ≈ is needed."
          },
          {
            "type": "mc",
            "prompt": "Which conversion is only approximate?",
            "options": [
              "$1\\text{ ft} = 30.48\\text{ cm}$",
              "$1\\text{ m} = 100\\text{ cm}$",
              "$1\\text{ lb} \\approx 453.6\\text{ g}$",
              "$1\\text{ l} = 1000\\text{ ml}$"
            ],
            "answer": 2,
            "marks": 2,
            "explanation": "The pound-to-gram factor is rounded; the others are exact by definition."
          },
          {
            "type": "matching",
            "prompt": "Match each measurement task to the most sensible unit.",
            "left": [
              "Thickness of a coin",
              "Distance between two cities",
              "Mass of an apple",
              "Capacity of a swimming pool"
            ],
            "options": [
              "kilometres",
              "millimetres",
              "litres",
              "grams"
            ],
            "answer": [
              1,
              0,
              3,
              2
            ],
            "marks": 4,
            "explanation": "Coins are a few millimetres thick, city gaps span kilometres, apples weigh about 150–200 g, and pools hold thousands of litres."
          },
          {
            "type": "mc",
            "prompt": "A fence is built from panels 180 cm long. How many panels are needed for a straight run of 27 m?",
            "options": [
              "12",
              "15",
              "18",
              "150"
            ],
            "answer": 1,
            "marks": 2,
            "explanation": "Convert first: $27\\text{ m} = 2700\\text{ cm}$; then $2700 \\div 180 = 15$ panels."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "Metric units scale by powers of ten: mm → cm (×10 back), cm → m (×100 back), m → km (×1,000 back), g → kg → t and ml → l by 1,000.",
          "Convert large-to-small by multiplying and small-to-large by dividing; only the decimal point moves.",
          "Imperial units are irregular: 12 in = 1 ft, 3 ft = 1 yd, 1,760 yd = 1 mi, 16 oz = 1 lb.",
          "Inch-based conversions are exact ($1\\text{ in} = 2.54\\text{ cm}$); mile, ounce, pound and gallon factors are approximate — mark answers with ≈.",
          "Choose units that keep numbers easy to picture, and always convert to a common unit before adding or comparing.",
          "Never write a measurement without its unit.",
          "Perimeter is the distance around (length units); area is the space inside (square units).",
          "Rectangle: $P = 2(l + w)$, $A = lw$. Square: $P = 4s$, $A = s^2$.",
          "Triangle: $A = \\tfrac{1}{2}bh$; parallelogram: $A = bh$; trapezium: $A = \\tfrac{1}{2}(a + b)h$ — always with perpendicular height.",
          "Circle: $C = 2\\pi r$ and $A = \\pi r^2$; use the radius, not the diameter, in the area formula."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "integers-and-rational-numbers",
    "lessonSlug": "integers-and-rational-numbers-mastery-review",
    "title": "Integers and Rational Numbers Mastery Review",
    "objectives": [
      "Connect the main ideas across the Integers and Rational Numbers chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Recognise positive integers, negative integers and zero",
      "Locate and compare integers on a number line",
      "Identify opposite integers and additive inverses",
      "Interpret absolute value as distance from zero"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Integers and Rational Numbers**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Integers and the Number Line",
            "text": "Recognise positive integers, negative integers and zero"
          },
          {
            "title": "Multiplying and Dividing Integers",
            "text": "Explain integer multiplication using repeated groups and patterns"
          },
          {
            "title": "Rational and Irrational Numbers",
            "text": "Describe natural, whole, integer, rational, irrational and real numbers"
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "On a number line, −4 lies left of 0, so −4 < 0. The highlighted point is four units from zero.",
        "figure": {
          "type": "numberLine",
          "min": -8,
          "max": 8,
          "step": 1,
          "highlight": -4
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Integers and the Number Line",
            "Integers are the positive whole numbers, their negatives and zero.",
            "On the number line, −12 is farther left, so $-12<-5$."
          ],
          [
            "Multiplying and Dividing Integers",
            "For multiplication and division, same signs give positive results and different signs give negative results.",
            "Two negative factors give a positive product; count how many negative factors appear."
          ],
          [
            "Rational and Irrational Numbers",
            "A rational number can be written as $p/q$ for integers $p,q$ with $q\ne0$.",
            "Terminating and repeating decimals are rational; only non-terminating, non-repeating decimals are irrational."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Arrange $4,-7,0,-2,9$ from least to greatest.",
        "steps": [
          "Place the values mentally on a number line.",
          "The farthest-left value is −7, followed by −2.",
          "Zero comes next, then the positive values 4 and 9."
        ],
        "answer": "$-7,-2,0,4,9$."
      },
      {
        "kind": "example",
        "prompt": "Use repeated addition to calculate $5\times(-4)$.",
        "steps": [
          "Write five groups of −4: $(-4)+(-4)+(-4)+(-4)+(-4)$.",
          "Add the magnitudes: $4+4+4+4+4=20$.",
          "Every group is negative, so the total is negative."
        ],
        "answer": "$5\times(-4)=-20$."
      },
      {
        "kind": "example",
        "prompt": "Show that $0.45$ is rational.",
        "steps": [
          "Write the terminating decimal over a power of ten: $0.45=45/100$.",
          "Simplify by dividing numerator and denominator by 5: $45/100=9/20$.",
          "Both 9 and 20 are integers and the denominator is non-zero."
        ],
        "answer": "$0.45=9/20$, so it is rational."
      },
      {
        "kind": "example",
        "prompt": "Compare $-14$ and $-9$ using $<$ or $>$.",
        "steps": [
          "Both numbers are negative.",
          "−14 lies farther left than −9 because it is farther below zero."
        ],
        "answer": "$-14<-9$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $|-18|$, $|6|$ and $|0|$.",
        "steps": [
          "−18 is 18 units from zero, so $|-18|=18$.",
          "6 is 6 units from zero, so $|6|=6$.",
          "Zero is 0 units from itself, so $|0|=0$."
        ],
        "answer": "The values are 18, 6 and 0."
      },
      {
        "kind": "example",
        "prompt": "Calculate $-7+12$.",
        "steps": [
          "The signs differ, so subtract absolute values: $12-7=5$.",
          "12 has the larger absolute value and is positive, so the result is positive."
        ],
        "answer": "$-7+12=5$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Thinking −12 is greater than −5 because 12 is greater than 5.",
            "right": "On the number line, −12 is farther left, so $-12<-5$."
          },
          {
            "wrong": "Writing $|-8|=-8$.",
            "right": "Absolute value is distance, so $|-8|=8$."
          },
          {
            "wrong": "Treating $5-(-3)$ as $5-3$.",
            "right": "Subtracting a negative means adding its opposite: $5-(-3)=5+3=8$."
          },
          {
            "wrong": "Adding magnitudes for every pair of signed numbers.",
            "right": "With different signs, subtract the magnitudes and keep the sign of the larger magnitude."
          },
          {
            "wrong": "Assuming every product containing a negative number is negative.",
            "right": "Two negative factors give a positive product; count how many negative factors appear."
          },
          {
            "wrong": "Writing $(-5)^2=-25$.",
            "right": "$(-5)^2=(-5)(-5)=25$ because the exponent is even."
          },
          {
            "wrong": "Treating $-5^2$ and $(-5)^2$ as identical.",
            "right": "$-5^2=-25$, while $(-5)^2=25$. Parentheses determine whether the sign belongs to the base."
          },
          {
            "wrong": "Saying $0div0=0$ because zero divided by a number is zero.",
            "right": "The divisor must be non-zero. $0div0$ is undefined."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which integer is farthest left on a number line?",
            "options": [
              "−2",
              "5",
              "−9",
              "0"
            ],
            "answer": 2,
            "explanation": "−9 is the smallest value, so it is farthest left."
          },
          {
            "prompt": "What is the opposite of −17?",
            "options": [
              "−17",
              "17",
              "0",
              "1/17"
            ],
            "answer": 1,
            "explanation": "17 is the same distance from zero on the opposite side."
          },
          {
            "prompt": "Evaluate $|-24|$.",
            "options": [
              "−24",
              "24",
              "0",
              "1"
            ],
            "answer": 1,
            "explanation": "−24 is 24 units from zero."
          },
          {
            "prompt": "Calculate $-5+13$.",
            "options": [
              "−18",
              "−8",
              "8",
              "18"
            ],
            "answer": 2,
            "explanation": "The signs differ: $13-5=8$, with the positive sign."
          },
          {
            "prompt": "Calculate $-11+(-6)$.",
            "options": [
              "−17",
              "−5",
              "5",
              "17"
            ],
            "answer": 0,
            "explanation": "Same negative signs: add 11 and 6, then keep the negative sign."
          },
          {
            "prompt": "Calculate $9-14$.",
            "options": [
              "23",
              "5",
              "−5",
              "−23"
            ],
            "answer": 2,
            "explanation": "$9-14=9+(-14)=-5$."
          },
          {
            "prompt": "Calculate $-4-(-10)$.",
            "options": [
              "−14",
              "−6",
              "6",
              "14"
            ],
            "answer": 2,
            "explanation": "$-4-(-10)=-4+10=6$."
          },
          {
            "prompt": "A lift moves from floor 3 to basement level −2. How many floors downward does it travel?",
            "options": [
              "1",
              "3",
              "5",
              "6"
            ],
            "answer": 2,
            "explanation": "The distance is $|3-(-2)|=5$ floors."
          },
          {
            "prompt": "Calculate $(-7)\times8$.",
            "options": [
              "−56",
              "−15",
              "15",
              "56"
            ],
            "answer": 0,
            "explanation": "Different signs give a negative result; $7\times8=56$."
          },
          {
            "prompt": "Calculate $(-9)\times(-6)$.",
            "options": [
              "−54",
              "−15",
              "15",
              "54"
            ],
            "answer": 3,
            "explanation": "Same signs give a positive result; $9\times6=54$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Which list is in increasing order?",
            "options": [
              "−8, −3, 0, 5",
              "−3, −8, 0, 5",
              "5, 0, −3, −8",
              "0, −8, −3, 5"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Increasing order follows the number line from left to right."
          },
          {
            "type": "tf",
            "prompt": "$|-12|=-12$.",
            "answer": false,
            "marks": 1,
            "explanation": "Absolute value is distance from zero, so $|-12|=12$."
          },
          {
            "type": "mc",
            "prompt": "What is $-16+9$?",
            "options": [
              "−25",
              "−7",
              "7",
              "25"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Different signs: $16-9=7$, and −16 has the larger magnitude, so the answer is −7."
          },
          {
            "type": "mc",
            "prompt": "What is $7-(-8)$?",
            "options": [
              "−1",
              "1",
              "15",
              "−15"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "$7-(-8)=7+8=15$."
          },
          {
            "type": "matching",
            "prompt": "Match each expression to its value.",
            "left": [
              "$|-6|$",
              "$-3+8$",
              "$4-11$",
              "$-5-(-2)$"
            ],
            "options": [
              "−7",
              "−3",
              "5",
              "6"
            ],
            "answer": [
              3,
              2,
              0,
              1
            ],
            "marks": 4,
            "explanation": "The values are 6, 5, −7 and −3 respectively."
          },
          {
            "type": "multi",
            "prompt": "Select all statements that are true.",
            "options": [
              "$-10<-4$",
              "$|-9|=9$",
              "$-2+(-5)=7$",
              "$3-(-4)=7$"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "marks": 2,
            "explanation": "The first, second and fourth statements are true; $-2+(-5)=-7$."
          }
        ],
        "passMark": 6
      },
      {
        "kind": "summary",
        "points": [
          "Integers are the positive whole numbers, their negatives and zero.",
          "Values increase from left to right on a number line.",
          "Opposite integers have equal absolute value and sum to zero.",
          "Absolute value is non-negative distance from zero.",
          "To add same signs, add magnitudes and keep the sign; for different signs, subtract magnitudes and keep the sign of the larger magnitude.",
          "Rewrite subtraction as addition of the opposite: $a-b=a+(-b)$.",
          "For multiplication and division, same signs give positive results and different signs give negative results.",
          "Calculate the sign separately from the absolute-value calculation.",
          "Division by zero is undefined, while zero divided by a non-zero number is zero.",
          "An even number of negative factors gives a positive product; an odd number gives a negative product."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "factors-multiples-and-primes",
    "lessonSlug": "factors-multiples-and-primes-mastery-review",
    "title": "Factors, Multiples and Primes Mastery Review",
    "objectives": [
      "Connect the main ideas across the Factors, Multiples and Primes chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Explain the difference between a factor and a multiple.",
      "List every positive factor of a whole number using factor pairs.",
      "Generate multiples of a number and identify common multiples.",
      "Apply divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, 11 and 12."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Factors, Multiples and Primes**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Factors, Multiples and Divisibility Rules",
            "text": "Explain the difference between a factor and a multiple."
          },
          {
            "title": "Prime Numbers and Prime Factorization",
            "text": "Distinguish prime, composite and unit numbers."
          },
          {
            "title": "Highest Common Factor and Lowest Common Multiple",
            "text": "Explain the meanings of HCF and LCM."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Factors, Multiples and Divisibility Rules",
            "A factor divides exactly; a multiple is produced by multiplication.",
            "6 is a factor of 24; 24 is a multiple of 6."
          ],
          [
            "Prime Numbers and Prime Factorization",
            "A prime has exactly two positive factors; a composite has more than two; 1 is neither.",
            "A prime has exactly two positive factors; 1 has only one."
          ],
          [
            "Highest Common Factor and Lowest Common Multiple",
            "The HCF is the greatest shared divisor; the LCM is the smallest shared positive multiple.",
            "Identify whether you are finding a divisor/group size or a repeating/common quantity."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "List all positive factors of 48.",
        "steps": [
          "Start with factor pairs: $1\\times48$ and $2\\times24$.",
          "$48\\div3=16$, so add $3\\times16$.",
          "$48\\div4=12$, so add $4\\times12$.",
          "$48\\div5$ is not whole, but $48\\div6=8$, so add $6\\times8$.",
          "The next test number, 7, is greater than $\\sqrt{48}\\approx6.9$, so stop."
        ],
        "answer": "The factors are $1,2,3,4,6,8,12,16,24,48$."
      },
      {
        "kind": "example",
        "prompt": "Use a sieve argument to list the primes below 30.",
        "steps": [
          "Keep 2 and cross out later multiples of 2.",
          "Keep 3 and cross out later multiples of 3.",
          "Keep 5 and cross out later multiples of 5.",
          "Because $\\sqrt{30}\\approx5.48$, no larger sieving prime is required.",
          "Read the uncrossed values."
        ],
        "answer": "The primes below 30 are $2,3,5,7,11,13,17,19,23,29$."
      },
      {
        "kind": "example",
        "prompt": "Find the HCF and LCM of 12 and 18 by listing.",
        "steps": [
          "Factors of 12: $1,2,3,4,6,12$.",
          "Factors of 18: $1,2,3,6,9,18$.",
          "The greatest common factor is 6.",
          "Multiples of 12: $12,24,36,48,\\ldots$.",
          "Multiples of 18: $18,36,54,\\ldots$.",
          "The first common positive multiple is 36."
        ],
        "answer": "$\\operatorname{HCF}(12,18)=6$ and $\\operatorname{LCM}(12,18)=36$."
      },
      {
        "kind": "example",
        "prompt": "Write the first six positive multiples of 9 and identify those that are also multiples of 6.",
        "steps": [
          "Multiply 9 by 1 through 6: $9,18,27,36,45,54$.",
          "Test which results divide exactly by 6.",
          "$18\\div6=3$, $36\\div6=6$, and $54\\div6=9$."
        ],
        "answer": "The first six multiples are 9, 18, 27, 36, 45 and 54. The common multiples with 6 are 18, 36 and 54."
      },
      {
        "kind": "example",
        "prompt": "Determine whether 7,452 is divisible by 3, 4, 6, 8, 9 and 12.",
        "steps": [
          "Digit sum: $7+4+5+2=18$, so it is divisible by 3 and 9.",
          "The last two digits are 52, and $52\\div4=13$, so it is divisible by 4.",
          "It is even and divisible by 3, so it is divisible by 6.",
          "The last three digits are 452; $452\\div8=56.5$, so it is not divisible by 8.",
          "It is divisible by both 3 and 4, so it is divisible by 12."
        ],
        "answer": "7,452 is divisible by 3, 4, 6, 9 and 12, but not by 8."
      },
      {
        "kind": "example",
        "prompt": "Find the missing digit in $53\\square4$ so that the number is divisible by 9.",
        "steps": [
          "For divisibility by 9, the digit sum must be a multiple of 9.",
          "The known digits sum to $5+3+4=12$.",
          "We need $12+\\square$ to be 18, the next multiple of 9.",
          "$18-12=6$."
        ],
        "answer": "The missing digit is 6, giving 5,364."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Saying 24 is a factor of 6.",
            "right": "6 is a factor of 24; 24 is a multiple of 6."
          },
          {
            "wrong": "Stopping a factor list before checking paired factors.",
            "right": "Write factor pairs and include both numbers from each pair."
          },
          {
            "wrong": "Using only one part of a combined rule.",
            "right": "For divisibility by 6, test both 2 and 3; for 12, test both 3 and 4."
          },
          {
            "wrong": "Assuming a large number has infinitely many factors.",
            "right": "A positive whole number has finitely many factors but infinitely many multiples."
          },
          {
            "wrong": "Calling 1 a prime because it is divisible by 1.",
            "right": "A prime has exactly two positive factors; 1 has only one."
          },
          {
            "wrong": "Calling every odd number prime.",
            "right": "Many odd numbers are composite, such as $9=3^2$ and $15=3\\times5$."
          },
          {
            "wrong": "Leaving a composite number in a prime factorization.",
            "right": "Continue until every factor is prime."
          },
          {
            "wrong": "Believing a different factor tree gives a different answer.",
            "right": "Reorder the leaves and combine equal primes; the final prime factorization is unique."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which is a factor of 54?",
            "options": [
              "7",
              "8",
              "9",
              "11"
            ],
            "answer": 2,
            "explanation": "$54\\div9=6$, a whole number."
          },
          {
            "prompt": "Which is a multiple of 14?",
            "options": [
              "42",
              "54",
              "62",
              "70"
            ],
            "answer": 3,
            "explanation": "$14\\times5=70$."
          },
          {
            "prompt": "How many positive factors does 16 have?",
            "options": [
              "4",
              "5",
              "6",
              "8"
            ],
            "answer": 1,
            "explanation": "The factors are 1, 2, 4, 8 and 16."
          },
          {
            "prompt": "Which number is divisible by 3?",
            "options": [
              "2,401",
              "2,403",
              "2,404",
              "2,405"
            ],
            "answer": 1,
            "explanation": "The digit sum of 2,403 is $2+4+0+3=9$, a multiple of 3."
          },
          {
            "prompt": "Which number is divisible by 4?",
            "options": [
              "3,414",
              "3,416",
              "3,418",
              "3,422"
            ],
            "answer": 1,
            "explanation": "The last two digits, 16, are divisible by 4."
          },
          {
            "prompt": "Which number is divisible by 9?",
            "options": [
              "4,563",
              "4,562",
              "4,561",
              "4,560"
            ],
            "answer": 0,
            "explanation": "$4+5+6+3=18$, a multiple of 9."
          },
          {
            "prompt": "Which pair has 6 as a common factor?",
            "options": [
              "18 and 25",
              "24 and 42",
              "20 and 32",
              "14 and 28"
            ],
            "answer": 1,
            "explanation": "Both 24 and 42 divide exactly by 6."
          },
          {
            "prompt": "What is the seventh positive multiple of 8?",
            "options": [
              "48",
              "54",
              "56",
              "64"
            ],
            "answer": 2,
            "explanation": "$8\\times7=56$."
          },
          {
            "prompt": "Which number is divisible by 12?",
            "options": [
              "234",
              "312",
              "426",
              "534"
            ],
            "answer": 1,
            "explanation": "312 is divisible by 3 and its last two digits, 12, are divisible by 4."
          },
          {
            "prompt": "What are the common factors of 12 and 18?",
            "options": [
              "1, 2, 3, 6",
              "1, 2, 6, 9",
              "2, 3, 4, 6",
              "1, 3, 6, 12"
            ],
            "answer": 0,
            "explanation": "These and only these values divide both numbers."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Which list contains all positive factors of 20?",
            "options": [
              "1, 2, 4, 5, 10, 20",
              "1, 2, 4, 5, 20",
              "2, 4, 5, 10",
              "1, 2, 5, 10, 20"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "The factor pairs are $1\\times20$, $2\\times10$ and $4\\times5$."
          },
          {
            "type": "tf",
            "prompt": "Every positive multiple of 8 is even.",
            "answer": true,
            "marks": 1,
            "explanation": "Every multiple of 8 contains a factor of 2."
          },
          {
            "type": "mc",
            "prompt": "Which number is divisible by both 9 and 10?",
            "options": [
              "360",
              "450",
              "540",
              "All three"
            ],
            "answer": 3,
            "marks": 1,
            "explanation": "Each ends in 0 and has a digit sum divisible by 9."
          },
          {
            "type": "multi",
            "prompt": "Select all divisors of 2,376.",
            "options": [
              "3",
              "4",
              "8",
              "9",
              "11"
            ],
            "answers": [
              0,
              1,
              2,
              3,
              4
            ],
            "marks": 2,
            "explanation": "Digit sum 18 gives 3 and 9; 76 gives 4; 376 gives 8; the alternating sum is 0, giving 11."
          },
          {
            "type": "matching",
            "prompt": "Match each divisor to its fastest test.",
            "left": [
              "4",
              "5",
              "8",
              "9"
            ],
            "options": [
              "Digit sum",
              "Last digit 0 or 5",
              "Last two digits",
              "Last three digits"
            ],
            "answer": [
              2,
              1,
              3,
              0
            ],
            "marks": 4,
            "explanation": "Each standard test focuses on the indicated digits."
          },
          {
            "type": "mc",
            "prompt": "A number is divisible by 6 exactly when it is divisible by...",
            "options": [
              "2 and 3",
              "2 and 4",
              "3 and 6",
              "3 and 9"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Because 2 and 3 are coprime and $6=2\\times3$."
          }
        ],
        "passMark": 6
      },
      {
        "kind": "summary",
        "points": [
          "A factor divides exactly; a multiple is produced by multiplication.",
          "Factor pairs provide a systematic way to list every factor.",
          "Divisibility rules test a number without performing long division.",
          "Combined tests are useful: 6 requires divisibility by 2 and 3, while 12 requires 3 and 4.",
          "Common factors divide all the chosen numbers, while common multiples belong to every chosen multiple list.",
          "A prime has exactly two positive factors; a composite has more than two; 1 is neither.",
          "The sieve removes multiples of primes and leaves the prime numbers.",
          "To test one number, check prime divisors only up to its square root.",
          "Prime factorization ends with prime factors only and is unique apart from order.",
          "Even prime exponents characterize perfect squares; exponents divisible by 3 characterize perfect cubes."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "introduction-to-algebraic-thinking",
    "lessonSlug": "introduction-to-algebraic-thinking-mastery-review",
    "title": "Introduction to Algebraic Thinking Mastery Review",
    "objectives": [
      "Connect the main ideas across the Introduction to Algebraic Thinking chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Explain how algebra generalises familiar arithmetic",
      "Use letters to represent unknown or changing numbers",
      "Identify variables, constants, coefficients, terms and operations",
      "Translate verbal descriptions into algebraic expressions"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Introduction to Algebraic Thinking**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "From Arithmetic to Algebra",
            "text": "Explain how algebra generalises familiar arithmetic"
          },
          {
            "title": "Simplifying Expressions",
            "text": "Explain what it means for two expressions to be equivalent"
          },
          {
            "title": "Solving One-Step and Two-Step Equations",
            "text": "Explain an equation as a statement of equality"
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "From Arithmetic to Algebra",
            "Algebra extends arithmetic by using variables to represent unknown or changing numbers.",
            "$4+x$ is addition; $4x$ means multiplication."
          ],
          [
            "Simplifying Expressions",
            "Equivalent expressions have the same value for every allowed variable value.",
            "A variable term and a constant are unlike, so the expression stays $3x+4$."
          ],
          [
            "Solving One-Step and Two-Step Equations",
            "An equation states that its left and right expressions are equal.",
            "Think explicitly: subtract 5 from both sides to preserve equality."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Identify the terms, variables, coefficients and constants in $7a-3b+12$.",
        "steps": [
          "Terms are separated by addition or subtraction: $7a$, $-3b$ and $12$.",
          "The variables are $a$ and $b$.",
          "The coefficients are 7 and −3.",
          "The constant term is 12."
        ],
        "answer": "Terms: $7a,-3b,12$; variables: $a,b$; coefficients: $7,-3$; constant: $12$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $6x+3x$.",
        "steps": [
          "Both terms have variable part x.",
          "Add the coefficients: $6+3=9$.",
          "Keep the x."
        ],
        "answer": "$6x+3x=9x$."
      },
      {
        "kind": "example",
        "prompt": "Solve $x+9=17$.",
        "steps": [
          "Subtract 9 from both sides: $x+9-9=17-9$.",
          "Simplify: $x=8$."
        ],
        "answer": "$x=8$. Check: $8+9=17$."
      },
      {
        "kind": "example",
        "prompt": "Write an expression for ‘nine more than four times a number $n$’.",
        "steps": [
          "Four times the number is $4n$.",
          "Nine more means add 9 after forming $4n$."
        ],
        "answer": "$4n+9$."
      },
      {
        "kind": "example",
        "prompt": "Write an expression for ‘the difference between 20 and three times $x$’.",
        "steps": [
          "Three times $x$ is $3x$.",
          "The difference between 20 and $3x$ keeps that order: $20-3x$."
        ],
        "answer": "$20-3x$."
      },
      {
        "kind": "example",
        "prompt": "Write an expression for ‘five times the sum of $m$ and 2’.",
        "steps": [
          "The sum of $m$ and 2 is $m+2$.",
          "The complete sum is multiplied by 5, so use brackets."
        ],
        "answer": "$5(m+2)$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Writing 4 + x as 4x.",
            "right": "$4+x$ is addition; $4x$ means multiplication."
          },
          {
            "wrong": "Translating ‘5 less than n’ as $5-n$.",
            "right": "Begin with n and subtract 5: $n-5$."
          },
          {
            "wrong": "Treating $x^2$ as $2x$.",
            "right": "$x^2=x\times x$, while $2x=x+x$."
          },
          {
            "wrong": "Substituting $x=-3$ into $x^2$ as $-3^2=-9$.",
            "right": "Use brackets: $(-3)^2=9$."
          },
          {
            "wrong": "Calling $3x+4=10$ an expression.",
            "right": "It is an equation because it contains an equals sign."
          },
          {
            "wrong": "Calling $2x$ and $2x^2$ like terms.",
            "right": "Their powers differ, so their variable parts are not identical."
          },
          {
            "wrong": "Combining $3x+4$ as $7x$.",
            "right": "A variable term and a constant are unlike, so the expression stays $3x+4$."
          },
          {
            "wrong": "Combining $2x+5x^2$ as $7x^2$.",
            "right": "x and x² are different variable parts and cannot be collected."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which part of $6x+11$ is the coefficient?",
            "options": [
              "x",
              "6",
              "11",
              "6x + 11"
            ],
            "answer": 1,
            "explanation": "The coefficient is the numerical factor multiplying x, so it is 6."
          },
          {
            "prompt": "Which expression means ‘7 more than n’?",
            "options": [
              "7n",
              "7 − n",
              "n + 7",
              "n/7"
            ],
            "answer": 2,
            "explanation": "Start with n and add 7."
          },
          {
            "prompt": "Which expression means ‘four times the difference between x and 3’?",
            "options": [
              "4x − 3",
              "4(x − 3)",
              "x − 12",
              "4(3 − x)"
            ],
            "answer": 1,
            "explanation": "The difference x − 3 must be formed first, so it is grouped."
          },
          {
            "prompt": "Evaluate $5a-2$ when $a=3$.",
            "options": [
              "7",
              "13",
              "15",
              "17"
            ],
            "answer": 1,
            "explanation": "$5(3)-2=15-2=13$."
          },
          {
            "prompt": "Evaluate $b^2$ when $b=-5$.",
            "options": [
              "−25",
              "−10",
              "10",
              "25"
            ],
            "answer": 3,
            "explanation": "$(-5)^2=(-5)(-5)=25$."
          },
          {
            "prompt": "Which pair consists of like terms?",
            "options": [
              "3x and 3y",
              "4a and −2a",
              "x and x²",
              "5 and 5m"
            ],
            "answer": 1,
            "explanation": "Both terms have exactly the variable part a."
          },
          {
            "prompt": "How many terms are in $4x-3y+8$?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answer": 2,
            "explanation": "The terms are 4x, −3y and 8."
          },
          {
            "prompt": "A phone plan costs ₹20 plus ₹3 per gigabyte g. Which expression gives the total?",
            "options": [
              "23g",
              "20g + 3",
              "20 + 3g",
              "3(20 + g)"
            ],
            "answer": 2,
            "explanation": "20 is the fixed charge and 3g is the usage charge."
          },
          {
            "prompt": "Simplify $7x+4x$.",
            "options": [
              "11",
              "11x",
              "28x",
              "7x + 4"
            ],
            "answer": 1,
            "explanation": "Add the coefficients and keep x: 7 + 4 = 11."
          },
          {
            "prompt": "Simplify $9a-12a$.",
            "options": [
              "−3a",
              "3a",
              "−3",
              "21a"
            ],
            "answer": 0,
            "explanation": "$9+(-12)=-3$, so the result is −3a."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Which is an algebraic expression rather than an equation?",
            "options": [
              "3x + 5",
              "3x + 5 = 20",
              "x = 4",
              "7 = 7"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "An expression does not contain an equals sign."
          },
          {
            "type": "mc",
            "prompt": "What is the coefficient of y in $-8y+3$?",
            "options": [
              "8",
              "−8",
              "3",
              "y"
            ],
            "answer": 1,
            "marks": 2,
            "explanation": "The coefficient includes its sign, so it is −8."
          },
          {
            "type": "tf",
            "prompt": "$x^2$ and $2x$ mean the same thing.",
            "answer": false,
            "marks": 1,
            "explanation": "$x^2=x\times x$, whereas $2x=x+x$."
          },
          {
            "type": "mc",
            "prompt": "Translate ‘6 less than twice n’.",
            "options": [
              "6 − 2n",
              "2(n − 6)",
              "2n − 6",
              "6n − 2"
            ],
            "answer": 2,
            "marks": 2,
            "explanation": "Twice n is 2n; 6 less means subtract 6."
          },
          {
            "type": "mc",
            "prompt": "Evaluate $2x^2-3$ when $x=-2$.",
            "options": [
              "−11",
              "1",
              "5",
              "11"
            ],
            "answer": 2,
            "marks": 3,
            "explanation": "$2(-2)^2-3=2(4)-3=5$."
          },
          {
            "type": "matching",
            "prompt": "Match each algebra word to its example.",
            "left": [
              "Variable",
              "Coefficient",
              "Constant",
              "Expression"
            ],
            "options": [
              "x in 5x + 2",
              "5 in 5x",
              "2 in 5x + 2",
              "5x + 2"
            ],
            "answer": [
              0,
              1,
              2,
              3
            ],
            "marks": 4,
            "explanation": "Each example illustrates the standard vocabulary of an expression."
          }
        ],
        "passMark": 9
      },
      {
        "kind": "summary",
        "points": [
          "Algebra extends arithmetic by using variables to represent unknown or changing numbers.",
          "An expression contains terms and operations but no equals sign.",
          "A coefficient multiplies a variable; a constant has no variable.",
          "Translate verbal phrases carefully, paying attention to order and grouping.",
          "Substitute values using brackets and then follow the order of operations.",
          "Like terms have identical variable parts, including identical powers.",
          "Equivalent expressions have the same value for every allowed variable value.",
          "Only terms with identical variable parts can be collected.",
          "When collecting like terms, operate on coefficients and keep the variable part.",
          "To expand a bracket, multiply the outside factor by every term inside."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "linear-equations-and-inequalities",
    "lessonSlug": "linear-equations-and-inequalities-mastery-review",
    "title": "Linear Equations and Inequalities Mastery Review",
    "objectives": [
      "Connect the main ideas across the Linear Equations and Inequalities chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Identify the variable, constants, coefficients and terms in a linear equation.",
      "Solve one-step and two-step linear equations using inverse operations.",
      "Solve equations that contain brackets by distributing first.",
      "Solve equations that contain fractions or decimals."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Linear Equations and Inequalities**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Solving Linear Equations",
            "text": "Identify the variable, constants, coefficients and terms in a linear equation."
          },
          {
            "title": "Word Problems with Linear Equations",
            "text": "Convert everyday phrases into algebraic expressions."
          },
          {
            "title": "Linear Inequalities",
            "text": "Interpret the four inequality symbols: <, >, ≤ and ≥."
          },
          {
            "title": "Systems of Linear Equations",
            "text": "Explain what simultaneous equations are and what it means to solve a system."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Solving Linear Equations",
            "An equation states that two expressions are equal; solving it means finding the variable value(s) that make this true.",
            "The multiplier applies to every term inside the bracket: $5(x-2) = 5x - 10$."
          ],
          [
            "Word Problems with Linear Equations",
            "Always begin by defining the unknown clearly in words: 'Let $x$ represent ___.'",
            "The number comes first: 'five less than a number' means $x - 5$."
          ],
          [
            "Linear Inequalities",
            "$<, >, \\le, \\ge$ compare values rather than asserting exact equality.",
            "Dividing by a negative number reverses the inequality: the correct result is $x < -5$."
          ],
          [
            "Systems of Linear Equations",
            "A system of two linear equations is solved by finding the pair of values that satisfies both at once — graphically, the intersection point of the two lines.",
            "A system's solution needs both values — always substitute back to find the second variable."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Solve $x - 9 = 14$.",
        "steps": [
          "Add 9 to both sides: $x - 9 + 9 = 14 + 9$.",
          "Simplify: $x = 23$."
        ],
        "answer": "$x = 23$. Check: $23 - 9 = 14$ ✓"
      },
      {
        "kind": "example",
        "prompt": "A book costs ₹8 more than a magazine. Together they cost ₹26. Find the price of the magazine.",
        "steps": [
          "Let $x$ = the price of the magazine, in rupees.",
          "The book costs 8 more, so the book's price is $x + 8$.",
          "Together they cost 26: $x + (x + 8) = 26$.",
          "Combine like terms: $2x + 8 = 26$.",
          "Subtract 8 from both sides: $2x = 18$.",
          "Divide both sides by 2: $x = 9$."
        ],
        "answer": "The magazine costs ₹9 (and the book costs ₹17). Check: $9 + 17 = 26$ ✓, and $17$ is indeed $8$ more than $9$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Solve $x + 5 > 12$.",
        "steps": [
          "Subtract 5 from both sides: $x > 7$."
        ],
        "answer": "$x > 7$ — every number greater than 7 (not including 7 itself)."
      },
      {
        "kind": "example",
        "prompt": "Solve the system $x + y = 10$ and $x - y = 2$ by substitution.",
        "steps": [
          "Rearrange the first equation to isolate $x$: $x = 10 - y$.",
          "Substitute this into the second equation: $(10 - y) - y = 2$.",
          "Simplify: $10 - 2y = 2$.",
          "Subtract 10 from both sides: $-2y = -8$.",
          "Divide both sides by $-2$: $y = 4$.",
          "Substitute $y = 4$ back into $x = 10 - y$: $x = 10 - 4 = 6$."
        ],
        "answer": "$x = 6$, $y = 4$. Check: $6 + 4 = 10$ ✓ and $6 - 4 = 2$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Solve $3x + 7 = 22$.",
        "steps": [
          "Subtract 7 from both sides: $3x = 15$.",
          "Divide both sides by 3: $x = 5$."
        ],
        "answer": "$x = 5$. Check: $3(5) + 7 = 15 + 7 = 22$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Solve $5(x - 2) = 25$.",
        "steps": [
          "Distribute the 5 across the bracket: $5x - 10 = 25$.",
          "Add 10 to both sides: $5x = 35$.",
          "Divide both sides by 5: $x = 7$."
        ],
        "answer": "$x = 7$. Check: $5(7 - 2) = 5(5) = 25$ ✓"
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Distributing only the first term of a bracket: $5(x-2) = 5x - 2$.",
            "right": "The multiplier applies to every term inside the bracket: $5(x-2) = 5x - 10$."
          },
          {
            "wrong": "Applying an operation to only one side, e.g. adding 7 to the left side only.",
            "right": "Every operation must be applied to both sides to keep the equation balanced."
          },
          {
            "wrong": "Dividing before subtracting in $3x + 7 = 22$, giving $x + 7/3 = 22/3$.",
            "right": "Undo addition or subtraction first, then undo multiplication or division: subtract 7, then divide by 3."
          },
          {
            "wrong": "Concluding an equation like $2x+4=2x+9$ has solution $x=0$ because the numbers don't match.",
            "right": "When the variable cancels and leaves a false numeric statement, the correct conclusion is 'no solution', not $x=0$."
          },
          {
            "wrong": "Checking a solution against a simplified line of working rather than the original equation.",
            "right": "Always substitute back into the original equation exactly as it was given."
          },
          {
            "wrong": "Translating 'five less than a number' as $5 - x$.",
            "right": "The number comes first: 'five less than a number' means $x - 5$."
          },
          {
            "wrong": "Solving for the wrong quantity, e.g. finding the book's price when the question asked for the magazine's price.",
            "right": "Write 'let $x$ represent ___' clearly before starting, and check the question's exact wording before giving the final answer."
          },
          {
            "wrong": "Forgetting to add the fixed fee separately from the per-unit rate, e.g. writing $2.5x = 27.5$ for a taxi with both a fee and a rate.",
            "right": "A fixed fee is added once; a rate is multiplied by the varying quantity: $2.5x + 5 = 27.5$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Solve $x + 6 = 11$.",
            "options": [
              "$x = 5$",
              "$x = 17$",
              "$x = -5$",
              "$x = 6$"
            ],
            "answer": 0,
            "explanation": "Subtract 6 from both sides: $x = 11 - 6 = 5$."
          },
          {
            "prompt": "Solve $5x = 35$.",
            "options": [
              "$x = 30$",
              "$x = 40$",
              "$x = 7$",
              "$x = 175$"
            ],
            "answer": 2,
            "explanation": "Divide both sides by 5: $x = 35 \\div 5 = 7$."
          },
          {
            "prompt": "Solve $2x - 5 = 13$.",
            "options": [
              "$x = 4$",
              "$x = 9$",
              "$x = 8$",
              "$x = 6$"
            ],
            "answer": 1,
            "explanation": "Add 5: $2x = 18$. Divide by 2: $x = 9$."
          },
          {
            "prompt": "Solve $4(x + 3) = 32$.",
            "options": [
              "$x = 5$",
              "$x = 8$",
              "$x = 6.5$",
              "$x = 29$"
            ],
            "answer": 0,
            "explanation": "Distribute: $4x + 12 = 32$. Subtract 12: $4x = 20$. Divide by 4: $x = 5$."
          },
          {
            "prompt": "Solve $\\dfrac{x}{4} - 2 = 3$.",
            "options": [
              "$x = 4$",
              "$x = 12$",
              "$x = 20$",
              "$x = 5$"
            ],
            "answer": 2,
            "explanation": "Add 2: $x/4 = 5$. Multiply by 4: $x = 20$."
          },
          {
            "prompt": "Solve $6x - 3 = 3x + 15$.",
            "options": [
              "$x = 4$",
              "$x = 6$",
              "$x = 5$",
              "$x = 12$"
            ],
            "answer": 1,
            "explanation": "Subtract $3x$: $3x - 3 = 15$. Add 3: $3x = 18$. Divide by 3: $x = 6$."
          },
          {
            "prompt": "Solve $0.2x + 3 = 7$.",
            "options": [
              "$x = 20$",
              "$x = 2$",
              "$x = 8$",
              "$x = 0.8$"
            ],
            "answer": 0,
            "explanation": "Subtract 3: $0.2x = 4$. Divide by 0.2: $x = 20$."
          },
          {
            "prompt": "What is the solution set of $5x + 2 = 5x + 9$?",
            "options": [
              "$x = 0$",
              "No solution",
              "Infinitely many solutions",
              "$x = 7$"
            ],
            "answer": 1,
            "explanation": "Subtracting $5x$ leaves $2 = 9$, which is false, so there is no solution."
          },
          {
            "prompt": "What is the solution set of $2(x + 4) = 2x + 8$?",
            "options": [
              "$x = 0$",
              "No solution",
              "Infinitely many solutions",
              "$x = 4$"
            ],
            "answer": 2,
            "explanation": "Distributing gives $2x + 8 = 2x + 8$, true for every $x$, so there are infinitely many solutions."
          },
          {
            "prompt": "A phone plan costs ₹15 plus ₹2 per gigabyte used. A bill was ₹33. How many gigabytes were used?",
            "options": [
              "6",
              "9",
              "18",
              "24"
            ],
            "answer": 1,
            "explanation": "$2x + 15 = 33 \\Rightarrow 2x = 18 \\Rightarrow x = 9$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Solve $x - 8 = 15$.",
            "options": [
              "$x = 7$",
              "$x = 23$",
              "$x = -7$",
              "$x = 120$"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Add 8 to both sides: $x = 23$."
          },
          {
            "type": "mc",
            "prompt": "Solve $7x + 3 = 38$.",
            "options": [
              "$x = 5$",
              "$x = 6$",
              "$x = 41/7$",
              "$x = 7$"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Subtract 3: $7x = 35$. Divide by 7: $x = 5$."
          },
          {
            "type": "tf",
            "prompt": "In the equation $6(x+1) = 30$, the first correct step is to subtract 1 from both sides.",
            "answer": false,
            "marks": 1,
            "explanation": "The bracket must be distributed first: $6x + 6 = 30$, not simplified by removing the 1 directly."
          },
          {
            "type": "mc",
            "prompt": "Solve $3(2x - 1) = 15$.",
            "options": [
              "$x = 2$",
              "$x = 3$",
              "$x = 8/3$",
              "$x = 6$"
            ],
            "answer": 1,
            "marks": 2,
            "explanation": "Distribute: $6x - 3 = 15$. Add 3: $6x = 18$. Divide by 6: $x = 3$."
          },
          {
            "type": "mc",
            "prompt": "Solve $\\dfrac{x}{5} + 3 = 3$.",
            "options": [
              "$x = 0$",
              "$x = 5$",
              "$x = 15$",
              "No solution"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "Subtract 3: $x/5 = 0$. Multiply by 5: $x = 0$."
          },
          {
            "type": "matching",
            "prompt": "Match each equation to its solution type.",
            "left": [
              "$3x + 1 = 3x + 5$",
              "$2(x + 1) = 2x + 2$",
              "$x + 4 = 9$",
              "$5x = 5x + 0$"
            ],
            "options": [
              "$x = 5$",
              "No solution",
              "Infinitely many solutions",
              "Infinitely many solutions"
            ],
            "answer": [
              1,
              2,
              0,
              3
            ],
            "marks": 4,
            "explanation": "The first cancels to $1=5$ (false, no solution); the second cancels to $2x+2=2x+2$ (true, infinite); the third solves normally to $x=5$; the fourth cancels to $0=0$ (true, infinite)."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "An equation states that two expressions are equal; solving it means finding the variable value(s) that make this true.",
          "Whatever operation is applied to one side of an equation must be applied to the other side too.",
          "Two-step equations: undo addition/subtraction first, then undo multiplication/division.",
          "Equations with brackets: distribute first. Equations with fractions: multiply both sides to clear them.",
          "Variables on both sides: move every variable term to one side before isolating it.",
          "If the variable cancels leaving a false statement, there is no solution; if it leaves a true statement, there are infinitely many solutions.",
          "Always check a solution by substituting it into the original equation.",
          "Always begin by defining the unknown clearly in words: 'Let $x$ represent ___.'",
          "Learn the standard phrase translations: 'increased by' means $+$, 'twice' means $\\times 2$, 'less than' reverses the usual order.",
          "Build the equation by joining translated phrases the way the sentence joins its ideas."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polynomials-and-factoring",
    "lessonSlug": "polynomials-and-factoring-mastery-review",
    "title": "Polynomials and Factoring Mastery Review",
    "objectives": [
      "Connect the main ideas across the Polynomials and Factoring chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Identify the degree, terms and coefficients of a polynomial.",
      "Classify polynomials as monomials, binomials or trinomials.",
      "Add and subtract polynomials by combining like terms.",
      "Multiply a polynomial by a monomial using the distributive property."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Polynomials and Factoring**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Polynomials: Add, Subtract, Multiply",
            "text": "Identify the degree, terms and coefficients of a polynomial."
          },
          {
            "title": "Polynomial Division",
            "text": "Divide a polynomial by a monomial."
          },
          {
            "title": "Factoring Techniques",
            "text": "Factor out the greatest common factor (GCF) from a polynomial."
          },
          {
            "title": "Rational Expressions",
            "text": "Define a rational expression and identify values that must be excluded from its domain."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Polynomials: Add, Subtract, Multiply",
            "A polynomial's degree is its highest term's exponent; terms are named monomial, binomial or trinomial by count.",
            "Only terms with identical variables raised to identical powers can combine: $3x^2$ and $2x$ stay separate."
          ],
          [
            "Polynomial Division",
            "Divide a polynomial by a monomial by dividing each term separately.",
            "Every power must be represented: $x^3 + 0x^2 + 0x - 8$ uses coefficients 1, 0, 0, $-8$."
          ],
          [
            "Factoring Techniques",
            "Always factor out the GCF first, before applying any other technique.",
            "Factor out the GCF first: $2(x^2-4) = 2(x+2)(x-2)$ — this is the fully factored form."
          ],
          [
            "Rational Expressions",
            "A rational expression is a fraction of two polynomials; its domain excludes any value making the original denominator zero.",
            "Only common FACTORS (things multiplied) can be cancelled — $\\dfrac{x+3}{x}$ does not simplify by cancelling the x's."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Simplify $(3x^2 + 4x - 5) + (x^2 - 6x + 2)$.",
        "steps": [
          "Group like terms: $(3x^2 + x^2) + (4x - 6x) + (-5 + 2)$.",
          "Combine each group: $4x^2 - 2x - 3$."
        ],
        "answer": "$4x^2 - 2x - 3$"
      },
      {
        "kind": "example",
        "prompt": "Divide $\\dfrac{12x^3 - 8x^2 + 4x}{4x}$.",
        "steps": [
          "Divide each term by $4x$ separately: $\\dfrac{12x^3}{4x} - \\dfrac{8x^2}{4x} + \\dfrac{4x}{4x}$.",
          "Simplify each: $3x^2 - 2x + 1$."
        ],
        "answer": "$3x^2 - 2x + 1$"
      },
      {
        "kind": "example",
        "prompt": "Factor $6x^2 + 9x$.",
        "steps": [
          "Find the GCF of $6x^2$ and $9x$: the numbers share a factor of 3, and both terms have at least one $x$, so the GCF is $3x$.",
          "Divide each term by $3x$: $6x^2 \\div 3x = 2x$ and $9x \\div 3x = 3$.",
          "Write the result: $3x(2x + 3)$."
        ],
        "answer": "$3x(2x + 3)$. Check by expanding: $3x(2x+3) = 6x^2+9x$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\dfrac{x^2-9}{x^2+x-6}$ and state its domain restrictions.",
        "steps": [
          "Factor the numerator: $x^2-9 = (x+3)(x-3)$.",
          "Factor the denominator: $x^2+x-6 = (x+3)(x-2)$.",
          "Cancel the common factor $(x+3)$: $\\dfrac{(x+3)(x-3)}{(x+3)(x-2)} = \\dfrac{x-3}{x-2}$.",
          "Find the restrictions from the ORIGINAL denominator: $(x+3)(x-2)=0$ when $x=-3$ or $x=2$."
        ],
        "answer": "Simplified: $\\dfrac{x-3}{x-2}$, with $x \\neq -3$ and $x \\neq 2$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $(5x^2 - 3x + 8) - (2x^2 - 7x + 1)$.",
        "steps": [
          "Distribute the subtraction sign across the second polynomial: $5x^2 - 3x + 8 - 2x^2 + 7x - 1$.",
          "Group like terms: $(5x^2 - 2x^2) + (-3x + 7x) + (8 - 1)$.",
          "Combine each group: $3x^2 + 4x + 7$."
        ],
        "answer": "$3x^2 + 4x + 7$"
      },
      {
        "kind": "example",
        "prompt": "Expand $4x(2x^2 - 3x + 5)$.",
        "steps": [
          "Distribute $4x$ across each term: $4x \\cdot 2x^2 - 4x \\cdot 3x + 4x \\cdot 5$.",
          "Multiply each pair: $8x^3 - 12x^2 + 20x$."
        ],
        "answer": "$8x^3 - 12x^2 + 20x$"
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Combining unlike terms, e.g. treating $3x^2 + 2x$ as $5x^3$ or $5x^2$.",
            "right": "Only terms with identical variables raised to identical powers can combine: $3x^2$ and $2x$ stay separate."
          },
          {
            "wrong": "Forgetting to distribute the negative sign across every term when subtracting polynomials.",
            "right": "Subtracting $(2x^2+5x-7)$ means changing the sign of every term inside: $-2x^2-5x+7$."
          },
          {
            "wrong": "Multiplying only two of the four FOIL products, e.g. skipping the Outer or Inner term.",
            "right": "All four products — First, Outer, Inner, Last — are required before combining like terms."
          },
          {
            "wrong": "Applying the perfect-square pattern as $(a+b)^2 = a^2+b^2$, dropping the middle term.",
            "right": "The correct pattern includes a middle term: $(a+b)^2 = a^2+2ab+b^2$."
          },
          {
            "wrong": "Adding exponents when adding like terms, e.g. $x^2+x^2=x^4$.",
            "right": "Adding like terms adds coefficients, not exponents: $x^2+x^2=2x^2$."
          },
          {
            "wrong": "Forgetting to include a zero coefficient for a missing power when setting up synthetic division, e.g. dividing $x^3 - 8$ using only coefficients 1, $-8$.",
            "right": "Every power must be represented: $x^3 + 0x^2 + 0x - 8$ uses coefficients 1, 0, 0, $-8$."
          },
          {
            "wrong": "Subtracting incorrectly in long division by forgetting to flip the sign of every term being subtracted.",
            "right": "Subtracting a polynomial means changing the sign of each of its terms before combining."
          },
          {
            "wrong": "Using synthetic division to divide by a non-linear divisor, like $x^2 + 1$.",
            "right": "Synthetic division only works for linear divisors of the form $x - r$; use long division for higher-degree divisors."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "What is the degree of $7x^4 - 3x^2 + 1$?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answer": 3,
            "explanation": "The highest power of $x$ present is 4."
          },
          {
            "prompt": "Simplify $(2x^2 + 5x - 3) + (x^2 - 2x + 6)$.",
            "options": [
              "$3x^2 + 3x + 3$",
              "$3x^2 + 7x + 3$",
              "$2x^2 + 3x + 3$",
              "$3x^2 + 3x - 3$"
            ],
            "answer": 0,
            "explanation": "Combine like terms: $(2x^2+x^2)+(5x-2x)+(-3+6) = 3x^2+3x+3$."
          },
          {
            "prompt": "Simplify $(4x^2 - 3x + 2) - (x^2 + 5x - 7)$.",
            "options": [
              "$3x^2 - 8x + 9$",
              "$3x^2 + 2x - 5$",
              "$5x^2 - 8x - 5$",
              "$3x^2 - 8x - 5$"
            ],
            "answer": 0,
            "explanation": "Distribute the minus: $4x^2-3x+2-x^2-5x+7$. Combine: $3x^2-8x+9$."
          },
          {
            "prompt": "Expand $3x(2x^2 - 5x + 1)$.",
            "options": [
              "$6x^3 - 15x^2 + 3x$",
              "$6x^2 - 15x + 3$",
              "$5x^3 - 8x^2 + 4x$",
              "$6x^3 - 5x^2 + 3x$"
            ],
            "answer": 0,
            "explanation": "Distribute $3x$: $3x \\cdot 2x^2 - 3x \\cdot 5x + 3x \\cdot 1 = 6x^3 - 15x^2 + 3x$."
          },
          {
            "prompt": "Expand $(x + 2)(x + 9)$.",
            "options": [
              "$x^2 + 11x + 18$",
              "$x^2 + 9x + 18$",
              "$x^2 + 11x + 11$",
              "$x^2 + 18x + 11$"
            ],
            "answer": 0,
            "explanation": "FOIL: $x^2 + 9x + 2x + 18 = x^2 + 11x + 18$."
          },
          {
            "prompt": "Expand $(x - 3)(x + 8)$.",
            "options": [
              "$x^2 + 5x - 24$",
              "$x^2 - 5x - 24$",
              "$x^2 + 5x + 24$",
              "$x^2 - 11x - 24$"
            ],
            "answer": 0,
            "explanation": "FOIL: $x^2 + 8x - 3x - 24 = x^2 + 5x - 24$."
          },
          {
            "prompt": "Expand $(x + 7)^2$ using the perfect-square pattern.",
            "options": [
              "$x^2 + 14x + 49$",
              "$x^2 + 7x + 49$",
              "$x^2 + 49$",
              "$x^2 + 14x + 14$"
            ],
            "answer": 0,
            "explanation": "$(a+b)^2 = a^2+2ab+b^2$ with $a=x,b=7$: $x^2 + 14x + 49$."
          },
          {
            "prompt": "Expand $(x + 10)(x - 10)$ using the difference-of-squares pattern.",
            "options": [
              "$x^2 - 100$",
              "$x^2 + 100$",
              "$x^2 - 20x - 100$",
              "$x^2 - 20x + 100$"
            ],
            "answer": 0,
            "explanation": "$(a+b)(a-b)=a^2-b^2$ with $a=x,b=10$: $x^2 - 100$."
          },
          {
            "prompt": "Expand $(2x + 3)(x - 5)$.",
            "options": [
              "$2x^2 - 7x - 15$",
              "$2x^2 + 7x - 15$",
              "$2x^2 - 13x - 15$",
              "$2x^2 - 7x + 15$"
            ],
            "answer": 0,
            "explanation": "FOIL: $2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$."
          },
          {
            "prompt": "Divide $\\dfrac{15x^3 - 10x^2 + 5x}{5x}$.",
            "options": [
              "$3x^2 - 2x + 1$",
              "$3x^2 - 2x$",
              "$3x^3 - 2x^2 + x$",
              "$3x^2 + 2x + 1$"
            ],
            "answer": 0,
            "explanation": "Divide each term by $5x$: $3x^2 - 2x + 1$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "What is the degree of the polynomial $5x^3 - 2x + 9$?",
            "options": [
              "9",
              "3",
              "2",
              "5"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The highest exponent present is 3."
          },
          {
            "type": "mc",
            "prompt": "Simplify $(3x^2 - x + 4) + (2x^2 + 5x - 1)$.",
            "options": [
              "$5x^2 + 4x + 3$",
              "$5x^2 - 4x + 3$",
              "$x^2 + 4x + 3$",
              "$5x^2 + 4x - 3$"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Combine like terms: $(3x^2+2x^2)+(-x+5x)+(4-1)=5x^2+4x+3$."
          },
          {
            "type": "tf",
            "prompt": "$(a-b)^2 = a^2 - b^2$.",
            "answer": false,
            "marks": 1,
            "explanation": "The correct expansion keeps a middle term: $(a-b)^2 = a^2 - 2ab + b^2$."
          },
          {
            "type": "mc",
            "prompt": "Expand $(x - 4)(x - 9)$.",
            "options": [
              "$x^2 - 13x + 36$",
              "$x^2 + 13x + 36$",
              "$x^2 - 5x + 36$",
              "$x^2 - 13x - 36$"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "FOIL: $x^2 - 9x - 4x + 36 = x^2 - 13x + 36$."
          },
          {
            "type": "mc",
            "prompt": "Expand $(3x - 2)^2$.",
            "options": [
              "$9x^2 - 12x + 4$",
              "$9x^2 - 4$",
              "$9x^2 + 12x + 4$",
              "$3x^2 - 12x + 4$"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$(a-b)^2=a^2-2ab+b^2$ with $a=3x,b=2$: $9x^2 - 12x + 4$."
          },
          {
            "type": "matching",
            "prompt": "Match each product to its expanded form.",
            "left": [
              "$(x+5)(x-5)$",
              "$(x+5)^2$",
              "$(x-5)^2$",
              "$(x+1)(x+5)$"
            ],
            "options": [
              "$x^2+10x+25$",
              "$x^2-10x+25$",
              "$x^2-25$",
              "$x^2+6x+5$"
            ],
            "answer": [
              2,
              0,
              1,
              3
            ],
            "marks": 4,
            "explanation": "Each expansion follows directly from the special-product patterns or FOIL."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "A polynomial's degree is its highest term's exponent; terms are named monomial, binomial or trinomial by count.",
          "Add or subtract polynomials by combining like terms, distributing any negative sign first.",
          "Multiply a polynomial by a monomial by distributing across every term.",
          "FOIL (First, Outer, Inner, Last) expands the product of two binomials.",
          "Memorise the special products $(a+b)^2=a^2+2ab+b^2$, $(a-b)^2=a^2-2ab+b^2$ and $(a+b)(a-b)=a^2-b^2$.",
          "Larger polynomial products extend the same distributive idea across every term pair.",
          "Divide a polynomial by a monomial by dividing each term separately.",
          "Long division of polynomials repeats: divide leading terms, multiply, subtract, bring down.",
          "Synthetic division is a fast shortcut for dividing by $x - r$, using only coefficients.",
          "The remainder theorem: the remainder of $p(x) \\div (x-r)$ equals $p(r)$."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "quadratic-equations",
    "lessonSlug": "quadratic-equations-mastery-review",
    "title": "Quadratic Equations Mastery Review",
    "objectives": [
      "Connect the main ideas across the Quadratic Equations chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Recognise a quadratic equation and identify its coefficients.",
      "State and apply the zero product property.",
      "Solve quadratic equations by factoring.",
      "Solve quadratic equations using the square root method."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Quadratic Equations**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Solving by Factoring and Square Roots",
            "text": "Recognise a quadratic equation and identify its coefficients."
          },
          {
            "title": "Completing the Square and the Quadratic Formula",
            "text": "Solve a quadratic equation by completing the square."
          },
          {
            "title": "Parabolas",
            "text": "Identify the shape and key features of a parabola."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Solving by Factoring and Square Roots",
            "A quadratic equation has standard form $ax^2+bx+c=0$ with $a \\neq 0$, and can have 0, 1 or 2 real solutions.",
            "Rearrange to '... = 0' first: $x^2-3x-18=0$, then factor and apply the zero product property."
          ],
          [
            "Completing the Square and the Quadratic Formula",
            "Completing the square: move the constant across, add $(b/2)^2$ to both sides, factor as a perfect square, then use the square root method.",
            "The value to add is half the x-coefficient, squared: $(b/2)^2$, not $b^2$."
          ],
          [
            "Parabolas",
            "A parabola is the graph of a quadratic function; its vertex is the single minimum ($a>0$) or maximum ($a<0$) point.",
            "The formula requires the negative sign: $h = -b/(2a)$."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Solve $x^2 + 5x + 6 = 0$ by factoring.",
        "steps": [
          "The equation already has zero on one side.",
          "Factor the trinomial: two numbers multiplying to 6 and adding to 5 are 2 and 3, so $(x+2)(x+3) = 0$.",
          "Apply the zero product property: $x + 2 = 0$ or $x + 3 = 0$.",
          "Solve each: $x = -2$ or $x = -3$."
        ],
        "answer": "$x = -2$ or $x = -3$. Check: $(-2)^2+5(-2)+6 = 4-10+6=0$ ✓ and $(-3)^2+5(-3)+6=9-15+6=0$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Solve $x^2 + 6x + 5 = 0$ by completing the square.",
        "steps": [
          "Move the constant to the right: $x^2 + 6x = -5$.",
          "Halve the x-coefficient ($6 \\div 2 = 3$) and square it ($3^2=9$); add to both sides: $x^2+6x+9 = -5+9$.",
          "The left side is now a perfect square: $(x+3)^2 = 4$.",
          "Take the square root of both sides: $x + 3 = \\pm 2$.",
          "Solve: $x = -1$ or $x = -5$."
        ],
        "answer": "$x = -1$ or $x = -5$. Check: $(-1)^2+6(-1)+5=1-6+5=0$ ✓ and $(-5)^2+6(-5)+5=25-30+5=0$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Find the vertex of $y = x^2 - 6x + 5$ using the standard-form formula.",
        "steps": [
          "Identify coefficients: $a=1$, $b=-6$, $c=5$.",
          "Find the x-coordinate of the vertex: $h = -\\dfrac{b}{2a} = -\\dfrac{-6}{2(1)} = 3$.",
          "Find the y-coordinate by substituting $x=3$: $y = 3^2-6(3)+5 = 9-18+5=-4$."
        ],
        "answer": "Vertex at $(3, -4)$. Since $a=1>0$, this is a minimum point."
      },
      {
        "kind": "example",
        "prompt": "Solve $x^2 - 3x = 18$ by factoring.",
        "steps": [
          "Rearrange so one side is zero: $x^2 - 3x - 18 = 0$.",
          "Factor: numbers multiplying to $-18$ and adding to $-3$ are $-6$ and $3$, so $(x-6)(x+3)=0$.",
          "Apply the zero product property: $x - 6 = 0$ or $x + 3 = 0$.",
          "Solve each: $x = 6$ or $x = -3$."
        ],
        "answer": "$x = 6$ or $x = -3$. Check: $6^2-3(6)=36-18=18$ ✓ and $(-3)^2-3(-3)=9+9=18$ ✓"
      },
      {
        "kind": "example",
        "prompt": "Solve $x^2 = 25$.",
        "steps": [
          "Take the square root of both sides: $x = \\pm\\sqrt{25}$.",
          "Simplify: $x = \\pm 5$."
        ],
        "answer": "$x = 5$ or $x = -5$."
      },
      {
        "kind": "example",
        "prompt": "Solve $(x - 3)^2 = 16$.",
        "steps": [
          "Take the square root of both sides: $x - 3 = \\pm\\sqrt{16} = \\pm 4$.",
          "Add 3 to both sides: $x = 3 \\pm 4$.",
          "This gives two values: $x = 7$ or $x = -1$."
        ],
        "answer": "$x = 7$ or $x = -1$. Check: $(7-3)^2=16$ ✓ and $(-1-3)^2=16$ ✓"
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Factoring before moving everything to one side, e.g. factoring $x(x-3)=18$ as $x=18$ or $x-3=18$.",
            "right": "Rearrange to '... = 0' first: $x^2-3x-18=0$, then factor and apply the zero product property."
          },
          {
            "wrong": "Forgetting the negative root when using the square root method, e.g. writing $x^2=25 \\Rightarrow x=5$ only.",
            "right": "Both $5^2=25$ and $(-5)^2=25$, so the correct answer is $x=\\pm 5$."
          },
          {
            "wrong": "Claiming $x^2=-9$ has solutions $x=\\pm3$.",
            "right": "No real number squares to a negative number, so $x^2=-9$ has no real solution."
          },
          {
            "wrong": "Accepting a negative length or time as a valid final answer in a word problem.",
            "right": "Reject any root that doesn't make physical sense in context, even though it's a valid solution to the equation."
          },
          {
            "wrong": "Sign errors when finding factor pairs, e.g. using 6 and $-1$ for a trinomial needing product $-6$ and sum $-5$.",
            "right": "Double-check that the chosen numbers satisfy BOTH the product and the sum conditions before writing the factored form."
          },
          {
            "wrong": "Adding $b^2$ instead of $(b/2)^2$ when completing the square.",
            "right": "The value to add is half the x-coefficient, squared: $(b/2)^2$, not $b^2$."
          },
          {
            "wrong": "Forgetting to divide by $a$ first when completing the square on $ax^2+bx+c$ with $a \\neq 1$.",
            "right": "Divide every term by $a$ before completing the square, since the perfect-square pattern needs a leading coefficient of 1."
          },
          {
            "wrong": "Misidentifying $b$ as positive when the equation has a subtraction, e.g. reading $b=4$ from $x^2-4x-1=0$.",
            "right": "Include the sign: in $x^2-4x-1=0$, $b=-4$, not 4."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Solve $x^2 + 7x + 10 = 0$.",
            "options": [
              "$x=-2, x=-5$",
              "$x=2, x=5$",
              "$x=-2, x=5$",
              "$x=2, x=-5$"
            ],
            "answer": 0,
            "explanation": "$(x+2)(x+5)=0$, so $x=-2$ or $x=-5$."
          },
          {
            "prompt": "Solve $x^2 - 2x - 15 = 0$.",
            "options": [
              "$x=5, x=-3$",
              "$x=-5, x=3$",
              "$x=5, x=3$",
              "$x=-5, x=-3$"
            ],
            "answer": 0,
            "explanation": "$(x-5)(x+3)=0$, so $x=5$ or $x=-3$."
          },
          {
            "prompt": "Solve $x^2 = 49$.",
            "options": [
              "$x=\\pm 7$",
              "$x=7$ only",
              "$x=\\pm 24.5$",
              "No solution"
            ],
            "answer": 0,
            "explanation": "$x=\\pm\\sqrt{49}=\\pm 7$."
          },
          {
            "prompt": "Solve $(x+2)^2 = 9$.",
            "options": [
              "$x=1, x=-5$",
              "$x=1, x=5$",
              "$x=-1, x=-5$",
              "$x=7, x=-11$"
            ],
            "answer": 0,
            "explanation": "$x+2=\\pm 3$, so $x=1$ or $x=-5$."
          },
          {
            "prompt": "Solve $x^2 - 16 = 0$.",
            "options": [
              "$x=\\pm 4$",
              "$x=\\pm 8$",
              "$x=16$",
              "$x=-4$ only"
            ],
            "answer": 0,
            "explanation": "Difference of squares: $(x+4)(x-4)=0$, so $x=\\pm4$."
          },
          {
            "prompt": "Solve $x^2 + 9 = 0$.",
            "options": [
              "No real solution",
              "$x=\\pm3$",
              "$x=\\pm9$",
              "$x=-9$"
            ],
            "answer": 0,
            "explanation": "$x^2=-9$ has no real solution, since squares can't be negative."
          },
          {
            "prompt": "Solve $2x^2 - 5x - 3 = 0$.",
            "options": [
              "$x=3, x=-0.5$",
              "$x=-3, x=0.5$",
              "$x=3, x=0.5$",
              "$x=-3, x=-0.5$"
            ],
            "answer": 0,
            "explanation": "$(2x+1)(x-3)=0$, so $x=-0.5$ or $x=3$."
          },
          {
            "prompt": "A square photo frame has area 144 cm². Find its side length.",
            "options": [
              "12 cm",
              "24 cm",
              "72 cm",
              "14.4 cm"
            ],
            "answer": 0,
            "explanation": "$x^2=144 \\Rightarrow x=12$ (rejecting the negative root)."
          },
          {
            "prompt": "A rectangle's length is 3 cm more than its width, and its area is 40 cm². Find the width.",
            "options": [
              "5 cm",
              "8 cm",
              "3 cm",
              "13 cm"
            ],
            "answer": 0,
            "explanation": "$x(x+3)=40 \\Rightarrow x^2+3x-40=0 \\Rightarrow (x+8)(x-5)=0 \\Rightarrow x=5$ (rejecting $x=-8$)."
          },
          {
            "prompt": "What must be added to complete the square on $x^2 + 10x$?",
            "options": [
              "25",
              "10",
              "5",
              "100"
            ],
            "answer": 0,
            "explanation": "Half of 10 is 5, and $5^2=25$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Solve $x^2 + 8x + 15 = 0$.",
            "options": [
              "$x=-3, x=-5$",
              "$x=3, x=5$",
              "$x=-3, x=5$",
              "$x=3, x=-5$"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$(x+3)(x+5)=0$, so $x=-3$ or $x=-5$."
          },
          {
            "type": "mc",
            "prompt": "Solve $x^2 = 64$.",
            "options": [
              "$x=\\pm 8$",
              "$x=8$ only",
              "$x=\\pm 32$",
              "No solution"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$x=\\pm\\sqrt{64}=\\pm 8$."
          },
          {
            "type": "tf",
            "prompt": "The equation $x^2 + 1 = 0$ has a real solution.",
            "answer": false,
            "marks": 1,
            "explanation": "$x^2=-1$ has no real solution, since no real number squares to a negative value."
          },
          {
            "type": "mc",
            "prompt": "Solve $(x-1)^2 = 25$.",
            "options": [
              "$x=6, x=-4$",
              "$x=6, x=4$",
              "$x=-6, x=4$",
              "$x=26, x=-24$"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$x-1=\\pm5$, so $x=6$ or $x=-4$."
          },
          {
            "type": "mc",
            "prompt": "Solve $3x^2 - 12 = 0$.",
            "options": [
              "$x=\\pm 2$",
              "$x=\\pm 4$",
              "$x=\\pm 6$",
              "$x=2$ only"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$3x^2=12 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2$."
          },
          {
            "type": "matching",
            "prompt": "Match each equation to its solution set.",
            "left": [
              "$x^2-25=0$",
              "$x^2+4x+3=0$",
              "$x^2=9$",
              "$x^2+16=0$"
            ],
            "options": [
              "No real solution",
              "$x=\\pm 3$",
              "$x=-1,x=-3$",
              "$x=\\pm 5$"
            ],
            "answer": [
              3,
              2,
              1,
              0
            ],
            "marks": 4,
            "explanation": "Each equation solves via difference of squares, trinomial factoring, or the square-root method."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "A quadratic equation has standard form $ax^2+bx+c=0$ with $a \\neq 0$, and can have 0, 1 or 2 real solutions.",
          "The zero product property: if $pq=0$, then $p=0$ or $q=0$ — but only when one side is exactly zero.",
          "Solve by factoring: rearrange to zero, factor, apply the zero product property, solve each factor.",
          "Solve by square roots when a squared expression is isolated: take $\\pm\\sqrt{\\phantom{x}}$ of both sides.",
          "A negative value under the square root (after isolating $x^2$) means no real solution.",
          "In word problems, always check which root(s) make physical sense before giving a final answer.",
          "Completing the square: move the constant across, add $(b/2)^2$ to both sides, factor as a perfect square, then use the square root method.",
          "The quadratic formula $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ comes from completing the square on the general equation and solves any quadratic.",
          "The discriminant $b^2-4ac$ predicts the number of real roots without solving: positive gives two, zero gives one repeated, negative gives none.",
          "Factoring and square roots are often faster for simple equations; the quadratic formula always works as a reliable fallback."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "functions-and-graphs",
    "lessonSlug": "functions-and-graphs-mastery-review",
    "title": "Functions and Graphs Mastery Review",
    "objectives": [
      "Connect the main ideas across the Functions and Graphs chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Explain what a function is using the mapping and machine models.",
      "Identify the domain and range of a function.",
      "Read and use function notation, such as $f(x)$.",
      "Evaluate a function at a given input."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Functions and Graphs**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "What Is a Function?",
            "text": "Explain what a function is using the mapping and machine models."
          },
          {
            "title": "Composite and Inverse Functions",
            "text": "Compute the composition of two functions, $f(g(x))$."
          },
          {
            "title": "Families of Graphs",
            "text": "Recognise the characteristic shape of linear, quadratic, cubic and reciprocal graphs."
          },
          {
            "title": "Graph Transformations",
            "text": "Translate a graph horizontally and vertically."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "What Is a Function?",
            "A function assigns exactly one output to each allowed input.",
            "$f(x)$ means 'the output of function $f$ for input $x$' — it's notation, not multiplication."
          ],
          [
            "Composite and Inverse Functions",
            "$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$ — always work inside-out.",
            "Work from the inside out: in $g(f(x))$, evaluate $f$ first, then apply $g$ to that result."
          ],
          [
            "Families of Graphs",
            "Linear graphs are straight lines; quadratic graphs are parabolas with one turning point.",
            "Always identify which interval the input belongs to FIRST, then apply only that rule."
          ],
          [
            "Graph Transformations",
            "$f(x)+k$ shifts vertically; $f(x-h)$ shifts horizontally (note the reversed sign for $h$).",
            "$f(x-h)$ shifts RIGHT when $h$ is positive — the sign appears reversed from intuition."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the domain of $f(x) = \\dfrac{1}{x-3}$.",
        "steps": [
          "The expression is undefined whenever the denominator is zero.",
          "Set the denominator equal to zero: $x - 3 = 0 \\Rightarrow x = 3$.",
          "Every other real number is allowed."
        ],
        "answer": "Domain: all real numbers except $x = 3$."
      },
      {
        "kind": "example",
        "prompt": "Given $f(x) = 2x + 1$ and $g(x) = x - 3$, find $f(g(4))$.",
        "steps": [
          "Work from the inside out: first find $g(4) = 4 - 3 = 1$.",
          "Now apply $f$ to that result: $f(1) = 2(1) + 1 = 3$."
        ],
        "answer": "$f(g(4)) = 3$."
      },
      {
        "kind": "example",
        "prompt": "Sketch $y = |x - 2|$ by finding its value at $x=-1, 0, 2, 4, 5$.",
        "steps": [
          "$x=-1$: $y=|-1-2|=|-3|=3$.",
          "$x=0$: $y=|0-2|=|-2|=2$.",
          "$x=2$: $y=|2-2|=|0|=0$.",
          "$x=4$: $y=|4-2|=|2|=2$.",
          "$x=5$: $y=|5-2|=|3|=3$."
        ],
        "answer": "The graph is a V-shape with its corner (vertex) at $(2, 0)$ — the whole $y=|x|$ shape shifted 2 units right."
      },
      {
        "kind": "example",
        "prompt": "Describe the transformation from $y=x^2$ to $y=(x-4)^2+2$.",
        "steps": [
          "The $-4$ inside the brackets shifts the graph 4 units to the right.",
          "The $+2$ outside shifts the graph 2 units up."
        ],
        "answer": "The graph of $y=x^2$ is translated 4 units right and 2 units up."
      },
      {
        "kind": "example",
        "prompt": "Find the domain of $g(x) = \\sqrt{x - 4}$.",
        "steps": [
          "A square root requires a non-negative value underneath it.",
          "Set up the inequality: $x - 4 \\ge 0$.",
          "Solve: $x \\ge 4$."
        ],
        "answer": "Domain: $x \\ge 4$."
      },
      {
        "kind": "example",
        "prompt": "Given $f(x) = 3x^2 - 2x + 1$, find $f(2)$ and $f(-1)$.",
        "steps": [
          "Substitute $x=2$: $f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$.",
          "Substitute $x=-1$: $f(-1) = 3(-1)^2 - 2(-1) + 1 = 3 + 2 + 1 = 6$."
        ],
        "answer": "$f(2) = 9$ and $f(-1) = 6$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Reading $f(x)$ as $f$ multiplied by $x$.",
            "right": "$f(x)$ means 'the output of function $f$ for input $x$' — it's notation, not multiplication."
          },
          {
            "wrong": "Concluding a relation isn't a function because two different inputs share an output.",
            "right": "That's allowed. Only one input producing two different outputs breaks the function rule."
          },
          {
            "wrong": "Forgetting to exclude values that make a denominator zero when stating a domain.",
            "right": "Always check for denominators (and square roots of negatives) before stating the domain."
          },
          {
            "wrong": "Applying the vertical line test with a horizontal line instead of a vertical one.",
            "right": "The test specifically uses VERTICAL lines, since we're checking for repeated outputs at a single x-value."
          },
          {
            "wrong": "Confusing domain (inputs) with range (outputs).",
            "right": "Domain is what goes IN; range is what comes OUT."
          },
          {
            "wrong": "Computing $g(x)$ first when asked for $g(f(x))$ instead of $f(x)$ first.",
            "right": "Work from the inside out: in $g(f(x))$, evaluate $f$ first, then apply $g$ to that result."
          },
          {
            "wrong": "Assuming $f(g(x))$ always equals $g(f(x))$.",
            "right": "Composition is generally not commutative — always compute each order separately unless told otherwise."
          },
          {
            "wrong": "Writing $f^{-1}(x)$ as $\\dfrac{1}{f(x)}$.",
            "right": "$f^{-1}$ is a completely different function — the notation means 'inverse', not 'reciprocal'."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which relationship describes a function?",
            "options": [
              "Every input has exactly one output",
              "Every output has exactly one input",
              "Inputs and outputs must both be positive",
              "There must be the same number of inputs and outputs"
            ],
            "answer": 0,
            "explanation": "A function requires exactly one output per input; multiple inputs sharing an output is fine."
          },
          {
            "prompt": "Given $f(x) = 4x - 5$, find $f(3)$.",
            "options": [
              "7",
              "12",
              "-5",
              "3"
            ],
            "answer": 0,
            "explanation": "$f(3) = 4(3)-5 = 12-5=7$."
          },
          {
            "prompt": "Given $g(x) = x^2 + 1$, find $g(-2)$.",
            "options": [
              "5",
              "-3",
              "3",
              "-5"
            ],
            "answer": 0,
            "explanation": "$g(-2) = (-2)^2+1 = 4+1=5$."
          },
          {
            "prompt": "Find the domain of $h(x) = \\dfrac{2}{x+5}$.",
            "options": [
              "All reals except $x=-5$",
              "All reals except $x=5$",
              "$x \\ge -5$",
              "All real numbers"
            ],
            "answer": 0,
            "explanation": "The denominator is zero when $x=-5$, which must be excluded."
          },
          {
            "prompt": "Find the domain of $k(x) = \\sqrt{x+7}$.",
            "options": [
              "$x \\ge -7$",
              "$x \\le -7$",
              "$x \\ge 7$",
              "All real numbers"
            ],
            "answer": 0,
            "explanation": "Requires $x+7 \\ge 0 \\Rightarrow x \\ge -7$."
          },
          {
            "prompt": "A circle graph fails the vertical line test. What does this mean?",
            "options": [
              "It does not represent y as a function of x",
              "It has no domain",
              "It has no range",
              "It is not a valid graph"
            ],
            "answer": 0,
            "explanation": "A vertical line crosses a circle twice at most x-values, so it fails the test."
          },
          {
            "prompt": "Given $f(x) = 2x^2 - 3x$, find $f(0)$.",
            "options": [
              "0",
              "-3",
              "2",
              "Undefined"
            ],
            "answer": 0,
            "explanation": "$f(0) = 2(0)^2-3(0)=0$."
          },
          {
            "prompt": "Which of these could be a function's mapping: {(1,2), (2,4), (1,5)} or {(1,2), (2,4), (3,5)}?",
            "options": [
              "{(1,2), (2,4), (3,5)} only",
              "{(1,2), (2,4), (1,5)} only",
              "Both",
              "Neither"
            ],
            "answer": 0,
            "explanation": "The first set repeats input 1 with two different outputs (2 and 5), so it's not a function; the second set has one output per input."
          },
          {
            "prompt": "Given $f(x)=x+5$ and $g(x)=2x$, find $f(g(3))$.",
            "options": [
              "11",
              "16",
              "6",
              "13"
            ],
            "answer": 0,
            "explanation": "$g(3)=6$, then $f(6)=6+5=11$."
          },
          {
            "prompt": "Given $f(x)=x+5$ and $g(x)=2x$, find $g(f(3))$.",
            "options": [
              "16",
              "11",
              "8",
              "13"
            ],
            "answer": 0,
            "explanation": "$f(3)=8$, then $g(8)=16$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Given $f(x) = 5x + 2$, find $f(4)$.",
            "options": [
              "22",
              "20",
              "9",
              "7"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$f(4)=5(4)+2=22$."
          },
          {
            "type": "mc",
            "prompt": "Find the domain of $f(x) = \\dfrac{3}{x-6}$.",
            "options": [
              "All reals except $x=6$",
              "All reals except $x=-6$",
              "$x \\ge 6$",
              "All real numbers"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "The denominator is zero at $x=6$."
          },
          {
            "type": "tf",
            "prompt": "A function can send two different inputs to the same output.",
            "answer": true,
            "marks": 1,
            "explanation": "This is allowed — the restriction is only on one input producing two outputs."
          },
          {
            "type": "mc",
            "prompt": "Given $g(x) = x^2 - 4x$, find $g(3)$.",
            "options": [
              "-3",
              "3",
              "-12",
              "21"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$g(3) = 9-12=-3$."
          },
          {
            "type": "mc",
            "prompt": "Which graph passes the vertical line test?",
            "options": [
              "A parabola opening upward",
              "A circle",
              "A sideways parabola $x=y^2$",
              "An ellipse"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "A standard parabola $y=ax^2+bx+c$ passes the test; the others do not."
          },
          {
            "type": "matching",
            "prompt": "Match each function to the correct domain.",
            "left": [
              "$f(x)=\\dfrac{1}{x}$",
              "$f(x)=\\sqrt{x}$",
              "$f(x)=x^2$",
              "$f(x)=\\dfrac{1}{x+2}$"
            ],
            "options": [
              "All reals except $x=-2$",
              "All real numbers",
              "$x \\ge 0$",
              "All reals except $x=0$"
            ],
            "answer": [
              3,
              2,
              1,
              0
            ],
            "marks": 4,
            "explanation": "Domains exclude values that cause division by zero or a negative under a square root."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "A function assigns exactly one output to each allowed input.",
          "The domain is the set of allowed inputs; the range is the set of resulting outputs.",
          "Function notation $f(x)$ names the output for input $x$; evaluate by substitution.",
          "The vertical line test: if any vertical line crosses a graph more than once, it is not a function.",
          "Two different inputs sharing an output is fine; one input with two outputs is not.",
          "$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$ — always work inside-out.",
          "Composition is generally not commutative: $f(g(x)) \\neq g(f(x))$ in general.",
          "A function is invertible if it passes the horizontal line test.",
          "Find an inverse by replacing $f(x)$ with $y$, swapping $x$ and $y$, and solving for $y$.",
          "Verify an inverse by checking $f(f^{-1}(x))=x$ (or the other order)."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "exponentials-and-logarithms",
    "lessonSlug": "exponentials-and-logarithms-mastery-review",
    "title": "Exponentials and Logarithms Mastery Review",
    "objectives": [
      "Connect the main ideas across the Exponentials and Logarithms chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Recognise and write exponential functions in the form $y = a \\cdot b^t$.",
      "Distinguish exponential growth ($b>1$) from exponential decay ($0<b<1$).",
      "Apply the compound interest formula to real financial situations.",
      "Understand how compounding frequency affects growth."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Exponentials and Logarithms**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Exponential Growth and Decay",
            "text": "Recognise and write exponential functions in the form $y = a \\cdot b^t$."
          },
          {
            "title": "Logarithms and Their Laws",
            "text": "Define a logarithm as the inverse of exponentiation."
          },
          {
            "title": "Exponential and Logarithmic Equations",
            "text": "Solve exponential equations by matching bases."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Exponential Growth and Decay",
            "An exponential function has the form $y = a \\cdot b^t$: $a$ is the starting value, $b$ is the growth/decay factor.",
            "The growth factor is $1$ plus the growth rate as a decimal: 8% growth gives $b=1.08$, not $b=0.08$."
          ],
          [
            "Logarithms and Their Laws",
            "$\\log_b(x) = y$ means $b^y = x$ — a logarithm is an exponent in disguise.",
            "The product law applies to MULTIPLICATION inside the log: $\\log(mn) = \\log(m)+\\log(n)$. There is no simple rule for $\\log(m+n)$."
          ],
          [
            "Exponential and Logarithmic Equations",
            "Match bases when possible: if $b^m=b^n$, then $m=n$.",
            "Substitute every solution back into the ORIGINAL logs — reject any that make a log's argument zero or negative."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "A bacteria colony starts with 200 cells and triples every hour. Write a function for the population after $t$ hours, and find the population after 4 hours.",
        "steps": [
          "Starting value $a=200$; growth factor $b=3$ (tripling).",
          "Function: $P(t) = 200 \\cdot 3^t$.",
          "Substitute $t=4$: $P(4) = 200 \\cdot 3^4 = 200 \\cdot 81 = 16{,}200$."
        ],
        "answer": "$P(t) = 200 \\cdot 3^t$; after 4 hours, there are 16,200 cells."
      },
      {
        "kind": "example",
        "prompt": "Convert $2^5 = 32$ into logarithmic form, and evaluate $\\log_5(125)$ by converting to exponential form first.",
        "steps": [
          "For $2^5=32$: the base is 2, the exponent is 5, so $\\log_2(32) = 5$.",
          "For $\\log_5(125)$: this asks 'to what power must 5 be raised to get 125?' Since $5^3=125$, the answer is 3."
        ],
        "answer": "$\\log_2(32)=5$ and $\\log_5(125)=3$."
      },
      {
        "kind": "example",
        "prompt": "Solve $4^x = 64$.",
        "steps": [
          "Rewrite both sides with base 2 (or notice 64 as a power of 4 directly): $64 = 4^3$.",
          "Now the bases match: $4^x = 4^3$.",
          "Since the bases are equal, the exponents are equal: $x = 3$."
        ],
        "answer": "$x = 3$."
      },
      {
        "kind": "example",
        "prompt": "A car worth ₹20,000 depreciates by 15% per year. Write a function for its value after $t$ years, and find its value after 5 years.",
        "steps": [
          "Starting value $a=20{,}000$; decay rate 15% means $b = 1 - 0.15 = 0.85$.",
          "Function: $V(t) = 20{,}000 \\cdot 0.85^t$.",
          "Substitute $t=5$: $V(5) = 20{,}000 \\cdot 0.85^5 \\approx 20{,}000 \\times 0.4437 \\approx 8{,}874$."
        ],
        "answer": "$V(t) = 20{,}000 \\cdot 0.85^t$; after 5 years, the car is worth approximately ₹8,874."
      },
      {
        "kind": "example",
        "prompt": "₹1,000 is invested at 6% annual interest, compounded monthly, for 3 years. Find the final amount.",
        "steps": [
          "Identify values: $P=1000$, $r=0.06$, $n=12$, $t=3$.",
          "Substitute: $A = 1000\\left(1+\\dfrac{0.06}{12}\\right)^{12 \\times 3} = 1000(1.005)^{36}$.",
          "Evaluate: $A \\approx 1000 \\times 1.1967 \\approx 1{,}196.68$."
        ],
        "answer": "The investment grows to approximately ₹1,196.68."
      },
      {
        "kind": "example",
        "prompt": "₹1,000 is invested at 6% annual interest, compounded continuously, for 3 years. Compare this to the monthly compounding result above.",
        "steps": [
          "Substitute into the continuous formula: $A = 1000 \\cdot e^{0.06 \\times 3} = 1000 \\cdot e^{0.18}$.",
          "Evaluate: $A \\approx 1000 \\times 1.1972 \\approx 1{,}197.22$."
        ],
        "answer": "Continuous compounding gives approximately ₹1,197.22 — only slightly more than the ₹1,196.68 from monthly compounding, showing that more frequent compounding has diminishing extra benefit."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $b = r$ directly instead of $b = 1+r$ for growth.",
            "right": "The growth factor is $1$ plus the growth rate as a decimal: 8% growth gives $b=1.08$, not $b=0.08$."
          },
          {
            "wrong": "Using $b = 1+r$ for decay instead of $b=1-r$.",
            "right": "For decay, subtract the rate: a 20% decay rate gives $b=1-0.20=0.8$."
          },
          {
            "wrong": "Forgetting to convert the annual rate to a decimal before substituting into the compound interest formula.",
            "right": "5% must be entered as 0.05, not 5, in the formula $A=P(1+r/n)^{nt}$."
          },
          {
            "wrong": "Using the wrong exponent in the compound interest formula, e.g. using just $t$ instead of $nt$.",
            "right": "The exponent must be the TOTAL number of compounding periods: $n \\times t$, not just $t$."
          },
          {
            "wrong": "Confusing $e$ with a variable rather than a fixed constant.",
            "right": "$e$ is a specific irrational number, approximately 2.71828, not a variable to solve for."
          },
          {
            "wrong": "Applying the product law to a sum, e.g. writing $\\log(m+n) = \\log(m)+\\log(n)$.",
            "right": "The product law applies to MULTIPLICATION inside the log: $\\log(mn) = \\log(m)+\\log(n)$. There is no simple rule for $\\log(m+n)$."
          },
          {
            "wrong": "Forgetting to distribute the exponent to the whole base of the power law, e.g. treating $\\log(2 \\cdot 3^4)$ as $4\\log(2 \\cdot 3)$.",
            "right": "The power law only applies to the entire logged quantity being raised to a power: $\\log(3^4) = 4\\log(3)$, but $2 \\cdot 3^4$ needs the product and power laws combined carefully."
          },
          {
            "wrong": "Assuming $\\log(x)$ with no base means base $e$.",
            "right": "No base written conventionally means base 10; $\\ln(x)$ is the specific notation for base $e$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Is $y = 50 \\cdot 1.1^t$ growth or decay?",
            "options": [
              "Growth",
              "Decay",
              "Neither",
              "Cannot be determined"
            ],
            "answer": 0,
            "explanation": "$b=1.1>1$, so this is growth."
          },
          {
            "prompt": "Is $y = 300 \\cdot 0.7^t$ growth or decay?",
            "options": [
              "Decay",
              "Growth",
              "Neither",
              "Cannot be determined"
            ],
            "answer": 0,
            "explanation": "$b=0.7$, which is between 0 and 1, so this is decay."
          },
          {
            "prompt": "A population starts at 500 and grows by 8% per year. What is the growth factor $b$?",
            "options": [
              "1.08",
              "0.92",
              "8",
              "1.8"
            ],
            "answer": 0,
            "explanation": "8% growth means $b=1+0.08=1.08$."
          },
          {
            "prompt": "Using $P(t)=500(1.08)^t$, find the population after 3 years (to the nearest whole number).",
            "options": [
              "630",
              "540",
              "610",
              "650"
            ],
            "answer": 0,
            "explanation": "$500 \\times 1.08^3 \\approx 629.86 \\approx 630$."
          },
          {
            "prompt": "A substance decays by 20% per hour, starting at 100 g. What is the decay factor?",
            "options": [
              "0.8",
              "1.2",
              "0.2",
              "20"
            ],
            "answer": 0,
            "explanation": "20% decay means $b=1-0.20=0.8$."
          },
          {
            "prompt": "₹800 is invested at 5% annual interest, compounded annually, for 2 years. Find the amount (to the nearest rupee).",
            "options": [
              "882",
              "840",
              "800",
              "900"
            ],
            "answer": 0,
            "explanation": "$A=800(1.05)^2 \\approx 882$."
          },
          {
            "prompt": "Which formula uses the number e?",
            "options": [
              "Continuous compounding",
              "Annual compounding",
              "Simple interest",
              "None of these"
            ],
            "answer": 0,
            "explanation": "$A=Pe^{rt}$ is the continuous compounding formula."
          },
          {
            "prompt": "What happens to the compound amount as compounding frequency n increases (with fixed rate and time)?",
            "options": [
              "It increases, approaching continuous compounding",
              "It decreases",
              "It stays exactly the same",
              "It becomes negative"
            ],
            "answer": 0,
            "explanation": "More frequent compounding increases the amount slightly, approaching the continuous-compounding limit."
          },
          {
            "prompt": "Convert $3^4 = 81$ into logarithmic form.",
            "options": [
              "$\\log_3(81)=4$",
              "$\\log_4(81)=3$",
              "$\\log_{81}(3)=4$",
              "$\\log_3(4)=81$"
            ],
            "answer": 0,
            "explanation": "Base 3, exponent 4, result 81."
          },
          {
            "prompt": "Evaluate $\\log_2(16)$.",
            "options": [
              "4",
              "8",
              "2",
              "16"
            ],
            "answer": 0,
            "explanation": "$2^4=16$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Is $y = 20 \\cdot 2^t$ growth or decay?",
            "options": [
              "Growth",
              "Decay",
              "Neither",
              "Cannot be determined"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$b=2>1$, so this is growth."
          },
          {
            "type": "mc",
            "prompt": "A population of 1,000 grows by 4% per year. What is the growth factor?",
            "options": [
              "1.04",
              "0.96",
              "4",
              "104"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "4% growth gives $b=1.04$."
          },
          {
            "type": "tf",
            "prompt": "In $y=a \\cdot b^t$, a decay factor $b$ must be greater than 1.",
            "answer": false,
            "marks": 1,
            "explanation": "A decay factor must satisfy $0<b<1$."
          },
          {
            "type": "mc",
            "prompt": "Using $P(t)=1000(1.04)^t$, find the population after 5 years (to the nearest whole number).",
            "options": [
              "1217",
              "1200",
              "1050",
              "1400"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$1000 \\times 1.04^5 \\approx 1216.65 \\approx 1217$."
          },
          {
            "type": "mc",
            "prompt": "₹600 is invested at 4% annual interest, compounded annually, for 3 years. Find the amount (nearest rupee).",
            "options": [
              "675",
              "672",
              "600",
              "700"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$A=600(1.04)^3 \\approx 674.90 \\approx 675$."
          },
          {
            "type": "matching",
            "prompt": "Match each scenario to its correct growth/decay factor.",
            "left": [
              "12% growth",
              "12% decay",
              "50% growth",
              "50% decay"
            ],
            "options": [
              "1.5",
              "0.5",
              "1.12",
              "0.88"
            ],
            "answer": [
              2,
              3,
              0,
              1
            ],
            "marks": 4,
            "explanation": "Growth uses $1+r$; decay uses $1-r$, with $r$ as a decimal."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "An exponential function has the form $y = a \\cdot b^t$: $a$ is the starting value, $b$ is the growth/decay factor.",
          "$b>1$ means growth; $0<b<1$ means decay.",
          "A growth rate $r$ gives $b=1+r$; a decay rate $r$ gives $b=1-r$.",
          "Compound interest: $A = P(1+r/n)^{nt}$, where $n$ is compounds per year.",
          "As compounding frequency increases without bound, the formula approaches continuous compounding: $A=Pe^{rt}$.",
          "Exponential models describe population growth, radioactive decay, investment growth, and many natural processes.",
          "$\\log_b(x) = y$ means $b^y = x$ — a logarithm is an exponent in disguise.",
          "Product law: $\\log_b(mn) = \\log_b(m)+\\log_b(n)$.",
          "Quotient law: $\\log_b(m/n) = \\log_b(m)-\\log_b(n)$.",
          "Power law: $\\log_b(m^n) = n\\log_b(m)$."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "sequences-and-series",
    "lessonSlug": "sequences-and-series-mastery-review",
    "title": "Sequences and Series Mastery Review",
    "objectives": [
      "Connect the main ideas across the Sequences and Series chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Identify an arithmetic sequence and its common difference.",
      "Find the nth term of an arithmetic sequence using a formula.",
      "Find the sum of the first n terms of an arithmetic series.",
      "Explain and apply Gauss's trick for summing an arithmetic series."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Sequences and Series**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Arithmetic Sequences and Series",
            "text": "Identify an arithmetic sequence and its common difference."
          },
          {
            "title": "Geometric Sequences and Series",
            "text": "Identify a geometric sequence and its common ratio."
          },
          {
            "title": "Recursive and Special Sequences",
            "text": "Define a sequence using a recurrence relation."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Arithmetic Sequences and Series",
            "An arithmetic sequence adds a constant common difference $d$ between terms.",
            "The formula uses $(n-1)$ additions, since the first term needs zero: $a_{12}=7+(12-1)(4)$."
          ],
          [
            "Geometric Sequences and Series",
            "A geometric sequence multiplies by a constant common ratio $r$ between terms.",
            "The exponent is $(n-1)$: $a_7=5\\times2^{7-1}=5\\times2^6$."
          ],
          [
            "Recursive and Special Sequences",
            "A recurrence relation defines each term using previous terms, plus starting values.",
            "Recursive sequences generally must be computed step by step from the start — there's no shortcut without a separate closed-form formula."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Is $5, 9, 13, 17, 21, \\ldots$ an arithmetic sequence? If so, find the common difference.",
        "steps": [
          "Check consecutive differences: $9-5=4$, $13-9=4$, $17-13=4$, $21-17=4$.",
          "Every difference is the same, 4."
        ],
        "answer": "Yes, this is arithmetic with common difference $d=4$."
      },
      {
        "kind": "example",
        "prompt": "Is $3, 6, 12, 24, 48, \\ldots$ a geometric sequence? If so, find the common ratio.",
        "steps": [
          "Check consecutive ratios: $6\\div3=2$, $12\\div6=2$, $24\\div12=2$, $48\\div24=2$.",
          "Every ratio is the same, 2."
        ],
        "answer": "Yes, this is geometric with common ratio $r=2$."
      },
      {
        "kind": "example",
        "prompt": "A sequence is defined by $a_1 = 3$ and $a_n = 2a_{n-1} + 1$ for $n > 1$. Find the first 5 terms.",
        "steps": [
          "$a_1 = 3$ (given).",
          "$a_2 = 2a_1+1 = 2(3)+1=7$.",
          "$a_3 = 2a_2+1 = 2(7)+1=15$.",
          "$a_4 = 2a_3+1 = 2(15)+1=31$.",
          "$a_5 = 2a_4+1 = 2(31)+1=63$."
        ],
        "answer": "$3, 7, 15, 31, 63$."
      },
      {
        "kind": "example",
        "prompt": "Find the 12th term of the arithmetic sequence $7, 11, 15, 19, \\ldots$.",
        "steps": [
          "Identify $a_1=7$ and $d=4$ (each term increases by 4).",
          "Substitute into the formula: $a_{12} = 7 + (12-1)(4)$.",
          "Simplify: $a_{12} = 7 + 44 = 51$."
        ],
        "answer": "$a_{12} = 51$."
      },
      {
        "kind": "example",
        "prompt": "An arithmetic sequence has $a_1=10$ and $a_8=45$. Find the common difference.",
        "steps": [
          "Substitute into the nth-term formula: $45 = 10 + (8-1)d$.",
          "Simplify: $45 = 10 + 7d$.",
          "Solve: $35 = 7d \\Rightarrow d = 5$."
        ],
        "answer": "$d = 5$."
      },
      {
        "kind": "example",
        "prompt": "Use Gauss's trick to find $1 + 2 + 3 + \\cdots + 100$.",
        "steps": [
          "Identify $a_1=1$, $a_{100}=100$, $n=100$.",
          "Apply the sum formula: $S_{100} = \\dfrac{100}{2}(1+100)$.",
          "Simplify: $S_{100} = 50 \\times 101 = 5050$."
        ],
        "answer": "$S_{100} = 5050$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $n$ instead of $(n-1)$ in the nth-term formula, e.g. computing $a_{12}=7+12(4)$.",
            "right": "The formula uses $(n-1)$ additions, since the first term needs zero: $a_{12}=7+(12-1)(4)$."
          },
          {
            "wrong": "Forgetting the $n/2$ factor in the sum formula and just adding $a_1+a_n$.",
            "right": "The sum needs the number of pairs too: $S_n = \\dfrac{n}{2}(a_1+a_n)$."
          },
          {
            "wrong": "Assuming every sequence is arithmetic without checking that the difference is constant.",
            "right": "Verify the difference is the same between every consecutive pair before applying arithmetic formulas."
          },
          {
            "wrong": "Mixing up which term is $a_1$ and which is $a_n$ when a sequence is decreasing.",
            "right": "$a_1$ is always the first term listed, even if $d$ is negative — the formulas work the same way."
          },
          {
            "wrong": "Using the sum formula for a general (non-arithmetic) sequence.",
            "right": "These formulas apply ONLY to arithmetic sequences, where the difference between consecutive terms is constant."
          },
          {
            "wrong": "Using $n$ instead of $(n-1)$ in the nth-term formula, e.g. $a_7=5\\times2^7$.",
            "right": "The exponent is $(n-1)$: $a_7=5\\times2^{7-1}=5\\times2^6$."
          },
          {
            "wrong": "Applying the infinite sum formula when $|r| \\ge 1$.",
            "right": "The infinite sum only exists when $|r|<1$; otherwise the series diverges and has no finite sum."
          },
          {
            "wrong": "Confusing a geometric sequence's common ratio with an arithmetic sequence's common difference.",
            "right": "Geometric sequences MULTIPLY by $r$; arithmetic sequences ADD $d$. Check by dividing consecutive terms, not subtracting."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Find the common difference of $4, 10, 16, 22, \\ldots$.",
            "options": [
              "6",
              "4",
              "5",
              "8"
            ],
            "answer": 0,
            "explanation": "$10-4=6$."
          },
          {
            "prompt": "Find the 10th term of the sequence $2, 5, 8, 11, \\ldots$.",
            "options": [
              "29",
              "26",
              "32",
              "23"
            ],
            "answer": 0,
            "explanation": "$a_{10}=2+(9)(3)=29$."
          },
          {
            "prompt": "An arithmetic sequence has $a_1=6$ and $d=4$. Find $a_{15}$.",
            "options": [
              "62",
              "58",
              "66",
              "54"
            ],
            "answer": 0,
            "explanation": "$a_{15}=6+(14)(4)=62$."
          },
          {
            "prompt": "An arithmetic sequence has $a_1=3$ and $a_6=23$. Find $d$.",
            "options": [
              "4",
              "5",
              "3",
              "6"
            ],
            "answer": 0,
            "explanation": "$23=3+5d \\Rightarrow 20=5d \\Rightarrow d=4$."
          },
          {
            "prompt": "Find the sum of $1+2+3+\\cdots+50$.",
            "options": [
              "1275",
              "1250",
              "2550",
              "1225"
            ],
            "answer": 0,
            "explanation": "$S_{50}=\\dfrac{50}{2}(1+50)=25\\times51=1275$."
          },
          {
            "prompt": "Find the sum of the first 10 terms of $5, 9, 13, 17, \\ldots$.",
            "options": [
              "230",
              "220",
              "225",
              "240"
            ],
            "answer": 0,
            "explanation": "$S_{10}=\\dfrac{10}{2}(2(5)+9(4))=5\\times46=230$."
          },
          {
            "prompt": "A stack of logs has 25 logs on the bottom row, decreasing by 2 per row, for 8 rows. Find the total.",
            "options": [
              "144",
              "152",
              "136",
              "160"
            ],
            "answer": 0,
            "explanation": "$a_1=25,d=-2,n=8$: $S_8=\\dfrac{8}{2}(2(25)+7(-2))=4\\times36=144$."
          },
          {
            "prompt": "An arithmetic sequence has $a_1=8$ and $a_{10}=53$. Find the sum of the first 10 terms.",
            "options": [
              "305",
              "300",
              "310",
              "295"
            ],
            "answer": 0,
            "explanation": "$S_{10}=\\dfrac{10}{2}(8+53)=5\\times61=305$."
          },
          {
            "prompt": "Find the common ratio of $4, 12, 36, 108, \\ldots$.",
            "options": [
              "3",
              "4",
              "2",
              "8"
            ],
            "answer": 0,
            "explanation": "$12\\div4=3$."
          },
          {
            "prompt": "Find the 6th term of $2, 6, 18, 54, \\ldots$.",
            "options": [
              "486",
              "324",
              "162",
              "648"
            ],
            "answer": 0,
            "explanation": "$a_6=2\\times3^5=2\\times243=486$."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Find the common difference of $9, 15, 21, 27, \\ldots$.",
            "options": [
              "6",
              "5",
              "9",
              "3"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$15-9=6$."
          },
          {
            "type": "mc",
            "prompt": "Find the 8th term of $3, 7, 11, 15, \\ldots$.",
            "options": [
              "31",
              "28",
              "34",
              "27"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "$a_8=3+(7)(4)=31$."
          },
          {
            "type": "tf",
            "prompt": "The nth term formula for an arithmetic sequence is $a_n = a_1 + nd$.",
            "answer": false,
            "marks": 1,
            "explanation": "The correct formula uses $(n-1)$, not $n$: $a_n=a_1+(n-1)d$."
          },
          {
            "type": "mc",
            "prompt": "An arithmetic sequence has $a_1=5$ and $a_9=45$. Find $d$.",
            "options": [
              "5",
              "4",
              "6",
              "10"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$45=5+8d \\Rightarrow 40=8d \\Rightarrow d=5$."
          },
          {
            "type": "mc",
            "prompt": "Find the sum $1+2+3+\\cdots+60$.",
            "options": [
              "1830",
              "1800",
              "3660",
              "1770"
            ],
            "answer": 0,
            "marks": 2,
            "explanation": "$S_{60}=\\dfrac{60}{2}(1+60)=30\\times61=1830$."
          },
          {
            "type": "matching",
            "prompt": "Match each formula to its use.",
            "left": [
              "$a_n=a_1+(n-1)d$",
              "$S_n=\\dfrac{n}{2}(a_1+a_n)$",
              "$d = a_2-a_1$",
              "$S_n=\\dfrac{n}{2}(2a_1+(n-1)d)$"
            ],
            "options": [
              "Sum using first and last term",
              "Finding the common difference",
              "Finding a specific term",
              "Sum using d instead of the last term"
            ],
            "answer": [
              2,
              0,
              1,
              3
            ],
            "marks": 4,
            "explanation": "Each formula serves a distinct purpose in working with arithmetic sequences."
          }
        ],
        "passMark": 7
      },
      {
        "kind": "summary",
        "points": [
          "An arithmetic sequence adds a constant common difference $d$ between terms.",
          "nth term: $a_n = a_1+(n-1)d$.",
          "Sum of n terms: $S_n=\\dfrac{n}{2}(a_1+a_n) = \\dfrac{n}{2}(2a_1+(n-1)d)$.",
          "Gauss's trick: pairing terms from opposite ends of the series always gives equal pair sums.",
          "Arithmetic sequences model steady, constant-amount change in savings, seating, stacking and scheduling.",
          "A geometric sequence multiplies by a constant common ratio $r$ between terms.",
          "nth term: $a_n = a_1 \\cdot r^{n-1}$.",
          "Sum of n terms: $S_n = \\dfrac{a_1(1-r^n)}{1-r}$ (for $r \\neq 1$).",
          "An infinite geometric series converges only when $|r|<1$, with sum $S_\\infty=\\dfrac{a_1}{1-r}$.",
          "Recurring decimals can be written as infinite geometric series and converted to exact fractions."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "foundations-of-trigonometry-mastery-review",
    "title": "Foundations of Trigonometry Mastery Review",
    "objectives": [
      "Connect the main ideas across the Foundations of Trigonometry chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Interpret an angle as directed rotation between two rays",
      "Measure angles in revolutions, degrees, and radians",
      "Convert exactly between degrees and radians",
      "Identify complementary, supplementary, coterminal, and quadrantal angles"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Foundations of Trigonometry**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Degree and Radian Measure of Angles",
            "text": "Interpret an angle as directed rotation between two rays"
          },
          {
            "title": "Sine, Cosine and Tangent",
            "text": "Name the sides of a right triangle relative to an angle"
          },
          {
            "title": "Right Triangle Trigonometry",
            "text": "Define sine, cosine, and tangent as right-triangle ratios"
          },
          {
            "title": "Angles of Elevation and Depression",
            "text": "Distinguish angles of elevation and depression"
          },
          {
            "title": "Radians and the Unit Circle",
            "text": "Define the unit circle and radian measure"
          },
          {
            "title": "The Unit Circle",
            "text": "Connect real numbers, oriented arcs, and angles on the unit circle"
          },
          {
            "title": "The Six Trigonometric Functions",
            "text": "Define all six trigonometric functions from coordinates"
          },
          {
            "title": "Foundational Trigonometric Identities",
            "text": "Distinguish an identity from an equation true only for selected inputs"
          },
          {
            "title": "Beyond the Unit Circle",
            "text": "Define trigonometric functions using any point on a terminal side"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "angle-measure"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Degree and Radian Measure of Angles",
            "One revolution is $360^\\circ=2\\pi$ radians.",
            "Degrees to radians uses $\\pi/180$; radians to degrees uses $180/\\pi$."
          ],
          [
            "Sine, Cosine and Tangent",
            "Name the sides relative to the chosen angle θ: opposite, adjacent, hypotenuse.",
            "Fix the angle θ first: the opposite is across from it, the adjacent is beside it."
          ],
          [
            "Right Triangle Trigonometry",
            "Sine, cosine, and tangent are invariant ratios in similar right triangles.",
            "The hypotenuse is opposite the $90^\\circ$ angle and is the longest side."
          ],
          [
            "Angles of Elevation and Depression",
            "Angles of elevation and depression are measured from the horizontal.",
            "Both angles are measured from the horizontal: elevation looks up, depression looks down."
          ],
          [
            "Radians and the Unit Circle",
            "A radian is the angle whose arc equals the radius; $360° = 2\\pi$ rad.",
            "Always reduce: $\\frac{150\\pi}{180} = \\frac{5\\pi}{6}$, not $\\frac{150\\pi}{180}$."
          ],
          [
            "The Unit Circle",
            "The unit circle defines sine and cosine for every real angle.",
            "The order is $(x,y)=(\\cos\\theta,\\sin\\theta)$."
          ],
          [
            "The Six Trigonometric Functions",
            "All six functions can be defined from a unit-circle point.",
            "Simplify exact values consistently, for example $1/(\\sqrt2/2)=\\sqrt2$."
          ],
          [
            "Foundational Trigonometric Identities",
            "Identities are equations valid throughout a common domain.",
            "Numerical checks can detect errors, but an identity requires symbolic verification."
          ],
          [
            "Beyond the Unit Circle",
            "Any nonzero terminal-side point defines the same trigonometric ratios as its normalized unit-circle point.",
            "The radius is the Euclidean distance $\\sqrt{x^2+y^2}$."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Convert $225^\\circ$ to radians.",
        "steps": [
          "Multiply by $\\pi/180$: $225(\\pi/180)$.",
          "Reduce $225/180$ to $5/4$."
        ],
        "answer": "$225^\\circ=\\frac{5\\pi}{4}$ radians."
      },
      {
        "kind": "example",
        "prompt": "A right triangle has an opposite side of 2.8 and a hypotenuse of 4.9 for the angle θ. What is sin θ?",
        "steps": [
          "Choose the ratio linking opposite and hypotenuse: sine.",
          "sin θ = Opposite / Hypotenuse = 2.8 / 4.9."
        ],
        "answer": "sin θ ≈ 0.57. (Any triangle with this angle gives the same ratio.)"
      },
      {
        "kind": "example",
        "prompt": "A ramp rises $1.2$ m over a horizontal run of $5.0$ m. Find its angle of inclination.",
        "steps": [
          "Opposite $=1.2$, adjacent $=5.0$, so use tangent.",
          "$\\tan\\theta=1.2/5.0=0.24$.",
          "$\\theta=\\tan^{-1}(0.24)$."
        ],
        "answer": "$\\theta\\approx13.5^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Standing 30 m from a tree, you measure the angle of elevation to its top as 40°. How tall is the tree?",
        "steps": [
          "The distance (adjacent) is 30 m and the height (opposite) is unknown, so use tangent: tan(40°) = height / 30.",
          "From a calculator, tan(40°) ≈ 0.839.",
          "Multiply both sides by 30: height ≈ 0.839 × 30."
        ],
        "answer": "The tree is about 25.2 m tall."
      },
      {
        "kind": "example",
        "prompt": "Convert $150°$ to radians.",
        "steps": [
          "Multiply by $\\frac{\\pi}{180}$: $150 \\times \\frac{\\pi}{180} = \\frac{150\\pi}{180}$.",
          "Simplify: $\\frac{5\\pi}{6}$."
        ],
        "answer": "$150° = \\frac{5\\pi}{6}$ rad."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\sin(5\\pi/6)$ and $\\cos(5\\pi/6)$ exactly.",
        "steps": [
          "$5\\pi/6$ is in Quadrant II.",
          "Its reference angle is $\\pi/6$.",
          "At $\\pi/6$, sine is $1/2$ and cosine is $\\sqrt3/2$; in Quadrant II cosine is negative."
        ],
        "answer": "$\\sin(5\\pi/6)=1/2$ and $\\cos(5\\pi/6)=-\\sqrt3/2$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate all six functions at $\\theta=3\\pi/4$.",
        "steps": [
          "The unit-circle point is $(-\\sqrt2/2,\\sqrt2/2)$.",
          "So sine is $\\sqrt2/2$ and cosine is $-\\sqrt2/2$.",
          "Use quotients and reciprocals for the remaining functions."
        ],
        "answer": "$\\tan=-1$, $\\csc=\\sqrt2$, $\\sec=-\\sqrt2$, $\\cot=-1$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\frac{1-\\cos^2 x}{\\sin x}$.",
        "steps": [
          "Use $1-\\cos^2x=\\sin^2x$.",
          "Then $\\sin^2x/\\sin x=\\sin x$ where $\\sin x\\ne0$."
        ],
        "answer": "The expression simplifies to $\\sin x$ on its original domain."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $180/\\pi$ when converting degrees to radians.",
            "right": "Degrees to radians uses $\\pi/180$; radians to degrees uses $180/\\pi$."
          },
          {
            "wrong": "Treating a negative angle as a negative length.",
            "right": "The sign describes direction of rotation, not the size of a physical side or radius."
          },
          {
            "wrong": "Mixing up which side is opposite and which is adjacent.",
            "right": "Fix the angle θ first: the opposite is across from it, the adjacent is beside it."
          },
          {
            "wrong": "Getting a strange answer because the calculator is in radian mode.",
            "right": "When working in degrees, make sure the calculator is set to degrees, not radians."
          },
          {
            "wrong": "Using sine when the two sides involved are opposite and adjacent.",
            "right": "Match the ratio to the sides you have: opposite and adjacent means tangent."
          },
          {
            "wrong": "Labelling the adjacent side as the hypotenuse.",
            "right": "The hypotenuse is opposite the $90^\\circ$ angle and is the longest side."
          },
          {
            "wrong": "Using $\\sin^{-1}x$ to mean $1/\\sin x$.",
            "right": "Inverse sine returns an angle; the reciprocal of sine is cosecant."
          },
          {
            "wrong": "Confusing elevation with depression, or measuring from the vertical instead of the horizontal.",
            "right": "Both angles are measured from the horizontal: elevation looks up, depression looks down."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which measure equals one quarter revolution?",
            "options": [
              "45°",
              "90°",
              "π radians",
              "2π radians"
            ],
            "answer": 1,
            "explanation": "One quarter of 360° is 90°, equal to π/2 radians."
          },
          {
            "prompt": "Convert $7\\pi/6$ to degrees.",
            "options": [
              "150°",
              "180°",
              "210°",
              "240°"
            ],
            "answer": 2,
            "explanation": "$(7π/6)(180/π)=210°$."
          },
          {
            "prompt": "Which angle is coterminal with $40^\\circ$?",
            "options": [
              "−40°",
              "140°",
              "320°",
              "400°"
            ],
            "answer": 3,
            "explanation": "$40°+360°=400°$."
          },
          {
            "prompt": "A complement of $\\pi/5$ is…",
            "options": [
              "$3π/10$",
              "$4π/5$",
              "$π/5$",
              "$7π/10$"
            ],
            "answer": 0,
            "explanation": "$π/2−π/5=3π/10$."
          },
          {
            "prompt": "Which ratio uses opposite and hypotenuse?",
            "options": [
              "sine",
              "cosine",
              "tangent",
              "cotangent"
            ],
            "answer": 0,
            "explanation": "Sine is opposite divided by hypotenuse."
          },
          {
            "prompt": "What is $\\cos60^\\circ$?",
            "options": [
              "0",
              "1/2",
              "√2/2",
              "√3/2"
            ],
            "answer": 1,
            "explanation": "From the 30-60-90 triangle, cos 60° = 1/2."
          },
          {
            "prompt": "A ladder is 8 m long and its foot is 3 m from a wall. Which equation finds the angle with the ground?",
            "options": [
              "sin θ=3/8",
              "cos θ=3/8",
              "tan θ=8/3",
              "cos θ=8/3"
            ],
            "answer": 1,
            "explanation": "Adjacent is 3 and hypotenuse is 8."
          },
          {
            "prompt": "If $\\tan\\theta=1$ and $0^\\circ<\\theta<90^\\circ$, then θ is…",
            "options": [
              "30°",
              "45°",
              "60°",
              "90°"
            ],
            "answer": 1,
            "explanation": "tan 45° = 1."
          },
          {
            "prompt": "Convert 90° to radians.",
            "options": [
              "π/4",
              "π/2",
              "π",
              "2π"
            ],
            "answer": 1,
            "explanation": "90 × π/180 = π/2."
          },
          {
            "prompt": "In which quadrant is 200°?",
            "options": [
              "I",
              "II",
              "III",
              "IV"
            ],
            "answer": 2,
            "explanation": "180°–270° → Quadrant III."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "marks": 1,
            "prompt": "How many radians in a full circle?",
            "options": [
              "π",
              "2π",
              "π/2",
              "4π"
            ],
            "answer": 1,
            "explanation": "A full turn is 2π radians."
          },
          {
            "type": "mc",
            "marks": 1,
            "prompt": "Convert 60° to radians.",
            "options": [
              "π/6",
              "π/4",
              "π/3",
              "π/2"
            ],
            "answer": 2,
            "explanation": "60 × π/180 = π/3."
          },
          {
            "type": "mc",
            "marks": 1,
            "prompt": "On the unit circle, the x-coordinate represents…",
            "options": [
              "sin θ",
              "cos θ",
              "tan θ",
              "the radius"
            ],
            "answer": 1,
            "explanation": "The x-coordinate is cos θ."
          },
          {
            "type": "mc",
            "marks": 1,
            "prompt": "In which quadrant is sin positive and cos negative?",
            "options": [
              "I",
              "II",
              "III",
              "IV"
            ],
            "answer": 1,
            "explanation": "Quadrant II: sin +, cos −."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "What is $\\cos 180°$?",
            "options": [
              "0",
              "1",
              "−1",
              "undefined"
            ],
            "answer": 2,
            "explanation": "The point at 180° is (−1, 0), so cos 180° = −1."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "What is the reference angle for 225°?",
            "options": [
              "45°",
              "135°",
              "225°",
              "30°"
            ],
            "answer": 0,
            "explanation": "225° − 180° = 45°."
          }
        ],
        "passMark": 5
      },
      {
        "kind": "summary",
        "points": [
          "One revolution is $360^\\circ=2\\pi$ radians.",
          "Radians are dimensionless ratios of arc length to radius.",
          "Standard-position angles begin on the positive $x$-axis.",
          "Coterminal angles differ by an integer multiple of a full revolution.",
          "Name the sides relative to the chosen angle θ: opposite, adjacent, hypotenuse.",
          "SOHCAHTOA: sin = O/H, cos = A/H, tan = O/A.",
          "For a fixed angle the ratios stay the same at any size of triangle.",
          "Find a side by solving the ratio; find an angle with sin⁻¹, cos⁻¹ or tan⁻¹.",
          "Know the exact values for 30°, 45° and 60°.",
          "Sine, cosine, and tangent are invariant ratios in similar right triangles."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-graphs-and-applications-of-radian-measure",
    "lessonSlug": "trigonometric-graphs-and-applications-of-radian-measure-mastery-review",
    "title": "Trigonometric Graphs and Applications of Radian Measure Mastery Review",
    "objectives": [
      "Connect the main ideas across the Trigonometric Graphs and Applications of Radian Measure chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Graph the fundamental sine and cosine functions",
      "Identify amplitude, period, midline, phase shift, domain, and range",
      "Graph transformations of sinusoids",
      "Determine even and odd symmetry"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Trigonometric Graphs and Applications of Radian Measure**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Graphs of the Sine and Cosine Functions",
            "text": "Graph the fundamental sine and cosine functions"
          },
          {
            "title": "Graphs of the Other Trigonometric Functions",
            "text": "Graph tangent, cotangent, secant, and cosecant"
          },
          {
            "title": "Modeling with Trigonometric Functions",
            "text": "Identify amplitude, period and phase shift in $y = a\\sin(bx + c) + d$"
          },
          {
            "title": "Applications of Radian Measure",
            "text": "Compute arc length and sector area"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "reciprocal-graphs"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Graphs of the Sine and Cosine Functions",
            "Sine and cosine are smooth periodic functions with fundamental period $2\\pi$.",
            "Amplitude is a nonnegative distance, so use $|A|$."
          ],
          [
            "Graphs of the Other Trigonometric Functions",
            "Tangent and cotangent have period $\\pi$ and asymptotic branches.",
            "Tangent has separate branches and vertical asymptotes."
          ],
          [
            "Modeling with Trigonometric Functions",
            "$y = a\\sin(bx+c)+d$: $|a|$ = amplitude, $360°/b$ = period, $d$ = midline.",
            "Period is the time for one cycle; frequency is cycles per unit time ($f = 1/T$)."
          ],
          [
            "Applications of Radian Measure",
            "Radian measure turns circular proportions into direct multiplication.",
            "Convert the angle to radians before applying the formula."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Describe $y=-3\\cos(2(x-\\pi/4))+1$.",
        "steps": [
          "Amplitude is $|-3|=3$ and the negative sign reflects the cosine shape.",
          "Period is $2\\pi/2=\\pi$.",
          "Phase shift is right $\\pi/4$ and midline is $y=1$.",
          "Range is $[1-3,1+3]$."
        ],
        "answer": "Amplitude $3$, period $\\pi$, shift right $\\pi/4$, midline $y=1$, range $[-2,4]$."
      },
      {
        "kind": "example",
        "prompt": "Find the period and asymptotes of $y=\\tan(2x)$.",
        "steps": [
          "Period is $\\pi/2$.",
          "Asymptotes occur when $2x=\\pi/2+k\\pi$.",
          "Solve for $x$."
        ],
        "answer": "Period $\\pi/2$; asymptotes $x=\\pi/4+k\\pi/2$."
      },
      {
        "kind": "example",
        "prompt": "A Ferris wheel has radius 10 m and its centre is 12 m above the ground. It completes one revolution every 60 seconds. Model the height $h$ of a rider.",
        "steps": [
          "Amplitude = 10 (the radius). Vertical shift $d$ = 12 (the centre height). Period = 60 s, so $b = 360°/60 = 6$.",
          "$h = 10\\sin(6t - 90°) + 12$ (shifted by $-90°$ so the rider starts at the bottom)."
        ],
        "answer": "$h = 10\\sin(6t - 90°) + 12$ metres."
      },
      {
        "kind": "example",
        "prompt": "A wheel of radius $0.35$ m turns through $120^\\circ$. Find the arc distance travelled by a point on its rim.",
        "steps": [
          "Convert $120^\\circ=2\\pi/3$ radians.",
          "Use $s=r\\theta=0.35(2\\pi/3)$."
        ],
        "answer": "$s\\approx0.733$ m."
      },
      {
        "kind": "example",
        "prompt": "A sinusoid has maximum $9$, minimum $1$, and period $6$. Find amplitude, midline, and a possible $B$.",
        "steps": [
          "Amplitude is half the vertical range: $(9-1)/2=4$.",
          "Midline is the average: $(9+1)/2=5$.",
          "$B=2\\pi/P=\\pi/3$."
        ],
        "answer": "A possible model is $y=4\\cos((\\pi/3)x)+5$ if the graph begins at a maximum."
      },
      {
        "kind": "example",
        "prompt": "Sketching $y=2\\sec x-1$: identify branch vertices and range.",
        "steps": [
          "Use the guide curve $y=2\\cos x-1$.",
          "At cosine maxima, secant has vertex $y=1$; at cosine minima, vertex $y=-3$.",
          "The reciprocal branches extend away from the midline."
        ],
        "answer": "Range is $(-\\infty,-3]\\cup[1,\\infty)$; asymptotes occur at $x=\\pi/2+k\\pi$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Calling $A$ the amplitude when $A<0$.",
            "right": "Amplitude is a nonnegative distance, so use $|A|$."
          },
          {
            "wrong": "Using $2\\pi B$ for the period.",
            "right": "The horizontal scaling is reciprocal: $P=2\\pi/|B|$."
          },
          {
            "wrong": "Drawing tangent as a continuous sine wave.",
            "right": "Tangent has separate branches and vertical asymptotes."
          },
          {
            "wrong": "Taking the reciprocal of an entire transformed guide value for $A\\sec x+D$.",
            "right": "Transform the secant function as written; use the matching guide $A\\cos x+D$, not $1/(A\\cos x+D)$."
          },
          {
            "wrong": "Confusing frequency and period.",
            "right": "Period is the time for one cycle; frequency is cycles per unit time ($f = 1/T$)."
          },
          {
            "wrong": "Thinking amplitude can be negative.",
            "right": "Amplitude $= |a|$ is always positive (it's a distance)."
          },
          {
            "wrong": "Using degrees directly in $s=r\\theta$.",
            "right": "Convert the angle to radians before applying the formula."
          },
          {
            "wrong": "Assuming every point on a wheel has the same linear speed.",
            "right": "Every point has the same angular speed; linear speed grows with radius."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "The amplitude of $y=-5\\sin x$ is…",
            "options": [
              "−5",
              "5",
              "2π",
              "1/5"
            ],
            "answer": 1,
            "explanation": "Amplitude is |A|."
          },
          {
            "prompt": "The period of $y=\\cos(4x)$ is…",
            "options": [
              "8π",
              "4π",
              "π/2",
              "2π"
            ],
            "answer": 2,
            "explanation": "$2π/4=π/2$."
          },
          {
            "prompt": "The midline of $y=2\\sin x-3$ is…",
            "options": [
              "y=2",
              "y=−3",
              "x=−3",
              "y=−1"
            ],
            "answer": 1,
            "explanation": "The vertical shift D is −3."
          },
          {
            "prompt": "Which function is even?",
            "options": [
              "sine",
              "cosine",
              "tangent",
              "cosecant"
            ],
            "answer": 1,
            "explanation": "cos(−x)=cos x."
          },
          {
            "prompt": "The fundamental period of tangent is…",
            "options": [
              "π/2",
              "π",
              "2π",
              "4π"
            ],
            "answer": 1,
            "explanation": "tan(x+π)=tan x."
          },
          {
            "prompt": "Where does $\\sec x$ have vertical asymptotes?",
            "options": [
              "sin x=0",
              "cos x=0",
              "tan x=0",
              "sec x=1"
            ],
            "answer": 1,
            "explanation": "Secant is 1/cos x."
          },
          {
            "prompt": "The range of cosecant excludes…",
            "options": [
              "all negative values",
              "all positive values",
              "values between −1 and 1",
              "only zero"
            ],
            "answer": 2,
            "explanation": "|csc x|≥1."
          },
          {
            "prompt": "The period of $\\cot(3x)$ is…",
            "options": [
              "3π",
              "π/3",
              "2π/3",
              "6π"
            ],
            "answer": 1,
            "explanation": "π/|3|=π/3."
          },
          {
            "prompt": "Period of $y = \\sin 2x$ (in degrees)?",
            "options": [
              "90°",
              "180°",
              "360°",
              "720°"
            ],
            "answer": 1,
            "explanation": "360°/2 = 180°."
          },
          {
            "prompt": "Amplitude of $y = 3\\cos x$?",
            "options": [
              "1",
              "3",
              "6",
              "1/3"
            ],
            "answer": 1,
            "explanation": "|a| = 3."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "marks": 1,
            "prompt": "Amplitude of $y = 4\\sin x$?",
            "options": [
              "1",
              "2",
              "4",
              "8"
            ],
            "answer": 2,
            "explanation": "|a| = 4."
          },
          {
            "type": "mc",
            "marks": 1,
            "prompt": "Period of $y = \\cos 3x$ in degrees?",
            "options": [
              "60°",
              "90°",
              "120°",
              "360°"
            ],
            "answer": 2,
            "explanation": "360°/3 = 120°."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "A wave peaks at 7 and troughs at 1. The amplitude is…",
            "options": [
              "3",
              "4",
              "6",
              "8"
            ],
            "answer": 0,
            "explanation": "(7−1)/2 = 3."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "In $y = 2\\sin x + 5$, the midline is…",
            "options": [
              "y = 2",
              "y = 5",
              "y = 7",
              "y = 3"
            ],
            "answer": 1,
            "explanation": "d = 5 is the vertical shift / midline."
          },
          {
            "type": "tf",
            "marks": 1,
            "prompt": "Amplitude can be negative.",
            "answer": false,
            "explanation": "Amplitude = |a|, always positive."
          },
          {
            "type": "mc",
            "prompt": "The amplitude of $y=-5\\sin x$ is…",
            "options": [
              "−5",
              "5",
              "2π",
              "1/5"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Amplitude is |A|."
          }
        ],
        "passMark": 5
      },
      {
        "kind": "summary",
        "points": [
          "Sine and cosine are smooth periodic functions with fundamental period $2\\pi$.",
          "Amplitude, period, phase shift, and vertical shift determine a sinusoid.",
          "Five quarter-cycle points provide an efficient graphing method.",
          "Sine is odd and cosine is even.",
          "Tangent and cotangent have period $\\pi$ and asymptotic branches.",
          "Secant and cosecant are reciprocal graphs guided by cosine and sine.",
          "Zeros of a denominator become vertical asymptotes.",
          "Transformations alter period, branch location, scale, and midline.",
          "$y = a\\sin(bx+c)+d$: $|a|$ = amplitude, $360°/b$ = period, $d$ = midline.",
          "Tides, sound, temperature and AC electricity follow sinusoidal models."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-identities",
    "lessonSlug": "trigonometric-identities-mastery-review",
    "title": "Trigonometric Identities Mastery Review",
    "objectives": [
      "Connect the main ideas across the Trigonometric Identities chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "State the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$",
      "Use the quotient identity $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$",
      "Find one trig value from another using identities",
      "Prove simple identities"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Trigonometric Identities**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Fundamental Identities",
            "text": "State the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$"
          },
          {
            "title": "Using Trigonometric Identities",
            "text": "State and apply even–odd identities"
          },
          {
            "title": "Multiple-Angle Identities",
            "text": "Derive and use double-angle identities"
          },
          {
            "title": "Compound and Double Angle Formulas",
            "text": "State and use the addition formulas for sine and cosine"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "unit-circle"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Fundamental Identities",
            "$\\sin^2\\theta + \\cos^2\\theta = 1$ for every angle.",
            "The quadrant decides the sign — always check before dropping the ±."
          ],
          [
            "Using Trigonometric Identities",
            "Even–odd identities encode function symmetry.",
            "Cosine uses the opposite sign: $\\cos(\\alpha+\\beta)$ contains a minus."
          ],
          [
            "Multiple-Angle Identities",
            "Double-angle formulas follow directly from addition identities.",
            "Determine the quadrant of the half-angle before choosing the sign."
          ],
          [
            "Compound and Double Angle Formulas",
            "$\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$.",
            "Use the addition formula: the trig of a sum is not the sum of the trigs."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Given $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$.",
        "steps": [
          "Use $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
          "Take the positive root (acute angle → Quadrant I → cos positive): $\\cos\\theta = \\frac{4}{5}$."
        ],
        "answer": "$\\cos\\theta = \\frac{4}{5}$."
      },
      {
        "kind": "example",
        "prompt": "Find $\\sin75^\\circ$ exactly.",
        "steps": [
          "Write $75^\\circ=45^\\circ+30^\\circ$.",
          "Apply the sine addition identity.",
          "Substitute exact special-angle values and simplify."
        ],
        "answer": "$\\sin75^\\circ=\\frac{\\sqrt6+\\sqrt2}{4}$."
      },
      {
        "kind": "example",
        "prompt": "If $\\sin x=3/5$ and $x$ is in Quadrant II, find $\\sin2x$ and $\\cos2x$.",
        "steps": [
          "In Quadrant II, $\\cos x=-4/5$.",
          "Use $\\sin2x=2\\sin x\\cos x$.",
          "Use $\\cos2x=1-2\\sin^2x$."
        ],
        "answer": "$\\sin2x=-24/25$ and $\\cos2x=7/25$."
      },
      {
        "kind": "example",
        "prompt": "Find the exact value of $\\sin 75°$.",
        "steps": [
          "Write $75° = 45° + 30°$.",
          "$\\sin 75° = \\sin 45°\\cos 30° + \\cos 45°\\sin 30°$.",
          "$= \\frac{\\sqrt 2}{2}\\cdot\\frac{\\sqrt 3}{2} + \\frac{\\sqrt 2}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt 6 + \\sqrt 2}{4}$."
        ],
        "answer": "$\\sin 75° = \\frac{\\sqrt 6+\\sqrt 2}{4} \\approx 0.9659$."
      },
      {
        "kind": "example",
        "prompt": "Given $\\sin\\theta = 0.6$ and $\\cos\\theta = 0.8$, find $\\tan\\theta$.",
        "steps": [
          "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{0.6}{0.8}$."
        ],
        "answer": "$\\tan\\theta = 0.75$."
      },
      {
        "kind": "example",
        "prompt": "Show that $\\frac{\\sin^2\\theta}{\\cos^2\\theta} + 1 = \\frac{1}{\\cos^2\\theta}$.",
        "steps": [
          "Left side: $\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\cos^2\\theta}$.",
          "By the Pythagorean identity the numerator is 1."
        ],
        "answer": "$= \\frac{1}{\\cos^2\\theta}$ ✓"
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Forgetting the ± when solving $\\cos\\theta = \\sqrt{1-\\sin^2\\theta}$.",
            "right": "The quadrant decides the sign — always check before dropping the ±."
          },
          {
            "wrong": "Thinking $\\sin^2\\theta$ means $\\sin(\\theta^2)$.",
            "right": "$\\sin^2\\theta$ means $(\\sin\\theta)^2$ — the square of the sine value."
          },
          {
            "wrong": "Changing the middle sign incorrectly in the cosine formulas.",
            "right": "Cosine uses the opposite sign: $\\cos(\\alpha+\\beta)$ contains a minus."
          },
          {
            "wrong": "Testing several values and calling the result a verification.",
            "right": "A verification requires symbolic transformations valid throughout the common domain."
          },
          {
            "wrong": "Forgetting that a half-angle formula has a plus-or-minus sign.",
            "right": "Determine the quadrant of the half-angle before choosing the sign."
          },
          {
            "wrong": "Assuming $\\sin2x=2\\sin x$.",
            "right": "The correct formula is $2\\sin x\\cos x$."
          },
          {
            "wrong": "Writing $\\sin(A+B) = \\sin A + \\sin B$.",
            "right": "Use the addition formula: the trig of a sum is not the sum of the trigs."
          },
          {
            "wrong": "Mixing up the sign in the cosine formula.",
            "right": "Cosine flips the sign: $\\cos(A+B)$ uses a minus, $\\cos(A-B)$ uses a plus."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "If $\\cos\\theta = \\frac{12}{13}$ (acute), what is $\\sin\\theta$?",
            "options": [
              "5/13",
              "12/13",
              "5/12",
              "13/5"
            ],
            "answer": 0,
            "explanation": "$\\sin^2\\theta = 1 - 144/169 = 25/169$, so $\\sin\\theta = 5/13$."
          },
          {
            "prompt": "$\\tan\\theta = \\frac{\\sin\\theta}{?}$",
            "options": [
              "sin θ",
              "cos θ",
              "tan θ",
              "1"
            ],
            "answer": 1,
            "explanation": "The quotient identity: tan θ = sin θ / cos θ."
          },
          {
            "prompt": "$\\sin^2 30° + \\cos^2 30° = ?$",
            "options": [
              "0",
              "0.5",
              "1",
              "√3"
            ],
            "answer": 2,
            "explanation": "The Pythagorean identity always equals 1."
          },
          {
            "prompt": "$\\cos(-x)$ equals…",
            "options": [
              "−cos x",
              "cos x",
              "sin x",
              "−sin x"
            ],
            "answer": 1,
            "explanation": "Cosine is even."
          },
          {
            "prompt": "$\\sin(45^\\circ+30^\\circ)$ begins with…",
            "options": [
              "sin45 sin30 + cos45 cos30",
              "sin45 cos30 + cos45 sin30",
              "cos45 cos30 − sin45 sin30",
              "tan45 + tan30"
            ],
            "answer": 1,
            "explanation": "Use the sine addition formula."
          },
          {
            "prompt": "A useful first move for an expression containing secant and tangent is often…",
            "options": [
              "convert to degrees",
              "rewrite with sine and cosine",
              "differentiate",
              "square every term"
            ],
            "answer": 1,
            "explanation": "Sine and cosine expose common factors and Pythagorean identities."
          },
          {
            "prompt": "$\\sin(\\pi/2-x)$ equals…",
            "options": [
              "−sin x",
              "cos x",
              "tan x",
              "sec x"
            ],
            "answer": 1,
            "explanation": "This is a cofunction identity."
          },
          {
            "prompt": "$\\sin2x$ equals…",
            "options": [
              "2 sin x",
              "2 sin x cos x",
              "sin²x−cos²x",
              "1−2sin x"
            ],
            "answer": 1,
            "explanation": "Use the sine double-angle identity."
          },
          {
            "prompt": "$\\cos2x$ can equal…",
            "options": [
              "1−2sin²x",
              "1−sin²x",
              "2cos x−1",
              "sin x cos x"
            ],
            "answer": 0,
            "explanation": "One standard cosine double-angle form is 1−2sin²x."
          },
          {
            "prompt": "$\\cos^2x$ equals…",
            "options": [
              "(1−cos2x)/2",
              "(1+cos2x)/2",
              "1+sin²x",
              "cos2x/2"
            ],
            "answer": 1,
            "explanation": "This is the cosine power-reduction formula."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "marks": 1,
            "prompt": "$\\sin^2\\theta + \\cos^2\\theta = ?$",
            "options": [
              "0",
              "1",
              "sin θ",
              "cos θ"
            ],
            "answer": 1,
            "explanation": "The Pythagorean identity."
          },
          {
            "type": "tf",
            "marks": 1,
            "prompt": "$\\tan 90°$ is defined.",
            "answer": false,
            "explanation": "$\\cos 90° = 0$, so $\\tan 90° = \\sin 90° / \\cos 90°$ is undefined."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "If $\\sin\\theta = 0.8$ (acute), find $\\cos\\theta$.",
            "options": [
              "0.2",
              "0.6",
              "0.36",
              "0.8"
            ],
            "answer": 1,
            "explanation": "$\\cos\\theta = \\sqrt{1 - 0.64} = \\sqrt{0.36} = 0.6$."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "Given $\\sin\\theta = 3/5$, $\\cos\\theta = 4/5$, find $\\tan\\theta$.",
            "options": [
              "3/4",
              "4/3",
              "5/3",
              "3/5"
            ],
            "answer": 0,
            "explanation": "tan = sin/cos = (3/5)/(4/5) = 3/4."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "Which is equivalent to $\\frac{1}{\\cos^2\\theta}$?",
            "options": [
              "$1+\\sin^2\\theta$",
              "$\\tan^2\\theta+1$",
              "$\\sin^2\\theta$",
              "$\\cos^2\\theta$"
            ],
            "answer": 1,
            "explanation": "Divide the Pythagorean identity by $\\cos^2\\theta$: $\\tan^2\\theta + 1 = 1/\\cos^2\\theta$."
          },
          {
            "type": "tf",
            "marks": 1,
            "prompt": "$\\sin(A+B) = \\sin A + \\sin B$.",
            "answer": false,
            "explanation": "Must use the addition formula."
          }
        ],
        "passMark": 6
      },
      {
        "kind": "summary",
        "points": [
          "$\\sin^2\\theta + \\cos^2\\theta = 1$ for every angle.",
          "$\\tan\\theta = \\sin\\theta / \\cos\\theta$ when $\\cos\\theta \\neq 0$.",
          "Use the identity + the quadrant sign to find one ratio from another.",
          "$\\sin^2\\theta$ means $(\\sin\\theta)^2$, not $\\sin(\\theta^2)$.",
          "Even–odd identities encode function symmetry.",
          "Sum and difference formulas evaluate compound angles and support proofs.",
          "Cofunction identities connect complementary angles.",
          "Identity verification is a controlled sequence of equivalent expressions.",
          "Double-angle formulas follow directly from addition identities.",
          "Half-angle formulas require a quadrant-based sign choice."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-equations",
    "lessonSlug": "trigonometric-equations-mastery-review",
    "title": "Trigonometric Equations Mastery Review",
    "objectives": [
      "Connect the main ideas across the Trigonometric Equations chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Explain why sine and cosine require restricted domains to have inverses",
      "State the domains and ranges of arcsine and arccosine",
      "Evaluate exact inverse-function values",
      "Simplify compositions while respecting principal ranges"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Trigonometric Equations**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Inverse Sine and Cosine Functions",
            "text": "Explain why sine and cosine require restricted domains to have inverses"
          },
          {
            "title": "The Other Inverse Trigonometric Functions",
            "text": "State principal domains and ranges for arctangent, arccotangent, arcsecant, and arccosecant"
          },
          {
            "title": "Inverse Functions and Trigonometric Equations",
            "text": "Use inverse trigonometric functions to obtain reference angles"
          },
          {
            "title": "Solving General Trigonometric Equations",
            "text": "Solve equations by factoring"
          },
          {
            "title": "Trigonometric Equations",
            "text": "Solve equations like $\\sin\\theta = k$ for $0° \\le \\theta \\le 360°$"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "inverse-restrictions"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Inverse Sine and Cosine Functions",
            "Domain restrictions make sine and cosine invertible.",
            "Arccos outputs only values in $[0,\\pi]$."
          ],
          [
            "The Other Inverse Trigonometric Functions",
            "Every inverse trigonometric function uses a one-to-one restriction.",
            "The principal arctangent range uses Quadrants I and IV."
          ],
          [
            "Inverse Functions and Trigonometric Equations",
            "Inverse functions provide principal reference angles.",
            "Use symmetry and periodicity to find every required solution."
          ],
          [
            "Solving General Trigonometric Equations",
            "Treat general trigonometric equations as algebraic structures.",
            "Factor first or handle the zero case separately."
          ],
          [
            "Trigonometric Equations",
            "Find the reference angle from the inverse function.",
            "Always check every quadrant where the sign matches."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\arcsin(-\\sqrt2/2)$ and $\\arccos(-\\sqrt2/2)$.",
        "steps": [
          "Find standard angles with the required function value.",
          "Choose the result inside each inverse function's principal range."
        ],
        "answer": "$\\arcsin(-\\sqrt2/2)=-\\pi/4$ and $\\arccos(-\\sqrt2/2)=3\\pi/4$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\arctan(-\\sqrt3)$.",
        "steps": [
          "Tangent has magnitude $\\sqrt3$ at a reference angle $\\pi/3$.",
          "The arctangent range allows negative Quadrant IV angles but excludes Quadrant II.",
          "Choose the negative principal angle."
        ],
        "answer": "$\\arctan(-\\sqrt3)=-\\pi/3$."
      },
      {
        "kind": "example",
        "prompt": "Solve $2\\sin x-1=0$ for $0\\le x<2\\pi$.",
        "steps": [
          "Isolate sine: $\\sin x=1/2$.",
          "The reference angle is $\\pi/6$.",
          "Sine is positive in Quadrants I and II."
        ],
        "answer": "$x=\\pi/6$ or $x=5\\pi/6$."
      },
      {
        "kind": "example",
        "prompt": "Solve $2\\sin^2x-3\\sin x+1=0$ on $[0,2\\pi)$.",
        "steps": [
          "Factor as $(2\\sin x-1)(\\sin x-1)=0$.",
          "Solve $\\sin x=1/2$ and $\\sin x=1$.",
          "List the corresponding unit-circle angles."
        ],
        "answer": "$x=\\pi/6,\\pi/2,5\\pi/6$."
      },
      {
        "kind": "example",
        "prompt": "Solve $\\sin\\theta = 0.5$ for $0° \\le \\theta \\le 360°$.",
        "steps": [
          "Reference angle: $\\sin^{-1}(0.5) = 30°$.",
          "Sin is positive in Quadrants I and II.",
          "Solutions: $\\theta = 30°$ and $\\theta = 180° - 30° = 150°$."
        ],
        "answer": "$\\theta = 30°$ or $\\theta = 150°$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\arccos(\\cos(5\\pi/3))$.",
        "steps": [
          "$5\\pi/3$ is outside $[0,\\pi]$.",
          "Find the angle in $[0,\\pi]$ with the same cosine.",
          "Cosine is $1/2$ at $\\pi/3$."
        ],
        "answer": "$\\arccos(\\cos(5\\pi/3))=\\pi/3$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Returning $5\\pi/3$ from arccos because its cosine is correct.",
            "right": "Arccos outputs only values in $[0,\\pi]$."
          },
          {
            "wrong": "Treating arcsin as cosecant.",
            "right": "Arcsine is an inverse function; cosecant is a reciprocal."
          },
          {
            "wrong": "Choosing a Quadrant II answer for a negative arctangent.",
            "right": "The principal arctangent range uses Quadrants I and IV."
          },
          {
            "wrong": "Allowing an arcsecant input between −1 and 1.",
            "right": "No real secant value has magnitude below one."
          },
          {
            "wrong": "Reporting only the calculator's principal angle.",
            "right": "Use symmetry and periodicity to find every required solution."
          },
          {
            "wrong": "Applying the interval for $x$ directly to the transformed angle $Bx-C$.",
            "right": "Translate the interval to the inner angle before enumerating cycles."
          },
          {
            "wrong": "Dividing by $\\sin x$ and losing the solutions where $\\sin x=0$.",
            "right": "Factor first or handle the zero case separately."
          },
          {
            "wrong": "Keeping a substitution value such as $\\cos x=3/2$.",
            "right": "Reject algebraic roots outside the trigonometric function's range."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "The range of arcsin is…",
            "options": [
              "[0,2π]",
              "[−π/2,π/2]",
              "[0,π]",
              "all real numbers"
            ],
            "answer": 1,
            "explanation": "This restricted interval makes sine one-to-one."
          },
          {
            "prompt": "$\\arccos(-1)$ is…",
            "options": [
              "−π",
              "0",
              "π/2",
              "π"
            ],
            "answer": 3,
            "explanation": "Cos π = −1 and π is in the principal range."
          },
          {
            "prompt": "$\\sin(\\arcsin 0.4)$ equals…",
            "options": [
              "−0.4",
              "0.4",
              "arcsin 0.4",
              "undefined"
            ],
            "answer": 1,
            "explanation": "The inverse composition returns the input."
          },
          {
            "prompt": "$\\arcsin(2)$ is…",
            "options": [
              "π/2",
              "2π",
              "undefined over the reals",
              "1/2"
            ],
            "answer": 2,
            "explanation": "The domain is [−1,1]."
          },
          {
            "prompt": "The domain of arctan is…",
            "options": [
              "[−1,1]",
              "all real numbers",
              "[0,π]",
              "|x|≥1"
            ],
            "answer": 1,
            "explanation": "Tangent reaches every real value on its restricted interval."
          },
          {
            "prompt": "$\\arctan(1)$ is…",
            "options": [
              "π/6",
              "π/4",
              "π/2",
              "3π/4"
            ],
            "answer": 1,
            "explanation": "tan π/4 = 1."
          },
          {
            "prompt": "Which is in the real domain of arcsec?",
            "options": [
              "0",
              "1/2",
              "−3/4",
              "−2"
            ],
            "answer": 3,
            "explanation": "Arcsec requires |x|≥1."
          },
          {
            "prompt": "To find $\\cos(\\arctan x)$, a useful method is…",
            "options": [
              "differentiate",
              "construct a right triangle",
              "convert x to degrees",
              "use sector area"
            ],
            "answer": 1,
            "explanation": "The tangent ratio determines two sides of a reference triangle."
          },
          {
            "prompt": "Solutions of $\\tan x=1$ repeat every…",
            "options": [
              "π/2",
              "π",
              "2π",
              "4π"
            ],
            "answer": 1,
            "explanation": "Tangent's period is π."
          },
          {
            "prompt": "On $[0,2π)$, $\\cos x=0$ at…",
            "options": [
              "0 and π",
              "π/2 and 3π/2",
              "π/4 and 7π/4",
              "only π/2"
            ],
            "answer": 1,
            "explanation": "Cosine is zero on the vertical axis."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "marks": 1,
            "prompt": "$\\sin\\theta = 0.5$: reference angle?",
            "options": [
              "30°",
              "45°",
              "60°",
              "90°"
            ],
            "answer": 0,
            "explanation": "sin⁻¹(0.5) = 30°."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "How many solutions does $\\sin\\theta = -1$ have in $[0°,360°]$?",
            "options": [
              "0",
              "1",
              "2",
              "4"
            ],
            "answer": 1,
            "explanation": "Only θ = 270°."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "Solve $\\cos\\theta = 0$ in $[0°,360°]$.",
            "options": [
              "0° and 180°",
              "90° and 270°",
              "0° only",
              "180° only"
            ],
            "answer": 1,
            "explanation": "cos = 0 on the y-axis: 90° and 270°."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "$2\\sin^2\\theta - 1 = 0$ has how many solutions in $[0°,360°]$?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answer": 3,
            "explanation": "sin θ = ±1/√2 → solutions in all four quadrants."
          },
          {
            "type": "mc",
            "prompt": "The range of arcsin is…",
            "options": [
              "[0,2π]",
              "[−π/2,π/2]",
              "[0,π]",
              "all real numbers"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "This restricted interval makes sine one-to-one."
          },
          {
            "type": "mc",
            "prompt": "$\\arccos(-1)$ is…",
            "options": [
              "−π",
              "0",
              "π/2",
              "π"
            ],
            "answer": 3,
            "marks": 1,
            "explanation": "Cos π = −1 and π is in the principal range."
          }
        ],
        "passMark": 6
      },
      {
        "kind": "summary",
        "points": [
          "Domain restrictions make sine and cosine invertible.",
          "Inverse functions return principal angles in fixed ranges.",
          "Compositions simplify only under the correct domain conditions.",
          "Equation solving requires adding symmetry and periodicity after finding a principal angle.",
          "Every inverse trigonometric function uses a one-to-one restriction.",
          "Arctangent accepts all real inputs and returns angles in Quadrants I or IV.",
          "Arcsecant and arccosecant require input magnitude at least one.",
          "Reference triangles simplify nested inverse-trigonometric expressions.",
          "Inverse functions provide principal reference angles.",
          "Unit-circle symmetry supplies other solutions in one cycle."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "beyond-right-triangles",
    "lessonSlug": "beyond-right-triangles-mastery-review",
    "title": "Beyond Right Triangles Mastery Review",
    "objectives": [
      "Connect the main ideas across the Beyond Right Triangles chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "State and apply the Law of Sines",
      "Solve ASA and AAS triangles",
      "Analyze the ambiguous SSA case",
      "Find triangle area from two sides and an included angle"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Beyond Right Triangles**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "The Law of Sines",
            "text": "State and apply the Law of Sines"
          },
          {
            "title": "The Law of Cosines",
            "text": "Apply the Law of Cosines in SAS and SSS cases"
          },
          {
            "title": "Law of Sines and Law of Cosines",
            "text": "State and apply the sine rule"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "law-of-sines"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "The Law of Sines",
            "The Law of Sines matches each side with its opposite angle.",
            "Every side must be paired with its opposite angle."
          ],
          [
            "The Law of Cosines",
            "The Law of Cosines solves SAS and SSS triangles.",
            "The cosine term must use the angle between the two known sides."
          ],
          [
            "Law of Sines and Law of Cosines",
            "Sine rule: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ — use with an angle–side pair.",
            "SAS needs the cosine rule; the sine rule needs an angle–side pair."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "In a triangle, $A=42^\\circ$, $B=71^\\circ$, and $a=8$. Find $b$.",
        "steps": [
          "Pair $a=8$ with $A=42^\\circ$ and $b$ with $B=71^\\circ$.",
          "Set $b/\\sin71^\\circ=8/\\sin42^\\circ$.",
          "Solve and round at the end."
        ],
        "answer": "$b\\approx11.30$."
      },
      {
        "kind": "example",
        "prompt": "Two sides are 9 and 12 with included angle $60^\\circ$. Find the opposite side.",
        "steps": [
          "Use $c^2=9^2+12^2-2(9)(12)\\cos60^\\circ$.",
          "Evaluate: $c^2=81+144-108=117$.",
          "Take the positive square root."
        ],
        "answer": "$c=\\sqrt{117}=3\\sqrt{13}\\approx10.82$."
      },
      {
        "kind": "example",
        "prompt": "In triangle ABC, $A = 40°$, $a = 8$, $B = 65°$. Find $b$.",
        "steps": [
          "Sine rule: $\\frac{8}{\\sin 40°} = \\frac{b}{\\sin 65°}$.",
          "$b = \\frac{8 \\sin 65°}{\\sin 40°} = \\frac{8 \\times 0.9063}{0.6428}$."
        ],
        "answer": "$b \\approx 11.28$."
      },
      {
        "kind": "example",
        "prompt": "Given $A=30^\\circ$, $a=7$, and $b=10$, determine the possible values of $B$.",
        "steps": [
          "Use $\\sin B=b\\sin A/a=5/7$.",
          "The acute solution is $B_1\\approx45.58^\\circ$.",
          "The supplement $B_2\\approx134.42^\\circ$ also leaves a positive third angle."
        ],
        "answer": "Two triangles are possible: $B\\approx45.58^\\circ$ or $134.42^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find the largest angle of a triangle with sides 5, 7, and 10.",
        "steps": [
          "The largest angle $C$ is opposite side 10.",
          "$\\cos C=(5^2+7^2-10^2)/(2\\cdot5\\cdot7)=-13/35$.",
          "Apply arccos."
        ],
        "answer": "$C\\approx111.8^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find side $c$ given $a=5$, $b=7$, $C=60°$.",
        "steps": [
          "$c^2 = 25 + 49 - 2(5)(7)\\cos 60° = 74 - 70(0.5) = 39$.",
          "$c = \\sqrt{39}$."
        ],
        "answer": "$c \\approx 6.24$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Pairing a side with an adjacent angle.",
            "right": "Every side must be paired with its opposite angle."
          },
          {
            "wrong": "Accepting only the acute arcsine result in an SSA problem.",
            "right": "Test the supplementary angle whenever it can produce a valid triangle."
          },
          {
            "wrong": "Using a non-included angle in an SAS substitution.",
            "right": "The cosine term must use the angle between the two known sides."
          },
          {
            "wrong": "Rounding an intermediate angle before finding the last side.",
            "right": "Carry full precision through the calculation and round only final results."
          },
          {
            "wrong": "Using the sine rule when you have SAS (two sides and the included angle).",
            "right": "SAS needs the cosine rule; the sine rule needs an angle–side pair."
          },
          {
            "wrong": "Forgetting the ambiguous case in SSA problems.",
            "right": "Always check if the supplementary angle also gives a valid triangle."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "The Law of Sines is immediately usable when you know…",
            "options": [
              "only three angles",
              "a side and its opposite angle",
              "three sides only",
              "one angle only"
            ],
            "answer": 1,
            "explanation": "A complete opposite pair anchors the proportion."
          },
          {
            "prompt": "The ambiguous case occurs with…",
            "options": [
              "ASA",
              "AAS",
              "SSA",
              "SSS"
            ],
            "answer": 2,
            "explanation": "SSA can produce zero, one, or two triangles."
          },
          {
            "prompt": "Area from sides 6 and 9 with included angle 30° is…",
            "options": [
              "13.5",
              "27",
              "54",
              "81"
            ],
            "answer": 0,
            "explanation": "K=1/2·6·9·1/2=13.5."
          },
          {
            "prompt": "If larger side b is opposite angle B, then compared with a smaller side a…",
            "options": [
              "B must be smaller",
              "B must be larger",
              "B must equal A",
              "no relationship exists"
            ],
            "answer": 1,
            "explanation": "In a triangle, larger sides face larger angles."
          },
          {
            "prompt": "The Law of Cosines is the direct choice for…",
            "options": [
              "ASA",
              "AAS",
              "SAS",
              "one side only"
            ],
            "answer": 2,
            "explanation": "SAS gives two sides and their included angle."
          },
          {
            "prompt": "If $C=90^\\circ$, the cosine law becomes…",
            "options": [
              "the sine rule",
              "the Pythagorean theorem",
              "Heron's formula",
              "sector area"
            ],
            "answer": 1,
            "explanation": "cos 90°=0."
          },
          {
            "prompt": "The semiperimeter of sides 6, 8, 10 is…",
            "options": [
              "12",
              "18",
              "24",
              "48"
            ],
            "answer": 0,
            "explanation": "(6+8+10)/2=12."
          },
          {
            "prompt": "For three known sides, first verify…",
            "options": [
              "the unit circle",
              "the triangle inequality",
              "the angle is acute",
              "all sides are integers"
            ],
            "answer": 1,
            "explanation": "The sum of any two sides must exceed the third."
          },
          {
            "prompt": "Which rule needs an angle–side pair?",
            "options": [
              "Sine rule",
              "Cosine rule"
            ],
            "answer": 0,
            "explanation": "The sine rule uses a/sin A = b/sin B."
          },
          {
            "prompt": "Which rule works for SSS (three sides known)?",
            "options": [
              "Sine rule",
              "Cosine rule"
            ],
            "answer": 1,
            "explanation": "The cosine rule rearranges to find an angle from three sides."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "marks": 1,
            "prompt": "Which rule needs a known angle–side pair?",
            "options": [
              "Sine",
              "Cosine",
              "Either"
            ],
            "answer": 0,
            "explanation": "Sine rule."
          },
          {
            "type": "mc",
            "marks": 1,
            "prompt": "The cosine rule generalises which theorem?",
            "options": [
              "Pythagoras",
              "Euclid's",
              "Thales'"
            ],
            "answer": 0,
            "explanation": "When C=90° the cos term vanishes, giving Pythagoras."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "Area = ½(5)(8) sin 30° = ?",
            "options": [
              "10",
              "20",
              "40",
              "5"
            ],
            "answer": 0,
            "explanation": "½×5×8×0.5 = 10."
          },
          {
            "type": "mc",
            "marks": 2,
            "prompt": "SSA can give how many possible triangles?",
            "options": [
              "Always 1",
              "0, 1, or 2",
              "Always 2"
            ],
            "answer": 1,
            "explanation": "The ambiguous case."
          },
          {
            "type": "mc",
            "prompt": "The Law of Sines is immediately usable when you know…",
            "options": [
              "only three angles",
              "a side and its opposite angle",
              "three sides only",
              "one angle only"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "A complete opposite pair anchors the proportion."
          },
          {
            "type": "mc",
            "prompt": "The ambiguous case occurs with…",
            "options": [
              "ASA",
              "AAS",
              "SSA",
              "SSS"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "SSA can produce zero, one, or two triangles."
          }
        ],
        "passMark": 5
      },
      {
        "kind": "summary",
        "points": [
          "The Law of Sines matches each side with its opposite angle.",
          "ASA and AAS produce a unique triangle.",
          "SSA may produce zero, one, or two triangles.",
          "The sine area formula and bearing diagrams extend the law to applications.",
          "The Law of Cosines solves SAS and SSS triangles.",
          "It reduces to Pythagoras for a right angle.",
          "The largest side is paired with the largest angle.",
          "Heron's formula finds area directly from three sides.",
          "Sine rule: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ — use with an angle–side pair.",
          "Cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$ — use for SAS or SSS."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polar-coordinates-and-applications",
    "lessonSlug": "polar-coordinates-and-applications-mastery-review",
    "title": "Polar Coordinates and Applications Mastery Review",
    "objectives": [
      "Connect the main ideas across the Polar Coordinates and Applications chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Plot points in polar coordinates",
      "Find equivalent polar representations",
      "Convert points between polar and rectangular coordinates",
      "Convert equations between coordinate systems"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Polar Coordinates and Applications**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Polar Coordinates and Equations",
            "text": "Plot points in polar coordinates"
          },
          {
            "title": "Graphing Polar Equations",
            "text": "Test polar equations for common symmetries"
          },
          {
            "title": "Polar Representations of Complex Numbers",
            "text": "Plot complex numbers in the complex plane"
          },
          {
            "title": "Complex Products, Powers, Quotients, and Roots",
            "text": "Multiply and divide complex numbers in polar form"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "polar-coordinates"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Polar Coordinates and Equations",
            "Polar coordinates encode distance and direction.",
            "Use the signs of $x$ and $y$, or an atan2-style interpretation, to select the angle."
          ],
          [
            "Graphing Polar Equations",
            "Polar graphing uses signed radius and changing direction.",
            "Even $n$ produces $2n$ petals; odd $n$ produces $n$."
          ],
          [
            "Polar Representations of Complex Numbers",
            "Complex numbers are points in a two-dimensional plane.",
            "Locate the complex point first and select the corresponding argument."
          ],
          [
            "Complex Products, Powers, Quotients, and Roots",
            "Polar multiplication combines scaling and rotation.",
            "Multiply moduli; add arguments."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Convert $(r,\\theta)=(4,5\\pi/6)$ to rectangular coordinates.",
        "steps": [
          "Use $x=4\\cos(5\\pi/6)$ and $y=4\\sin(5\\pi/6)$.",
          "Substitute exact unit-circle values."
        ],
        "answer": "$(x,y)=(-2\\sqrt3,2)$."
      },
      {
        "kind": "example",
        "prompt": "Describe $r=4\\cos3\\theta$.",
        "steps": [
          "This is a rose curve with odd $n=3$, so it has three petals.",
          "The maximum radius is 4.",
          "A cosine rose has one petal centered on the polar axis."
        ],
        "answer": "A three-petal rose with petal length 4."
      },
      {
        "kind": "example",
        "prompt": "Write $z=-1+i\\sqrt3$ in polar form.",
        "steps": [
          "$r=\\sqrt{1+3}=2$.",
          "The point is in Quadrant II with reference angle $\\pi/3$.",
          "Therefore an argument is $2\\pi/3$."
        ],
        "answer": "$z=2(\\cos(2\\pi/3)+i\\sin(2\\pi/3))=2e^{2\\pi i/3}$."
      },
      {
        "kind": "example",
        "prompt": "Compute $[2\\operatorname{cis}(\\pi/6)]^4$.",
        "steps": [
          "Raise the modulus: $2^4=16$.",
          "Multiply the argument: $4(\\pi/6)=2\\pi/3$.",
          "Write the result in polar or rectangular form."
        ],
        "answer": "$16\\operatorname{cis}(2\\pi/3)=-8+8\\sqrt3i$."
      },
      {
        "kind": "example",
        "prompt": "Convert $x^2+y^2=6x$ to polar form.",
        "steps": [
          "Replace $x^2+y^2$ with $r^2$ and $x$ with $r\\cos\\theta$.",
          "Obtain $r^2=6r\\cos\\theta$.",
          "The simplified curve equation is $r=6\\cos\\theta$, with the pole included."
        ],
        "answer": "$r=6\\cos\\theta$, a circle of radius 3 centered at $(3,0)$."
      },
      {
        "kind": "example",
        "prompt": "Find the pole crossings of $r=2-2\\sin\\theta$ on $[0,2\\pi)$.",
        "steps": [
          "Set $r=0$: $2-2\\sin\\theta=0$.",
          "Thus $\\sin\\theta=1$.",
          "On the interval, $\\theta=\\pi/2$."
        ],
        "answer": "The cardioid reaches the pole at $\\theta=\\pi/2$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using arctangent without correcting the quadrant.",
            "right": "Use the signs of $x$ and $y$, or an atan2-style interpretation, to select the angle."
          },
          {
            "wrong": "Assuming a polar point has only one coordinate pair.",
            "right": "Adding full turns or reversing the radius gives equivalent representations."
          },
          {
            "wrong": "Counting only $n$ petals for every rose curve.",
            "right": "Even $n$ produces $2n$ petals; odd $n$ produces $n$."
          },
          {
            "wrong": "Discarding negative $r$ values.",
            "right": "A negative radius plots in the opposite direction and is part of the curve."
          },
          {
            "wrong": "Using $\\arctan(y/x)$ without checking the quadrant.",
            "right": "Locate the complex point first and select the corresponding argument."
          },
          {
            "wrong": "Writing the modulus as a negative number.",
            "right": "The modulus is a nonnegative distance from the origin."
          },
          {
            "wrong": "Adding moduli when multiplying.",
            "right": "Multiply moduli; add arguments."
          },
          {
            "wrong": "Giving only the principal root.",
            "right": "An $n$th-root problem has $n$ distinct complex roots when the number is nonzero."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "For $(r,θ)=(2,π/2)$, the rectangular point is…",
            "options": [
              "(2,0)",
              "(0,2)",
              "(−2,0)",
              "(0,−2)"
            ],
            "answer": 1,
            "explanation": "x=0 and y=2."
          },
          {
            "prompt": "$x^2+y^2$ equals…",
            "options": [
              "r",
              "r²",
              "θ²",
              "tan θ"
            ],
            "answer": 1,
            "explanation": "This is the radial-distance identity."
          },
          {
            "prompt": "A coordinate equivalent to $(3,π/4)$ is…",
            "options": [
              "(3,5π/4)",
              "(−3,5π/4)",
              "(−3,π/4)",
              "(3,3π/4)"
            ],
            "answer": 1,
            "explanation": "Reverse r and add π."
          },
          {
            "prompt": "The polar equation $r=5$ describes…",
            "options": [
              "a vertical line",
              "a circle centered at the pole",
              "a parabola",
              "one point"
            ],
            "answer": 1,
            "explanation": "Every point lies five units from the pole."
          },
          {
            "prompt": "$r=3\\cos2θ$ has how many petals?",
            "options": [
              "2",
              "3",
              "4",
              "6"
            ],
            "answer": 2,
            "explanation": "Even n gives 2n petals."
          },
          {
            "prompt": "A cardioid occurs in the limacon family when…",
            "options": [
              "a=0",
              "|a|=|b|",
              "b=0",
              "a²+b²=1"
            ],
            "answer": 1,
            "explanation": "Equal magnitudes create the cusp at the pole."
          },
          {
            "prompt": "To find a pole crossing, solve…",
            "options": [
              "θ=0",
              "r=0",
              "r=1",
              "dr/dθ=0 only"
            ],
            "answer": 1,
            "explanation": "The pole has radius zero."
          },
          {
            "prompt": "Replacing θ with −θ tests symmetry about…",
            "options": [
              "the pole",
              "the polar axis",
              "the vertical axis",
              "the line θ=π/4"
            ],
            "answer": 1,
            "explanation": "This is the polar-axis symmetry test."
          },
          {
            "prompt": "The modulus of $3+4i$ is…",
            "options": [
              "3",
              "4",
              "5",
              "7"
            ],
            "answer": 2,
            "explanation": "√(9+16)=5."
          },
          {
            "prompt": "Multiplying an argument by adding $2π$ changes…",
            "options": [
              "the complex number",
              "only its representation",
              "the modulus",
              "the real part only"
            ],
            "answer": 1,
            "explanation": "Arguments differing by full turns are coterminal."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "For $(r,θ)=(2,π/2)$, the rectangular point is…",
            "options": [
              "(2,0)",
              "(0,2)",
              "(−2,0)",
              "(0,−2)"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "x=0 and y=2."
          },
          {
            "type": "mc",
            "prompt": "$x^2+y^2$ equals…",
            "options": [
              "r",
              "r²",
              "θ²",
              "tan θ"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "This is the radial-distance identity."
          },
          {
            "type": "mc",
            "prompt": "A coordinate equivalent to $(3,π/4)$ is…",
            "options": [
              "(3,5π/4)",
              "(−3,5π/4)",
              "(−3,π/4)",
              "(3,3π/4)"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Reverse r and add π."
          },
          {
            "type": "mc",
            "prompt": "The polar equation $r=5$ describes…",
            "options": [
              "a vertical line",
              "a circle centered at the pole",
              "a parabola",
              "one point"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Every point lies five units from the pole."
          },
          {
            "type": "mc",
            "prompt": "$r=3\\cos2θ$ has how many petals?",
            "options": [
              "2",
              "3",
              "4",
              "6"
            ],
            "answer": 2,
            "marks": 1,
            "explanation": "Even n gives 2n petals."
          },
          {
            "type": "mc",
            "prompt": "A cardioid occurs in the limacon family when…",
            "options": [
              "a=0",
              "|a|=|b|",
              "b=0",
              "a²+b²=1"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Equal magnitudes create the cusp at the pole."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Polar coordinates encode distance and direction.",
          "A point has infinitely many equivalent polar representations.",
          "The standard conversion identities connect polar and rectangular systems.",
          "Polar equations often simplify curves with circular symmetry.",
          "Polar graphing uses signed radius and changing direction.",
          "Symmetry and key-angle tables organize an accurate sketch.",
          "Parameter relationships classify limacons, roses, and lemniscates.",
          "Zeros of radius identify pole crossings.",
          "Complex numbers are points in a two-dimensional plane.",
          "Modulus and argument provide polar coordinates for a complex number."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vectors",
    "lessonSlug": "vectors-mastery-review",
    "title": "Vectors Mastery Review",
    "objectives": [
      "Connect the main ideas across the Vectors chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Distinguish vectors from scalars",
      "Represent vectors geometrically and by components",
      "Add, subtract, and scale vectors",
      "Compute magnitude and direction"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Vectors**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Vector Properties and Operations",
            "text": "Distinguish vectors from scalars"
          },
          {
            "title": "The Unit Vector and Vector Applications",
            "text": "Normalize a nonzero vector"
          },
          {
            "title": "The Dot Product",
            "text": "Compute the dot product algebraically and geometrically"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "vector-addition"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Vector Properties and Operations",
            "Vectors combine magnitude with direction.",
            "Combine components first; then find the magnitude of the resultant."
          ],
          [
            "The Unit Vector and Vector Applications",
            "Unit vectors separate direction from magnitude.",
            "Normalize by the magnitude $\\sqrt{x^2+y^2}$."
          ],
          [
            "The Dot Product",
            "The dot product measures alignment between vectors.",
            "The dot product is a scalar; projection produces a vector."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Let $\\mathbf u=\\langle3,-2\\rangle$ and $\\mathbf v=\\langle-1,5\\rangle$. Find $2\\mathbf u-\\mathbf v$.",
        "steps": [
          "$2\\mathbf u=\\langle6,-4\\rangle$.",
          "Subtract component-wise: $\\langle6,-4\\rangle-\\langle-1,5\\rangle$."
        ],
        "answer": "$2\\mathbf u-\\mathbf v=\\langle7,-9\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Find a unit vector in the direction of $\\langle-5,12\\rangle$.",
        "steps": [
          "The magnitude is $\\sqrt{25+144}=13$.",
          "Divide each component by 13."
        ],
        "answer": "$\\langle-5/13,12/13\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Find the angle between $\\langle1,2\\rangle$ and $\\langle3,-1\\rangle$.",
        "steps": [
          "Dot product: $1(3)+2(-1)=1$.",
          "Magnitudes are $\\sqrt5$ and $\\sqrt{10}$.",
          "$\\cos\\theta=1/\\sqrt{50}$."
        ],
        "answer": "$\\theta=\\arccos(1/\\sqrt{50})\\approx81.9^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find the magnitude and direction of $\\langle-3,3\\rangle$.",
        "steps": [
          "Magnitude is $\\sqrt{9+9}=3\\sqrt2$.",
          "The vector lies in Quadrant II with reference angle $45^\\circ$."
        ],
        "answer": "Magnitude $3\\sqrt2$; direction angle $135^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Write a force of 80 N at $35^\\circ$ above the positive horizontal axis in component form.",
        "steps": [
          "Use $\\mathbf F=80\\langle\\cos35^\\circ,\\sin35^\\circ\\rangle$.",
          "Evaluate each component."
        ],
        "answer": "$\\mathbf F\\approx\\langle65.53,45.89\\rangle$ N."
      },
      {
        "kind": "example",
        "prompt": "Find the projection of $\\mathbf u=\\langle4,2\\rangle$ onto $\\mathbf v=\\langle1,1\\rangle$.",
        "steps": [
          "$\\mathbf u\\cdot\\mathbf v=6$ and $\\|\\mathbf v\\|^2=2$.",
          "Multiply $(6/2)\\mathbf v$."
        ],
        "answer": "$\\operatorname{proj}_{\\mathbf v}\\mathbf u=\\langle3,3\\rangle$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Adding vector magnitudes instead of components.",
            "right": "Combine components first; then find the magnitude of the resultant."
          },
          {
            "wrong": "Using a principal arctangent angle without checking the component signs.",
            "right": "Use the quadrant to correct the direction angle."
          },
          {
            "wrong": "Dividing a vector by the sum of its components.",
            "right": "Normalize by the magnitude $\\sqrt{x^2+y^2}$."
          },
          {
            "wrong": "Using bearing degrees directly as a standard direction angle.",
            "right": "Convert the bearing from its north/south reference to the standard angle measured from positive $x$."
          },
          {
            "wrong": "Expecting the dot product to be a vector.",
            "right": "The dot product is a scalar; projection produces a vector."
          },
          {
            "wrong": "Dividing projection by $\\|\\mathbf v\\|$ instead of its square.",
            "right": "The vector-projection coefficient uses $\\|\\mathbf v\\|^2$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "Which is a vector quantity?",
            "options": [
              "speed",
              "temperature",
              "mass",
              "velocity"
            ],
            "answer": 3,
            "explanation": "Velocity includes direction."
          },
          {
            "prompt": "$\\langle2,3\\rangle+\\langle-5,1\\rangle$ is…",
            "options": [
              "⟨7,4⟩",
              "⟨−3,4⟩",
              "⟨−3,2⟩",
              "⟨10,3⟩"
            ],
            "answer": 1,
            "explanation": "Add corresponding components."
          },
          {
            "prompt": "The magnitude of $\\langle6,8\\rangle$ is…",
            "options": [
              "10",
              "14",
              "48",
              "100"
            ],
            "answer": 0,
            "explanation": "√(36+64)=10."
          },
          {
            "prompt": "Multiplying a vector by −2…",
            "options": [
              "only rotates it 90°",
              "doubles magnitude and reverses direction",
              "halves magnitude",
              "does not change it"
            ],
            "answer": 1,
            "explanation": "A negative scalar reverses direction."
          },
          {
            "prompt": "A unit vector has magnitude…",
            "options": [
              "0",
              "1",
              "π",
              "depends on direction"
            ],
            "answer": 1,
            "explanation": "Its defining property is magnitude one."
          },
          {
            "prompt": "$\\mathbf i$ equals…",
            "options": [
              "⟨0,1⟩",
              "⟨1,0⟩",
              "⟨1,1⟩",
              "⟨−1,0⟩"
            ],
            "answer": 1,
            "explanation": "i points along positive x."
          },
          {
            "prompt": "A vector of magnitude 5 at angle 0 has components…",
            "options": [
              "⟨0,5⟩",
              "⟨5,0⟩",
              "⟨5,5⟩",
              "⟨−5,0⟩"
            ],
            "answer": 1,
            "explanation": "cos0=1 and sin0=0."
          },
          {
            "prompt": "The zero vector can be normalized…",
            "options": [
              "always",
              "only in degrees",
              "never",
              "only in 3D"
            ],
            "answer": 2,
            "explanation": "Its magnitude is zero and it has no defined direction."
          },
          {
            "prompt": "If $\\mathbf u\\cdot\\mathbf v=0$ for nonzero vectors, they are…",
            "options": [
              "parallel",
              "perpendicular",
              "equal",
              "opposite"
            ],
            "answer": 1,
            "explanation": "Zero dot product characterizes orthogonality."
          },
          {
            "prompt": "$\\langle2,3\\rangle\\cdot\\langle4,-1\\rangle$ is…",
            "options": [
              "5",
              "8",
              "11",
              "⟨8,−3⟩"
            ],
            "answer": 0,
            "explanation": "2·4+3·(−1)=5."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "Which is a vector quantity?",
            "options": [
              "speed",
              "temperature",
              "mass",
              "velocity"
            ],
            "answer": 3,
            "marks": 1,
            "explanation": "Velocity includes direction."
          },
          {
            "type": "mc",
            "prompt": "$\\langle2,3\\rangle+\\langle-5,1\\rangle$ is…",
            "options": [
              "⟨7,4⟩",
              "⟨−3,4⟩",
              "⟨−3,2⟩",
              "⟨10,3⟩"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Add corresponding components."
          },
          {
            "type": "mc",
            "prompt": "The magnitude of $\\langle6,8\\rangle$ is…",
            "options": [
              "10",
              "14",
              "48",
              "100"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "√(36+64)=10."
          },
          {
            "type": "mc",
            "prompt": "Multiplying a vector by −2…",
            "options": [
              "only rotates it 90°",
              "doubles magnitude and reverses direction",
              "halves magnitude",
              "does not change it"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "A negative scalar reverses direction."
          },
          {
            "type": "mc",
            "prompt": "A unit vector has magnitude…",
            "options": [
              "0",
              "1",
              "π",
              "depends on direction"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Its defining property is magnitude one."
          },
          {
            "type": "mc",
            "prompt": "$\\mathbf i$ equals…",
            "options": [
              "⟨0,1⟩",
              "⟨1,0⟩",
              "⟨1,1⟩",
              "⟨−1,0⟩"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "i points along positive x."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Vectors combine magnitude with direction.",
          "Components make geometric operations algebraic.",
          "Magnitude comes from the Pythagorean theorem.",
          "Direction recovery requires quadrant awareness.",
          "Unit vectors separate direction from magnitude.",
          "The vectors $\\mathbf i$ and $\\mathbf j$ form the standard component basis.",
          "Magnitude and direction create components through cosine and sine.",
          "Vector addition models forces, wind, currents, and navigation.",
          "The dot product measures alignment between vectors.",
          "The angle formula connects components with geometry."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "parametric-equations",
    "lessonSlug": "parametric-equations-mastery-review",
    "title": "Parametric Equations Mastery Review",
    "objectives": [
      "Connect the main ideas across the Parametric Equations chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Plot parametric curves from a value table",
      "Eliminate a parameter when possible",
      "Determine the traced portion of a curve",
      "Identify orientation and repeated tracing"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Parametric Equations**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Sketching Curves Described by Parametric Equations",
            "text": "Plot parametric curves from a value table"
          },
          {
            "title": "Parametric Descriptions for Oriented Curves",
            "text": "Construct parametrizations with a specified orientation"
          }
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "parametric-curve"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Sketching Curves Described by Parametric Equations",
            "Parametric equations describe both shape and motion.",
            "State the portion and direction represented by the allowed $t$ values."
          ],
          [
            "Parametric Descriptions for Oriented Curves",
            "A geometric curve admits many parametrizations.",
            "Test points and verify both path and direction after any parameter change."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Identify and orient $x=2\\cos t$, $y=2\\sin t$, $0\\le t\\le2\\pi$.",
        "steps": [
          "Eliminate $t$: $x^2/4+y^2/4=1$.",
          "At $t=0$, the point is $(2,0)$.",
          "As $t$ increases slightly, $y$ becomes positive."
        ],
        "answer": "The circle $x^2+y^2=4$ is traced once counter-clockwise from $(2,0)$."
      },
      {
        "kind": "example",
        "prompt": "Parametrize the line segment from $(2,-1)$ to $(8,5)$.",
        "steps": [
          "Use $(1-t)P+tQ$ for $0\\le t\\le1$.",
          "Simplify each component."
        ],
        "answer": "$x=2+6t$, $y=-1+6t$, $0\\le t\\le1$."
      },
      {
        "kind": "example",
        "prompt": "Eliminate $t$ from $x=t-1$, $y=t^2+2$.",
        "steps": [
          "Solve $t=x+1$.",
          "Substitute into $y=t^2+2$."
        ],
        "answer": "$y=(x+1)^2+2$, a parabola opening upward."
      },
      {
        "kind": "example",
        "prompt": "A ball is launched from 1.5 m with speed 20 m/s at $30^\\circ$. Write its position model using $g=9.8$ m/s².",
        "steps": [
          "Horizontal component: $20\\cos30^\\circ=10\\sqrt3$.",
          "Vertical component: $20\\sin30^\\circ=10$.",
          "Insert these values into the projectile equations."
        ],
        "answer": "$x=10\\sqrt3\\,t$, $y=1.5+10t-4.9t^2$, for $t\\ge0$ until impact."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Ignoring the parameter interval after eliminating $t$.",
            "right": "State the portion and direction represented by the allowed $t$ values."
          },
          {
            "wrong": "Connecting table points in spatial order instead of increasing-$t$ order.",
            "right": "Orientation follows the parameter, not nearest-neighbour geometry."
          },
          {
            "wrong": "Changing a circle's orientation by negating only one coordinate without checking the new path.",
            "right": "Test points and verify both path and direction after any parameter change."
          },
          {
            "wrong": "Using degrees inside a time-dependent sine or cosine model without matching calculator or software conventions.",
            "right": "State the angular unit and use radians in standard mathematical models."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "A parameter is…",
            "options": [
              "always the x-coordinate",
              "a third variable controlling x and y",
              "the slope only",
              "a fixed constant"
            ],
            "answer": 1,
            "explanation": "Both coordinates are functions of the parameter."
          },
          {
            "prompt": "$x=\\cos t$, $y=\\sin t$ describes…",
            "options": [
              "a line",
              "a unit circle",
              "a parabola",
              "a hyperbola"
            ],
            "answer": 1,
            "explanation": "The identity x²+y²=1 applies."
          },
          {
            "prompt": "Orientation is determined by…",
            "options": [
              "the curve's colour",
              "increasing parameter values",
              "the largest coordinate",
              "the equation after elimination only"
            ],
            "answer": 1,
            "explanation": "Track points as t increases."
          },
          {
            "prompt": "Eliminating $t$ may lose information about…",
            "options": [
              "the curve type",
              "orientation and restrictions",
              "all coordinates",
              "the origin"
            ],
            "answer": 1,
            "explanation": "The rectangular relation does not encode the traversal."
          },
          {
            "prompt": "Replacing $t$ with $-t$ commonly…",
            "options": [
              "doubles the radius",
              "reverses orientation",
              "moves the curve upward",
              "eliminates the parameter"
            ],
            "answer": 1,
            "explanation": "It reverses the parameter progression."
          },
          {
            "prompt": "At $t=0$, $(1-t)P+tQ$ equals…",
            "options": [
              "Q",
              "P",
              "P+Q",
              "the midpoint"
            ],
            "answer": 1,
            "explanation": "Substitute t=0."
          },
          {
            "prompt": "Projectile horizontal acceleration without air resistance is…",
            "options": [
              "g",
              "−g",
              "0",
              "v₀"
            ],
            "answer": 2,
            "explanation": "Horizontal velocity remains constant."
          },
          {
            "prompt": "Changing $t$ to $2t$ on a periodic path generally changes…",
            "options": [
              "only colour",
              "traversal speed",
              "the coordinate axes",
              "gravity"
            ],
            "answer": 1,
            "explanation": "The parameter runs through the cycle twice as fast."
          },
          {
            "prompt": "True or false: Parametric equations describe both shape and motion.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Parametric equations describe both shape and motion."
          },
          {
            "prompt": "True or false: A table provides points and orientation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A table provides points and orientation."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "A parameter is…",
            "options": [
              "always the x-coordinate",
              "a third variable controlling x and y",
              "the slope only",
              "a fixed constant"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Both coordinates are functions of the parameter."
          },
          {
            "type": "mc",
            "prompt": "$x=\\cos t$, $y=\\sin t$ describes…",
            "options": [
              "a line",
              "a unit circle",
              "a parabola",
              "a hyperbola"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The identity x²+y²=1 applies."
          },
          {
            "type": "mc",
            "prompt": "Orientation is determined by…",
            "options": [
              "the curve's colour",
              "increasing parameter values",
              "the largest coordinate",
              "the equation after elimination only"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Track points as t increases."
          },
          {
            "type": "mc",
            "prompt": "Eliminating $t$ may lose information about…",
            "options": [
              "the curve type",
              "orientation and restrictions",
              "all coordinates",
              "the origin"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The rectangular relation does not encode the traversal."
          },
          {
            "type": "mc",
            "prompt": "Replacing $t$ with $-t$ commonly…",
            "options": [
              "doubles the radius",
              "reverses orientation",
              "moves the curve upward",
              "eliminates the parameter"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "It reverses the parameter progression."
          },
          {
            "type": "mc",
            "prompt": "At $t=0$, $(1-t)P+tQ$ equals…",
            "options": [
              "Q",
              "P",
              "P+Q",
              "the midpoint"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Substitute t=0."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Parametric equations describe both shape and motion.",
          "A table provides points and orientation.",
          "Elimination identifies a rectangular relation when possible.",
          "Parameter intervals control the traced portion and repeated traversal.",
          "A geometric curve admits many parametrizations.",
          "Parameter changes control starting point, direction, and speed.",
          "Interpolation gives a direct line-segment model.",
          "Projectile equations combine constant horizontal velocity with vertical acceleration."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "conic-sections",
    "lessonSlug": "conic-sections-mastery-review",
    "title": "Conic Sections Mastery Review",
    "objectives": [
      "Connect the main ideas across the Conic Sections chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Write the equation of a circle in centre–radius form",
      "Find the centre and radius from a general equation",
      "Test whether a line is a tangent to a circle",
      "Find where a line meets a circle"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Conic Sections**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Equation of a Circle",
            "text": "Write the equation of a circle in centre–radius form"
          },
          {
            "title": "The Parabola as a Conic",
            "text": "Define a parabola by its focus and directrix"
          },
          {
            "title": "Ellipse and Hyperbola",
            "text": "Write the standard equations of an ellipse and a hyperbola"
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A circle: every point lies a fixed distance $r$ from the centre.",
        "figure": {
          "type": "conic",
          "kind": "circle"
        }
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Equation of a Circle",
            "A circle is all points at distance $r$ from a centre $(h, k)$.",
            "The form uses minus signs, so $(x - 2)$ gives $h = 2$ and $(y + 3) = (y - (-3))$ gives $k = -3$: centre $(2, -3)$."
          ],
          [
            "The Parabola as a Conic",
            "A parabola is the set of points equidistant from a focus and a directrix.",
            "The standard form is $x^2 = 4py$, so set the coefficient equal to $4p$: here $p = 3$, not $12$."
          ],
          [
            "Ellipse and Hyperbola",
            "Ellipse: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, foci with $c^2 = a^2 - b^2$.",
            "The ellipse uses $c^2 = a^2 - b^2$; the hyperbola uses $c^2 = a^2 + b^2$."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Write the equation of the circle with centre $(2, -3)$ and radius $5$.",
        "steps": [
          "Substitute $h = 2$, $k = -3$, $r = 5$ into $(x-h)^2 + (y-k)^2 = r^2$.",
          "Note that $y - (-3) = y + 3$."
        ],
        "answer": "$(x - 2)^2 + (y + 3)^2 = 25$."
      },
      {
        "kind": "example",
        "prompt": "Find the focus and directrix of $x^2 = 12y$.",
        "steps": [
          "Compare with $x^2 = 4py$, so $4p = 12$ and $p = 3$.",
          "The focus is at $(0, p)$ and the directrix is $y = -p$."
        ],
        "answer": "Focus $(0, 3)$, directrix $y = -3$."
      },
      {
        "kind": "example",
        "prompt": "Find the foci and eccentricity of $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
        "steps": [
          "Read off $a^2 = 25$ and $b^2 = 9$, so $a = 5$ and $b = 3$.",
          "Use $c^2 = a^2 - b^2 = 25 - 9 = 16$, so $c = 4$.",
          "Eccentricity is $e = \\frac{c}{a} = \\frac{4}{5}$."
        ],
        "answer": "Foci $(\\pm 4, 0)$, eccentricity $e = 0.8$."
      },
      {
        "kind": "example",
        "prompt": "Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.",
        "steps": [
          "Group and complete the square: $(x^2 - 6x) + (y^2 + 4y) = 12$.",
          "Add the squares of half the coefficients: $(x - 3)^2 - 9 + (y + 2)^2 - 4 = 12$.",
          "Tidy up: $(x - 3)^2 + (y + 2)^2 = 25$."
        ],
        "answer": "Centre $(3, -2)$, radius $5$."
      },
      {
        "kind": "example",
        "prompt": "A parabola has vertex at the origin and focus $(0, 2)$. Find its equation.",
        "steps": [
          "The focus is at $(0, p)$, so $p = 2$ and $4p = 8$.",
          "Use the standard form $x^2 = 4py$."
        ],
        "answer": "$x^2 = 8y$."
      },
      {
        "kind": "example",
        "prompt": "Find the asymptotes of $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
        "steps": [
          "Here $a^2 = 16$ and $b^2 = 9$, so $a = 4$ and $b = 3$.",
          "The asymptotes are $y = \\pm\\frac{b}{a}x$."
        ],
        "answer": "$y = \\pm\\frac{3}{4}x$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Reading the centre of $(x - 2)^2 + (y + 3)^2 = 25$ as $(-2, 3)$.",
            "right": "The form uses minus signs, so $(x - 2)$ gives $h = 2$ and $(y + 3) = (y - (-3))$ gives $k = -3$: centre $(2, -3)$."
          },
          {
            "wrong": "Forgetting to subtract the added constants when completing the square.",
            "right": "Every square you complete adds a constant that must be subtracted from the same side to keep the equation balanced."
          },
          {
            "wrong": "Treating the coefficient in $x^2 = 12y$ as $p$ rather than $4p$.",
            "right": "The standard form is $x^2 = 4py$, so set the coefficient equal to $4p$: here $p = 3$, not $12$."
          },
          {
            "wrong": "Mixing up the axis: using $x^2 = 4py$ for a left/right parabola.",
            "right": "$x^2 = 4py$ opens up/down; $y^2 = 4px$ opens left/right."
          },
          {
            "wrong": "Using $c^2 = a^2 - b^2$ for a hyperbola.",
            "right": "The ellipse uses $c^2 = a^2 - b^2$; the hyperbola uses $c^2 = a^2 + b^2$."
          },
          {
            "wrong": "Confusing the ellipse and hyperbola equations.",
            "right": "The ellipse adds the two terms; the hyperbola subtracts them."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: A circle is all points at distance $r$ from a centre $(h, k)$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A circle is all points at distance $r$ from a centre $(h, k)$."
          },
          {
            "prompt": "True or false: Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$."
          },
          {
            "prompt": "True or false: Complete the square to convert the general form to centre–radius form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Complete the square to convert the general form to centre–radius form."
          },
          {
            "prompt": "True or false: A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections."
          },
          {
            "prompt": "True or false: Reading the centre of $(x - 2)^2 + (y + 3)^2 = 25$ as $(-2, 3)$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "The form uses minus signs, so $(x - 2)$ gives $h = 2$ and $(y + 3) = (y - (-3))$ gives $k = -3$: centre $(2, -3)$."
          },
          {
            "prompt": "True or false: Forgetting to subtract the added constants when completing the square.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Every square you complete adds a constant that must be subtracted from the same side to keep the equation balanced."
          },
          {
            "prompt": "True or false: A parabola is the set of points equidistant from a focus and a directrix.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A parabola is the set of points equidistant from a focus and a directrix."
          },
          {
            "prompt": "True or false: Standard form $x^2 = 4py$: focus $(0, p)$, directrix $y = -p$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Standard form $x^2 = 4py$: focus $(0, p)$, directrix $y = -p$."
          },
          {
            "prompt": "True or false: $y^2 = 4px$ opens sideways; the sign of $p$ sets the direction.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "$y^2 = 4px$ opens sideways; the sign of $p$ sets the direction."
          },
          {
            "prompt": "True or false: The reflective property focuses parallel rays to the focus — the basis of dishes and headlights.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "The reflective property focuses parallel rays to the focus — the basis of dishes and headlights."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: A circle is all points at distance $r$ from a centre $(h, k)$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "A circle is all points at distance $r$ from a centre $(h, k)$."
          },
          {
            "type": "mc",
            "prompt": "True or false: Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$."
          },
          {
            "type": "mc",
            "prompt": "True or false: Complete the square to convert the general form to centre–radius form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Complete the square to convert the general form to centre–radius form."
          },
          {
            "type": "mc",
            "prompt": "True or false: A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections."
          },
          {
            "type": "mc",
            "prompt": "True or false: Reading the centre of $(x - 2)^2 + (y + 3)^2 = 25$ as $(-2, 3)$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The form uses minus signs, so $(x - 2)$ gives $h = 2$ and $(y + 3) = (y - (-3))$ gives $k = -3$: centre $(2, -3)$."
          },
          {
            "type": "mc",
            "prompt": "True or false: Forgetting to subtract the added constants when completing the square.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Every square you complete adds a constant that must be subtracted from the same side to keep the equation balanced."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "A circle is all points at distance $r$ from a centre $(h, k)$.",
          "Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$.",
          "Complete the square to convert the general form to centre–radius form.",
          "A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections.",
          "A parabola is the set of points equidistant from a focus and a directrix.",
          "Standard form $x^2 = 4py$: focus $(0, p)$, directrix $y = -p$.",
          "$y^2 = 4px$ opens sideways; the sign of $p$ sets the direction.",
          "The reflective property focuses parallel rays to the focus — the basis of dishes and headlights.",
          "Ellipse: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, foci with $c^2 = a^2 - b^2$.",
          "Hyperbola: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, asymptotes $y = \\pm\\frac{b}{a}x$, $c^2 = a^2 + b^2$."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "counting-and-combinatorics",
    "lessonSlug": "counting-and-combinatorics-mastery-review",
    "title": "Counting and Combinatorics Mastery Review",
    "objectives": [
      "Connect the main ideas across the Counting and Combinatorics chapter.",
      "Choose efficient methods and explain why they work.",
      "Solve mixed problems from foundation level to challenge level.",
      "Diagnose common errors and verify answers independently.",
      "Use the addition and multiplication principles of counting.",
      "Apply factorial notation correctly, including 0! = 1.",
      "Distinguish permutation problems from combination problems.",
      "Solve arrangements with repetition, identical objects, restrictions and circular order."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This mastery review brings together every lesson in **Counting and Combinatorics**. Use it after completing the chapter, or as a diagnostic before an examination. The review deliberately mixes straightforward recall, multi-step applications and higher-level reasoning.",
          "Work through the solved examples without looking at the answer first. Then complete the practice and graded mastery check. Any mistake should send you back to the named lesson in the skills map."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 2,
        "items": [
          {
            "title": "Permutations and Combinations",
            "text": "Use the addition and multiplication principles of counting."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "What to know and what to check",
        "headers": [
          "Lesson",
          "Core skill",
          "Accuracy check"
        ],
        "rows": [
          [
            "Permutations and Combinations",
            "Use addition for mutually exclusive cases and multiplication for staged choices.",
            "First ask whether order matters. If order does not matter, use combination."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Mastery strategy",
        "paragraphs": [
          "A strong solution does more than reach a final answer. It identifies the mathematical structure, selects a suitable method, keeps notation consistent and checks whether the result is reasonable.",
          "For mixed questions, write down what is known, what is required and which earlier result connects them. When more than one method is possible, compare efficiency and the risk of arithmetic error."
        ],
        "list": [
          "Attempt each problem before opening the solution.",
          "Keep exact values until the final rounding step.",
          "State units, restrictions and assumptions where relevant.",
          "Use an inverse operation, substitution or graphical check to verify the result."
        ]
      },
      {
        "kind": "example",
        "prompt": "Illustration 1: There are three stations, A. B and C. Five routes for going from station A to station B and four routes for going from station B to station C. Find the number of different ways through which a person can go from A to C via B.",
        "steps": [
          "This problem is an application of the Fundamental Principle of Counting. The rule of product can be used to solve this question easily.",
          "Given there are five routes for going from A to B and four routes for going from B to C. A C B Figure 5.1 Hence, by the fundamental principle of multiplication the total number of different ways",
          "=5x4 (i.e., A to B and then B to C) = 20 ways"
        ],
        "answer": "=5x4 (i.e., A to B and then B to C) = 20 ways"
      },
      {
        "kind": "example",
        "prompt": "Illustration 2: A hall has 12 gates. In how many ways, can a man enter the hall through one gate and come out through a different gate.",
        "steps": [
          "The rule of product can be used to solve this problem. There are 12 ways of entering the hall. After entering the hall the man can come out through any of 11 different gates.",
          "Hence, by the fundamental principle of multiplication, the total number of ways are 12 x 11 = 132 ways."
        ],
        "answer": "Hence, by the fundamental principle of multiplication, the total number of ways are 12 x 11 = 132 ways."
      },
      {
        "kind": "example",
        "prompt": "Illustration 3: How many numbers between 10 and 10,000 can be formed by using the digits 1, 2, 3, 4, 5 if (i) no digit is repeated in any number. (ii) digits can be repeated.",
        "steps": [
          "The numbers between 10 and 10,000 can be either two digit, three digit or four digit numbers. We consider",
          "each of these cases and try to find the number of possibilities using 1, 2, 3, 4 and 5. Finally, we add them up to get the desired result. (i) Number of two digit numbers = 5 x 4 = 20",
          "Number of three digit numbers = 5 x 4 x 3 = 60 Number of four digit numbers = 5 x 4 x 3 x 2 = 120 Total number of numbers = 20 + 60 +120 = 200 (ii) Number of two digit numbers = 5 x 5 = 25",
          "Number of three digit numbers = 5 x 5 x 5 = 125 Number of four digit numbers = 5 × 5 × 5 × 5 = 625 Total number of numbers = 25 +125 +625 = 775"
        ],
        "answer": "Number of three digit numbers = 5 x 5 x 5 = 125 Number of four digit numbers = 5 × 5 × 5 × 5 = 625 Total number of numbers = 25 +125 +625 = 775"
      },
      {
        "kind": "example",
        "prompt": "Illustration 4: Find the sum of n terms of the series whose nth term is n!×n.",
        "steps": [
          "Represent the general term in this question as a difference of two terms and then add them up to find the answer.",
          "The required sum = (1)! + 2(2)! + 3(3)! + ……. + n(n!) = (2 – 1)! + (3 – 1)2! + (4 – 1)3! + …….. + [(n + 1) – 1]n! = (2! – 1!) + (3! – 2!) + (4! – 3!) + …….. + [(n + 1)! – n!] = (n + 1)! – 1"
        ],
        "answer": "The required sum = (1)! + 2(2)! + 3(3)! + ……. + n(n!) = (2 – 1)! + (3 – 1)2! + (4 – 1)3! + …….. + [(n + 1) – 1]n! = (2! – 1!) + (3! – 2!) + (4! – 3!) + …….. + [(n + 1)! – n!] = (n + 1)! – 1"
      },
      {
        "kind": "example",
        "prompt": "Illustration 5: If 56Pr+6 : 54Pr+3 = 30800 : 1, find rP2",
        "steps": [
          "Use the formula for nPr. 56 Pr + 6 30800 56! (51 − r)! 30800 We have , = = × = => 56 x 55 (51 – r) = 30800 => r = 41 54 Pr +3 1 (50 − r)! 54! 1 Therefore, 41 P2 = 41 x 40 = 1640"
        ],
        "answer": "Use the formula for nPr. 56 Pr + 6 30800 56! (51 − r)! 30800 We have , = = × = => 56 x 55 (51 – r) = 30800 => r = 41 54 Pr +3 1 (50 − r)! 54! 1 Therefore, 41 P2 = 41 x 40 = 1640"
      },
      {
        "kind": "example",
        "prompt": "Illustration 6: Three men have 4 coats, 5 waist coats and 6 caps. In how many ways can they wear them?",
        "steps": [
          "Use the concept and understanding of Permutation, i.e. arrangement to find the answer. The total number of ways in which three men can wear 4 coats is the number of arrangements of 4 different coats",
          "taken 3 at a time. So, three men can wear 4 coats in 4P3 ways. Similarly, 5 waist coats and 6 caps can be worn by",
          "three men in 5P3 and 6P3 ways respectively. Hence, the required no. of ways = 4P3 × 5P3 × 6P3 = (4!) × (5 × 4 × 3) × (6 × 5 × 4) = 172800."
        ],
        "answer": "three men in 5P3 and 6P3 ways respectively. Hence, the required no. of ways = 4P3 × 5P3 × 6P3 = (4!) × (5 × 4 × 3) × (6 × 5 × 4) = 172800."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using permutation whenever a question contains many objects.",
            "right": "First ask whether order matters. If order does not matter, use combination."
          },
          {
            "wrong": "Forgetting to divide by factorials when identical objects are present.",
            "right": "Divide by the factorial of each group of identical objects."
          },
          {
            "wrong": "Treating circular arrangements like straight-line arrangements.",
            "right": "For a round table, fix one object or divide linear arrangements by n."
          },
          {
            "wrong": "Adding overlapping sets directly in inclusion-exclusion.",
            "right": "Subtract intersections to remove double-counting."
          },
          {
            "wrong": "Using non-negative solution formula for positive solution problems.",
            "right": "If each variable must be at least 1, first give one item to each variable or use (n-1)C(r-1)."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "A task can be done either in 8 ways or in 5 mutually exclusive ways. How many total ways?",
            "options": [
              "13",
              "40",
              "8",
              "5"
            ],
            "answer": 0,
            "explanation": "Use the addition rule: 8+5=13."
          },
          {
            "prompt": "A code has 3 letters followed by 2 digits. Repetition is allowed. How many codes?",
            "options": [
              "26^3\\times10^2",
              "26P3\\times10P2",
              "26C3\\times10C2",
              "3!2!"
            ],
            "answer": 0,
            "explanation": "Each letter position has 26 choices and each digit position has 10 choices."
          },
          {
            "prompt": "How many ways can 6 people stand in a row?",
            "options": [
              "720",
              "36",
              "120",
              "6"
            ],
            "answer": 0,
            "explanation": "Arrange all 6 distinct people: 6! = 720."
          },
          {
            "prompt": "How many ways can 3 prizes be awarded to 10 students if no student receives more than one prize?",
            "options": [
              "720",
              "120",
              "30",
              "1000"
            ],
            "answer": 0,
            "explanation": "Prizes are ordered, so use 10P3 = 10×9×8 = 720."
          },
          {
            "prompt": "How many ways can 3 students be selected from 10 students?",
            "options": [
              "120",
              "720",
              "30",
              "1000"
            ],
            "answer": 0,
            "explanation": "Selection only, so use 10C3 = 120."
          },
          {
            "prompt": "The number of arrangements of the letters of BALLOON is:",
            "options": [
              "1260",
              "5040",
              "720",
              "2520"
            ],
            "answer": 0,
            "explanation": "There are 7 letters with L repeated twice and O repeated twice: 7!/(2!2!) = 1260."
          },
          {
            "prompt": "In a circular table seating of 8 people, rotations are the same. Number of arrangements:",
            "options": [
              "7!",
              "8!",
              "8!/2",
              "6!"
            ],
            "answer": 0,
            "explanation": "Circular arrangements of n distinct objects around a table are (n-1)! = 7!."
          },
          {
            "prompt": "How many non-negative integer solutions are there to x+y+z=10?",
            "options": [
              "66",
              "36",
              "45",
              "120"
            ],
            "answer": 0,
            "explanation": "Use stars and bars: (10+3-1)C(3-1)=12C2=66."
          },
          {
            "prompt": "How many positive integer solutions are there to x+y+z=10?",
            "options": [
              "36",
              "66",
              "45",
              "120"
            ],
            "answer": 0,
            "explanation": "Use (n-1)C(r-1)=9C2=36."
          },
          {
            "prompt": "If N=2^3\\cdot3^2\\cdot5, how many positive divisors does N have?",
            "options": [
              "24",
              "18",
              "12",
              "30"
            ],
            "answer": 0,
            "explanation": "Number of divisors = (3+1)(2+1)(1+1)=24."
          }
        ],
        "stepKey": "chapterPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Chapter mastery check",
        "questions": [
          {
            "type": "mc",
            "prompt": "A task can be done either in 8 ways or in 5 mutually exclusive ways. How many total ways?",
            "options": [
              "13",
              "40",
              "8",
              "5"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use the addition rule: 8+5=13."
          },
          {
            "type": "mc",
            "prompt": "A code has 3 letters followed by 2 digits. Repetition is allowed. How many codes?",
            "options": [
              "26^3\\times10^2",
              "26P3\\times10P2",
              "26C3\\times10C2",
              "3!2!"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Each letter position has 26 choices and each digit position has 10 choices."
          },
          {
            "type": "mc",
            "prompt": "How many ways can 6 people stand in a row?",
            "options": [
              "720",
              "36",
              "120",
              "6"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Arrange all 6 distinct people: 6! = 720."
          },
          {
            "type": "mc",
            "prompt": "How many ways can 3 prizes be awarded to 10 students if no student receives more than one prize?",
            "options": [
              "720",
              "120",
              "30",
              "1000"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Prizes are ordered, so use 10P3 = 10×9×8 = 720."
          },
          {
            "type": "mc",
            "prompt": "How many ways can 3 students be selected from 10 students?",
            "options": [
              "120",
              "720",
              "30",
              "1000"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Selection only, so use 10C3 = 120."
          },
          {
            "type": "mc",
            "prompt": "The number of arrangements of the letters of BALLOON is:",
            "options": [
              "1260",
              "5040",
              "720",
              "2520"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "There are 7 letters with L repeated twice and O repeated twice: 7!/(2!2!) = 1260."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Use addition for mutually exclusive cases and multiplication for staged choices.",
          "Use permutations when order matters and combinations when order does not matter.",
          "Use factorial notation to shorten arrangement counts.",
          "Adjust for repetition, identical objects, restrictions and circular order.",
          "Use stars and bars for distributing identical objects among distinct boxes.",
          "Use inclusion-exclusion when categories overlap.",
          "Use derangements when no object is allowed to remain in its original position."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "chapterPractice",
            "label": "Complete the mixed chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  }
];
