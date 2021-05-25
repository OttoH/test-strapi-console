console.log('prod')
module.exports = ({ env }) => {
  console.log(`/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`)
  return ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
          database: env('DATABASE_NAME'),
          username: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
        },
        options: {},
      },
    },
  })
};
