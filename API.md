# Create ("/create")
Method: POST
Paramaters:
- "password" - Contains the password for the journal (Required)
- "body" - Contains the Text of the journal entry
- "title" - Contains the Title of the journal entry (Required)
On success, the ID will be stored under "result"
# Find ("find")
Method: POST
Paramaters: 
- "password" - Contains the password of the journal
- "id" - Conatins the ID of the journal entry

On success, It should return something like this:
`{"title" : "Title"`