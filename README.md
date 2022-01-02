#Assignment Description

Client-side only web application featuring two pages - “All Users” and “User Description”
Developed using React.js, pages designed using Design Library - MUI

#Pages

AllUsersPage:
The web application’s first page includes a user table with the fields: Picture, Full Name, Email, Gender and Age. The Email field is a link to send the selected user a new email.
Each row when clicked, forwards to the “User Details” page of the selected user.
The table is filled with data fetched from random user generating API: https://randomuser.me/documentation
As per requirements, there are 10 users per page, with pagination controls synched with the API. A constant seed ‘Moveo’ is used to maintain the same set of users on each page. 

UserDetailsPage:
Upon clicking on one of the rows of the All Users Table, we move to a new page under the URL “/<username>” where <username> is the corresponding user’s username fetched from the API.
This page, named “User Details”, contains the data from the selected user’s row in a new layout.
In addition, a map is displayed with the user’s address pinned.
The map was developed using Google Maps API.
Lastly, a “Return to All Users” button may be found underneath the map, which returns us to the previous page.

#Components

UsersList - user list table on the “All Users” page
UserItem - “All Users” table row featuring the user data
UsersTablePagination - table pagination controls
UserDetailsItem - “User Details” layout featuring the user data
UserLocationItem - map displaying the user’s location

#Context
  
users-context 
Provides access to all user data related functions and variables. Responsible for fetching data from api as well as storing and distributing the data.
