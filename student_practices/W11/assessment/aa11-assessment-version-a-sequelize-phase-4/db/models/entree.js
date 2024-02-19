"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Entree extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Entree.belongsTo(models.EntreeType, { foreignKey: "entreeTypeId" });
            Entree.belongsToMany(models.Ingredient, {
                through: models.EntreeIngredient,
                foreignKey: "entreeId",
                otherKey: "ingredientId",
            });
        }
    }
    Entree.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    min: 0,
                },
            },
            entreeTypeId: {
                type: DataTypes.INTEGER,
                references: { model: "EntreeTypes", key: "id" },
                onDelete: "CASCADE",
            },
        },
        {
            sequelize,
            modelName: "Entree",
        }
    );
    return Entree;
};
