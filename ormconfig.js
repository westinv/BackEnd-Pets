module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "extra": {
    "ssl": true
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