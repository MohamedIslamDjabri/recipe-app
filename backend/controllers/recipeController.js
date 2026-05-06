import fetch from "node-fetch";

export const getRecipes = async (req, res) => {
  const query = req.query.q;

  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`,
      {
        headers: {
          "Edamam-Account-User": process.env.EDAMAM_USER,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message,
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};