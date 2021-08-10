module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": [
    "src/modules/**/model/*.ts"
  ],
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/modules/**/model"
  }
}