# BabyPage

WEBPAGE LINK: https://gabyval2022.web.app/

Webpage develop for Maria Gabriela Quintas's future baby for her entire family to share their feeelings regarding the new memberr on the family; and littlee survey to  guess both the date of birth and the sex of the baby.

The Front-end of the pages was develop using the a javascript library React while the back-end was build using Django Rest Framework. 

Regarding to the deploying of the webpage; the page is being hosteed using Firebase while the databse of the webpage was deployed on an app develop on Heroku.

The webpage is compose of two sections one for users and another for admin:
    User_Home: with links to the other two pages https://gabyval2022.web.app/
    
    User_Survey: using POST request;  the opion of customer's opinion is recorded. https://gabyval2022.web.app/survey
    
    User_Message: the result of the users can be seem and confirm their particpation; it is controlled via GET requests. https://gabyval2022.web.app/message
    
    The Admin_pages are similar to Home but with some extra features.
        1. Login: only thosee with credential on its database can acceess.
        2. Token: token to confirm user precense on pagee; if token is lacking, the page will transport you to User_Home.
        3. Message control: the message of the participants can ony being seem by Admins andd they also has power to erase them if wanted.    

Weboage main features:
    0. Tokens for Language: Spanish and France
    
    1. Pie chart for votes regarding Gender.
    
    2. Display of participantes, two version, one for client, second for Admin.


