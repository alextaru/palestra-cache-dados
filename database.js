module.exports = {
    development: {
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'teste',
      host: 'localhost',
      dialect: 'postgres',
      define: {
        timestamps: false,
      },
    },
    test: {
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'teste',
      host: 'localhost',
      dialect: 'postgres',
      define: {
        timestamps: false,
      },
    },
    production: {
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'teste',
      host: 'localhost',
      dialect: 'postgres',
      define: {
        timestamps: false,
      },
    }
  }