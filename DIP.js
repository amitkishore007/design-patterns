"use strict";
// class MySqlDB {
//     save(data: any) {
class MongoDB {
    save(data) {
        console.log('Saving records to MongoDB .... ');
    }
}
class MySql {
    save(data) {
        console.log('Saving records to MySql .... ');
    }
}
class PostgreSql {
    save(data) {
        console.log('Saving records to PostgreSql .... ');
    }
}
class HighLevelModule {
    constructor(db) {
        this.db = db;
    }
    execute(data) {
        this.db.save(data);
    }
}
const mongodbInstance = new MongoDB();
const mysqlInstance = new MySql();
const postgresqlInstance = new PostgreSql();
const mongoQuery = new HighLevelModule(mongodbInstance);
mongoQuery.execute({});
const mysqlQuery = new HighLevelModule(mysqlInstance);
mysqlQuery.execute({});
const postgreQuery = new HighLevelModule(postgresqlInstance);
postgreQuery.execute({});
