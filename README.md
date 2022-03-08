# PollingSystem_API
Create an API where anyone can create questions with options and also add votes 


Features �
- Create a question (you can add as many questions as you want) 
- Add options to a question 
- Add a vote to an option of question
- Delete a question → ( A question can’t be deleted if one of it’s options has votes)
- Delete an option → (An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

Server runs on http://localhost:3000

Routes:-

1 To create a question
-> request(Post Request) http://localhost:3000/questions/create
(which will create question with TITLE along contained options ARRAY)

2 To create a option for specific Question
->request(Post Request) http://localhost:3000/questions/:id/options/create
(which will create unique OPTION with TEXT, VOTES, LINK TO VOTE)

3 To delete a question
->request(delete request) http://localhost:3000/questions/:id/delete
(which will delete QUESTION along with all OPTIONS)

4 To view a question
->request(get request) http://localhost:3000/questions/:id

5 To vote a option for specific Question
->request(get request) http://localhost:8000/options/:id/add_vote
(which will vote a OPTION for specific QUESTION)

6 To delete a option
->request(get request) http://localhost:8000/options/:id/delete
(which will delete a OPTION for specific QUESTION)



Install dependencies for client
npm init
npm intall nodemon
npm install express
npm install mongoose


RUN:-nodemon index.js
