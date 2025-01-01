"This is for Albion Personal use not for other users"


flow :

login  -> calc.html
        -> calcMbbr.html
        -> calcMbr.html
        -> calcpressure.html 
(All the above navigation are throught navbar)

login  <-  logout(navbar)


if the password and email is correct it will create cookie called as token 
if the password and email is incorrect it will show error message and stay on the same page

if we mannually try to render the page it will not render because "the token not exist"  so we need to login first to render the page
