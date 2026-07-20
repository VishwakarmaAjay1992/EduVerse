import type { LessonContent } from "@/lib/lesson-content-types";

export const permutationsAndCombinations: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "counting-and-combinatorics",
  "lessonSlug": "permutations-and-combinations",
  "title": "Permutations and Combinations",
  "objectives": [
    "Use the addition and multiplication principles of counting.",
    "Apply factorial notation correctly, including 0! = 1.",
    "Distinguish permutation problems from combination problems.",
    "Solve arrangements with repetition, identical objects, restrictions and circular order.",
    "Solve selection, grouping and distribution problems.",
    "Use stars and bars, factor-counting, inclusion-exclusion and derangements in advanced counting problems.",
    "Practice JEE-style solved examples and self-study questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "Permutations and combinations are the mathematics of counting. This chapter answers two basic questions: how many ways can objects be arranged in order, and how many ways can objects be selected when order does not matter?",
        "This lesson is placed in Mathematics → Counting and Combinatorics because the uploaded PDF chapter develops fundamental counting, factorial notation, permutations, combinations, circular arrangements, distributions, divisibility-based counting, inclusion-exclusion, derangements and the multinomial theorem.",
        "Study this chapter like a problem-solving toolbox. First decide whether the task is an arrangement or a selection, then check whether repetition, restrictions, identical objects, circular order or inclusion-exclusion is involved."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Permutation vs combination",
      "body": "A permutation is an arrangement where order matters. A combination is a selection where order does not matter."
    },
    {
      "kind": "theory",
      "heading": "1. Introduction: the central idea of counting",
      "paragraphs": [
        "The main subject of this chapter is counting. Given a set of objects, a problem may ask you to arrange some or all objects in a particular order, or to select some or all objects according to a condition.",
        "The first skill is not calculation; it is interpretation. Words such as arrange, rank, sit, order, number plate and dictionary order usually signal permutations. Words such as choose, select, committee, team, group and sample usually signal combinations."
      ]
    },
    {
      "kind": "theory",
      "heading": "2. Fundamental principle of counting",
      "paragraphs": [
        "Rule of sum: if one task can be done in m ways and another mutually exclusive task can be done in n ways, then either task can be done in m+n ways.",
        "Rule of product: if a process occurs in stages and the first stage has m choices and each such choice is followed by n choices in the next stage, the total number of ordered outcomes is mn.",
        "In long counting problems, draw blanks for positions or stages. Fill each blank with the number of available choices, then multiply for AND-type stages and add for OR-type cases."
      ]
    },
    {
      "kind": "formula",
      "latex": "m+n\\quad\\text{for mutually exclusive choices,}\\qquad mn\\quad\\text{for consecutive stages}",
      "caption": "Addition rule and multiplication rule."
    },
    {
      "kind": "theory",
      "heading": "3. Factorial notation",
      "paragraphs": [
        "The factorial n! is a compact way to write the product of consecutive positive integers from n down to 1.",
        "For any positive integer n, n! = n(n-1)(n-2)...3·2·1. Also, 0! = 1 and n! = n(n-1)!. Factorials are the language of arrangements because arranging n different objects gives n! possible orders."
      ]
    },
    {
      "kind": "formula",
      "latex": "n! = n(n-1)(n-2)\\cdots 3\\cdot2\\cdot1,\\qquad 0! = 1",
      "caption": "Factorial notation."
    },
    {
      "kind": "theory",
      "heading": "4. Permutations",
      "paragraphs": [
        "A permutation is an arrangement. The order of the objects is important. The arrangement ABC is different from BAC even though the same letters are used.",
        "The number of permutations of n different objects taken r at a time is nPr. It means fill r positions using n available distinct objects without repetition unless stated otherwise."
      ]
    },
    {
      "kind": "formula",
      "latex": "{}^nP_r=\\frac{n!}{(n-r)!}=n(n-1)(n-2)\\cdots(n-r+1)",
      "caption": "Permutation of n distinct objects taken r at a time."
    },
    {
      "kind": "theory",
      "heading": "5. Permutation with repetition",
      "paragraphs": [
        "If each of r positions can be filled by any of n objects and repetition is allowed, each blank has n choices. Therefore the number of arrangements is n^r.",
        "This is useful in passwords, objective test responses, license plates and digit-forming problems where a digit or letter may be used more than once."
      ]
    },
    {
      "kind": "formula",
      "latex": "n^r",
      "caption": "Permutations of r places from n objects when repetition is allowed."
    },
    {
      "kind": "theory",
      "heading": "6. Permutation of alike objects",
      "paragraphs": [
        "When some objects are identical, ordinary n! overcounts arrangements because swapping identical objects does not create a new arrangement.",
        "If there are n objects in total, with p alike of one kind, q alike of another kind and r alike of a third kind, divide by p!q!r!."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\frac{n!}{p!q!r!}",
      "caption": "Arrangements of n objects when p, q and r objects are alike in three groups."
    },
    {
      "kind": "theory",
      "heading": "7. Restricted permutations: inclusion, exclusion, string method and gap method",
      "paragraphs": [
        "Restrictions are conditions added to arrangements: one object must be included, one object must be excluded, selected objects must stay together, or certain objects must not be adjacent.",
        "String method: when m specified objects always come together, bind them into one block. Arrange the block with the remaining objects, then arrange the m objects inside the block.",
        "Gap method: when certain objects must not sit together, first arrange the unrestricted objects, then place restricted objects in the gaps so they remain separated.",
        "Alternating arrangement: if two types of objects must alternate, place the larger group first if the sizes differ by one; if sizes are equal, consider both possible starting types."
      ]
    },
    {
      "kind": "formula",
      "latex": "m!\\,(n-m+1)!",
      "caption": "String method for n distinct objects when m specified objects are always together."
    },
    {
      "kind": "theory",
      "heading": "8. Non-consecutive selection",
      "paragraphs": [
        "For r consecutive objects chosen from n objects in a row, there are n-r+1 possible blocks.",
        "For r consecutive objects along a circle, there are n selections when r<n, and only 1 selection when r=n."
      ]
    },
    {
      "kind": "theory",
      "heading": "9. Combinations",
      "paragraphs": [
        "A combination is a selection. Order does not matter. Selecting A, B and C is the same group as selecting C, B and A.",
        "The number of ways to choose r objects from n distinct objects is nCr. It is related to permutation by dividing by r!, because each selected group of r objects can be arranged internally in r! orders."
      ]
    },
    {
      "kind": "formula",
      "latex": "{}^nC_r=\\frac{n!}{r!(n-r)!}=\\frac{{}^nP_r}{r!}",
      "caption": "Combination formula."
    },
    {
      "kind": "table",
      "heading": "Permutation and combination comparison",
      "headers": [
        "Feature",
        "Permutation",
        "Combination"
      ],
      "rows": [
        [
          "Meaning",
          "Arrangement/order",
          "Selection/group"
        ],
        [
          "Order matters?",
          "Yes",
          "No"
        ],
        [
          "Clue words",
          "Arrange, rank, order, schedule, sit",
          "Choose, select, group, committee, sample"
        ],
        [
          "Formula",
          "$^nP_r=\\dfrac{n!}{(n-r)!}$",
          "$^nC_r=\\dfrac{n!}{r!(n-r)!}$"
        ]
      ]
    },
    {
      "kind": "theory",
      "heading": "10. Useful combination identities",
      "paragraphs": [
        "Selecting r objects is equivalent to rejecting n-r objects, so nCr = nC(n-r).",
        "Pascal's identity connects adjacent combinations: nCr + nC(r-1) = (n+1)Cr.",
        "The sum of all selections from n distinct objects is 2^n, and the number of non-empty selections is 2^n - 1."
      ]
    },
    {
      "kind": "formula",
      "latex": "{}^nC_r={}^nC_{n-r},\\qquad {}^nC_r+{}^nC_{r-1}={} ^{n+1}C_r,\\qquad \\sum_{r=0}^n {}^nC_r=2^n",
      "caption": "Important combination identities."
    },
    {
      "kind": "theory",
      "heading": "11. Combinations under restrictions and alike objects",
      "paragraphs": [
        "If p particular objects must be excluded, choose all required objects from the remaining n-p objects.",
        "If p particular objects must be included in a selection of r objects, first include those p objects, then select the remaining r-p objects from the other n-p objects.",
        "For identical objects, choosing r objects from n identical items can often be done in only one way because the selected objects are indistinguishable."
      ]
    },
    {
      "kind": "formula",
      "latex": "{}^{n-p}C_r\\quad\\text{when p objects are excluded},\\qquad {}^{n-p}C_{r-p}\\quad\\text{when p objects are included}",
      "caption": "Restricted combination formulas."
    },
    {
      "kind": "theory",
      "heading": "12. Division into groups",
      "paragraphs": [
        "Division into groups is a combination problem where objects are distributed into groups of specified sizes.",
        "If groups are labelled, arrangements between groups matter. If groups are unlabelled, divide again by the factorial of the number of identical-sized groups that can be interchanged without creating a new distribution."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\frac{(m+n)!}{m!n!},\\qquad \\frac{(2n)!}{n!n!2!}",
      "caption": "Two unequal groups and two equal unlabelled groups."
    },
    {
      "kind": "theory",
      "heading": "13. Circular permutations",
      "paragraphs": [
        "In circular arrangements, rotations are treated as the same arrangement. Therefore, arranging n distinct objects around a round table gives (n-1)! arrangements.",
        "If clockwise and anticlockwise arrangements are also considered the same, as in garlands or necklaces that can be flipped, divide by 2."
      ]
    },
    {
      "kind": "formula",
      "latex": "(n-1)!\\quad\\text{around a table},\\qquad \\frac{(n-1)!}{2}\\quad\\text{for a reversible necklace or garland}",
      "caption": "Circular permutation formulas."
    },
    {
      "kind": "theory",
      "heading": "14. Linear equations with unit coefficients / distribution of identical objects",
      "paragraphs": [
        "Counting non-negative integer solutions is the same as distributing identical objects among distinct boxes when boxes may receive zero objects.",
        "Counting positive integer solutions is the same as distributing identical objects when each box must receive at least one object."
      ]
    },
    {
      "kind": "formula",
      "latex": "x_1+x_2+\\cdots+x_r=n\\Rightarrow {}^{n+r-1}C_{r-1}\\quad(x_i\\ge0),\\qquad {}^{n-1}C_{r-1}\\quad(x_i\\ge1)",
      "caption": "Stars and bars formulas."
    },
    {
      "kind": "theory",
      "heading": "15. Divisibility, sums of numbers and factors of natural numbers",
      "paragraphs": [
        "Counting can also be used in number theory. Problems may ask how many numbers satisfy a divisibility rule, what the sum of all formed numbers is, or how many factors a natural number has.",
        "If N = p^a q^b r^c ... then the number of positive divisors is (a+1)(b+1)(c+1)... and the sum of divisors is the product of geometric sums for each prime power."
      ]
    },
    {
      "kind": "formula",
      "latex": "N=p^a q^b r^c\\cdots\\Rightarrow d(N)=(a+1)(b+1)(c+1)\\cdots",
      "caption": "Number of divisors of a natural number."
    },
    {
      "kind": "theory",
      "heading": "16. Exponent of a prime in n!",
      "paragraphs": [
        "Legendre's formula counts the exponent of a prime p in n!. It is especially useful for trailing zeroes because a zero at the end of a factorial comes from a factor 10 = 2×5, and factors of 5 are usually fewer than factors of 2.",
        "The exponent is found by adding how many multiples of p, p², p³ and so on occur up to n."
      ]
    },
    {
      "kind": "formula",
      "latex": "e_p(n!)=\\left\\lfloor\\frac{n}{p}\\right\\rfloor+\\left\\lfloor\\frac{n}{p^2}\\right\\rfloor+\\left\\lfloor\\frac{n}{p^3}\\right\\rfloor+\\cdots",
      "caption": "Legendre's formula."
    },
    {
      "kind": "theory",
      "heading": "17. Inclusion-exclusion principle",
      "paragraphs": [
        "When categories overlap, simple addition double-counts elements in intersections. Inclusion-exclusion corrects this by adding individual set sizes, subtracting pairwise overlaps, adding triple overlaps, and continuing with alternating signs.",
        "For two sets, |A∪B| = |A| + |B| - |A∩B|. For three sets, add individual sizes, subtract all pairwise intersections, then add the triple intersection."
      ]
    },
    {
      "kind": "formula",
      "latex": "|A\\cup B|=|A|+|B|-|A\\cap B|",
      "caption": "Two-set inclusion-exclusion."
    },
    {
      "kind": "theory",
      "heading": "18. Derangements",
      "paragraphs": [
        "A derangement is an arrangement in which no object goes to its original or correct position. A classic example is putting letters into envelopes so that no letter goes into the correct envelope.",
        "Derangements are a major application of inclusion-exclusion."
      ]
    },
    {
      "kind": "formula",
      "latex": "!n=n!\\left(1-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\cdots+\\frac{(-1)^n}{n!}\\right)",
      "caption": "Derangement formula."
    },
    {
      "kind": "theory",
      "heading": "19. Multinomial theorem",
      "paragraphs": [
        "The multinomial theorem generalises the binomial theorem to more than two terms. It counts how many ways powers of several terms can combine to form a term in an expansion.",
        "It is useful for coefficient problems, distribution of total marks and advanced counting with many categories."
      ]
    },
    {
      "kind": "formula",
      "latex": "(x_1+x_2+\\cdots+x_k)^n=\\sum_{r_1+\\cdots+r_k=n}\\frac{n!}{r_1!r_2!\\cdots r_k!}x_1^{r_1}x_2^{r_2}\\cdots x_k^{r_k}",
      "caption": "Multinomial theorem."
    },
    {
      "kind": "theory",
      "heading": "Problem-solving tactics",
      "paragraphs": [
        "First decide whether the problem is a permutation or combination problem. Then check whether repetition is allowed, whether objects are distinct or identical, and whether restrictions such as together, apart, at least, at most or circular order appear.",
        "For non-repetition arrangements, draw blanks for the places you want to fill. Put the number of available choices above each blank and multiply. For combinations, divide the arrangement count by the factorial of the number selected when internal order has been overcounted.",
        "When constraints become complicated, use the complement method: total cases minus unwanted cases. This is often easier for exactly/at least/none type restrictions."
      ]
    },
    {
      "kind": "table",
      "heading": "Formula sheet",
      "headers": [
        "Topic",
        "Formula / result"
      ],
      "rows": [
        [
          "Permutation",
          "$^nP_r=\\dfrac{n!}{(n-r)!}$"
        ],
        [
          "Permutation with repetition",
          "$n^r$"
        ],
        [
          "Alike objects",
          "$\\dfrac{n!}{p!q!r!}$"
        ],
        [
          "Combination",
          "$^nC_r=\\dfrac{n!}{r!(n-r)!}$"
        ],
        [
          "Combination symmetry",
          "$^nC_r=^nC_{n-r}$"
        ],
        [
          "Non-empty selections",
          "$2^n-1$"
        ],
        [
          "Circular arrangements",
          "$(n-1)!$"
        ],
        [
          "Reversible necklace/garland",
          "$\\dfrac{(n-1)!}{2}$"
        ],
        [
          "Non-negative solutions",
          "$^ {n+r-1}C_{r-1}$"
        ],
        [
          "Positive solutions",
          "$^{n-1}C_{r-1}$"
        ],
        [
          "Number of divisors",
          "$(a+1)(b+1)(c+1)\\cdots$"
        ],
        [
          "Derangement",
          "$!n=n!\\left(1-\\frac1{1!}+\\frac1{2!}-\\cdots+\\frac{(-1)^n}{n!}\\right)$"
        ]
      ]
    },
    {
      "kind": "theory",
      "heading": "Solved Examples — Counting principles and factorials",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 1 to 4 from the uploaded Permutations and Combinations PDF."
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
      "kind": "theory",
      "heading": "Solved Examples — Permutations",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 5 to 16 from the uploaded Permutations and Combinations PDF."
      ]
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
      "kind": "example",
      "prompt": "Illustration 7: Suppose 8 people enter an event in a swim meet. In how many ways could the gold, silver, and bronze prizes be awarded?",
      "steps": [
        "Use the formula for nPr. The required number of ways is an arrangement of 3 people out of 8 i.e. 8! 8.7.6.5. 4 .3.2.1 8 P3 = = = 8 . 7 . 6 = 336. 5! 5. 4 .3.2.1 MASTERJEE CONCEPTS",
        "The following two steps are involved in the solution of a permutation problem: Step 1: Recognizing the objects and the places involved in the problem.",
        "Step 2: Checking whether the repetition of the objects is allowed or not. Uday Kiran G (JEE 2012, AIR 102) 4.1 Permutation with Repetition",
        "These kinds of problems occur with permutations of different objects in which some of the objects can be repeated.",
        "The no. of permutations of n different objects taken r at a time when each object may be repeated any number of times is nr."
      ],
      "answer": "The no. of permutations of n different objects taken r at a time when each object may be repeated any number of times is nr."
    },
    {
      "kind": "example",
      "prompt": "Illustration 8: A student appears in an objective test which contains 10 multiple choice questions. Each question has four choices in which one is the correct option. What maximum number of different answers can the student give? How will the answer change if each question may have more than one correct answers?",
      "steps": [
        "Use the concept of Permutation with Repetition. For the first part each question has four possible answers. So, the total possible answers = 4 × 4 × .... 10 times = 410.",
        "For the second part. Suppose the choices for each question are denoted by A, B, C and D. Now the choice A is",
        "either correct or incorrect (two ways) similarly the other choices are either correct or incorrect. Thus, this particular",
        "question can have 2 × 2 × 2 × 2 = 16 possible answers. But this includes the case when all the four choices are",
        "incorrect. Thus the total number of answers = 15. Now, as there are 10 questions and each question has 15 possible answers. Therefore the total number of answers = 1510. MASTERJEE CONCEPTS The mn or nm dilemma",
        "Let us start with an example. Q. There are 7 letters and 5 letter-boxes. In how many ways can you put the letters in the boxes?",
        "Sol: This is the typically confusing question asked frequently from the P & C area. Let’s see how you can solve this type of question.",
        "The Exhaustive Approach: One way to solve this question is through (what we will call) The Exhaustive Approach. While solving such problems, first decide which of the items (letters and letter-boxes here) is",
        "exhaustive. Exhaustive here means the entity which is sure to be used up completely. In this example, all the “letters” are sure to be placed in the boxes, whereas there is no such constraint as",
        "regards the “letter-boxes”. Some boxes could go empty. Having decided this, just go by the options we have for all the instances of the exhaustive item and you have your answer.",
        "As you can see here, every letter has 5 boxes to choose from. Thus the total would be (5 x 5 x........7 times) = (57) A similar question could be: In how many ways can 10 rings be worn on 5 fingers? Try it yourself.",
        "Chinmay S Purandare (JEE 2012, AIR 698) 4.2 Permutation of Alike Objects This kind of problems involve permutations of different objects in which some of them are similar.",
        "The number of permutations of n objects taken all at a time in which, p are alike objects of one kind, q are alike",
        "objects of second kind & r are alike objects of a third kind and the rest (n – (p + q + r)) are all different is n! p!q!r!"
      ],
      "answer": "objects of second kind & r are alike objects of a third kind and the rest (n – (p + q + r)) are all different is n! p!q!r!"
    },
    {
      "kind": "example",
      "prompt": "Illustration 9: Determine the number of permutations of the letters of the word ‘SIMPLETION’ taken all at a time.",
      "steps": [
        "In the given word the letter I occurs twice and the remaining letters occur only once. So, the concept of Permutation of Alike Objects is used to find out the answer.",
        "There are 10 letters in the word ‘SIMPLETION’ and out of these 10 letters two are identical. So, just selecting all 10",
        "objects at a time will give twice the actual result. Hence, the number of permutations of taking all the letters at a time = 10P10 / 2! = 10! / 2! = 181440. 4.3 Permutation under Restriction",
        "(a) The number of permutations of n different objects, taken r at a time, when a particular object is to be always included in each arrangement, is r. n–1Pr–1",
        "The number of permutations of n different objects, taken r at a time, when a particular object is never taken in each arrangement is n–1Pr.",
        "(b) String method: The number of permutations of n different objects, taken all at a time, when m specified objects always come together is m! × (n – m + 1)!.",
        "(c) Gap Method: The number of permutations when no two given objects occur together. In order to find the number of permutations when no two given objects occur together.",
        "(a) First of all, put the m objects for which there is no restriction, in a line. These m objects can be arranged in m! ways.",
        "(b) Then count the number of gaps between every two m objects for which there is no restriction, including the end positions. Number of such gaps will be (m + 1).",
        "(c) If m is the number of objects for which there is no restriction and n is the number of objects, two of which are not allowed to occur together, then the required number of ways = m! × m+1Cn × n!",
        "The number of permutations when two types of objects are to be arranged alternately (a) If their numbers differ by 1 put the object whose number is greater in the first, third, fifth.... places, etc. and",
        "the other object in the second, fourth, sixth.... places. (b) If the number of two types of objects is same, consider two cases separately keeping the first type of object",
        "in the first, third, fifth places, etc. and the second type of object in the first, third, fifth places.... and then add. 4.4 Non-Consecutive Selection",
        "The number of selections of r consecutive objects out of n objects in a row =n-r+1 n, when r < n The number of selections of r consecutive objects out of n objects along a circle =  1, when r = n"
      ],
      "answer": "The number of selections of r consecutive objects out of n objects in a row =n-r+1 n, when r < n The number of selections of r consecutive objects out of n objects along a circle =  1, when r = n"
    },
    {
      "kind": "example",
      "prompt": "Illustration 10: Find the numbers between 300 and 3000 that can be formed with the digits 0, 1, 2, 3, 4 and 5, where no digit is repeated in any number.",
      "steps": [
        "The numbers between 300 and 3000 can either be a three digit number or a four digit number. The solution is divided into these two different cases and their sum will give us the desired result.",
        "Any number between 300 and 3000 must be of three or four digits. Case I: When number is of three digits: The hundreds place can be filled by any one of the three digits 3, 4 and 5",
        "in 3 ways. The remaining two places can be filled by the remaining five digits in 5P2, ways. 5! Therefore, The number of numbers formed in this case = 3 × 5P2 = 3 × =60 3!",
        "Case II: When number is of four digits: The thousands place can be filled by any one of the two digits 1 and 2 in 2 ways and the remaining three places can be filled by the remaining five digits in 5P3 ways. 5!",
        "Therefore, The number of numbers formed in this case = 2 × 5P3 = 2 × = 120 2! Therefore, Total numbers = 60 + 120 = 180"
      ],
      "answer": "Therefore, The number of numbers formed in this case = 2 × 5P3 = 2 × = 120 2! Therefore, Total numbers = 60 + 120 = 180"
    },
    {
      "kind": "example",
      "prompt": "Illustration 11: How many words can be formed from the letters of the word ARTICLE, so that vowels occupy the even places?",
      "steps": [
        "Clearly, this is an example of Permutation under Restriction. We identify the even places and the odd places and try to find the number of ways in which the vowels and consonants can fill the spaces.",
        "There are seven places: 3 even and 4 odd in which we have to fill 3 vowels and 4 consonants. Therefore, The number of words = 3P3 . 4P4 = 3! × 4! = 6 × 24 = 144."
      ],
      "answer": "There are seven places: 3 even and 4 odd in which we have to fill 3 vowels and 4 consonants. Therefore, The number of words = 3P3 . 4P4 = 3! × 4! = 6 × 24 = 144."
    },
    {
      "kind": "example",
      "prompt": "Illustration 12: How many different words can be formed with the letters of the word ORDINATE so that (a) Four vowels occupy the odd places (b) Beginning with O (c) Beginning with O and ending with E.",
      "steps": [
        "The concept of Permutation under Restriction can be used to solve this problem. There are 4 vowels and 4 consonants. Total 8 letters.",
        "(a) No. of words = 4! × 4! = 24 × 24 = 576. Because 4 vowels are to be adjusted in 4 odd place and the 4 consonants in the remaining 4 even places. (b) 7! ways, O being fixed.",
        "(c) 6! ways, O fixed in first and E fixed in last."
      ],
      "answer": "(c) 6! ways, O fixed in first and E fixed in last."
    },
    {
      "kind": "example",
      "prompt": "Illustration 13: Find the number of ways in which 5 boys and 5 girls can be seated in a row so that (a) No two girls may sit together. (b) All the girls sit together and all the boys sit together (c) All the girls are never together.",
      "steps": [
        "Since the number of girls and the number of boys are equal they have to sit alternately. This can be used to",
        "solve (a). For (b), we keep the girls together and arrange the boys in five places. Also, the girls can be arranged",
        "amongst themselves in 5! ways. This gives us the number of arrangements. Use the answer of the second part to find (c).",
        "(a) 5 boys can be seated in a row in 5P5 = 5! ways. Now, in the 6 gaps between 5 boys, the 5 girls can be arranged in 6P5 ways. Hence, the number of ways in which no two girls sit together = 5! × 5P5 = 5! × 6!",
        "(b) The two groups of girls and boys can be arranged in 2! ways. 5 girls can be arranged among themselves in 5! ways. Similarly, 5 boys can be arranged among themselves in 5! ways. Hence, by the fundamental principle of",
        "counting, the total number of requisite seating arrangements = 2!(5! × 5!) = 2(5!)2. (c) The total number of ways in which all the girls are never together = Total number of arrangements – Total",
        "number of arrangements in which all the girls are always together = 10! – 5! × 6!"
      ],
      "answer": "number of arrangements in which all the girls are always together = 10! – 5! × 6!"
    },
    {
      "kind": "example",
      "prompt": "Illustration 14: The letters of the word OUGHT are written in all possible orders and these words are written out as in a dictionary. Find the rank of the word TOUGH in this dictionary.",
      "steps": [
        "The word TOUGH will appear after all the words that start with G, H and O. Then we look at the second letter of the words starting with T and then third. Hence, the rank of the word TOUGH will be one more than the sum of",
        "all the possibilities just mentioned. Total number of letters in the word OUGHT is 5 and all the five letters are different, the alphabetical order of these letters is G, H, O, T, U.",
        "Number of words beginning with G = 4! = 24 Number of words beginning with H = 4! = 24 Number of words beginning with O = 4! = 24 Number of words beginning with TG = 3! = 6 Number of words beginning with TH = 3! = 6",
        "Number of words beginning with TOG = 2! = 2 Number of words beginning with TOH = 2! = 2 Next come the words beginning with TOU and TOUH is the first word beginning with TOU.",
        "Therefore, Rank of ‘TOUGH’ in the dictionary = 24 + 24 + 24 + 6 + 6 + 2 + 2 + 1 = 89"
      ],
      "answer": "Therefore, Rank of ‘TOUGH’ in the dictionary = 24 + 24 + 24 + 6 + 6 + 2 + 2 + 1 = 89"
    },
    {
      "kind": "example",
      "prompt": "Illustration 15: There are 21 balls which are either white or black and the balls of same color are alike. Find the number of white balls so that, the number of arrangements of these balls in a row is maximum.",
      "steps": [
        "The property of a binomial coefficient can be used to solve this question. Let there be r white balls so that the number of arrangements of these balls in a row be maximum. Number of arrangements of these balls is",
        "21! 21 + 1 21 – 1 A= A will be maximum when r = or i.e. 10 or 11 r!(21 − r)! 2 2"
      ],
      "answer": "21! 21 + 1 21 – 1 A= A will be maximum when r = or i.e. 10 or 11 r!(21 − r)! 2 2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 16: The number plates of cars must contain 3 letters of the alphabet denoting the place and area to which its owner belongs. This is to be followed by a three-digit number. How many different number plates can be formed if: (i) Repetition of letters and digits is not allowed. (ii) Repetition of letters and digits is allowed.",
      "steps": [
        "This is a simple application of Permutation with and without repetition. There are 26 letters of alphabet and 10 digits from 0 to 9. (i) When repetition is not allowed 3 letters selected in 26 × 25 × 24 ways",
        "3 digit numbers are = 9 x 9 x 8 (as zero can’t be in the hundreds place) Therefore, The Number of plates = 26 x 25 x 24 x 9 x 9 x 8 = 10108800. (ii) When repetition is allowed 3 letters are selected 26 × 26 × 26 ways",
        "3 digit numbers are = 9 × 10 × 10 = 900 Therefore, The number of plates = 26 x 26 x 26 x 900 = 15818400. MASTERJEE CONCEPTS Constraint based arrangement Let us start with an example first:",
        "Q. In how many ways can the word VARIETY be arranged so that exactly 2 vowels are together? The problem could be easier if none or all vowels were to be kept together. Isn’t it? Well, we will do exactly that!",
        "Whenever question involving “constraints that has choices (2 vowels could be IE or AI or AE)” are asked, “go for the backward approach.” Rather than finding the favorable cases, subtract the unfavorable ones",
        "from the total possible cases. This method is more reliable. So, the solution to the above question would be: (Total arrangements of VARIETY) – (Arrangements with no vowels together + Arrangements with all the",
        "vowels together) Vaibhav Krishnan (JEE 2009, AIR 22)"
      ],
      "answer": "vowels together) Vaibhav Krishnan (JEE 2009, AIR 22)"
    },
    {
      "kind": "theory",
      "heading": "Solved Examples — Combinations, groups and distributions",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 17 to 31 from the uploaded Permutations and Combinations PDF."
      ]
    },
    {
      "kind": "example",
      "prompt": "Illustration 17: A basketball coach must select two attackers and two defenders from among three attackers and five defenders. How many different combinations of attackers and defenders can he select?",
      "steps": [
        "The number of ways two attackers and two defenders can be selected is 3C2 and 5C2 respectively. 5. 4 .3.2.1 Therefore, He can select in 3C2 × 5C2 = = 30 different combinations. 2.2"
      ],
      "answer": "The number of ways two attackers and two defenders can be selected is 3C2 and 5C2 respectively. 5. 4 .3.2.1 Therefore, He can select in 3C2 × 5C2 = = 30 different combinations. 2.2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 18: A soccer team of 11 players is to be chosen from 30 boys, of whom 4 can play only in goal, 12 can play only as forwards and the remaining 14 in any of the other positions. If the team is to include five forwards and of course, one goalkeeper, in how many ways can it be made up?",
      "steps": [
        "Proceed according to the previous question. There are: 4C1 ways of choosing the goalkeeper. l2C5 ways of choosing the forwards and 14C5 ways of choosing the",
        "other 5 players. That is, 4C1 × 12C5 × 14C5 combinations altogether = 4 x 792 x 2002 = 6342336. 5.1 Combinations under Restrictions",
        "(a) Number of ways of choosing r objects out of n different objects if p particular objects must be excluded.",
        "Consider the objects A1, A2, A3,.....,Ap, Ap+1, …........, An. If the p objects A1, A2......Ap are to be excluded then we will have to select r objects from the remaining n – p objects (Ap+1, Ap+2, …….. An).",
        "Hence the required number of ways = (n–p)Cr (b) Number of ways of choosing r objects out of n different objects if p particular objects must be included (p <= r).",
        "Consider the objects A1, A2, A3 ....... Ap, Ap+1, ……. An. If the p particular objects A1, A2, ...... Ap (say) must be",
        "included in the selection then to complete the selection, we must select (r – p) more objects to complete the selection. These objects are to be selected from the remaining n – p objects.",
        "Hence, the required number of ways = n–pCr–p (c) The total number of combinations of n different objects taken one or more at a time = 2n - 1. 5.2 Combinations of Alike Objects",
        "(a) The number of combinations of n identical objects taking (r <= n) at a time is 1. (b) The number of ways of selecting r objects out of n identical objects is n + 1.",
        "(c) If out of (p + q + r + s) objects, p are alike of one kind, q are alike of a second kind, r are alike of the third kind and s are different, then the total number of combinations is (p + 1)(q + 1)(r + 1)2s – 1",
        "Note: The list of alike objects can be extended further"
      ],
      "answer": "Note: The list of alike objects can be extended further"
    },
    {
      "kind": "example",
      "prompt": "Illustration 19: There are 4 oranges, 5 apples and 6 mangoes in a fruit basket. In how many ways can a person select fruits from among the fruits in the basket?",
      "steps": [
        "Use the concept of Combination of Alike objects described above. Here, we consider all fruits of the same type as identical. Zero or more oranges can be selected out of 4 identical oranges in 4 + 1 = 5 ways.",
        "Zero or more apples can be selected out of 5 identical apples in 5 + 1 = 6 ways. Zero or more mangoes can be selected out of 6 identical mangoes in 6 + 1 = 7 ways",
        "Therefore, The total number of selections when all the three types of fruits are selected (the number of any type of fruit may be zero) = 5 × 6 × 7 = 210.",
        "But in one of these selections number of each type of fruit is zero and hence there is no selection, this must be excluded. Therefore, The required number = 210 – 1 = 209.",
        "Caution: When all fruits of same type are different, the number of selections = (4C0 + 4C1 + …….. + 4C4)(5C0 + 5C1 + …… + 5C5) (6C0 + ……….. + 6C6) –1 = 24 x 25 x 26 – 1 = 215 – 1"
      ],
      "answer": "Caution: When all fruits of same type are different, the number of selections = (4C0 + 4C1 + …….. + 4C4)(5C0 + 5C1 + …… + 5C5) (6C0 + ……….. + 6C6) –1 = 24 x 25 x 26 – 1 = 215 – 1"
    },
    {
      "kind": "example",
      "prompt": "Illustration 20: How many four digit numbers are there whose decimal notation contains not more than two distinct digits?",
      "steps": [
        "A four digit number can consist of either only one digit or two digits as per the question. Clearly, there are nine",
        "four digit numbers with the same digit. Similarly, calculate the number of four digit numbers with two distinct digits and hence the sum gives us the desired result. Evidently any number so formed of four digits contains",
        "(i) Only one digit (like 1111, 2222,...) and there are 9 numbers. (ii) Two digits (a) if zero is one of the two, then the one more can be anyone of the nine, and these two digits can be arranged",
        "in 9C1 [3C1 + 3C2 + 3C2 + 3C3] = 63. (b) if zero is not one of them, then two of the digits have to be selected from 9, and these two can be arranged in 9C2[4C1 + 4C2 + 4C3] = 504",
        "Hence, the total number of required numbers = 567."
      ],
      "answer": "Hence, the total number of required numbers = 567."
    },
    {
      "kind": "example",
      "prompt": "Illustration 21: In how many ways can a cricket team of eleven players be chosen out of a batch of 15 players, if (a) there is no restriction on the selection (b) a particular player is always chosen (c) a particular player is never chosen 5 . 1 0 | Permutations and Combinations",
      "steps": [
        "Using the concept of combination of alike objects we can get the answer. 15 × 14 × 13 × 12 (a) The total number of ways of selecting 11 players out of 15 is = 15C11 = 15C15–11 = 15C4 = = 1365 4 ×3× 2×1",
        "(b) A particular player is always chosen. This means that 10 players are selected out of the remaining 14 players. Therefore, The required number of ways = 14C10 = 14C14–10 = 14C4 = 1001",
        "(c) The number of ways = 14C11 = 14C3 = 14 × 13 × 12 = 364 3× 2"
      ],
      "answer": "(c) The number of ways = 14C11 = 14C3 = 14 × 13 × 12 = 364 3× 2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 22: In a plane there are 37 straight lines, of which 13 pass through the point A and 11 pass through the point B. Moreover, no three lines pass through one point, no line passes both points A and B. and no two are parallel. Find the number of points of intersection of the straight lines.",
      "steps": [
        "Two non parallel straight lines give us a point of intersection. Using this idea we find the total number of points of intersection. Care should be taken that a point is not counted more than once.",
        "The number of points of intersection of 37 straight lines is 37C2. But 13 straight lines out of the given 37 straight",
        "lines pass through the same point A. Therefore, instead of getting 13C2 points, we get merely one point A. Similarly,",
        "11 straight lines out of the given 37 straight lines intersect at point B. Therefore, instead of getting 11C2 points, we",
        "get only point B. Hence, the number of intersection points of the lines in 37C2 – 13C2 – 11C2 + 2 = 535."
      ],
      "answer": "get only point B. Hence, the number of intersection points of the lines in 37C2 – 13C2 – 11C2 + 2 = 535."
    },
    {
      "kind": "example",
      "prompt": "Illustration 23: How many five-digit numbers can be made having exactly two identical digits?",
      "steps": [
        "Note that zero cannot occupy the first place. So we divide the solution into two cases when the common digit",
        "is 0 and otherwise. Calculate the number of possibilities in these two cases and their sum gives us the desired result. Case I: Two identical digits are 0, 0.",
        "The number of ways to select three more digits is 9C3. The number of arrangements of these five digits is (5! 2!) − 4! = 60 − 24 = 36 . Hence, the number of such numbers is 9 C3 × 36 = 3024 … (i)",
        "Case II: Two identical digits are (1, 1) or (2, 2) or.... or (9, 9). If 0 is included, then number of ways of selection of two more digits is 8C2.",
        "The number of ways of arrangements of these five digits is 5! / 2! -4! / 2! =48. Therefore, the number of such numbers is 8C2 × 48. If 0 is not included, then selection of three more digits is 8C3.",
        "Therefore, the number of such numbers is 8C3 × 5! / 2! = 8C3 × 60. Hence, the total number of five-digit numbers with identical digits (1.1)......(9.9) is 9 × (8C2 × 48 + 8C3 × 60) = 42336 ... (ii)",
        "From Eqs. (i) and (ii), the required number of numbers is 3024 + 42336 = 45360."
      ],
      "answer": "From Eqs. (i) and (ii), the required number of numbers is 3024 + 42336 = 45360."
    },
    {
      "kind": "example",
      "prompt": "Illustration 24: How many words can be made with letters of the word “INTERMEDIATE” if (i) The words neither begin with I nor end with E, (ii) The vowels and consonants alternate in the words, (iii) The vowels are always consecutive, (iv) The relative order of vowels and consonants does not change, (v) No vowel is in between two consonants, (vi) The order of vowels does not change?",
      "steps": [
        "This is an application of Permutation under restriction and Permutation of Alike objects. Proceed according to the given conditions.",
        "(i) The required number of words = (the number of words without restriction) – (the number of words beginning with I) – (the number of word ending with E) + (the number of words beginning with I and ending with E)",
        "(because words beginning with I as well as words ending with E contain some words beginning with I and ending with E). 12! The number of words without restriction = 2! 3! 2!",
        "( There are 12 letters in which there are two I’s, three E’s and two T’s). 11! The number of words beginning with I = 2!3!",
        "( With E in the extreme left place we are left to arrange 11 letters INTERMEDIATE in which there are two T’s and three E’s). 11! The number of words ending with E = 2!2!2!",
        "( With E in the extreme right place we are left to arrange 11 letters INTERMEDIATE in which there are two I’s. two E’s and two T’s.) 10! The number of words beginning with I and ending with E = 2!2!",
        "( With I in the extreme left and E in the extreme right places we are left to arrange 10 letters INTERMEDIATE in the which there are two T’s and Two E’s). 12! 11! 11! 10! 10!",
        "Therefore, the required number or words = – – + = (12×11 – 11×2 – 11×3 +6) = 83 × 10! 2!3!2! 2!3! 2!2!2! 2!2! 2!3!2! 24 (ii) There are 6 vowels and 6 consonants. So, the number of words in which vowels and consonants alternate =",
        "(the number of words in which vowels occupy odd places and consonants occupy even places) + (the number of words in which consonants occupy odd places and vowels occupy even places) 6! 6! 6! 6! 6! 6!",
        "= × + × = 2. . = 43200 2!3! 2! 2! 2!3! 2!3! 2! 7! (iii) Considering the 6 vowels IEEIAE as one object, the number of arrangements of this with 6 consonants = ( there are two T’s in the consonants). 2!",
        "For each of these arrangements, the 6 consecutive vowels can be arranged among themselves in 6! . 7! 6! 2!3! Therefore, The required number of words = × (as above) = 151200 2! 2!3!",
        "(iv) The relative order of vowels and consonants will not change if in the arrangements of letters, the vowels",
        "occupy places of vowels, i.e.. 1st, 4th, 7th, 9th, 10th, 12th places and consonants occupy their places, i.e., 2nd. 3rd. 5th. 6th. 8th. 11th places, the required number of words 6! 6! × = 21600 2!3! 2!",
        "(v) No vowel will be between two consonants if all the consonants become consecutive Therefore, the required number of words = the number of arrangements when all the consonants are consecutive 7! 6! = × (as above) = 151200",
        "2!3! 2! (vi) The order of vowels will not change if no two vowels interchange places, i.e., in the arrangement all the vowels are treated as identical.",
        "(For example LATE. ATLE. TLAE. etc.. have the same order of vowels A. E. But LETA, ETLA. TLEA. etc.. have changed order of vowels A. E. So. LATE is counted but LETA is not.",
        "If A, E, are taken as identical say V then LVTV does not give a new arrangement by interchanging V, V. 5 . 1 2 | Permutations and Combinations The required number of words,",
        "= The number of arrangements of 12 letters in which 6 vowels are treated as identical 12! = ( there are two T’s also). 6!2!"
      ],
      "answer": "= The number of arrangements of 12 letters in which 6 vowels are treated as identical 12! = ( there are two T’s also). 6!2!"
    },
    {
      "kind": "example",
      "prompt": "Illustration 25: India and South Africa play a one day international series until one team wins 4 matches. No match ends in a draw. Find, in how many ways can the series can be won.",
      "steps": [
        "The team who wins the series is the team with more number of wins. The losing team wins either 0 or 1 or 2 or 3 matches. Using this we find the number of ways in which a team can win.",
        "Let I for India and S for South Africa. We can arrange I and S to show the wins for India and South Africa respectively Suppose India wins the series, then the last match is always won by India.",
        "Wins of S Wins of I No. of ways (i) 0 4 1 (ii) 1 4 4! / 3! = 4 5! (iii) 2 4 =10 2!3! 6! (iv) 3 4 = 20 3!3! Therefore, Total no. of ways = 35 In the same number of ways South Africa can win the series",
        "Therefore, Total no. of ways in which the series can be won = 35 × 2 = 70"
      ],
      "answer": "Therefore, Total no. of ways in which the series can be won = 35 × 2 = 70"
    },
    {
      "kind": "example",
      "prompt": "Illustration 26: There are p intermediate railway stations on a railway line from one terminal to another. In how many ways can a train stop at three of these intermediate stations, if no two of these stations (where it stops) are to be consecutive?",
      "steps": [
        "The train stops only at three intermediate stations implies that the train does not stop at (p – 3) stations. Using this idea we proceed further to get the answer. The problem then reduces to the following:",
        "In how many ways can three objects be placed among (p – 3) objects in a row such that no two of them are next",
        "to each other (at most 1 object is to be placed between any two of these (p – 3) objects). Since there are (p – 2) positions to place the three objects, the required number of ways = p–2C3."
      ],
      "answer": "to each other (at most 1 object is to be placed between any two of these (p – 3) objects). Since there are (p – 2) positions to place the three objects, the required number of ways = p–2C3."
    },
    {
      "kind": "example",
      "prompt": "Illustration 27: Five balls are to be placed in three boxes. Each can hold all the five balls. In how many different ways can we place the balls so that no box remains empty if (i) balls and boxes are all different (ii) balls are identical but boxes are different (iii) balls are different but boxes are identical (iv) balls as well as boxes are identical (v) balls as well as boxes are identical but boxes are kept in a row?",
      "steps": [
        "Use the different cases of combination to solve the question according to the given conditions As no box is to remain empty, boxes can have balls in the following numbers: Possibilities 1, 1, 3 or 1, 2, 2",
        "(i) The number of ways to distribute the balls in groups of 1, 1, 3 = 5C1 × 4C1 × 3C3. But the boxes can interchange their content, no exchange gives a new way when boxes containing balls in equal number interchange. 3!",
        "Therefore, the total number of ways to distribute 1, 1, 3 balls to the boxes = 5C1 × 4C1 × 3C3 × 2! 3! Similarly, the total number of ways to distribute 1, 2, 2 balls to the boxes = 5C1 × 4C2 × 2C2 × 3! 5 3! 2!",
        "Therefore, the required number of ways = 5C1 × 4C1 × 3C3 × + C 1 × 4C 1 × 2C 2 × = 5 × 4 × 3 + 5 × 6 × 3 = 60 + 90 = 150 2! 2! Note: Writing the whole answer in tabular form. Possibilities Combinations Permutations 3! 1, 1, 3 5",
        "C1 × 4C1 × 3C3 5 C 1 × 4C 1 × 3C 3 × = 5 × 4 × 3 = 60 2! 3! 1, 2, 2 5 C1 × 4C2 × 2C2 5 C 1 × 4C 2 × 2C 2 × = 5 × 6 × 3 = 90 2! Therefore, the required number of ways = 60 + 90 = 150.",
        "(ii) When balls are identical but boxes are different the number of combinations will be 1 in each case. 3! 3! Therefore, the required number of ways = 1 × +1 × =3+3=6 2! 2!",
        "(iii) When the balls are different and boxes are identical, the number of arrangements will be 1 in each case. Therefore, the required number of ways = 5C1 × 4C1 × 3C3 + 5C1 × 4C2 × 2C2 = 5 × 4 + 5 × 6 = 20 + 30 = 50",
        "(iv) When balls as well as boxes are identical, the number of combinations and arrangements will be 1 each in both cases. Therefore, the required number of ways = 1 × 1 + 1 × 1 = 2",
        "(v) When boxes are kept in a row, they will be treated as different. So, in this case the number of ways will be the same as in (ii)."
      ],
      "answer": "(v) When boxes are kept in a row, they will be treated as different. So, in this case the number of ways will be the same as in (ii)."
    },
    {
      "kind": "example",
      "prompt": "Illustration 28: There are m points on one straight line AB and n points on another straight line AC, none of them being A. How many triangles can be formed with these points as vertices? How many can be formed if point A is also included?",
      "steps": [
        "A triangle has three vertices, so we select two points on one line and one on the other and vice versa. Also, consider the case when one point of the triangle is the intersection of the two lines.",
        "To get a triangle, we either take two points on AB and one point on AC. or one point on AB and two points on AC. Therefore, the number of triangles, we obtain m(m – 1) n(n – 1) 1 1",
        "= (mC2)(nC1) + (mC1)(nC2) = n+m = mn(m – 1 + n – 1) = mn(m + n – 2) 2 2 2 2 If the point A is included, we get m n additional triangles. Thus, in this case we get mn mn(m + n) = (m + n – 2) + mn = triangles. 2 2",
        "5.3 Division into Groups (a) The number of ways in which (m + n) different objects can be divided into two unequal groups containing m (m + n)! and n objects respectively is . m!n! (2n)!",
        "If m = n, the groups are equal and in this case the number of division is ; as it is possible to interchange the n!n!2! two groups without obtaining a new distribution. 5 . 1 4 | Permutations and Combinations",
        "(b) However, if 2n objects are to be divided equally between two persons then the number of ways (2n)! (2n)! = 2! = n!n!2! n!n!",
        "(c) The number of ways in which (m + n + p) different objects can be divided into three unequal groups containing (m + n + p) m , n and p objects respectively is = ,m≠n≠p m!n!p! (3n)!",
        "If m = n = P then the number of groups = . However, if 3n objects are to be divided equally among three n!n!n!3! (3n)! (3n)! persons then the number of ways = 3! = n!n!n!3! (n!)3 15!",
        "For example, the number of ways in which 15 recruits can be divided into three equal groups is and the 5!5!5!3! 15! number of ways in which they can be drafted into three different regiments, five in each, is 5!5!5!",
        "(d) The number of ways in which mn different objects can be divided equally into m groups if order of groups is mn! not important is (n!)m m!",
        "(e) The number of ways in which mn different objects can be divided equally into m groups if the order of groups mn! (mn)! is important is × m! = m (n!) m! (n!)m"
      ],
      "answer": "(e) The number of ways in which mn different objects can be divided equally into m groups if the order of groups mn! (mn)! is important is × m! = m (n!) m! (n!)m"
    },
    {
      "kind": "example",
      "prompt": "Illustration 29: In how many ways can 12 balls be divided between 2 boys, one receiving 5 and the other 7 balls?",
      "steps": [
        "Simple application of division of objects into groups. Since the order is important, the number of ways in which 12 different balls can be divided between two boys who each get 5 and 7 balls respectively, is",
        "12! 12.11.10.9.8.7! = × 2! = × 2 1584 5!7! (5.4.3.2.1)7! Alternative: The first boy can be given 5 balls out of 12 balls in 12C5 ways. The second boy can be given the remaining 7 balls in",
        "one way. But the order is important (the boys can interchange 2 ways). 12! 12.11.10.9.8.7!.2 Thus, the required number of ways = 12C5 × 1 × 2! = ×2= = 1584 5!7! 5.4.3.2.1.7!"
      ],
      "answer": "one way. But the order is important (the boys can interchange 2 ways). 12! 12.11.10.9.8.7!.2 Thus, the required number of ways = 12C5 × 1 × 2! = ×2= = 1584 5!7! 5.4.3.2.1.7!"
    },
    {
      "kind": "example",
      "prompt": "Illustration 30: Find the number of ways in which 9 different toys can be distributed among 4 children belonging to different age groups in such a way that the distribution among the 3 elder children is even and the youngest one is to receive one toy more.",
      "steps": [
        "Using the concept of division of objects into groups we can solve this problem very easily. The distribution should be 2, 2, 2 and 3 to the youngest. Now, 3 toys for the youngest can be selected in 9C3 ways,",
        "the remaining 6 toys can be divided into three equal groups in 6! ways and can be distributed in 3 ! ways. (2!)3 .3! 6! 9! Thus, the required number of ways = 9C3. 3! = 3 (2!) 3! 3!(2!)3"
      ],
      "answer": "the remaining 6 toys can be divided into three equal groups in 6! ways and can be distributed in 3 ! ways. (2!)3 .3! 6! 9! Thus, the required number of ways = 9C3. 3! = 3 (2!) 3! 3!(2!)3"
    },
    {
      "kind": "example",
      "prompt": "Illustration 31: Divide 50 objects in 5 groups of size 10, 10, 10, 15 and 5 objects. Also find the number of distributions? 50!",
      "steps": [
        "Same as the above question. Number of ways of dividing 50 objects into 5 groups as given = 3 (10!) (15)!(5)!(3)! 50! Number of ways of distributing 50 objects into above formed groups = × 5! (10)!3 .(15)!(5)!3!",
        "MASTERJEE CONCEPTS Identical Objects and Distinct Choices Questions involving identical objects tend to be tricky, especially when the choices that they have are distinct. Many choices image 1 An example would be :",
        "Q. In how many ways can we place 10 identical oranges in 3 distinct baskets, such that every basket has at least 2 oranges each?",
        "One method is to place 2 oranges in every basket and make cases for the rest of them. However, in such questions, the other approach results in fewer cases, and hence, simpler calculations and a more efficient solution",
        "For this question: Divide 10 into groups of 3 rather than placing 2 in each and dividing the remaining four. Vaibhav Gupta (JEE 2009, AIR 54)"
      ],
      "answer": "For this question: Divide 10 into groups of 3 rather than placing 2 in each and dividing the remaining four. Vaibhav Gupta (JEE 2009, AIR 54)"
    },
    {
      "kind": "theory",
      "heading": "Solved Examples — Circular permutations and stars and bars",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 32 to 38 from the uploaded Permutations and Combinations PDF."
      ]
    },
    {
      "kind": "example",
      "prompt": "Illustration 32: In how many ways can 5 Indians and 4 Englishmen be seated at a round table if (a) There is no restriction, (b) All the four Englishmen sit together, (c) All four Englishmen don’t sit together, (d) No two Englishmen sit together.",
      "steps": [
        "Clearly, this is a case of Circular Permutation. Using the formula (n – 1)!, we can find the answer according to the given cases.",
        "(a) Total number of persons = 5 + 4 = 9. These 9 persons can be seated at the round table in 8! Ways. Therefore, Required number of ways = 8! (b) Regarding 4 Englishmen as one person, we have only 5 + 1 i.e. 6 persons.",
        "These 6 persons can be seated at the round table in 5! ways. Also, the 4 Englishmen can be arranged among themselves in 4! ways. Therefore, the required number of ways = 5! 4!",
        "(c) The total number of arrangements when there is no restriction = 8!; the number of arrangements when all the four English men sit together = 5! 4!",
        "Therefore, The number of arrangements when all the four Englishmen don’t sit together = 8! – 5! 4! (d) As there is no restriction on Indians, we first arrange the 5 Indians.",
        "Now, 5 Indians can be seated around a table in 4! ways. If an Englishman sits between two Indians, then no two Englishmen will sit together. Now, there are 5 places for 4 English men, therefore, 4 Englishmen can be",
        "seated in 5P4 ways. Therefore, The required number of ways = 4! × 5P4 = 4 × 5!"
      ],
      "answer": "seated in 5P4 ways. Therefore, The required number of ways = 4! × 5P4 = 4 × 5!"
    },
    {
      "kind": "example",
      "prompt": "Illustration 33: Consider 21 different pearls on a necklace. How many ways can the pearls be placed in this necklace such that 3 specific pearls always remains together?",
      "steps": [
        "This is the case of circular permutation when there is no distinction between clockwise and anticlockwise arrangements.",
        "After fixing the places of three pearls. Treating 3 specific pearls = 1 unit. So we have now 18 pearls + 1 unit = 19",
        "and the number of arrangements will be (19 – 1)! = 18!. Also the number of ways 3 pearls can be arranged between",
        "themselves is 3! = 6. As there is no distinction between the clockwise and anticlockwise arrangements, the required 1 number of arrangements = 18!. 6 = 3 (18!). 2"
      ],
      "answer": "themselves is 3! = 6. As there is no distinction between the clockwise and anticlockwise arrangements, the required 1 number of arrangements = 18!. 6 = 3 (18!). 2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 34: Six persons A, B, C, D, E and F are to be seated at a circular table. Find the number of ways this can be done if A must have either B or C on his right and B must have either C or D on his right.",
      "steps": [
        "Fix the position of some of the persons relative to each other as per the question and arrange the remaining in the seats available. When A has B or C to his right we have either AB or AC",
        "When B has C or D to his right we have BC or BD. Thus, we must have ABC or ABD or AC and BD. For ABC, D, E, F in a circular number of ways = 3! = 6 For ABD, C, E, F in a circular number of ways = 3! = 6",
        "For AC, BD E, F the number of ways = 3! = 6 Hence, the required number of ways = 18"
      ],
      "answer": "For AC, BD E, F the number of ways = 3! = 6 Hence, the required number of ways = 18"
    },
    {
      "kind": "example",
      "prompt": "Illustration 35: How many integral solutions are there to x + y + z + w = 29, when x ≥ 1, y ≥ 2, z ≥ 3 and w ≥ 0?",
      "steps": [
        "Application of multinomial theorem. x + y + z + w = 29 .…(i) x >= 1, y >= 2, z >= 3, w >= 0 => x – 1 >= 0, y – 2 >= 0, z – 3 >= 0, w >= 0 Let x1 = x – 1, x2 = y – 2, x3 = z – 3",
        "=> x = x1 + 1, y = x2 + 2, z = x3 + 3 and then x1 >= 0, x2 >= 0, x3 >= 0, w >= 0 From (i), x1 + 1 + x2 + 2 + x3 + 3 + w = 29 => x1 + x2 + x3 + w = 23 Hence, the total number of solutions = 23+4–1C4–1 = 26C3 = 2600"
      ],
      "answer": "=> x = x1 + 1, y = x2 + 2, z = x3 + 3 and then x1 >= 0, x2 >= 0, x3 >= 0, w >= 0 From (i), x1 + 1 + x2 + 2 + x3 + 3 + w = 29 => x1 + x2 + x3 + w = 23 Hence, the total number of solutions = 23+4–1C4–1 = 26C3 = 2600"
    },
    {
      "kind": "example",
      "prompt": "Illustration 36: Find the number of non-negative integral solution 3x + y + z = 24.",
      "steps": [
        "Application of multinomial theorem. 3x + y + z = 24, x >= 0, y >= 0, z >= 0 Let x = k Therefore, y + z = 24 – 3k .…(i) Here, 0 <= 24 – 3k <= 24. Hence, 0 <= k <= 8",
        "The total number of integral solutions of (1) is 24–3k+2–1C2–1 = 25–3kC1 = 25 – 3k Hence, the total number of solutions of the original equation 8 8 8 8.9 = ∑ (25 – 3k) = 25 ∑ 1 – 3 ∑ k => 25.9 – 3. = 225 – 108 = 117.",
        "=k 0 =k 0=k 0 2"
      ],
      "answer": "=k 0 =k 0=k 0 2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 37: Find the number of solutions of the equation x + y + z = 6, where x, y, z ∈ W.",
      "steps": [
        "The number of solutions = 6+3–1C3–1 = 8C2 = 280."
      ],
      "answer": "The number of solutions = 6+3–1C3–1 = 8C2 = 280."
    },
    {
      "kind": "example",
      "prompt": "Illustration 38: How many integers are there between 1 and 1000000 having the sum of the digits as 18?",
      "steps": [
        "Let the digits be a1, …, a6 and use multinomial theorem we get the answer. Any number between 1 and 1000000 must be of less than seven digits. Therefore, it must be of the form a1 a2 a3 a4 a5 a6",
        "Where a1. a2.a3.a4.a5.a6 ∈ {0, 1, 2, … 9} Thus a1 + a2 + a3 + a4 + a5 + a6 = 18, where 0 <= ai <= 9, i = 1, 2, … 9 The required number of ways = coeff. of x18 in (1 + x + x2 + … x9)6 6  1 – x10  = coeff. of x in  18 ",
        " 1–x    = coeff. of x in [(1 – x ) (1 – x)–6] ; = coeff. of x18 in [(1 – 6C1 x10 …) (1 – x)–6] 18 10 6 [leaving terms containing powers of x greater than 18]",
        "= coeff. of x18 in (1 – x)–6 – 6C1. coeff. of x8 in (1 – x)–6 = 6+18–1C5 – 6. 6+8–1C5 = 23C5 – 6.13C5 23.22.21.20.19 13.12.11.10.9 = – 6. = 33649 – 7722 = 25927 120 120 MASTERJEE CONCEPTS",
        "•• m different white balls and n different red balls are to be arranged in a line such that the balls of the same colour are always together = (m! n! 2!)",
        "•• m different white balls and n different red balls are to be arranged in a line such that all the red balls are together = ((m + 1)! n!)",
        "•• m different white balls and n different red balls are to be arranged in a line such that no two red balls are together (m >= n – 1) = (m+1Cn m! n!)",
        "•• m different white balls and m different red balls are to be arranged in a line such that colour of the balls is alternating = (2 × (m!)2)",
        "•• m identical white balls and n different red balls are to be arranged in a line such that no two red balls are together (m >= n – 1) = (m+1Cn)",
        "•• m identical white balls and n different red balls are to be arranged in a line such that no two red balls are together (m >= n – 1) = (m+1Cn n!)",
        "•• If n objects are arranged in a line the number of selections of r objects (n >= 2r – 1) such that no two objects are adjacent is same number of ways of arranging n – r identical white balls and r identical red",
        "ball in a line such that no two balls are together = (n–r+1Cr). e.g. suppose there are n stations on trains’s route and a train has to stop at r stations such that no two stations are adjacent. The number of ways",
        "must be n–r+1Cr. •• suppose there are N seats in a particular row of a theatre. The number of ways of making n people sit (N >= 2n – 1) such that no two people sit side by side is same as number of ways of arranging N – n",
        "identical white balls (empty seats) and n different red balls (n people) such that no two red balls are together. The required number of ways are N–n+1Cn × n!. Nitish Jhawar (JEE 2009, AIR 7)",
        "5 . 2 0 | Permutations and Combinations"
      ],
      "answer": "5 . 2 0 | Permutations and Combinations"
    },
    {
      "kind": "theory",
      "heading": "Solved Examples — Divisibility, sums, factors and prime exponents",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 39 to 45 from the uploaded Permutations and Combinations PDF."
      ]
    },
    {
      "kind": "example",
      "prompt": "Illustration 39: How many four digit numbers can be made with the digits 0, 1, 2, 3, 4, 5 which are divisible by 3 (digits being unrepeated in the same number)? How many of these will be divisible by 6?",
      "steps": [
        "A number is divisible by 3 if the sum of the digits is divisible by 3. This reduces the problem to the number of non-negative integral solutions of equation x1 + x2 + … + xr = n.",
        "Here, 0 + 1 + 2 + 3 + 4 + 5 = 15; so two digits are to be omitted whose sum is 3 or 6 or 9. Hence, the number of four digits can be made by either 1, 2, 4, 5 or 0, 3, 4, 5 (omitting two digits whose sum is 3)",
        "0, 1, 3, 5 or 0, 2, 3, 4 (omitting two digits whose sum 6) 0, 1, 2, 3 (omitting two digits whose sum is 9) The number of 4-digit numbers that can be made with 1, 2, 4, 5 = 4P4 = 4!",
        "The number of 4-digit numbers that can be made by the digits in any one of remaining four groups (each containing 0) = 4! – 3!",
        "Therefore, The required number of 4-digit numbers divisible by 3 = 4! + 4(4! – 3!) = 24 + 4(24 – 6) = 96 Now, a number is divisible by 6 if it is even as well as divisible by 3.",
        "So, the number of 4-digit numbers divisible by 6 that can be made with 1, 2, 4, 5 = 2 × 3! (∵ the number should have an even digit in the units places).",
        "The number of numbers of 4 digits, divisible by 6, that can be made with 0, 3, 4, 5 = (3! – 2!) + 3! ( The number should have 4 or 0 in units place and 0 should not come in thousands place).",
        "Similarly, the number of numbers of 4 digits, divisible by 6, that can be made with 0, 1, 2, 3 = (3! – 2!) + 3! The number of 4-digit numbers divisible by 6 that can be made with the digits 0, 1, 3 = 3!",
        "The number of numbers of 4 digits, divisible by 6, that can be made with 0, 2, 3, 4 = (3! – 2!) + (3! – 2!) + 3! ( The number should have 4 or 2 or 0 in units place and 0 should not come in thousands place)",
        "Therefore, the required 4-digit numbers divisible by 6 = 2 × 3! + (3! – 2!) + (3! – 2!) + 3! + 3! + (3! – 2!) + (3! – 2!) + (3! – 2!) + 3! = 12 + 4 + 6 + 4 + 6 + 6 + 4 + 4 + 6 = 52."
      ],
      "answer": "Therefore, the required 4-digit numbers divisible by 6 = 2 × 3! + (3! – 2!) + (3! – 2!) + 3! + 3! + (3! – 2!) + (3! – 2!) + (3! – 2!) + 3! = 12 + 4 + 6 + 4 + 6 + 6 + 4 + 4 + 6 = 52."
    },
    {
      "kind": "example",
      "prompt": "Illustration 40: Find the sum of all 4 digit numbers formed using the digits 1, 2, 4 and 6.",
      "steps": [
        "Use formula, Sum = (a1 + a2 + a3 + … + an) (n− 1)! (111 …. N times) Using formula, Sum = (1 + 2 + 4 + 6) 3! (1111) = 13 × 6 × 1111 = 86658 Alternate:",
        "Here, the total 4-digit numbers will be 4! = 24. So, every digit will occur 6 times at every one of the four places.",
        "Since the sum of the given digits = 1 + 2 + 4 + 6 = 13. So, the sum of all the digits at every place of all the 24 numbers = 13 × 6 = 78. The sum of the values of all the digits At first place = 78",
        "At the tens place = 780 At the hundreds place = 7800 At the thousands place = 78000 Therefore, The required sum 78 + 780 + 7800 + 78000 = 86658"
      ],
      "answer": "At the tens place = 780 At the hundreds place = 7800 At the thousands place = 78000 Therefore, The required sum 78 + 780 + 7800 + 78000 = 86658"
    },
    {
      "kind": "example",
      "prompt": "Illustration 41: Find the number of factors of the number 38808 (excluding 1 and the number itself). Find also the sum of these divisors.",
      "steps": [
        "Factorise 38808 into its product of primes and then use the concept of combination to find the answer. 38808 = 23 . 32 . 72 . 11 5 . 2 2 | Permutations and Combinations",
        "Hence, the total number of divisors (excluding 1 and itself) = (3 + 1) (2 + 1) (2 + 1) (1 + 1) – 2 = 70 The sum of these divisors = (20 + 21 + 22 + 23) (30 + 31 + 32) (70 + 71 + 72) (110 + 111)",
        "= (15) (13) (57) (12) – 1 – 38808 = 94571"
      ],
      "answer": "= (15) (13) (57) (12) – 1 – 38808 = 94571"
    },
    {
      "kind": "example",
      "prompt": "Illustration 42: In how many ways can the number 10800 be resolved as a product of two factors?",
      "steps": [
        "Check whether the number is a perfect square or not and accordingly use the formula to find the desired result. 10800 = 24 . 33 . 52 Here 10800 is not a perfect square ( power of 3 is odd). 1",
        "Hence, the number of ways = (4 + 1) (3 + 1) (2 + 1) = 30. 2"
      ],
      "answer": "Hence, the number of ways = (4 + 1) (3 + 1) (2 + 1) = 30. 2"
    },
    {
      "kind": "example",
      "prompt": "Illustration 43: Find the number of positive integral solutions of x1.x2.x3 = 30.",
      "steps": [
        "Factorise 30 into primes and then use combination to get the desired result. x1x2x3 = 2 × 3 × 5. If we treat 2, 3, 5 as objects and x1, x2, x3 as distinct boxes then finding the number of positive",
        "integer solution is the same as finding the number of ways of distributing 3 distinct objects in 3 distinct boxes. Thus, the required number of solutions is 35 = 27",
        "(For example, if all the objects are held by x1 the corresponding solution is x1 = 30. x2 = 1, x3 = 1, if 2 and 3 are held by x1 and 5 by x3 then x1 = 6, x2 = 1, x3 = 5 etc)"
      ],
      "answer": "(For example, if all the objects are held by x1 the corresponding solution is x1 = 30. x2 = 1, x3 = 1, if 2 and 3 are held by x1 and 5 by x3 then x1 = 6, x2 = 1, x3 = 5 etc)"
    },
    {
      "kind": "example",
      "prompt": "Illustration 44: Find the exponent of 7 in 400!.",
      "steps": [
        "Apply Legendre’s formula.  400   400   400  e7(400) =   +  2  +  3  = 57 + 8 + 1 = 66.  7   7   7 "
      ],
      "answer": "Apply Legendre’s formula.  400   400   400  e7(400) =   +  2  +  3  = 57 + 8 + 1 = 66.  7   7   7 "
    },
    {
      "kind": "example",
      "prompt": "Illustration 45: Find all positive integers of n such that n! ends in exactly 1000 zeros.",
      "steps": [
        "10 is a multiple of 2 and 5. In order to get 1000 zeroes we must have 1000 as the exponent of 5 in n!. Now use the definition of the GIF to find the range of numbers satisfying the given condition. n   n ",
        "There are clearly more 2’s than 5’s in the prime factorization of n!, hence it suffices to solve the equation   +   + … = 1000.  5   52  n   n  n n n 1  n 1 n",
        "But   +   + … < + + … =  1 + + ...  (as [x] < x) = . = . 5   5  2 5 52 5  5  5 1 4 1– 5 Hence, n > 4000. 5 On the other hand, using the inequality [x] > x – 1, we have 1 1–  n  n  n   n",
        "1000 >  – 1  +  – 1  +  – 1  +   n  n  1 1 – 1  +  – 1  = 1 + + 1 1  n 5 + +  –5= . – 5. 5  5 2  53  5 4  5 5  5 5 52 53 4 5  5 1 1– 5 1005 ⋅ 4 ⋅ 3125 So, N < < 4022. 3124",
        "We narrowed n down to {4001, 4002, … , 4021}. Using Legendre’s formula we find that 4005 is the first positive integer with the desired property and that 4009 is the last. Hence, n = 4005, 4006, 4007, 4008, 4009.",
        "Second solution: It suffices to solve the equation e5(n) = 1000. Using the second form of Legendre’s formula, this",
        "becomes n – s5(n) = 4000. Hence n > 4000. We work our way upward from 4000 looking for a solution. Since e5(n) can change only at multiples of 5 (why?), we step up 5 each time: 4000 – 4 e5(4000) = = 999. 5–1 4005 – 5",
        "e5(4005) = = 1000. 5–1 4010 – 6 e5(4010) = = 1001. 5–1 Any n > 4010 will clearly have e5(n) >= e5(4010) = 1001. Hence the only solutions are n = 4005, 4006, 4007, 4008, 4009."
      ],
      "answer": "e5(4005) = = 1000. 5–1 4010 – 6 e5(4010) = = 1001. 5–1 Any n > 4010 will clearly have e5(n) >= e5(4010) = 1001. Hence the only solutions are n = 4005, 4006, 4007, 4008, 4009."
    },
    {
      "kind": "theory",
      "heading": "Solved Examples — Inclusion-exclusion, derangements and multinomial theorem",
      "paragraphs": [
        "This block contains solved textbook-style illustrations 46 to 49 from the uploaded Permutations and Combinations PDF."
      ]
    },
    {
      "kind": "example",
      "prompt": "Illustration 46: 105 students take an examination of whom 80 students pass in English. 75 students pass in Mathematics and 60 students pass in both subjects. How many students fail in both subjects?",
      "steps": [
        "A simple application of Inclusion-Exclusion Principle. Let X = the set of students who take the examination. A = the set of students who pass in English B = the set of students who pass in Mathematics",
        "We are given that n(X) = 105, n(A) = 80, n(B) = 75, n(A ∩ B) = 60 Since, n(A ∪ B) = n(A) + n(B) – n(A ∪ B). Therefore, n(A ∪ B) = 80 + 75 – 60 = 95. The required number = n(X) – n (A ∪ B) = 105 – 95 = 10.",
        "Thus, 10 students fail in both subjects."
      ],
      "answer": "Thus, 10 students fail in both subjects."
    },
    {
      "kind": "example",
      "prompt": "Illustration 47: Find the number of permutations of the 8 letters AABBCCDD, taken all at a time, such that no two adjacent letters are alike.",
      "steps": [
        "Divide the question into cases when A’s are adjacent, B’s are adjacent and so on. Similarly proceed to find the",
        "number of ways in which two alike objects are adjacent and so on. Then use Inclusion-Exclusion Principle to find the result. First disregard the restriction that no two adjacent letters be alike. 8!",
        "The total number of permutation is then N = = 2250 2!2!2!2! Now, apply the inclusion exclusion principle. Where a permutation has property α in case the A’s are adjacent,",
        "property β in case the B’s are adjacent, etc. It can be calculated that 7! 6! N(α) = = 630. N(α, β) = = 180 2!2!2! 2!2! N(α, β, γ) = 60. N(α, β, γ, δ) = 24.",
        "Hence, the answer is N – 4N (α) + 6N(α, β) – 4N(α, β, γ) + N(α, β, γ, δ) = 864."
      ],
      "answer": "Hence, the answer is N – 4N (α) + 6N(α, β) – 4N(α, β, γ) + N(α, β, γ, δ) = 864."
    },
    {
      "kind": "example",
      "prompt": "Illustration 48: A person writes letters to six friends and addresses the corresponding envelopes. In how many ways can the letters be placed in the envelopes so that (i) atleast two of them are in the wrong envelopes. (ii) All the letters are in the wrong envelopes.",
      "steps": [
        "Application of Derangement theorem. 6 (i) The number of ways in which at least two of them in the wrong envelopes = ∑ 6 C6–rDr r =2 = 6C6–2 D2 + 6C6–3D3 + 6C6–4 D4 + 6C6–5 D5 + 6C6–6 D6  1 1  1 1 1  1 1 1 1",
        "= 6C4.2!  1 – +  + 6 C 3 .3!  1 – + +  + 6 C2 .4!  1 – + – +   1! 2!   1! 2! 3!   1! 2! 3! 4!   1 1 1 1 1  1 1 1 1 1 1 +6 C1.5! 1– + – + +  + 6 C 0 .6! 1– + – + – + ",
        " 1! 2! 3! 4! 5!   1! 2! 3! 4! 5! 6!  (ii) The number of ways in which all letters be placed in wrong envelopes  1 1 1 1 1 1 1 1 1 1 1  = 6!  1 – + – + – +  ; = 720  – + – +  ; = 360 – 120 + 30 – 6 + 1 = 265",
        " 1! 2! 3! 4! 5! 6!   2 6 24 120 720 "
      ],
      "answer": " 1! 2! 3! 4! 5! 6!   2 6 24 120 720 "
    },
    {
      "kind": "example",
      "prompt": "Illustration 49: In an examination, the maximum marks for each of three papers is n and that for the fourth paper is 2n. Prove that the number of ways in which candidate can get 3n marks is 1 (n + 1) (5n2 + 10n + 6). 6",
      "steps": [
        "The maximum marks in the four papers are n, n, n and 2n. Consider a polynomial (1 + x + x2 + … + xn)3 (1 +",
        "x + … + x2n). The number of ways of securing a total of 3n is equal to the co-efficient of the term containing x3n. The number of ways of getting 3n marks = coefficient of x3n in (1 + x + x2 + … + xn)3 (1 + x + … + x2n)",
        "= coefficient of x3n in (1 – xn+1)3 (1 –x2n+1) (1 – x)–4 = coefficient of x3n in (1 – 3xn+1 + 3x2n+2 – x3n+3) (1 – x2n+1) × (1 + 4C1 x + 5C2x2 + 6C3 x3 + ….)",
        "= coefficient of x3n in (1 – 3xn+1 – x2n+1 + 3x2n+2) ( 1 + 4C1 x + 5C2 x2 …) = 3n+3C3n – 3.2n+2C2n–1 + 3 . n+1Cn–2 – n+2Cn–1 (3n + 3)! (2n + 2)! (n – 1)! (n + 2)! = –3. +3 – 3!(3n)! 3!(2n – 1)! 3!(n – 2)! 3!(n – 1)!",
        "= 1/6 (n + 1) (27n2 + 27n + 6 – 24n2 – 12n + 3n2 – 3n – n2 – 2n) = 1/6 (n + 1) (5n2 + 10n + 6)"
      ],
      "answer": "= 1/6 (n + 1) (27n2 + 27n + 6 – 24n2 – 12n + 3n2 – 3n – n2 – 2n) = 1/6 (n + 1) (5n2 + 10n + 6)"
    },
    {
      "kind": "practice",
      "heading": "Practice Exercise — Self-study questions",
      "stepKey": "permutationsCombinationsPractice",
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
        },
        {
          "prompt": "Which phrase most likely indicates a combination problem?",
          "options": [
            "Select a committee",
            "Arrange in a row",
            "Find dictionary rank",
            "Seat around a table"
          ],
          "answer": 0,
          "explanation": "Committee selection ignores order."
        },
        {
          "prompt": "Which phrase most likely indicates a permutation problem?",
          "options": [
            "Rank the word in dictionary order",
            "Choose a team",
            "Select a sample",
            "Pick 5 fruits"
          ],
          "answer": 0,
          "explanation": "Rank/order depends on arrangement."
        },
        {
          "prompt": "How many ways can 5 different books be arranged if 2 particular books must be together?",
          "options": [
            "48",
            "120",
            "24",
            "60"
          ],
          "answer": 0,
          "explanation": "Treat the pair as one block: arrange 4 objects in 4! ways and arrange inside the pair in 2! ways; 4!×2=48."
        },
        {
          "prompt": "How many ways can 4 boys and 3 girls sit in a row if no two girls sit together?",
          "options": [
            "1440",
            "720",
            "2880",
            "360"
          ],
          "answer": 0,
          "explanation": "Arrange boys in 4! ways. There are 5 gaps; choose/order 3 girls in 5P3 ways. Total 4!×5P3=24×60=1440."
        },
        {
          "prompt": "For derangements of 3 objects, how many arrangements have no object in its original position?",
          "options": [
            "2",
            "3",
            "6",
            "1"
          ],
          "answer": 0,
          "explanation": "The derangements of 3 objects are 231 and 312, so !3=2."
        }
      ]
    },
    {
      "kind": "quiz",
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
      ]
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
      "kind": "flashcards",
      "cards": [
        {
          "front": "What is a permutation?",
          "back": "An arrangement where order matters."
        },
        {
          "front": "What is a combination?",
          "back": "A selection where order does not matter."
        },
        {
          "front": "Formula for nPr?",
          "back": "$^nP_r=\\dfrac{n!}{(n-r)!}$."
        },
        {
          "front": "Formula for nCr?",
          "back": "$^nC_r=\\dfrac{n!}{r!(n-r)!}$."
        },
        {
          "front": "Circular arrangements around a table?",
          "back": "$(n-1)!$."
        },
        {
          "front": "Non-negative solutions of x1+...+xr=n?",
          "back": "$^{n+r-1}C_{r-1}$."
        },
        {
          "front": "Positive solutions of x1+...+xr=n?",
          "back": "$^{n-1}C_{r-1}$."
        },
        {
          "front": "Derangement meaning?",
          "back": "No object is in its original/correct position."
        }
      ]
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
          "key": "readNotes",
          "label": "Read the notes and formula sheet"
        },
        {
          "key": "studyExamples",
          "label": "Study all solved illustrations"
        },
        {
          "key": "completePractice",
          "label": "Complete the Practice Exercise"
        }
      ],
      "requireQuizPass": false
    }
  ]
};
