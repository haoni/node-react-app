const server = require('./config/server')

require('./config/database')
require('./config/routes')(server)

/*
    Para iniciar o servido deve-se executar os seguinte comando no terminal do VSCode:
    -> sudo mongod
    -> npm run dev
*/