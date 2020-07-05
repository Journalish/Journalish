# MyJournal

Take back your privacy and prevent snooping (somewhat)

### Why I made it:

One of my teachers didn't respect my privacy and went through my "rude" journal.

### How does it store notes?
I was going to use [Jsoning](https://support.glitch.com/t/jsoning-a-simple-key-value-json-based-persistent-lightweight-database/24575), however, database storage is a bit more reliable. [Read more here](https://www.quora.com/What-is-the-difference-between-a-file-system-and-a-database/answer/Christian-Smith-2).
It currently uses [keyv](https://www.npmjs.com/package/keyv), which allows 6 diffrent databases

### Databases
You can place the Connection URL at config.js under `dburl`
Databases Supported (directly): 
- Redis (redis://user:pass@localhost:6379)
- Mongodb (mongodb://user:pass@localhost:27017/dbname)
- Sqlite (sqlite://path/to/database.sqlite)
- Postgresql (postgresql://user:pass@localhost:5432/dbname)
- MySQL/MariaDB (mysql://user:pass@localhost:3306/dbname)
- Memory (Leave Blank) (Only use for testing, It clears everytime you restart the app)