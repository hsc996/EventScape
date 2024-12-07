const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Homepage route to confirm server is running
app.get("/", (request, response) => {
    response.json({
        message: "Hello, world!"
    });
});

const AuthController = require("./controllers/AuthControllers.js");
app.use("/account", AuthController);

const UserController = require("./controllers/UserController.js");
app.use("/user", UserController);

const EventController = require("./controllers/EventController.js");
app.use("/event", EventController);

const RSVPController = require("./controllers/RSVPController.js");
app.use("/rsvp", RSVPController);

const FollowController = require("./controllers/FollowerController.js");
app.use("/follow", FollowController);

const ThemeController = require("./controllers/ThemeController.js");
app.use("/themes", ThemeController);

const EventSearchController = require("./controllers/EventSearchController.js");
app.use("/search", EventSearchController);

module.exports = {
    app
}