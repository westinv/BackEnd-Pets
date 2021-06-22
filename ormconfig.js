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
    "dist/modules/**/model/*.js"
  ],
  "migrations": [
    "dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/modules/**/model"
  }
}