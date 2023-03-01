client side 

3 routes 
1) /  => home page 
2) /hotels => list of hotels 
2.1) /hotels/id => individual hotel
3) /payment/id/price => payment gateway

home page 
1) input component
2) sample commands 

vulnerabilities
1) i have removed the validation for phone numbers 
2) i have remove the type for date and email => now user can enter a false params


2) i'll be using Travel Advisor Api for booking hotels 
```
https://rapidapi.com/apidojo/api/travel-advisor
```

to do 

hotel/id
0) data is being displayed properly 
1) i have to add a button for buying property => clicks and gets redirected to the payment gateway ( dummy payment to be perfomed) 
2) using email js send that link to gmail => clicks redirected to payment gateway. (dummy )


1) hotel suggestion to user on whatsapp and gmail.
2) clicks link redirect them to /hotels/id page 


all payment at 
```
https://dashboard.stripe.com/test/payments
```