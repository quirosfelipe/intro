# Intro | Music Store

Intro recreates the concept of an online music store from a minimalist point of view. This lite online shop put together the main components of an e-commerce and give them life through a user-friendly interaction that allows for authentication, full shopping expirience and real checkout integration through the Stripe API.

Visit the live site [here](https://intro-music-store.herokuapp.com/)

# Key Features

- Users can sign up or use a demo account.
- Users can log-in with the use of a google account credentials.
- Users can add items to the shopping cart from each item category page and also, the top-selling page.
- Users can change the quantity of the items to be purchased in the shopping cart.
- Users can delete items from the shopping cart.
- Users can review the order in the checkout page before authorizing the payment.
- Users can make a payment using any Visa, Mastercard, Amex, Union Pay or Discover card.

# Technology Used

- React
- Redux
- Stripe API
- SASS
- Firebase
- Firestore
- OAuth2
- JavaScript, HTML , CSS

# Screenshots

> Google or email sign-in

[![sign.png](https://i.postimg.cc/FsF4y79W/sign.png)](https://postimg.cc/BtzksZPH)

> Clean and minimalist layout
> Show/hide shopping-cart

[![flow1.png](https://i.postimg.cc/QNkqdfwR/flow1.png)](https://postimg.cc/HjnMS9p2)

> Easy checkout through the Stripe API

[![checkout.png](https://i.postimg.cc/D0rw8DPS/checkout.png)](https://postimg.cc/CnKg2ct0)

# Firebase

Intro uses Firebase as the backend to run the server and the Cloud Firestore needed for the authentication process and the user info storage. The real-time syncing nature of Firebase through the use of Websockets allows for a faster continiously updated connection.
The authentication support for Google is integrated with the OAuth2 industry-standard protocol.

The next code snippet checks for an existing user in the database otherwise it creates a new one in the Firebase Firestore.

[![code-snippet.png](https://i.postimg.cc/J0xV6Pvg/code-snippet.png)](https://postimg.cc/hQX5hbSb)

# Planned Feature Components

- Metronome integration as a user gadget
