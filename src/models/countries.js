const {DataTypes} = require("sequelize");
const sequelize = require("sequelize");

sequelize.define( "countries", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true 
    },
    flag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    continent: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    population: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gbp: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    recomendedDestinines: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        unique: true
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        unique: true
    }
}
)