
function quizData() {
  return [
    {
      id: "html_quiz",
      title: "HTML QUIZ",
      number_of_questions: 10,
      all_questions: 40,
      best_score: "your best score:",
      time_limit: "no time limit",
      difficulty: "basic, intermediate",
      description: "You will get points for each correct answer. At the end of the Quiz, your total score will be displayed.",
      points: "Basic: 5 points. Intermediate: 10 points",
      questions: [
        {
          id: 0,
          active: false,
          completed: false,
          level: "basic",
          point: 5,               
          questionText: 'What indicates the content in file is HTML when delivered on the network.',
          answerOptions: [
            { answerText: 'The extension of the file “.html”', isCorrect: false },
            { answerText: 'The “content-type” header', isCorrect: true },
            { answerText: 'Both “.html” extension and “content-type” header', isCorrect: false },
            { answerText: 'None of the mentioned', isCorrect: false },            
          ],
        },
        {
          id: 1,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'Opening Tag of HTML Tag is called as ________.',
          answerOptions: [
            { answerText: 'Closed Tag', isCorrect: false },
            { answerText: 'Starting Tag', isCorrect: true },
            { answerText: 'Forward Tag', isCorrect: false },
            { answerText: 'Enging Tag', isCorrect: false },
          ],
        },
        {
          id: 2,
          active: false,
          completed: false,
          level: "basic",
          point: 5,          
          questionText: 'HTML stands for ________.',
          answerOptions: [
            { answerText: 'Hyper Text Markup Language', isCorrect: true },
            { answerText: 'Hyper Text Makeup Language', isCorrect: false },
            { answerText: 'None of these', isCorrect: false },
            { answerText: 'Hyper Tech Markup Language', isCorrect: false },
          ],
        },
        {
          id: 3,
          active: false,
          completed: false,
          level: "basic",
          point: 5,          
          questionText: 'HTML program is saved using _________ extension.',
          answerOptions: [
            { answerText: '.htl', isCorrect: false },
            { answerText: '.html', isCorrect: true },
            { answerText: '.hml', isCorrect: false },
            { answerText: '.htlm', isCorrect: false },
          ],
        },
        {
          id: 4,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'HTML Code written in MAC can be browsed in a PC with Window 7 installed , User will be able to see same design that was designed on the MAC Pc.',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ],
        },
        {
          id: 5,
          active: false,
          completed: false,
          level: "basic",
          point: 5,          
          questionText: 'Who was the primary author of HTML?',
          answerOptions: [
            { answerText: 'Brendan Eich', isCorrect: false },
            { answerText: 'Sabeer Bhatiya', isCorrect: false },
            { answerText: 'Google Inc.', isCorrect: false },
            { answerText: 'Tim Berners-Lee', isCorrect: true },
          ],
        },
        {
          id: 6,
          active: false,
          completed: false,
          level: "basic",
          point: 5,       
          questionText: 'Choose the correct tag for largest heading in HTML.',
          answerOptions: [
            { answerText: 'h6', isCorrect: false },
            { answerText: 'heading', isCorrect: false },
            { answerText: 'h1', isCorrect: true },
            { answerText: 'head', isCorrect: false },
          ],
        },
        {
          id: 7,
          active: false,
          completed: false,
          level: "basic",
          point: 5,          
          questionText: ' Which of the following is valid colour code ?',
          answerOptions: [
            { answerText: '#000000;', isCorrect: true },
            { answerText: '#0000000;', isCorrect: false },
            { answerText: '#00000000;', isCorrect: false },
            { answerText: '#000000000;', isCorrect: false },
          ],
        },
        {
          id: 8,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: 'A favicon is an image used by the browser to identify a website or web application.',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ],
        },
        {
          id: 9,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                   
          questionText: 'Which of the following are table tags?',
          answerOptions: [
            { answerText: 'table, thead, tr, td', isCorrect: true },
            { answerText: 'colspan, table, tr', isCorrect: false },
            { answerText: 'table, tt, tr, td', isCorrect: false },
            { answerText: 'none of the mentioned', isCorrect: false },
          ],
        },
        {
          id: 10,
          active: false,
          completed: false,
          level: "basic",
          point: 5,               
          questionText: 'Which of the following is used increase the col width?',
          answerOptions: [
            { answerText: 'Cellspacing', isCorrect: false },
            { answerText: 'Cellpadding', isCorrect: false },
            { answerText: 'Rowspan', isCorrect: false },
            { answerText: 'Colspan', isCorrect: true },
          ],
        },
        {
          id: 11,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                
          questionText: 'DOM stands for',
          answerOptions: [
            { answerText: 'Document object model', isCorrect: true },
            { answerText: 'Data object model', isCorrect: false },
            { answerText: 'Document Oriented model', isCorrect: false },
            { answerText: 'Data oriented model', isCorrect: false },
          ],
        },
        {
          id: 12,
          active: false,
          completed: false,
          level: "basic",
          point: 5,         
          questionText: 'The BODY tag is usually used after',
          answerOptions: [
            { answerText: 'HTML tag', isCorrect: false },
            { answerText: 'EM tag', isCorrect: false },
            { answerText: 'TITLE tag', isCorrect: false },
            { answerText: 'HEAD tag', isCorrect: true },
          ],
        },
        {
          id: 13,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                 
          questionText: 'Text/Html is called the __________ of the page',
          answerOptions: [
            { answerText: 'Content type', isCorrect: false },
            { answerText: 'MIME type', isCorrect: false },
            { answerText: 'Content type/MIME type', isCorrect: true },
            { answerText: 'None of these', isCorrect: false },
          ],
        },
        {
          id: 14,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: 'The href attribute in the link tag specifies the:',
          answerOptions: [
            { answerText: 'Destination of a link.', isCorrect: true },
            { answerText: 'Link', isCorrect: false },
            { answerText: 'Hypertext', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
          ],
        },
        {
          id: 15,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: 'Is width=”100” and width=”100%” the same?',
          answerOptions: [
            { answerText: 'No', isCorrect: true },
            { answerText: 'Yes', isCorrect: false },
          ],
        },
        {
          id: 16,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: 'What are <div> tags used for?',
          answerOptions: [
            { answerText: 'To replace paragraphs. i.e. p tags', isCorrect: false },
            { answerText: 'To logically divide the paragraphs', isCorrect: false },
            { answerText: 'To logically divide the document', isCorrect: true },
            { answerText: 'To provide space between tables', isCorrect: false },
          ],
        },
        {
          id: 17,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: 'How can we resize the image?',
          answerOptions: [
            { answerText: 'Using resize attribute', isCorrect: false },
            { answerText: 'Using height and width', isCorrect: true },
            { answerText: 'Using size attribute', isCorrect: false },
            { answerText: 'Using rs attribute', isCorrect: false },
          ],
        },
        {
          id: 18,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                  
          questionText: `When creating a Web document, what format is used to express an image's height and width?`,
          answerOptions: [
            { answerText: 'Pixels', isCorrect: true },
            { answerText: 'Centimeters', isCorrect: false },
            { answerText: 'Dots per inch', isCorrect: false },
            { answerText: 'Inches', isCorrect: false },
          ],
        },
        {
          id: 19,
          active: false,
          completed: false,
          level: "basic",
          point: 5,                 
          questionText: 'Can I play audios in HTML?',
          answerOptions: [
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes', isCorrect: true },
          ],
        },       
        {
          id: 20,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                    
          questionText: 'What does the <br> tag add to your webpage ?',
          answerOptions: [
            { answerText: 'Long break', isCorrect: false },
            { answerText: 'Paragraph break', isCorrect: false },
            { answerText: 'Line break', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
          ],
        },         
        {
          id: 21,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                    
          questionText: 'For frames in HTML, how do you specify the rest of the screen?',
          answerOptions: [
            { answerText: 'Using &', isCorrect: false },
            { answerText: 'Using $', isCorrect: false },
            { answerText: 'Using *', isCorrect: true },
            { answerText: 'Using #', isCorrect: false },
          ],
        },
        {
          id: 22,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                      
          questionText: 'HTML5 documents may contains a ___________ element, which is used to set the header section of a document.',
          answerOptions: [
            { answerText: 'header', isCorrect: true },
            { answerText: 'footer', isCorrect: false },
            { answerText: 'section', isCorrect: false },
            { answerText: 'none of the mentioned', isCorrect: false },
          ],
        },
        {
          id: 23,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                      
          questionText: 'The _________ element is used to render simple graphics such as line art, graphs, and other custom graphical elements on the client side.',
          answerOptions: [
            { answerText: 'metadata', isCorrect: false },
            { answerText: 'css', isCorrect: false },
            { answerText: 'canvas', isCorrect: true },            
            { answerText: 'art', isCorrect: false },            
          ],
        },
        {
          id: 24,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                    
          questionText: 'What are meta tags used for?',
          answerOptions: [
            { answerText: 'To store information usually relevant to browsers and search engines', isCorrect: true },
            { answerText: 'To only store information usually relevant to browsers', isCorrect: false },
            { answerText: 'To only store information about search engines', isCorrect: false },
            { answerText: 'To store information about external links', isCorrect: false },
          ],
        },
        {
          id: 25,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                    
          questionText: 'The default font-size of HTML document is?',
          answerOptions: [
            { answerText: '6', isCorrect: false },
            { answerText: '4', isCorrect: true },
            { answerText: '3', isCorrect: false },
            { answerText: '8', isCorrect: false },
          ],
        },
        {
          id: 26,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,               
          questionText: 'Which of the following attribute is used to display date/time content?',
          answerOptions: [
            { answerText: 'time', isCorrect: false },
            { answerText: 'datetime', isCorrect: true },
            { answerText: 'date', isCorrect: false },
            { answerText: 'year', isCorrect: false },
          ],
        },
        {
          id: 27,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,               
          questionText: 'Which element may be used within content to represent material that is tangential?',
          answerOptions: [
            { answerText: 'aside', isCorrect: true },
            { answerText: 'cite', isCorrect: false },
            { answerText: 'article', isCorrect: false },
            { answerText: 'class', isCorrect: false },
          ],
        },
        {
          id: 28,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,     
          questionText: '___________ defines a group of content that should be used as a figure and may be labeled by a legend element.',
          answerOptions: [
            { answerText: 'figure', isCorrect: true },
            { answerText: 'details', isCorrect: false },
            { answerText: 'output', isCorrect: false },
            { answerText: 'aside', isCorrect: false },
          ],
        },
        {
          id: 29,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which of the following are attributes of Font Tag ?',
          answerOptions: [
            { answerText: 'Face', isCorrect: false },
            { answerText: 'Size', isCorrect: false },
            { answerText: 'Color', isCorrect: false },
            { answerText: 'All of above', isCorrect: true },
          ],
        },
        {
          id: 30,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which attribute is used to name an element uniquely?',
          answerOptions: [
            { answerText: 'id', isCorrect: true },
            { answerText: 'all of above', isCorrect: false },
            { answerText: 'class', isCorrect: false },
            { answerText: 'dot', isCorrect: false },
          ],
        },
        {
          id: 31,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'What is the correct sequence of HTML tags for starting a webpage?',
          answerOptions: [
            { answerText: 'Title, Head, HTML', isCorrect: false },
            { answerText: 'HTML,Title,Head', isCorrect: false },
            { answerText: 'HTML, Head, Title', isCorrect: true },
            { answerText: 'Head, Title, HTML', isCorrect: false },
          ],
        },
        {
          id: 32,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which tag allows you to add a row in a table?',
          answerOptions: [
            { answerText: '<th> and </th>', isCorrect: false },
            { answerText: '<cr> and </cr>', isCorrect: false },
            { answerText: '<tr> and </tr>', isCorrect: true },
            { answerText: '<td> and </td>', isCorrect: false },
          ],
        },
        {
          id: 33,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which among the following is correct HTML code for making a checkbox?',
          answerOptions: [
            { answerText: '<checkbox>', isCorrect: false },
            { answerText: '<input type="check">', isCorrect: false },
            { answerText: '<input type="checkbox">', isCorrect: true },
            { answerText: '<check>', isCorrect: false },
          ],
        },
        {
          id: 34,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'What does vlink attribute mean?',
          answerOptions: [
            { answerText: 'visited link', isCorrect: true },
            { answerText: 'virtual link', isCorrect: false },
            { answerText: 'active link', isCorrect: false },
            { answerText: 'very good link', isCorrect: false },
          ],
        },
        {
          id: 35,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'HTML documents are saved in',
          answerOptions: [
            { answerText: 'Machine language codes', isCorrect: false },
            { answerText: 'Special binary format', isCorrect: false },
            { answerText: 'None of above', isCorrect: false },
            { answerText: 'ASCII text', isCorrect: true },
          ],
        },
        {
          id: 36,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which among the following is the correct way in HTML to insert an image?',
          answerOptions: [
            { answerText: `<image src=“https://bit.ly/2FicgIx” alt=“HtmlCssMonk”></image>`, isCorrect: false },
            { answerText: `<img href=“https://bit.ly/2FicgIx” alt= “HtmlCssMonk”></img>`, isCorrect: false },
            { answerText: `<img url=“https://bit.ly/2FicgIx”>HtmlCssMonk</img>`, isCorrect: false },
            { answerText: `<img src=“https://bit.ly/2FicgIx” alt=“HtmlCssMonk”>`, isCorrect: true },
          ],
        },
        {
          id: 37,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'The _____ character tells browsers to stop tagging the text',
          answerOptions: [
            { answerText: '/', isCorrect: true },
            { answerText: '%', isCorrect: false },
            { answerText: '?', isCorrect: false },
            { answerText: '>', isCorrect: false },
          ],
        },
        {
          id: 38,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,          
          questionText: 'Which of the following is not a style tag?',
          answerOptions: [
            { answerText: '<b>', isCorrect: false },
            { answerText: '<tt>', isCorrect: true },
            { answerText: '<i>', isCorrect: false },
            { answerText: 'All of above are style tags', isCorrect: false },
          ],
        },
        {
          id: 39,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'Which of the following is not used with text-decoration property?',
          answerOptions: [
            { answerText: 'overline', isCorrect: false },
            { answerText: 'underline', isCorrect: false },
            { answerText: 'line-through', isCorrect: false },
            { answerText: 'inline', isCorrect: true },
          ],
        }         
      ]
    },
    {
      id: "css_quiz",
      title: "CSS QUIZ",
      number_of_questions: 15,
      all_questions: 40,
      best_score: "your best score:",
      time_limit: "no time limit",
      difficulty: "basic, intermediate, advanced",
      description: "You will get points for each correct answer. At the end of the Quiz, your total score will be displayed.",
      points: "Basic: 5 points. Intermediate: 10 points. Advanced: 15 points.",
      questions: [
        {
          id: 0,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How can you created rounded corners using CSS3?',
          answerOptions: [
            { answerText: 'border[round]: 30px;', isCorrect: false },
            { answerText: 'corner-effect: round;', isCorrect: false },
            { answerText: 'border-radius: 30px;', isCorrect: true },
            { answerText: 'alpha-effect: round-corner;', isCorrect: false },
          ],
        },
        {
          id: 1,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How do you add shadow to elements in CSS3?',
          answerOptions: [
            { answerText: 'box-shadow: 10px 10px 5px grey;', isCorrect: true },
            { answerText: 'shadow-right: 10px shadow-bottom: 10px;', isCorrect: false },
            { answerText: 'shadow-color: grey;', isCorrect: false },
            { answerText: 'alpha-effect[shadow]: 10px 10px 5px grey;', isCorrect: false },
          ],
        },
        {
          id: 2,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to you modify a border image using CSS3?',
          answerOptions: [
            { answerText: 'border: url(image.png);', isCorrect: false },
            { answerText: 'border-variable: image url(image.png);', isCorrect: false },
            { answerText: 'border-image: url(border.png) 30 30 round;', isCorrect: true },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 3,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How to resize a background image using CSS3?',
          answerOptions: [
            { answerText: 'background-size: 80px 60px;', isCorrect: true },
            { answerText: 'bg-dimensions: 80px 60px;', isCorrect: false },
            { answerText: 'background-proportion: 80px 60px;', isCorrect: false },
            { answerText: 'alpha-effect: bg-resize 80px 60px;', isCorrect: false },
          ],
        },
        {
          id: 4,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How to add text shadow using CSS3?',
          answerOptions: [
            { answerText: 'font: shadowed 5px 5px 5px grey;', isCorrect: false },
            { answerText: 'font-shadow: 5px 5px 5px grey;', isCorrect: false },
            { answerText: 'text-shadow: 5px 5px 5px grey; ', isCorrect: true },
            { answerText: 'shadow: text 5px 5px 5px grey;', isCorrect: false },
          ],
        },
        {
          id: 5,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to force a word wrap using CSS3?',
          answerOptions: [
            { answerText: 'word-wrap: break-word;', isCorrect: true },
            { answerText: 'text-wrap: break-word;', isCorrect: false },
            { answerText: 'text-wrap: force;', isCorrect: false },
            { answerText: 'text-width: set;', isCorrect: false },
          ],
        },
        {
          id: 6,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which of these are valid CSS3 transformation statements.',
          answerOptions: [
            { answerText: 'matrix()', isCorrect: true },
            { answerText: 'modify()', isCorrect: false },
            { answerText: 'skip()', isCorrect: false },
            { answerText: 'simulate()', isCorrect: false },
          ],
        },
        {
          id: 7,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How to rotate objects using CSS3?',
          answerOptions: [
            { answerText: 'object-rotation: 30deg;', isCorrect: false },
            { answerText: 'transform: rotate(30deg);', isCorrect: true },
            { answerText: 'rotate-object: 30deg;', isCorrect: false },
            { answerText: 'transform: rotate-30deg-clockwise;', isCorrect: false },
          ],
        },
        {
          id: 8,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How to re-size/scale objects using CSS3?',
          answerOptions: [
            { answerText: 'transform: scale(2,4);', isCorrect: true },
            { answerText: 'scale-object: 2,4;', isCorrect: false },
            { answerText: 'scale: (2,4);', isCorrect: false },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 9,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'How to create transition effects using CSS3?',
          answerOptions: [
            { answerText: 'transition: width 2s;', isCorrect: true },
            { answerText: 'transition-duration: 2s; transition-effect: width;', isCorrect: false },
            { answerText: 'alpha-effect: transition (width,2s);', isCorrect: false },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 10,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Look at the code. What piece of code is missing when make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }',
          answerOptions: [
            { answerText: 'the color', isCorrect: false },
            { answerText: 'the element', isCorrect: false },
            { answerText: 'the id name', isCorrect: true },
            { answerText: 'the text shadow height', isCorrect: false },
          ],
        },
        {
          id: 11,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'Does the box-shadow support all browsers ?',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ],
        },
        {
          id: 12,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'True or False. In vertical offsets for box shadows, the (-1) means that the box-shadow will be below the box?',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ],
        },
        {
          id: 13,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'What does RGBa mean?',
          answerOptions: [
            { answerText: 'Review Get assistance Back-up your information acquire proof', isCorrect: false },
            { answerText: 'Red Green Blue alpha', isCorrect: true },
            { answerText: 'Red Gray Brown alpha', isCorrect: false },
            { answerText: 'Red Gold Black alpha', isCorrect: false },
          ],
        },
        {
          id: 14,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: '__________ is a property that allows developers to add rounded corners on the design elements.',
          answerOptions: [
            { answerText: 'Corner', isCorrect: false },
            { answerText: 'Box Shadow', isCorrect: false },
            { answerText: 'Round Corner', isCorrect: false },
            { answerText: 'Border-Radius', isCorrect: true },
          ],
        },
        {
          id: 15,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'Box-Shadow is a property that allows developers to apply a....',
          answerOptions: [
            { answerText: 'Border', isCorrect: false },
            { answerText: 'Drop Shadow', isCorrect: true },
            { answerText: 'Rounded Corner', isCorrect: false },
            { answerText: 'Background', isCorrect: false },
          ],
        },
        {
          id: 16,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'If you put a value of 0 for a Border-Radius what will happen?.',
          answerOptions: [
            { answerText: 'The Corner will curve horizontal.', isCorrect: false },
            { answerText: 'The Corner will be square. ', isCorrect: true },
            { answerText: 'The Corner will curve vertical.', isCorrect: false },
            { answerText: 'The world will end.', isCorrect: false },
          ],
        },
        {
          id: 17,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?',
          answerOptions: [
            { answerText: '-webkit-', isCorrect: false },
            { answerText: '-moz-', isCorrect: true },
            { answerText: '-o-', isCorrect: false },
            { answerText: '-gecko-', isCorrect: false },
          ],
        },
        {
          id: 18,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'What does the a stand for in RGBa',
          answerOptions: [
            { answerText: 'alpha', isCorrect: true },
            { answerText: 'aqua', isCorrect: false },
            { answerText: 'Apple', isCorrect: false },
            { answerText: 'about', isCorrect: false },
          ],
        },
        {
          id: 19,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'What are the first three values of text-shadow in order?',
          answerOptions: [
            { answerText: 'vertical, blur, horizontal', isCorrect: false },
            { answerText: 'blur, vertical, horizontal', isCorrect: false },
            { answerText: 'vertical, horizontal, blur', isCorrect: false },
            { answerText: 'horizontal, vertical, blur', isCorrect: true },
          ],
        },
        {
          id: 20,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,
          questionText: 'Can you have multiple box-shadows?',
          answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
          ],
        },
        {
          id: 21,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'How do four values work on border-radius',
          answerOptions: [
            { answerText: 'top, bottom, left, right', isCorrect: false },
            { answerText: 'up, down, front, behind', isCorrect: false },
            { answerText: 'top-left, top-right, bottom-right, bottom-left', isCorrect: true },
            { answerText: 'bottom-left, bottom-right, top-right, top-left', isCorrect: false },
          ],
        },
        {
          id: 22,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'How can you created rounded corners using CSS3?',
          answerOptions: [
            { answerText: 'border[round]: 30px;', isCorrect: false },
            { answerText: 'corner-effect: round;', isCorrect: false },
            { answerText: 'border-radius: 30px;', isCorrect: true },
            { answerText: 'alpha-effect: round-corner;', isCorrect: false },
          ],
        },
        {
          id: 23,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'Has CSS3 been fully supported by all browsers?',
          answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No ', isCorrect: true },
          ],
        },
        {
          id: 24,
          active: false,
          completed: false,
          level: "basic",
          point: 5,
          questionText: 'How to add text shadow using CSS3?',
          answerOptions: [
            { answerText: 'font: shadowed 5px 5px 5px grey;', isCorrect: false },
            { answerText: 'font-shadow: 5px 5px 5px grey;', isCorrect: false },
            { answerText: 'text-shadow: 5px 5px 5px grey;', isCorrect: true },
            { answerText: 'shadow: text 5px 5px 5px grey;', isCorrect: false },
          ],
        },
        {
          id: 25,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to rotate objects using CSS3?',
          answerOptions: [
            { answerText: 'object-rotation: 30deg;', isCorrect: false },
            { answerText: 'transform: rotate(30deg);', isCorrect: true },
            { answerText: 'rotate-object: 30deg;', isCorrect: false },
            { answerText: 'transform: rotate-30deg-clockwise', isCorrect: false },
          ],
        },
        {
          id: 26,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to create transition effects using CSS3?',
          answerOptions: [
            { answerText: 'transition: width 2s;', isCorrect: true },
            { answerText: 'transition-duration: 2s; transition-effect: width;', isCorrect: false },
            { answerText: 'alpha-effect: transition (width,2s);', isCorrect: false },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 27,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to force a word wrap using CSS3?',
          answerOptions: [
            { answerText: 'word-wrap: break-word;', isCorrect: true },
            { answerText: 'words-wrap: break-word;', isCorrect: false },
            { answerText: 'text-wrap: break-word;', isCorrect: false },
            { answerText: 'text-width: word-wrap;', isCorrect: false },
          ],
        },
        {
          id: 28,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to you modify a border image using CSS3?',
          answerOptions: [
            { answerText: 'border: url(image.png);', isCorrect: false },
            { answerText: 'border: image url(image.png);', isCorrect: false },
            { answerText: 'border-image: url(border.png) 30 30 round;', isCorrect: true },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 29,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'How to resize a background image using CSS3?',
          answerOptions: [
            { answerText: ' background-size: 80px 60px;', isCorrect: true },
            { answerText: 'background-proportion: 80px 60px;', isCorrect: false },
            { answerText: 'alpha-effect: bg-resize 80px 60px;', isCorrect: false },
            { answerText: 'None', isCorrect: false },
          ],
        },
        {
          id: 30,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'What will be the output of following code snippet? h1 {color: red text-decoration: underline; font-style: italic;}',
          answerOptions: [
            { answerText: 'color: red, text-decoration: underline works', isCorrect: false },
            { answerText: 'color: red, text-decoration: underline and font-style: italic all works', isCorrect: false },
            { answerText: 'only font-style: italic works', isCorrect: true },
            { answerText: 'text-decoration: underline and font-style: italic works', isCorrect: false },
          ],
        },
        {
          id: 31,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'What does HSL stands for?',
          answerOptions: [
            { answerText: 'Hue Spot Lightness', isCorrect: false },
            { answerText: 'Hue Specified Lightness', isCorrect: false },
            { answerText: 'Hue Saturation Lightness', isCorrect: true },
            { answerText: 'None of the mentioned', isCorrect: false },
          ],
        },
        {
          id: 32,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which CSS property can be used to set the image as border instead of the border style?',
          answerOptions: [
            { answerText: 'border-image', isCorrect: false },
            { answerText: 'background-image-source', isCorrect: false },
            { answerText: 'background-image', isCorrect: false },
            { answerText: 'border-image-source', isCorrect: true },
          ],
        },
        {
          id: 33,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which of the following CSS3 Color Feature like RGB color but adds an alpha channel value to specify the opacity of the color?',
          answerOptions: [
            { answerText: 'RGBaplha', isCorrect: false },
            { answerText: 'RGB', isCorrect: false },
            { answerText: 'RGBa', isCorrect: true },
            { answerText: 'AlphaRGB', isCorrect: false },
          ],
        },
        {
          id: 34,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which of the following Selector selects an element if it’s the only child of its parent with its type?',
          answerOptions: [
            { answerText: '::your-selection', isCorrect: false },
            { answerText: ':your-selection', isCorrect: true },
            { answerText: ':target', isCorrect: false },
            { answerText: '@media', isCorrect: false },
          ],
        },
        {
          id: 35,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'The _______ property sets whether a background image’s position is fixed within the viewport, or scrolls with its containing block',
          answerOptions: [
            { answerText: 'background-attachment', isCorrect: true },
            { answerText: 'background-allowance', isCorrect: false },
            { answerText: 'background-scroll', isCorrect: false },
            { answerText: 'background-attach', isCorrect: false },
          ],
        },
        {
          id: 36,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which of the following is an appropriate value for overflow element?',
          answerOptions: [
            { answerText: 'scroll', isCorrect: false },
            { answerText: 'all of the mentioned', isCorrect: true },
            { answerText: 'auto', isCorrect: false },
            { answerText: 'hidden', isCorrect: false },
          ],
        },
        {
          id: 37,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Is it possible to declare font-weight, font-face & font-size by using ONLY ONE css property ?',
          answerOptions: [
            { answerText: 'Yes, it’s possible', isCorrect: true },
            { answerText: 'No, not possible', isCorrect: false },
          ],
        },
        {
          id: 38,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'What will be the output of below mentioned code snippet? h1 {color: "green";}',
          answerOptions: [
            { answerText: 'nothings happen', isCorrect: true },
            { answerText: 'heading becomes green', isCorrect: false },
            { answerText: 'error occors', isCorrect: false },
            { answerText: 'heading becomes dark-green', isCorrect: false },
          ],
        },
        {
          id: 39,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,
          questionText: 'Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?',
          answerOptions: [
            { answerText: 'padding', isCorrect: false },
            { answerText: 'border-width', isCorrect: false },
            { answerText: 'border', isCorrect: false },
            { answerText: 'border-collapse', isCorrect: false },
          ],
        }                                          
      ]
    },
    {
      id: "js_quiz",
      title: "JS QUIZ",
      number_of_questions: 20,
      all_questions: 40,
      best_score: "your best score:",
      time_limit: "no time limit",
      difficulty: "intermediate, advanced ",
      description: "You will get points for each correct answer. At the end of the Quiz, your total score will be displayed.",
      points: "Intermediate: 10 points. Advanced: 15 points.",
      questions: [
        {
          id: 0,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,  
          questionText: {
            title: "Array Sort Comparison",
            text: 'Consider the following arrays. What gets logged in various sorting conditions?',
            code: `const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
            
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);`
          },
          answerOptions: [
            { answerText: 'true true true', isCorrect: false },
            { answerText: 'true true false', isCorrect: true },
            { answerText: 'false false false', isCorrect: false },
            { answerText: 'true false true', isCorrect: false },            
          ],
        },
        {
          id: 1,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,  
          questionText: {
            title: "A Set of Objects",
            text: 'Consider the following Set of objects spread into a new array. What gets logged?',
            code: `const mySet = new Set([{ a: 1 }, { a: 1 }]);
const result = [...mySet];
console.log(result);`
          },
          answerOptions: [
            { answerText: '[{a: 1}, {a: 1}]', isCorrect: true },
            { answerText: '[{a: 1}]', isCorrect: false },
          ],
        },
        {
          id: 2,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,            
          questionText: {
            title: "Deep Object Mutability",
            text: `Consider the following object representing a user, Joe, and his dog, Buttercup. We use Object.freeze to preserve our object and then attempt to mutate Buttercup's name. What gets logged`,
            code: `const user = {
  name: 'Joe',
  age: 25,
  pet: {
    type: 'dog',
    name: 'Buttercup'
  }
};

Object.freeze(user);

user.pet.name = 'Daffodil';

console.log(user.pet.name);`
          },
          answerOptions: [
            { answerText: 'Daffodil', isCorrect: true },
            { answerText: 'Buttercup', isCorrect: false },
            { answerText: 'An error is thrown', isCorrect: false },
          ],
        },
        {
          id: 3,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Prototypal Inheritance",
            text: 'In this question, we have a Dog constructor function. Our dog obviously knows the speak command. What gets logged in the following example when we ask Pogo to speak?',
            code: `function Dog(name) {
  this.name = name;
  this.speak = function() {
    return 'woof';
  };
}

const dog = new Dog('Pogo');

Dog.prototype.speak = function() {
  return 'arf';
};

console.log(dog.speak());`
          },
          answerOptions: [
            { answerText: 'woof', isCorrect: true },
            { answerText: 'arf', isCorrect: false },
          ],
        },
        {
          id: 4,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Console Log Fetch",
            text: 'What gets logged when I try to log fetch?',
            code: `console.log(fetch);`
          },
          answerOptions: [
            { answerText: 'The fetch function', isCorrect: false },
            { answerText: 'A reference error', isCorrect: false },
            { answerText: 'It depends on the environment you are in', isCorrect: true },
          ],
        },
        {
          id: 5,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Promise.all Resolve Order",
            text: 'In this question, we have a timer function that returns a Promise that resolves after a random amount of time. We use Promise.all to resolve an array of timers. What gets logged?',
            code: `const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([
  timer('first'),
  timer('second')
]).then(data => console.log(data));`
          },
          answerOptions: [
            { answerText: '["first", "second"]', isCorrect: true },
            { answerText: 'It is random', isCorrect: false },
          ],
        },
        {
          id: 6,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Reduce Math",
            text: 'Math time! What gets logged?',
            code: `const arr = [
  x => x * 1,
  x => x * 2,
  x => x * 3,
  x => x * 4
];

console.log(arr.reduce((agg, el) => agg + el(agg), 1));`
          },
          answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '60', isCorrect: false },
            { answerText: '100', isCorrect: false },
            { answerText: '120', isCorrect: true },
          ],
        },
        {
          id: 7,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Spread and Rename",
            text: `Consider the following array with a single object. What happens when we spread that array and change the firstName property on the 0-index object?`,
            code: `const arr1 = [{ firstName: 'James' }];
const arr2 = [...arr1];
arr2[0].firstName = 'Jonah';

console.log(arr1);`
          },
          answerOptions: [
            { answerText: '[{ firstName: "James" }]', isCorrect: false },
            { answerText: '[{ firstName: "Jonah" }]', isCorrect: true },
            { answerText: 'Something else', isCorrect: false },
          ],
        },
        {
          id: 8,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Array Method Binding",
            text: 'What gets logged in the following scenario?',
            code: `const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el));`
          },
          answerOptions: [
            { answerText: '1 2 3', isCorrect: true },
            { answerText: 'a b c', isCorrect: false },
            { answerText: 'An error is thrown', isCorrect: false },
            { answerText: 'Something else', isCorrect: false },
          ],
        },
        {
          id: 9,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Set Uniqueness and Ordering",
            text: 'In the following problem, we use the Set object and spread syntax to create a new array. What gets logged (to consider: Are items forced to be unique? Are they sorted?)',
            code: `const arr = [...new Set([3, 1, 2, 3, 4])];
console.log(arr.length, arr[2]);`
          },
          answerOptions: [
            { answerText: '5 2', isCorrect: false },
            { answerText: '5 3', isCorrect: false },
            { answerText: '4 2', isCorrect: true },
            { answerText: '4 3', isCorrect: false },
          ],
        },
        {
          id: 10,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Array-to-Object Efficiency",
            text: 'Both a and b are objects with the same properties and values. Which is created more efficiently?',
            code: `const arr = [1, 2, 3];

const a = arr.reduce(
  (acc, el, i) => ({ ...acc, [el]: i }),
  {}
);

const b = {};
for (let i = 0; i < arr.length; i++) {
  b[arr[i]] = i;
}`
          },
          answerOptions: [
            { answerText: 'a', isCorrect: false },
            { answerText: 'b', isCorrect: true },
          ],
        },
        {
          id: 11,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Batman v. Superman",
            text: 'Consider the following superheroMaker function. What gets logged when we pass the following two inputs?',
            code: `const superheroMaker = a => {
  return a instanceof Function ? a() : a;
};

console.log(superheroMaker(() => 'Batman'));
console.log(superheroMaker('Superman'));`
          },
          answerOptions: [
            { answerText: '"Batman"', isCorrect: false },
            { answerText: '"Superman"', isCorrect: false },
            { answerText: '"Batman" "Superman"', isCorrect: true },
            { answerText: 'Nothing gets logged', isCorrect: false },
          ],
        },
        {
          id: 12,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Object Keys, Object Values",
            text: 'Consider the following object. Is Object.keys equal to Object.values?',
            code: `const obj = {
  1: 1,
  2: 2,
  3: 3
};

console.log(Object.keys(obj) == Object.values(obj));`
          },
          answerOptions: [
            { answerText: 'true', isCorrect: false },
            { answerText: 'false ', isCorrect: true },
          ],
        },
        {
          id: 13,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Basic Recursion",
            text: 'Consider the following recursive function. If we pass the string "Hello World" to it, what gets logged?',
            code: `const myFunc = str => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }

  return str;
};

console.log(myFunc('Hello world'));`
          },
          answerOptions: [
            { answerText: 'Hello World', isCorrect: false },
            { answerText: 'ello World', isCorrect: false },
            { answerText: 'H', isCorrect: false },
            { answerText: 'd', isCorrect: true },
          ],
        },
        {
          id: 14,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Function Equality",
            text: 'What gets logged when we test the following equality scenarios?',
            code: `const a = c => c;
const b = c => c;

console.log(a == b);
console.log(a(7) === b(7));`
          },
          answerOptions: [
            { answerText: 'true true', isCorrect: false },
            { answerText: 'true false', isCorrect: false },
            { answerText: 'false true', isCorrect: true },
            { answerText: 'false false', isCorrect: false },
          ],
        },
        {
          id: 15,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Object Property Equality",
            text: 'a and b are different objects with the same firstName property. Are these properties strictly equal to each other?',
            code: `const a = {
  firstName: 'Bill'
};

const b = {
  firstName: 'Bill'
};

console.log(a.firstName === b.firstName);`
          },
          answerOptions: [
            { answerText: 'true', isCorrect: true },
            { answerText: 'false', isCorrect: false },
          ],
        },
        {
          id: 16,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Function Function Syntax",
            text: `Let's say myFunc is a function, val1 is a variable, and val2 is a variable. Is the following syntax allowed in JavaScript?`,
            code: `myFunc(val1)(val2);`
          },
          answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
          ],
        },
        {
          id: 17,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Object Property Mutation",
            text: 'Consider objects a and b below. What gets logged?',
            code: `const a = { firstName: 'Joe' };
const b = a;
b.firstName = 'Pete';
console.log(a);`
          },
          answerOptions: [
            { answerText: '{ firstName: "Joe" }', isCorrect: false },
            { answerText: '{ firstName: "Pete" }', isCorrect: true },
          ],
        },
        {
          id: 18,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Greatest Number in an Array",
            text: 'Will the following function always return the greatest number in an array?',
            code: `function greatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}`
          },
          answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
          ],
        },
        {
          id: 19,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Function Argument Mutation",
            text: 'When passing an object as an argument to a function, can the orginal object be mutated? In the following example, will somePerson.valid be true or undefined?',
            code: `const somePerson = { username: 'Davey154' };

const personValidator = person => {
  person.valid = person.username.length > 5;
  return person.valid;
};

personValidator(somePerson);

console.log(somePerson.valid); // ??`
          },
          answerOptions: [
            { answerText: 'true', isCorrect: true },
            { answerText: 'undefined', isCorrect: false },
          ],
        }, 
        {
          id: 20,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Map letters to numbers",
            text: 'Consider the following mapping. What gets logged?',
            code: `const myArr = ['a', 'b', 'c'];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map(letter => myMap[letter]);
console.log(result);`
          },
          answerOptions: [
            { answerText: '1, 2, 3', isCorrect: false },
            { answerText: 'a, b, c', isCorrect: false },
            { answerText: '[1, 2, 3]', isCorrect: true },
            { answerText: '[a, b, c]', isCorrect: false },            
          ],
        },       
        {
          id: 21,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "Event Scheduling",
            text: 'In what order will the numbers 1-4 be logged to the console when the code below is executed?',
            code: `(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();`
          },
          answerOptions: [
            { answerText: '1, 2, 3, 4', isCorrect: false },
            { answerText: '4, 2, 1, 3', isCorrect: false },
            { answerText: '1, 4, 3, 2', isCorrect: true },
            { answerText: '4, 3, 2, 1', isCorrect: false },            
          ],
        },
        {
          id: 22,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "String Operations and Array Destructuring",
            text: `In the following example, we attempt to get part of our URL's domain name. What ends up being logged?`,
            code: `const url = 'quiz.typeofnan.dev';
const { length: ln, [ln - 1]: domain = 'quiz' } = url
  .split('.')
  .filter(Boolean);
console.log(domain);`
          },
          answerOptions: [
            { answerText: '"quiz"', isCorrect: false },
            { answerText: '"typeofnan"', isCorrect: false },
            { answerText: '"dev"', isCorrect: true },
            { answerText: 'undefined', isCorrect: false },            
          ],
        },
        {
          id: 23,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Combining Different Types",
            text: 'What gets logged in the following scenario?',
            code: `console.log(2 + "1");
console.log(2 - "1");`
          },
          answerOptions: [
            { answerText: '3 1', isCorrect: false },
            { answerText: '"21" 1', isCorrect: true },
            { answerText: '"21" ""', isCorrect: false },
            { answerText: 'An error is thrown', isCorrect: false },            
          ],
        }, 
        {
          id: 24,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Deleting Properties from an Object",
            text: 'Which of the following is a valid way to delete the property color from the car object?',
            code: `const car = {
  make: 'Mercedez Benz',
  year: '2019',
  color: 'black'
};

// A
car.delete('color');

// B
delete car.color;

// C
delete car[color];

// D
car.color.delete();`
          },
          answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: true },
            { answerText: 'C', isCorrect: false },
            { answerText: 'D', isCorrect: false },   
          ],
        },
        {
          id: 25,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Equality and Identity Operators",
            text: 'a and b are two constants. What will be the output on the console?',
            code: `const a = '42';
const b = 42;

console.log((a == b) && (a === b));`
          },
          answerOptions: [
            { answerText: 'true', isCorrect: false },
            { answerText: 'false', isCorrect: true },
          ],
        },
        {
          id: 26,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "String Methods",
            text: 'String methods are used to work with string in JavaScript. Which method would be used to find a specified value and return the position of the match? For example, what method would tell you that "bird" is at position 4 in the following word string?',
            code: `const word = 'The bird is the word';`
          },
          answerOptions: [
            { answerText: 'length', isCorrect: false },
            { answerText: 'indexOf', isCorrect: true },
            { answerText: 'find', isCorrect: false },
            { answerText: 'none', isCorrect: false },            
          ],
        },
        {
          id: 27,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "The Walking Dead",
            text: 'What is the output of the following console.log?',
            code: `const a = { something: 1, someOtherThing: 2 };

const deleteSomething = input => {
  delete input.something;
  return input.something;
};

const result = deleteSomething(a);

console.log(result);`
          },
          answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: 'An error is thrown', isCorrect: false },
            { answerText: 'undefined', isCorrect: true },
            { answerText: 'Something different is logged', isCorrect: false },            
          ],
        },
        {
          id: 28,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Array Compare",
            text: 'Consider the following variables. What gets logged?',
            code: `var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';

console.log(a == c);
console.log(b == c);
console.log(a == b);`
          },
          answerOptions: [
            { answerText: 'true, true, false', isCorrect: true },
            { answerText: 'true, true, true', isCorrect: false },
            { answerText: 'true, false, false', isCorrect: false },
            { answerText: 'false, false false', isCorrect: false },            
          ],
        }, 
        {
          id: 29,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Global Local",
            text: 'Consider the following code block. What gets logged?',
            code: `var x = 5;

(function() {
  console.log(x);
  var x = 10;
  console.log(x);
})();`
          },
          answerOptions: [
            { answerText: '5 and 10', isCorrect: false },
            { answerText: 'undefined and 10', isCorrect: true },
            { answerText: '5 and undefined', isCorrect: false },
            { answerText: 'undefined and undefined', isCorrect: false },            
          ],
        },
        {
          id: 30,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "Console Log Constructors",
            text: 'Consider the following code block. What gets logged?',
            code: `console.log(
  typeof Object, 
  typeof Array, 
  typeof Number
);`
          },
          answerOptions: [
            { answerText: 'object array number', isCorrect: false },
            { answerText: 'object object number', isCorrect: false },
            { answerText: 'object object object', isCorrect: false },
            { answerText: 'something else', isCorrect: true },            
          ],
        },
        {
          id: 31,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Arrow Functions",
            text: 'What gets logged in the following code?',
            code: `let dog = {
    breed: "Border Collie",
    sound: "Wooh",
    getBreed: () => { 
        return this.breed;
    },
    getSound: function() {
        return this.sound;
    }
};
console.log(dog.getBreed(), dog.getSound());`
          },
          answerOptions: [
            { answerText: 'Border Collie, Wooh', isCorrect: false },
            { answerText: 'Border Collie, undefined', isCorrect: false },
            { answerText: 'undefined, Wooh', isCorrect: true },
            { answerText: 'undefined, undefined', isCorrect: false },            
          ],
        },
        {
          id: 32,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Async/Await",
            text: 'Consider the following async function and its output. What will be displayed to the console when calling the f() function?',
            code: `async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

f();`
          },
          answerOptions: [
            { answerText: 'first!', isCorrect: false },
            { answerText: 'done!', isCorrect: true },
            { answerText: 'JavaScript error', isCorrect: false },
            { answerText: 'Something else', isCorrect: false },            
          ],
        },
        {
          id: 33,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Floating-Point Precision",
            text: 'Consider the following scenario. What gets logged?',
            code: `const a = 0.1;
const b = 0.2;
const c = 0.3;

console.log(a + b === c);`
          },
          answerOptions: [
            { answerText: 'true', isCorrect: false },
            { answerText: 'false', isCorrect: true },
          ],
        }, 
        {
          id: 34,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "Reduce Object",
            text: 'Consider the following code block. What gets logged?',
            code: `const scrambled = { 2: "e", 5: "o", 1: "h", 4: "l", 3: "l" };

const result = Object
  .values(scrambled)
  .reduce((agg, el) => agg + el, "");

console.log(result);`
          },
          answerOptions: [
            { answerText: 'hello', isCorrect: true },
            { answerText: 'eohll', isCorrect: false },
            { answerText: 'Order not guaranteed', isCorrect: false },
          ],
        },
        {
          id: 35,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Two Many Dots?",
            text: 'What is the return of the following console.log?',
            code: `const n = 5;

console.log(1..n); // ?`
          },
          answerOptions: [
            { answerText: '[1, 2, 3, 4, 5]', isCorrect: false },
            { answerText: 'undefined', isCorrect: true },
            { answerText: 'Syntax error', isCorrect: false },
          ],
        },
        {
          id: 36,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Using Array#flat",
            text: 'Consider the following nested array. What will get logged?',
            code: `const array = [1,[2,[3,[4,[5,[6,[7],8],9],10]]],12];
const result = array.flat(5);
console.log(result);`
          },
          answerOptions: [
            { answerText: '[1, 2, 3, 4, 5, 6, [7], 8, 9, 10, 12]', isCorrect: true },
            { answerText: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]', isCorrect: false },
          ],
        },
        {
          id: 37,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "Date Constructor",
            text: 'Consider the following code block which calls the Date constructor with 2 type of values. In a US environment, what will be the output of console.log?',
            code: `let a = new Date("2019,1,1").toLocaleDateString();
let b = new Date(2019,1,1).toLocaleDateString();
console.log(a, b);`
          },
          answerOptions: [
            { answerText: '1/1/2019 2/1/2019', isCorrect: true },
            { answerText: '1/1/2019 1/1/2019', isCorrect: false },
          ],
        },
        {
          id: 38,
          active: false,
          completed: false,
          level: "advanced",
          point: 15,                 
          questionText: {
            title: "Arrays, Sorting, and Reversing",
            text: 'Consider the following two arrays and operations on them. What gets logged as a result of script execution ?',
            code: `const ar = [5, 1, 3, 7, 25];
const ar1 = ar;
console.log(ar1.sort());
(
  [5, 25].indexOf(ar[1]) != -1 && 
  console.log(ar.reverse())
) || 
(
  ar[3] == 25 && console.log(ar)
);
console.log(ar1);`
          },
          answerOptions: [
            { answerText: '[1, 3, 5, 7, 25] [7, 5, 3, 25, 1] [1, 25, 3, 5, 7] [1, 25, 3, 5, 7]', isCorrect: false },
            { answerText: '[1, 25, 3, 5, 7] [5,1,3,7,25]', isCorrect: false },
            { answerText: '[1, 25, 3, 5, 7] [7, 5, 3, 25, 1] [7, 5, 3, 25, 1] [7, 5, 3, 25, 1]', isCorrect: true },
            { answerText: 'An error is thrown', isCorrect: false },            
          ],
        }, 
        {
          id: 39,
          active: false,
          completed: false,
          level: "intermediate",
          point: 10,                 
          questionText: {
            title: "Merge Two Arrays",
            text: 'Consider two arrays a and b below. Which option below is NOT correct to merge the arrays?',
            code: `var a = [1,2,3];
var b = [4,5,6];

// A 
console.log(a.concat(b));    

// B
console.log([...a, ...b]);   

// C
console.log(a + b);`
          },
          answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: false },
            { answerText: 'C', isCorrect: true },
            { answerText: 'All of them', isCorrect: false },            
          ],
        }                             
     
      ]
    }            
  ];
}

export default quizData;



// Hoisting
// Pass by Value
// Object Cloning (JSON.parse + JSON.stringify)
// Object Cloning (JSON.parse + JSON.stringify) Comparison
// Object Cloning (Object.assign) Comparison
// Copying Arrays
// Off to the Races
// Curly Q
// Operator Associativity