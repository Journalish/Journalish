### Create ("/create")

Method: `POST` <br>
Paramaters:

- "password" - Contains the password for the journal (Required)
- "body" - Contains the Text of the journal entry
- "title" - Contains the Title of the journal entry (Required)

On success, the ID will be stored under "result"

### Find ("/find")

Method: `POST` <br>
Paramaters:

- "password" - Contains the password of the journal (Required)
- "id" - Conatins the ID of the journal entry (Required)

On success, It should return something like this:
`{"title" : "Title", "body": "Body", id: "id"}`

### Delete ("/delete")

Method: `DELETE` <br>
Paramaters:

- "password" - Contains the password for the journal (Required)
- "id" - Contains the ID of te journal entry (Required)
