import { v4 as uuidv4 } from "uuid";

function dataArticles() {
  return [
    //JavaScript: Array Tips and Tricks You Should Know
    {
      title: `JavaScript: Array Tips and Tricks You Should Know`,
      id: "JavaScript_Array_Tips",
      description: "An array is one of the most common concepts of Javascript, which gives us a lot of possibilities to work with data stored inside. &#Taking into consideration that array is one of the most basic topics in Javascript which you learn about at the beginning of your programming path, in this article show a few tricks which you may not know about and which may be very helpful in coding!",
      multi_page: true,
      articles: [
        {
          title: "1. Remove duplicates from an array",
          text:
            "It’s a very popular interview question about Javascript arrays, how to extract the unique values from Javascript array. Here is a quick and easy solution for this problem, you can use a new Set() for this purpose. And I would like to show you two possible ways to do it, one with .from() method and second with spread operator (…). Easy, right?&#code_01",
          id: uuidv4(),
          source: {
            code_01: `let fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];

// First method
let uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

// Second method
let uniqueFruits2 = […new Set(fruits)];
console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]"`
            },
        },
        {
          title: "2. Replace the specific value in an array",
          text:
            "Sometimes it’s necessary to replace a specific value in the array while creating code, and there is a nice short method to do it which you might not know yet. For this, we may use .splice(start, value to remove, valueToAdd) and pass there all three parameters specifying where we want to start modification, how many values we want to change and the new values.&#code_01",
          id: uuidv4(),
          source: {          
            code_01: `let fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];

fruits.splice(0, 2, “potato”, “tomato”);

console.log(fruits);
// returns [“potato”, “tomato”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”]`
          },
        },
        {
          title: "3. Map array without .map()",
          text:
            "Probably everyone knows .map() method of arrays, but there is a different solution that may be used to get a similar effect and very clean code as well. We can use .from() method for this purpose.&#code_01",
          id: uuidv4(),
          source: {          
            code_01:`let friends = [
  { name: ‘John’, age: 22 },
  { name: ‘Peter’, age: 23 },
  { name: ‘Mark’, age: 24 },
  { name: ‘Maria’, age: 22 },
  { name: ‘Monica’, age: 21 },
  { name: ‘Martha’, age: 19 },
]

let friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]`
          },
        },
        {
          title: "4. Empty an array",
          text:
            "Do you have an array full of elements but you need to clean it for any purpose, and you don’t want to remove items one by one? It’s very simple to do it in one line of code. To empty an array, you need to set an array’s length to 0, and that’s it!&#code_01",
          id: uuidv4(),
          source: {
            code_01: `let fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];

fruits.length = 0;
console.log(fruits); // returns []`
          },
        },
        {
          title: "5. Convert array to an object",
          text:
            "It happens that we have an array, but for some purpose, we need an object with this data, and the fastest way to convert the array into an object is to use a well-known spread operator (…).&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let fruits = [“banana”, “apple”, “orange”, “watermelon”];
let fruitsObj = { …fruits };

console.log(fruitsObj);
// returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}`
          },
        },
        {
          title: "6. Fulfill array with data",
          text:
            "There are some situations when we create an array, and we would like to fill it with some data, or we need an array with the same values, and in this case .fill() method comes with an easy and clean solution.&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let newArray = new Array(10).fill(“1”);

console.log(newArray);
// returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]`
          },
        },
        {
          title: "7. Merge arrays",
          text:
            "Do you know how to merge arrays into one array not using .concat() method? There is a simple way to merge any amount of arrays into one in one line of code. As you probably realized already spread operator (…) is pretty useful while working with arrays and it’s the same in this case.&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let fruits = [“apple”, “banana”, “orange”];
let meat = [“poultry”, “beef”, “fish”];
let vegetables = [“potato”, “tomato”, “cucumber”];
let food = […fruits, …meat, …vegetables];

console.log(food);
// [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]`
          },
        },
        {
          title: "8. Find the intersection of two arrays",
          text:
            "It’s also one of the most popular challenges which you can face on any Javascript interview because it shows if you can use array methods and what is your logic. To find the intersection of two arrays, we will use one of the previously shown methods in this article, to make sure that values in the array we are checking are not duplicated and we will use .filter method and .includes method. As a result, we will get the array with values that were presented in both arrays. Check the code:&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];

let duplicatedValues = […new Set(numOne)].filter(item => numTwo.includes(item));

console.log(duplicatedValues); // returns [2, 4, 6]`
          },
        },
        {
          title: "9. Remove falsy values from an array",
          text:
            "At first, let’s defined falsy values. In Javascript, falsy values are false, 0, „”, null, NaN, undefined. Now we can find out how to remove this kind of values from our array. To achieve this, we are going to use the .filter() method.&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
let trueArr = mixedArr.filter(Boolean);

console.log(trueArr); // returns [“blue”, 9, true, “white”]`
          },
        },
        {
          title: "10. Get random value form the array",
          text:
            "Sometimes we need to select a value from the array randomly. To create it in an easy, fast, and short way and keep our code clean we can get a random index number according to the array length. Let’s see the code:&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
let randomColor = colors[(Math.floor(Math.random() * (colors.length)))]`
          },
        },
        {
          title: "11. Reversing an array",
          text:
            "When we need to flip our array there is no need to create it through the complicated loops and functions, there is an easy array method which does it all for us, and with one line of code, we may have our array reversed. Let’s check it:&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
let reversedColors = colors.reverse();

console.log(reversedColors);
// returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]`
          },
        },
        {
          title: "12. .lastIndexOf() method",
          text:
            "In Javascript, there is an interesting method which allows finding the index of the last occurrence of the given element. For example, if our array has duplicated values, we can find the position of the last occurrence of it. Let’s see the code example:&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];

let lastIndex = nums.lastIndexOf(5);

console.log(lastIndex); // returns 9`
          },
        },
        {
          title: "13. Sum all the values in the array",
          text:
            "Another challenge which happens very often during Javascript Engineer interviews. Nothing scary comes here; it can be solved using .reduce method in one line of code. Let’s check out the code:&#code_01",
          id: uuidv4(),
          source: {
            code_01:`let nums = [1, 5, 2, 6];

let sum = nums.reduce((x, y) => x + y);

console.log(sum); // returns 14`
          },
        },
      ],
    },
    //JS Array Methods Explained with Emojis
    {
      title: "JS Array Methods Explained with Emojis",
      id: "JavaScript_Array_Methods",
      // desc_img: "Emojis.jpg",
      description: `Pure gold for visual learners because the examples clearly highlight not just what happens, but also where. Very important for smooth coding and debugging.`,
      multi_page: false,
      text: `JavaScript has a lot of useful Array operations. If you are just as confused as me about which one to take and what they all do, let's visualize these operations using emojis to better remember and apply them where they fit best. And who knows, maybe they are capable of doing even more than we expect...&#paragraph&#All examples in this article actually work, so feel free to try them in your browsers console&#paragraph&#1. Array.push()&#title&#Adds one or more elements to the end of an array. Or grows a farm.&#code_01&# 2. Array.from()&#title&#Creates a new array from an array-like or iterable object. Or separates some wild animals.&#code_02&#3. Array.concat()&#title&#Merges two or more arrays into a single new one. Or brings different worlds together.&#code_03&#4. Array.every()&#title&#Checks if all elements of an array pass the test. Or detects intruders.&#code_04&#5. Array.fill()&#title&#Replaces the elements of an array from start to end index with a given value. Or grows some trees.&#code_05&#6. Array.filter()&#title&#Creates a new array containing all elements passing the test. Or predicts your relationship status.&#code_06&#7. Array.flat()&#title&#Creates a new array containing all elements from all sub-arrays up to a given depth. Or cracks any safe.&#code_07&#8. Array.includes()&#title&#Checks if an array contains a specific element. Or finds the secret sweet tooth.&#code_08&#9. Array.join()&#title&#Concatenates all array elements to one single string, using an optional separator. Or builds local area networks.&#code_09&#10. Array.map()&#title&#Calls a function on each array element and returns the result as new array. Or feeds all hungry monkeys.&#code_10&#11. Array.reverse()&#title&#Reverses the order of elements in an array. Or decides the outcome of a race.&#code_11&#12. Array.slice()&#title&#Creates a new array from copying a portion of an array defined by start and end index. Or cheats in an exam.&#code_12&#13. Array.some()&#title&#Tests if at least one element of an array passes the test. Or finds if some participants of your meeting forgot to mute their mic.&#code_13&#14. Array.sort()&#title&#Sorts all elements of an array. Or organizes your bookshelf again.&#code_14&#15. Array.splice()&#title&#Removes, replaces or adds elements to an array. Or changes the weather.&#code_15&#16. Array.unshift()&#title&#Adds one or more elements to the beginning of an array. Or couples a loco.&#code_16`,
      source: {
        code_01: `let livestock = ["🐷", "🐮", "🐔"];
livestock.push("🐴", "🐮");

// console.log(livestock);
// ["🐷", "🐮", "🐔", "🐴", "🐮"]`,
        code_02: `const wild  = "🐻🐯🦁";
const tamed = Array.from(wild);

// console.log(tamed);
// ["🐻", "🐯", "🦁"]`,
        code_03: `const dogs = ["🐶", "🐶"];
const cats = ["🐱", "🐱", "🐱"];
const pets = dogs.concat(cats);

// console.log(pets);
// ["🐶", "🐶", "🐱", "🐱", "🐱"]`,
        code_04: `const visitors   = ["🧑", "👽", "🧑", "🧑", "🤖"];
const isHuman = e => e === "🧑";
const onlyHumans = visitors.every(isHuman);
// console.log(onlyHumans);
// false`,
        code_05: `let seeds = ["🌱", "🌱", "🌱", "🌱", "🌱"];
seeds.fill("🌳", 1, 4);

// console.log(seeds);
// ["🌱", "🌳", "🌳", "🌳", "🌱"]`,
        code_06: `const guests = ["👩👨", "👩👩", "👨", "👩", "👨👨"];
const singles = guests.filter(g => g.length/2 === 1); // *

// console.log(singles);
// ["👨", "👩"]`,
        code_07: `const savings = ["💵", ["💵", "💵"], ["💵", "💵"], [[["💰"]]]];
const loot = savings.flat(3)

// console.log(loot);
// ["💵", "💵", "💵", "💵", "💵", "💰"];`,
        code_08: `const food = ["🥦", "🥬", "🍅", "🥒", "🍩", "🥕"];
const caught = food.includes("🍩");

// console.log(caught);
// true`,
        code_09: `const devices = ["💻", "🖥️", "🖥️", "💻", "🖨️"];
const network = devices.join("〰️");

// console.log(network);
// "💻〰️🖥️〰️🖥️〰️💻〰️🖨️"`,
        code_10: `const hungryMonkeys = ["🐒", "🦍", "🦧"];
const feededMonkeys = hungryMonkeys.map(m => m + "🍌");

// console.log(feededMonkeys);
// ["🐒🍌", "🦍🍌", "🦧🍌"]`,
        code_11: `let   rabbitWins = ["🐇", "🦔"];
const hedgehogWins = rabbitWins.reverse();

// console.log(hedgehogWins);
// ["🦔", "🐇"]`,
        code_12: `const solutionsOfClassmates = ["📃", "📑", "📄", "📝"];
const myOwnSolutionReally = solutionsOfClassmates.slice(2, 3);

// console.log(myOwnSolutionReally);
// ["📄"]`,
        code_13: `const participants = ["🔇", "🔇", "🔊", "🔇", "🔊"];
const isLoud = p => p === "🔊";
const troubles = participants.some(isLoud);

// console.log(troubles);
// true`,
        code_14: `let books = ["📕", "📗", "📕", "📒", "📗", "📒"];
books.sort();

// console.log(books);
// ["📒", "📒", "📕", "📕", "📗", "📗"]`,
        code_15: `let weather = ["☁️", "🌧️", "☁️"];
weather.splice(1, 2, "☀️");

// console.log(weather);
// ["☁️", "☀️"]`,
        code_16: `let train = ["🚃", "🚃", "🚃", "🚃"];
train.unshift("🚂"// console.log(train);

// ["🚂", "🚃", "🚃", "🚃", "🚃"]`,
        },
    },
    //Train your CSS skills with online games
    {
      title: "Train your CSS skills with online games",
      id: "CSS_Online_Games",
      desc_img: "Flexbox_Zombies3.jpg",
      description: "As frontend developers we are often called to design a neat and appealing UI for our web app. &#Nowadays there are plenty of concepts and technologies to be aware of: SCSS, responsive design, Grid Layout and Flexbox, just to cite some. Even when we use them daily at work, we typically remember only the most common rules.&#Therefore why not practicing these concepts while playing and making the learning process fun?",
      multi_page: true,
      articles: [
        {
          title: "1. CSS Diner",
          text:`The goal is to use CSS statements to select specific UI elements on the screen. If the entered rules are correct, we can pass to the following level. There are 32 levels in total.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "CSS_Diner.jpg",
              img_02: "CSS_Diner.png",
              link_01: "https://flukeout.github.io/",
          }
        },
        {
          title: "2. CSS Grid Garden",
          text:`In this game, we must water carrot crops by mastering CSS grid. To reach our goal we need to define columns, rows, and grid template areas. In 28 different levels you can learn CSS Grid Layout. &#paragraph&#It covers the following grid properties: grid-column-start, grid-column-end, grid-column, grid-row-start, grid-row-end, grid-row, grid-area, order, grid-template-columns, grid-template-rows and grid-template.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "CSS_Grid_Garden.jpg",
              img_02: "CSS_Grid_Garden2.jpg",
              link_01: "https://cssgridgarden.com/"
          }
        },
        {
          title: "3. Grid Critters",
          text:`This game is a little design masterpiece.
          We need to use our CSS Grid skills to save alien critters from extinction! At each level more challenging requirements must be fulfilled to succeed and proceed to the following stage.&#paragraph&#The game has been developed by Dave Geddes, ex IT architect, now fully converted into educational platforms developer. You can read here the story behind the project and also the CSS Grid rules used for the game home page. The blog post is already very informative by itself!&#paragraph&#Cost: 179$&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Grid_Critters.jpg",
              img_02: "Gridcritters.jpg",
              link_01: "https://www.gridcritters.com/"
          }
        },
        {
          title: "4. CSS Battle",
          text:`In CSS Battle we have to replicate a target layout with the smallest possible code and we can compete against other players to get the highest score on the leaderboard.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "CSS_Battle.png",
              img_02: "CSS_Battle2.png",
              link_01: "https://cssbattle.dev/"
          }
        },
        {
          title: "5. Flexbox Froggy",
          text:`Help Froggy and friends by writing CSS code!&#paragraph&#Flexbox Froggy takes inspiration from the classic arcade game Frogger, and web literacy games like the brilliant CSS Diner and Erase All Kittens, where you learn about CSS selectors and HTML markup respectively.&#paragraph&#We must bring the frogs home to their lilypads by using CSS flexbox instructions. We need to control alignment, spacing, and wrapping of elements on the webpage to achieve our goal.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Flexbox_Froggy.jpg",
              img_02: "Flexbox_Froggy2.jpg",
              link_01: "https://flexboxfroggy.com/"
          }
        },
        {
          title: "6. Flexbox Defense",
          text:`Flexbox defense is based on the classic tower defence games, but to place our items we write CSS instructions. We use the justify-content property on the main container to move the single towers into effective positions.&#paragraph&#I was just mentioning this game. It covers the flex properties align-items, justify-content, flex-direction, align-self and order in 12 different levels. Especially the last 4 levels are really fun and a little bit tricky.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Flexbox_defense.jpg",
              img_02: "Flexbox_defense2.jpg",
              link_01: "http://www.flexboxdefense.com/"
          }
        },
        {
          title: "7. Flexbox Zombies",
          text:`Also this game has been designed by Dave Geddes (as Gridcritters above). Here we use Flexbox to position the hero's crossbow and hit the zombies and survive along the game.&#paragraph&#Have a look at the video below used by Dave for the game launch. Also in this case the graphics and the story are really amazing!&#paragraph&#Each section unravels part of the plot, gives you expertise over a new flexbox concept, and presents zombie survival challenges that force you to solidify your new skills like your life depends on it.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Flexbox_Zombies.jpg",
              img_02: "Flexbox_Zombies2.jpg",
              link_01: "https://flexboxzombies.com/p/flexbox-zombies"
          }
        },
      ],
    },
    //Train your WEB DEV skills with online games",
    {
      title: "Train your WEB DEV skills with online games",
      id: "WEB_Online_Games",
      description: "Learning to code by ourselves can be overwhelming, not only for the difficulty of the subject, but also trying not to get lost in the humongous amount of tutorials and documentation available online. Luckily, there are resources that make things easier and fun, offering educational contents with a gamification aspect.",
      multi_page: true,
      articles: [
        {
          title: "1. Checki0",
          text:`Checki0 allows to learn the basics of Javascript or Python by solving different problems and moving between "floating islands" in an imaginary world. Each island collects around 40 challenges and an increasing level of difficulty.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Checki0.jpg",
              img_02: "Checki02.jpg",
              link_01: "https://checkio.org/",
          }
        },
        {
          title: "2. Elevator Saga",
          text:`In Elevator Saga you have to program the movement of elevators, by writing a program in JavaScript. The goal is to transport people in the most efficient manner.&#paragraph&#Depending on how well you do it, you can progress through the ever more difficult challenges.&#paragraph&#An help and documentation section will help you moving the first steps in this interesting game.&#paragraph&#Let's play&#link_01&# &#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Elevator_Saga.jpg",
              link_01: "http://play.elevatorsaga.com/",
          }
        },
        {
          title: "3. CodinGame",
          text:`CodinGame offers free games where you have to solve puzzles and algorithm problems. It is possible to choose which language to learn among a wide choice: JavaScript, Ruby, Java and C#, just to mention some.&#paragraph&#To make things more interesting, you can invite friends to play online and - if you want to increase the challenge - you can also participate in international programming competitions.&#paragraph&#There are many playgrounds for each programming language and you can choose among different grades of difficulty, so that you can proceed at your own pace.&#paragraph&#Let's play&#link_01&# &#img_01`,
          id: uuidv4(),
          source: {
              img_01: "CodinGame.jpg",
              link_01: "https://www.codingame.com/training",
          }
        },
        {
          title: "4. Screeps",
          text:`Screeps is MMO sandbox for programmers with already some experience. The title stands for "scripting creeps". The game offers a wide range of options for players and possibilities to practice real-life code in a fun way.&#paragraph&#Screeps is a massive multiplayer online real-time strategy game. Each player can create their own colony in a single persistent world shared by all the players. Such a colony can mine resources, build units, conquer territory. As you conquer more territory, your influence in the game world grows, as well as your abilities to expand your footprint. However, it requires a lot of effort on your part, since multiple players may aim at the same territory.
          &#paragraph&#Unlike some other RTS games, your units in Screeps can react to events without your participation – provided that you have programmed them properly. And, unlike other MMO, you do not have to play Screeps constantly to play well. It is quite enough just to check once in a while to see if everything goes well.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Screeps.jpg",
              img_02: "Screeps2.jpg",
              link_01: "https://screeps.com/",
          }
        },
        {
          title: "5. CodeWars",
          text:`CodeWars is a portal providing an extensive list of languages you can choose from.&#paragraph&#After an initial and simple test, you will be asked to confirm the programming language you are interested in and to select at which level to start your training (from absolute beginner to senior developer). You earn points by solving different challenges, each one covering different coding principles, and compete with other developers for the highest position on the scoreboard.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "CodeWars.jpg",
              img_02: "CodeWars2.jpg",
              link_01: "https://www.codewars.com/",
          }
        },
        {
          title: "6. Untrusted",
          text:`Untrusted is an adventure game where you need to use your JavaScript skills to solve problems that arise during the story development. In order to guide the main character (Dr. Eval, the green @ on the screen) between levels, you enter javascript instructions on the right panel to let him escape from the current stage.&#paragraph&#Let's play&#link_01&# &#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Untrusted.jpg",
              link_01: "https://alexnisnevich.github.io/untrusted/",
          }
        },
        {
          title: "7. Ruby Warrior",
          text:`You guide a knight through different levels, coding his moves and learning Ruby along the way. You can choose among an easy or intermediate difficulty.&#paragraph&#Note: the game starts with music on! So be aware in case you open the link in the office or at school &#paragraph&#Let's play&#link_01&# &#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Ruby_Warrior.png",
              link_01: "https://www.bloc.io/ruby-warrior#/",
          }
        },
        {
          title: "8. Dungeon & Developers",
          text:`Many developers like RPG games and 352 Inc, a digital web agency, used this aspect to create Dungeon & Developers. &#paragraph&#It is not exactly a game, but it provides really cool graphics and it is worth a look. You build a talent tree, following the classical RPG tree skills. For each level there is a set of links redirecting to different topics (CSS, Javascript, SEO, etc.), after mastering them - that is, you
          study the referenced docs at each step - you unlock the next skillset, adding features points (strength, wisdom or charisma) to your character, exactly as in a classic RPG game.&#paragraph&#From the creators: We came up with Dungeons & Developers as a fun way to assess, promote and learn the skills it takes to design and develop great web sites.&#paragraph&#Let's play&#link_01&# &#img_01&# &#img_02`,
          id: uuidv4(),
          source: {
              img_01: "Dungeon.jpg",
              img_02: "Dungeon2.jpg",
              link_01: "http://www.dungeonsanddevelopers.com/",
          }
        },
      ],
    },
    // must-know JavaScript array methods",
    {
      title: "15 must-know JavaScript array methods",
      id: "15_must-know_javaScript_array_methods",
      description: "In JavaScript, an array is a special variable that is used to store different elements. It has some built-in properties and methods we can use to add, remove, iterate, or manipulate data following our needs. &#And knowing JavaScript array methods can lift your skills as a developer.",
      multi_page: false,
      text: `1. some()&#title&#This method tests the array with a function passed as a parameter. It will return true if at least one element matches the test and false for the opposite.
      The some() method executes the function once for each element present in the array:
      Note: some() does not execute the function for array elements without values.
      Note: some() does not change the original array.&#code_01&#2. reduce()&#title&#This method receives a function which has an accumulator and a value as an argument. It applies the function to the accumulator and each value in the array to return at the end just a single value.&#code_02&#3. every()&#title&#This method tests the array with a function passed as a parameter. It will return true if each element of the array match the test and false for the opposite. Note: every() does not execute the function for array elements without values; every() does not change the original array&#code_03&#4. map()&#title&#This method receives a function as a parameter. And return a new array that contains an image of each element of the array. It will always return the same amount of items.&#code_04&#5. flat()&#title&#This method creates a new array that contains the elements holden on the sub-array and flat it into the new array. Notice that, this method will go only one level depth.&#code_05&#6. filter()&#title&#This method receives a function as a parameter. And return a new array that contains all the elements of the array for which the filtering function passed as argument returns true.&#code_06&#7. forEach()&#title&#This method applies a function to each element of the array. forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized.&#code_07&#8. findIndex()&#title&#This method receives a function as a parameter and will apply it to the array. It returns the index of an element found and which satisfies the test function passed as an argument or -1 if none satisfies it.&#code_08&#9. Remove falsy values from an array&#title&#At first, let’s defined falsy values. In Javascript, falsy values are false, 0, „”, null, NaN, undefined. Now we can find out how to remove this kind of values from our array. To achieve this, we are going to use the .filter() method.&#code_09&#10. Get random value form the array&#title&#Sometimes we need to select a value from the array randomly. To create it in an easy, fast, and short way and keep our code clean we can get a random index number according to the array length. Let’s see the code:&#code_10&#11. Reversing an array&#title&#When we need to flip our array there is no need to create it through the complicated loops and functions, there is an easy array method which does it all for us, and with one line of code, we may have our array reversed. Let’s check it:&#code_11&#12. .lastIndexOf() method&#title&#In Javascript, there is an interesting method which allows finding the index of the last occurrence of the given element. For example, if our array has duplicated values, we can find the position of the last occurrence of it. Let’s see the code example:&#code_12&#13. Sum all the values in the array&#title&#Another challenge which happens very often during Javascript Engineer interviews. Nothing scary comes here; it can be solved using .reduce method in one line of code. Let’s check out the code:&#code_13`,
      source: {
        code_01:`const myAwesomeArray = ["a", "b", "c", "d", "e"]
    
myAwesomeArray.some(test => test === "d")
//-------> Output : true`,
        code_02: `const myAwesomeArray = [1, 2, 3, 4, 5]
    
myAwesomeArray.reduce((total, value) => total * value)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120`,
        code_03:`const myAwesomeArray = ["a", "b", "c", "d", "e"]
    
myAwesomeArray.every(test => test === "d")
//-------> Output : false
        
const myAwesomeArray2 = ["a", "a", "a", "a", "a"]
        
myAwesomeArray2.every(test => test === "a")
//-------> Output : true`,
        code_04: `const myAwesomeArray = [5, 4, 3, 2, 1]
myAwesomeArray.map(x => x * x)
        
//-------> Output : 25
//                  16
//                  9
//                  4
//                  1`,
        code_05:`const myAwesomeArray = [[1, 2], [3, 4], 5]
    
myAwesomeArray.flat()
//-------> Output : [1, 2, 3, 4, 5]`,
        code_06:`const myAwesomeArray = [
{ id: 1, name: "john" },
{ id: 2, name: "Ali" },
{ id: 3, name: "Mass" },
{ id: 4, name: "Mass" },
]
          
myAwesomeArray.filter(element => element.name === "Mass")
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}`,
        code_07:`const myAwesomeArray = [
{ id: 1, name: "john" },
{ id: 2, name: "Ali" },
{ id: 3, name: "Mass" },
]
            
myAwesomeArray.forEach(element => console.log(element.name))
//-------> Output : john
//                  Ali
//                  Mass`,
        code_08:`const myAwesomeArray = [
{ id: 1, name: "john" },
{ id: 2, name: "Ali" },
{ id: 3, name: "Mass" },
]
              
myAwesomeArray.findIndex(element => element.id === 3)
//-------> Output : 2
              
myAwesomeArray.findIndex(element => element.id === 7)
//-------> Output : -1`,
        code_09:`let mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
let trueArr = mixedArr.filter(Boolean);
              
console.log(trueArr); // returns [“blue”, 9, true, “white”]`,
        code_10:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
let randomColor = colors[(Math.floor(Math.random() * (colors.length)))]`,
        code_11:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
let reversedColors = colors.reverse();
              
console.log(reversedColors);
// returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]`,
        code_12:`let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
              
let lastIndex = nums.lastIndexOf(5);
              
console.log(lastIndex); // returns 9`,
        code_13:`let nums = [1, 5, 2, 6];
              
let sum = nums.reduce((x, y) => x + y);
              
console.log(sum); // returns 14`,
      }
    },
    //Setting content max-width in 2021
    {
      title: "Setting content max-width in 2021",
      id: "Content_Max_Width",
      desc_img: "Content_Max_Width.png",
      description: "The max-width property in CSS is used to set the maximum width of a specified element.",
      multi_page: false,
      text: `Y'all are familiar with something like this in your code: &#code_01&#By having a wrapper, you limit the content on your site to not exceed a certain width (e.g. 1000px). The CSS for the wrapper usually looks like this: &#code_02&#That has certain limitations, the most glaring one being that you cannot use background color or background image on this element due to the width being set (usually you'd work around this by setting background on <body> or nest the wrapper inside another full-width element with background). And honestly, that is so much CSS for something that is kind of trivial. We are in 2021, and CSS is very powerful. I can actually change the max-width to something more fluid: &#code_03&#Awesome! Now my content feels pretty damn comfortable to read in all viewports (it is 80% wide but does not go beyond 75 characters). However, that is not enough. It is still TOO MUCH CSS. I think I am gonna reduce it to 1 CSS var and 2 lines of padding rules:&#code_04&#Hell yeah! That is more like it. It achieves the same goal of setting a max-width but now I can even use background color or background image without needing to write extra markup. This element has evolved and I am renaming it to section. I can basically create multiple sections on a page with this and I can give my content some fancy zebra striping if I so desire:&#code_05&#As for the CSS var, I can use that on header and footer as well. Woot!&#paragraph&#Goodbye, wrapper. I will not miss ya.&#
      `,
      source: {
        code_01: `<body>
  <div class="wrapper">...</div>
</body>`,
        code_02: `.wrapper {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}`,
        code_03: `.wrapper {
  max-width: min(80vw, 75ch);
    ...
}`,
        code_04: `:root {
  --page-padding-x: calc((100vw - min(80vw, 75ch)) / 2);
}

.section {
  padding-right: var(--page-padding-x);
  padding-left: var(--page-padding-x);
}`,
        code_05: `<body>
  <div class="section black">...</div>
  <div class="section white">...</div>
  <div class="section black">...</div>
  <div class="section white">...</div>
</body>`,
      },
    },
    //JavaScript Event Loop
    {
      title: "JavaScript Event Loop",
      id: "JavaScript_Event_Loop",
      description: `The event loop is one of those things that every JavaScript developer has to deal with in one way or another, but it can be a bit confusing to understand at first. &#The most important thing is to understand where certain errors / behavior can come from.`,
      multi_page: false,
      text: `What is the event loop and why should you care?&#title&# &#paragraph&#JavaScript is single-threaded: only one task can run at a time. Usually that’s no big deal, but now imagine you’re running a task which takes 30 seconds.. During that task we’re waiting for 30 seconds before anything else can happen (JavaScript runs on the browser’s main thread by default, so the entire UI is stuck)  It’s 2021, no one wants a slow, unresponsive website.&#paragraph&#Luckily, the browser gives us some features that the JavaScript engine itself doesn’t provide: a Web API. This includes the DOM API, setTimeout, HTTP requests, and so on. This can help us create some async, non-blocking behavior &#paragraph&#When we invoke a function, it gets added to something called the call stack. The call stack is part of the JS engine, this isn’t browser specific. It’s a stack, meaning that it’s first in, last out (think of a pile of pancakes). When a function returns a value, it gets popped off the stack&#img_01&#The respond function returns a setTimeout function. The setTimeout is provided to us by the Web API: it lets us delay tasks without blocking the main thread. The callback function that we passed to the setTimeout function, the arrow function () => { return 'Hey' } gets added to the Web API. In the meantime, the setTimeout function and the respond function get popped off the stack, they both returned their values!&#img_02&#In the Web API, a timer runs for as long as the second argument we passed to it, 1000ms. The callback doesn’t immediately get added to the call stack, instead it’s passed to something called the queue.&#img_03&#This can be a confusing part: it doesn't mean that the callback function gets added to the callstack(thus returns a value) after 1000ms! It simply gets added to the queue after 1000ms. But it’s a queue, the function has got to wait for its turn!&#paragraph&#Now this is the part we’ve all been waiting for… Time for the event loop to do its only task: connecting the queue with the call stack! If the call stack is empty, so if all previously invoked functions have returned their values and have been popped off the stack, the first item in the queue gets added to the call stack. In this case, no other functions were invoked, meaning that the call stack was empty by the time the callback function was the first item in the queue.&#img_04&#The callback is added to the call stack, gets invoked, and returns a value, and gets popped off the stack.&#img_05&#Reading an article is fun, but you'll only get entirely comfortable with this by actually working with it over and over. Try to figure out what gets logged to the console if we run the following:&#code_01&#Got it? Let's quickly take a look at what's happening when we're running this code in a browser:&#img_06&#1. We invoke bar. bar returns a setTimeout function.&#paragraph&#2. The callback we passed to setTimeout gets added to the Web API, the setTimeout function and bar get popped off the callstack.&#paragraph&#3. The timer runs, in the meantime foo gets invoked and logs First. foo returns (undefined),baz gets invoked, and the callback gets added to the queue.&#paragraph&#4. baz logs Third. The event loop sees the callstack is empty after baz returned, after which the callback gets added to the call stack.&#paragraph&#5. The callback logs Second.&#`,

      source: {
        code_01: `const foo = () => console.log("First");
  const bar = () => setTimeout(() => console.log("Second"), 500);
  const baz = () => console.log("Third");

  bar();
  foo();
  baz();`,
          img_01: "Event_Loop_1.gif",
          img_02: "Event_Loop_2.gif",
          img_03: "Event_Loop_3.gif",
          img_04: "Event_Loop_4.gif",
          img_05: "Event_Loop_5.gif",
          img_06: "Event_Loop_6.gif",
        }
    },
    //VS Code Shortcuts as GIF    
    {
      title: "VS Code Shortcuts as GIF",
      id: "VS_Code_Shortcuts",
      description: `Despite many shortcuts I'm using frequently in VS Code, the following ones can come in very handy.
      &#Here some GIFs for visualization to better remember them. Maybe there are some shortcuts you didn't remember either but are useful for you.&#Every command in VS Code can also be executed via command prompt with CTRL+SHIFT+P and a search query. &#But knowing the direct shortcut might be faster.`,
      multi_page: true,
      articles: [
        {
          title: "1. ALT+Z = Toggle word wrap",
          text:`A handy little helper when you quickly want to see complete lines without scrolling horizontally.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts04.gif",
          }
        },
        {
          title: "2. CTRL+TAB = Switch tabs",
          text:`The fastest way to switch already open files without using the mouse.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts08.gif",
          }
        },
        {
          title: "3. CTRL+G = Go to line",
          text:`This is the shortcut for typing CTRL+P   :.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts05.gif",
          }
        },
        {
          title: "4. SHIFT+ALT+I = Insert cursor at end of each line selected",
          text:`This is useful for a quick creation of multiple cursors in the selected area.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts09.gif",
          }
        },
        {
          title: "5. CTRL+L = Select current line",
          text:`This is the shortcut for typing CTRL+P   :.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts10.gif",
          }
        },
        {
          title: "6. CTRL+SHIFT+L = Select all occurrences of current selection",
          text:`This shortcut really saves time because you don't have to CTRL+D through a whole file.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts11.gif",
          }
        },
        {
          title: "7. CTRL+F2 = Select all occurrences of current word",
          text:`With this you don't even have to select something anymore. Just place the cursor on the word you want to select all occurrences of.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts12.gif",
          }
        },
        {
          title: "8. SHIFT+ALT+F = Format document",
          text:`Because nobody wants to format a whole file manually.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts14.gif",
          }
        },
        {
          title: "9. CTRL+K   CTRL+F = Format selection",
          text:`In case you want to format only some parts of a file.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts15.gif",
          }
        },
        {
          title: "10. F2 = Rename Symbol",
          text:`An indispensible shortcut for refactoring code.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts18.gif",
          }
        },
        {
          title: "11. CTRL+K   CTRL+X = Trim trailing whitespace",
          text:`This is especially useful for multi-line selections.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts19.gif",
          }
        },
        {
          title: "12. CTRL+SHIFT+H = Replace in files",
          text:`If only one file at a time isn't enough for you.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts21.gif",
          }
        },
        {
          title: "13. CTRL+K   Z = Enter Zen Mode",
          text:`Instantly coding distraction free. To exit Zen mode, hit ESC ESC.&#img_01`,
          id: uuidv4(),
          source: {
              img_01: "Shortcuts23.gif",
          }
        },
      ]
    },
  ];
}

