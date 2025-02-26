# API for the interview task for frontend developers

This repository contains a server with a JSON file that plays the role of a database in the [interview task for frontend developers](https://development.kameleoon.net/oivanov/frontend-interview-task).

You need to create your own local copy and work with it via the API.

### How to work

Clone a repository
```bash
git clone git@development.kameleoon.net:oivanov/frontend-interview-task-api.git
```

Install dependencies
```bash
npm install
```

Run server
```bash
npm start
```

### API

```
GET     /sites                Get a list of sites
GET     /sites/[id]           Get a site by id
GET     /tests                Get a list of tests
GET     /tests/[id]           Get a test by id
```

### Data types

```typescript
enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

interface Site {
  id: number;
  url: string;
}

interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}
```
