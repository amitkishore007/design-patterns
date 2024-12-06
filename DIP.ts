// class MySqlDB {
//     save(data: any) {

//     } 
// }

// class HighLevelModule {
//     public db: MySqlDB;

//     constructor() {
//         this.db = new MySqlDB();
//     }

//     execute(data) {
//         this.db.save(data)
//     }
// }


interface IDatabase {
    save(data: any): void;
}

class MongoDB implements IDatabase {
    save(data: any): void {
        console.log('Saving records to MongoDB .... ');
    }
}

class MySql implements IDatabase {
    save(data: any): void {
        console.log('Saving records to MySql .... ');
    }
}

class PostgreSql implements IDatabase {
    save(data: any): void {
        console.log('Saving records to PostgreSql .... ');
    }
}

class HighLevelModule {
    constructor(private db: IDatabase) {}

    execute(data: any) {
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