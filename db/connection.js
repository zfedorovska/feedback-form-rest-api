const db = require('knex')({
  client: 'pg',
  connection: {
    host: 'dpg-cfmuo3la499f28826ptg-a.frankfurt-postgres.render.com',
    port: 5432,
    user: 'feedback_postgresql_ewjz_user',
    password: 'tX5tUaLfVppuPbzCwrd44fgE2ac7DAQx',
    database: 'feedback_postgresql_ewjz',
    ssl: true,
  },
});

module.exports = { db };
