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
        const parseData = JSON.parse(fs.readFileSync('./movie-cast.json'));
        const movieCastData = [];
        parseData.forEach(data => {
            const {
                MovieId,
                CastId
            } = data;
            movieCastData.push({
                MovieId,
                CastId,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        })
        await queryInterface.bulkInsert('MovieCasts', movieCastData, {});
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