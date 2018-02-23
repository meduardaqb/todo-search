# todo-search
Plugin to help to find TODO occurrence in the project


#1 In your package.json scripts add the following script:<br/>
       ``` "search:todo": "node test.js"```

#2 Create test.js file in your root project

#3 Paste the code below in test.js:<br/>
     ```   var todoSearch = require("todo-search")```<br/>```
           todoSearch.search(PATH) /* Pass the path to search for //TODO occurrence */
     ```

#4 Run on terminal:<br/>
       ``` npm run search:todo ```