export default dataArticles;


















//&#____&#title&#______&#code_02

// {
//   title: "15 must-know JavaScript array methods",
//   id: "JavaScript_array_methods",
//   description: "In JavaScript, an array is a special variable that is used to store different elements. It has some built-in properties and methods we can use to add, remove, iterate, or manipulate data following our needs. &#And knowing JavaScript array methods can lift your skills as a developer.",
//   multi_page: false,
//   text: `1. some()&#title&#This method tests the array with a function passed as a parameter. It will return true if at least one element matches the test and false for the opposite.
//   The some() method executes the function once for each element present in the array:
//   Note: some() does not execute the function for array elements without values.
//   Note: some() does not change the original array.&#code_01&#2. reduce()&#title&#This method receives a function which has an accumulator and a value as an argument. It applies the function to the accumulator and each value in the array to return at the end just a single value.&#code_02&#3. every()&#title&#This method tests the array with a function passed as a parameter. It will return true if each element of the array match the test and false for the opposite. Note: every() does not execute the function for array elements without values; every() does not change the original array&#code_03&#4. map()&#title&#This method receives a function as a parameter. And return a new array that contains an image of each element of the array. It will always return the same amount of items.&#code_04&#5. flat()&#title&#This method creates a new array that contains the elements holden on the sub-array and flat it into the new array. Notice that, this method will go only one level depth.&#code_05&#6. filter()&#title&#This method receives a function as a parameter. And return a new array that contains all the elements of the array for which the filtering function passed as argument returns true.&#code_06&#7. forEach()&#title&#This method applies a function to each element of the array. forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized.&#code_07&#8. findIndex()&#title&#This method receives a function as a parameter and will apply it to the array. It returns the index of an element found and which satisfies the test function passed as an argument or -1 if none satisfies it.&#code_08&#9. Remove falsy values from an array&#title&#At first, let’s defined falsy values. In Javascript, falsy values are false, 0, „”, null, NaN, undefined. Now we can find out how to remove this kind of values from our array. To achieve this, we are going to use the .filter() method.&#code_09&#10. Get random value form the array&#title&#Sometimes we need to select a value from the array randomly. To create it in an easy, fast, and short way and keep our code clean we can get a random index number according to the array length. Let’s see the code:&#code_10&#11. Reversing an array&#title&#When we need to flip our array there is no need to create it through the complicated loops and functions, there is an easy array method which does it all for us, and with one line of code, we may have our array reversed. Let’s check it:&#code_11&#12. .lastIndexOf() method&#title&#In Javascript, there is an interesting method which allows finding the index of the last occurrence of the given element. For example, if our array has duplicated values, we can find the position of the last occurrence of it. Let’s see the code example:&#code_12&#Sum all the values in the array&#title&#Another challenge which happens very often during Javascript Engineer interviews. Nothing scary comes here; it can be solved using .reduce method in one line of code. Let’s check out the code:&#code_13`,
//   sourse: {
//     code_01:`const myAwesomeArray = ["a", "b", "c", "d", "e"]

