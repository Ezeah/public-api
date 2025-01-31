const express = require('express');

const getInfo = (req, res) => {
    const response = {
        email: "your-email@example.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo"
    };
    res.status(200).json(response);
};

module.exports = { getInfo };