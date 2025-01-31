const express = require('express');

const getInfo = (req, res) => {
    const response = {
        email: "ezeahnnamdi@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Ezeah/public-api.git"
    };
    res.status(200).json(response);
};

module.exports = { getInfo };