// myAwesomeArray.some(test => test === "d")
// //-------> Output : true`,
//     code_02: `const myAwesomeArray = [1, 2, 3, 4, 5]

// myAwesomeArray.reduce((total, value) => total * value)
// // 1 * 2 * 3 * 4 * 5
// //-------> Output = 120`,
//     code_03:`const myAwesomeArray = ["a", "b", "c", "d", "e"]

// myAwesomeArray.every(test => test === "d")
// //-------> Output : false
    
// const myAwesomeArray2 = ["a", "a", "a", "a", "a"]
    
// myAwesomeArray2.every(test => test === "a")
// //-------> Output : true`,
//     code_04: `const myAwesomeArray = [5, 4, 3, 2, 1]
// myAwesomeArray.map(x => x * x)
    
// //-------> Output : 25
// //                  16
// //                  9
// //                  4
// //                  1`,
//     code_05:`const myAwesomeArray = [[1, 2], [3, 4], 5]

// myAwesomeArray.flat()
// //-------> Output : [1, 2, 3, 4, 5]`,
//     code_06:`const myAwesomeArray = [
// { id: 1, name: "john" },
// { id: 2, name: "Ali" },
// { id: 3, name: "Mass" },
// { id: 4, name: "Mass" },
// ]
      
// myAwesomeArray.filter(element => element.name === "Mass")
// //-------> Output : 0:{id: 3, name: "Mass"},
// //                  1:{id: 4, name: "Mass"}`,
//     code_07:`const myAwesomeArray = [
// { id: 1, name: "john" },
// { id: 2, name: "Ali" },
// { id: 3, name: "Mass" },
// ]
        
// myAwesomeArray.forEach(element => console.log(element.name))
// //-------> Output : john
// //                  Ali
// //                  Mass`,
//     code_08:`const myAwesomeArray = [
// { id: 1, name: "john" },
// { id: 2, name: "Ali" },
// { id: 3, name: "Mass" },
// ]
          
// myAwesomeArray.findIndex(element => element.id === 3)
// //-------> Output : 2
          
// myAwesomeArray.findIndex(element => element.id === 7)
// //-------> Output : -1`,
//     code_09:`let mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
// let trueArr = mixedArr.filter(Boolean);
          
// console.log(trueArr); // returns [“blue”, 9, true, “white”]`,
//     code_10:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
// let randomColor = colors[(Math.floor(Math.random() * (colors.length)))]`,
//     code_11:`let colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
// let reversedColors = colors.reverse();
          
// console.log(reversedColors);
// // returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]`,
//     code_12:`let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
          
// let lastIndex = nums.lastIndexOf(5);
          
// console.log(lastIndex); // returns 9`,
//     code_13:`let nums = [1, 5, 2, 6];
          
// let sum = nums.reduce((x, y) => x + y);
          
// console.log(sum); // returns 14`,
//   }
// },
          




