var request = require("request");

const HOST_API = "https://masak-apa.tomorisakura.vercel.app";

exports.getRecipes = (req, res) => {
  request(`${HOST_API}/api/recipes/${req.params.page}`, (err, body) => {
    res.send(body.body);
  });
};

exports.getRecipesLength = (req, res) => {
  request(
    `${HOST_API}/api/recipes-length/?limit=${req.query.limit}`,
    (err, body) => {
      if (body.statusCode == 200) {
        res.send(
          {
            data: JSON.parse(body.body).results,
          },
          200
        );
      } else {
        res.send(
          {
            message: "Server Error",
          },
          500
        );
      }
    }
  );
};

exports.getRecipeDetail = (req, res) => {
  request(`${HOST_API}/api/recipe/${req.params.key}`, (err, body) => {
    if (body.statusCode == 200) {
      res.send({
        data: JSON.parse(body.body).results,
      });
    } else {
      res.send(
        {
          message: "Server Error",
        },
        500
      );
    }
  });
};

exports.searchRecipes = (req, res) => {
  request(`${HOST_API}/api/search/?q=${req.query.search}`, (err, body) => {
    if (body.statusCode == 200) {
      res.send({
        data: JSON.parse(body.body).results,
      });
    } else {
      res.send(
        {
          message: "Server Error",
        },
        500
      );
    }
  });
};

exports.getCategory = (req, res) => {
  request(`${HOST_API}/api/category/recipes`, (err, body) => {
    if (body.statusCode == 200) {
      res.send({
        data: JSON.parse(body.body).results,
      });
    } else {
      res.send(
        {
          message: "Server Error",
        },
        500
      );
    }
  });
};

exports.getRecipesCategory = (req, res) => {
  request(
    `${HOST_API}/api/category/recipes/${req.params.category}`,
    (err, body) => {
      if (body.statusCode == 200) {
        res.send({
          data: JSON.parse(body.body).results,
        });
      } else {
        res.send(
          {
            message: "Server Error",
          },
          500
        );
      }
    }
  );
};
