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
        const parseData = JSON.parse(fs.readFileSync('./movies.json'));
        const moviesData = [];
        parseData.forEach(data => {
            const {
                title,
                synopsis,
                trailer,
                poster,
                genre,
                releaseDate,
                director,
                featuredSong,
                budget
            } = data;
            moviesData.push({
                title,
                synopsis,
                trailer,
                poster,
                genre,
                releaseDate,
                director,
                featuredSong,
                budget,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        })
        await queryInterface.bulkInsert('Movies', moviesData, {});
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