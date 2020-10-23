'use strict';
const fs = require('fs')

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const parseData = JSON.parse(fs.readFileSync('./casts.json'));
        const castsData = [];
        parseData.forEach(data => {
            const {
                name,
                image
            } = data;
            castsData.push({
                name,
                image,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        })
        await queryInterface.bulkInsert('Casts', castsData, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};