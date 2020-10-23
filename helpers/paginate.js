const paginate = (page, limit, model) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let results = {};

    results.maxPage = Math.ceil(model.length / limit);

    if (endIndex < model.length) {
        results.nextPage = page + 1
    }

    if (startIndex > 0) {
        results.previousPage = page - 1
    }

    results.result = model.slice(startIndex, endIndex);
    return results;
}

module.exports = { paginate };