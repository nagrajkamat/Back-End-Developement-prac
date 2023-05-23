#Real-Time Chat App
Overview:

The project aims a platform where users can send and receive messages in real time. Users should be able to create chat rooms, join existing ones, and exchange messages with other users in the same room. The backend services will be hosted on Firebase, and users will authenticate with their Google accounts.



#The application will have the following features:

1. Google User Authentication: Users should be able to log in and log out using their Google accounts via Firebase Authentication, we will Implement Google user authentication using Firebase Authentication.

2. Chat Rooms: Users should be able to create, join, and leave chat rooms, we will be Implementing functionality for creating, joining, and leaving chat rooms also, Store chat room data in Firebase Firestore.

3. Real-Time Messaging: Messages sent by users should appear in the chat room in real time, Implementing real-time messaging When a message is sent, adding it to the Firestore database. and lastly Listening for new messages using Firestore's real-time updates feature to push new messages to users.

4. Implementing private messaging by allowing users to send messages to specific users, perhaps in a 'direct messages' collection in Firestore where each document is a conversation between two users.

5. Message History: The chat application should store the history of messages for each chat room, which should be visible to users when they join the room.

6. Private Messaging: Users should be able to send private messages to other users, Store the history of messages in Firestore. When a user joins a chat room, retrieve the message history from Firestore.

7. Ensuring that all features are covered by appropriate unit tests.

8. lastly Deploying the application on Firebase Hosting.
