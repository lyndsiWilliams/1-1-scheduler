// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './data/scheduler.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
  },

};