// class MySqlDB {
//     save(data: any) {
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.save = function (data) {
        console.log('Saving records to MongoDB .... ');
    };
    return MongoDB;
}());
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.save = function (data) {
        console.log('Saving records to MySql .... ');
    };
    return MySql;
}());
var PostgreSql = /** @class */ (function () {
    function PostgreSql() {
    }
    PostgreSql.prototype.save = function (data) {
        console.log('Saving records to PostgreSql .... ');
    };
    return PostgreSql;
}());
var HighLevelModule = /** @class */ (function () {
    function HighLevelModule(db) {
        this.db = db;
    }
    HighLevelModule.prototype.execute = function (data) {
        this.db.save(data);
    };
    return HighLevelModule;
}());
var mongodbInstance = new MongoDB();
var mysqlInstance = new MySql();
var postgresqlInstance = new PostgreSql();
var mongoQuery = new HighLevelModule(mongodbInstance);
mongoQuery.execute({});
var mysqlQuery = new HighLevelModule(mysqlInstance);
mysqlQuery.execute({});
var postgreQuery = new HighLevelModule(postgresqlInstance);
postgreQuery.execute({});
