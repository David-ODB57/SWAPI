const express = require("express");
const path = require("path");
const Liste = require("./data/liste");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server SWAPI listening on port: http://localhost:${port} !`);
});

///////////////////////////
// Configuration Express //
///////////////////////////
const distDir = "../src/";
app.use("/pages", express.static(path.join(__dirname, distDir, "/pages")));
app.use("/assets", express.static(path.join(__dirname, distDir, "/assets")));
app.use("/img", express.static(path.join(__dirname, "/img")));
app.use("/weather", express.static(path.join(__dirname, "/img/weather")));
app.use("/audio", express.static(path.join(__dirname, "/audio")));
app.use(express.static(path.join(__dirname, "../")));
app.use(express.json());

//////////////////////////////
// Configuration des Routes //
//////////////////////////////
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

//Tous les personnages
app.get("/liste", (req, res) => {
  if (Liste.length === 0)
    res.status(404).json({
      succes: false,
      message: "Oo Il semble que la liste soit vide oO",
    });
  res.send(Liste);
});

//Un personnage en particulier
app.get("/liste/:id", (req, res) => {
  let characterDetails = Liste.find(
    (elm) => elm.id === parseInt(req.params.id)
  );
  if (characterDetails === undefined)
    res.status(410).json({
      success: false,
      message: "Personnage introuvable",
    });
  res.send(characterDetails);
});

//Modifier un personnage
app.put("/liste/:id", (req, res) => {
  const item = Liste.find((character) =>
    character.id === parseInt(req.params.id) ? character : ""
  );

  if (Object.keys(req.body).length !== 0) {
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        item[key] = req.body[key];
        Liste.splice(
          Liste.findIndex(
            (character) => character.id === parseInt(req.params.id)
          ),
          1,
          item
        );
      }
    }
    res.status(200).json({
      success: true,
      message: "mise à jour réussie !",
    });
  } else {
    res.status(403).json({
      success: false,
      message: "échec de la mise à jour !",
    });
  }
});

//Ajouter un personnage
app.post("/liste", (req, res) => {
  try {
    const newCharacter = req.body;
    const isCharacterExist = Liste.find((character) =>
      newCharacter.name === character.name ? true : false
    );

    if (isCharacterExist === undefined) {
      let lastId = Math.max(...Liste.map((character) => character.id));
      let characterId = lastId + 1;
      newCharacter.id = characterId;
      if (newCharacter.image === "")
        newCharacter.image = "http://localhost:3000/img/noimage.webp";
      Liste.push(newCharacter);
      res.status(201).json({
        success: true,
        message: "Personnage ajouté avec succès !",
      });
    } else {
      res.status(403).json({
        success: false,
        message: "Ce personnage existe déjà",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Impossible d'ajouter le personnage",
    });
  }
});

//Supprimer une entrée
app.delete("/liste/:id", (req, res) => {
  const characterFound = Liste.findIndex((character) =>
    parseInt(req.params.id) === character.id ? character : ""
  );
  if (characterFound != -1) {
    Liste.splice(characterFound, 1);
    res.json({
      success: true,
      message: "suppression réussie !",
    });
  } else {
    res.status(403).json({
      success: false,
      message: "échec de la suppression !",
    });
  }
});
