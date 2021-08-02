"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("./database");
require("reflect-metadata");
var PetsRoutes_1 = require("./modules/Pets/routes/PetsRoutes");
var AuthenticateUserRoutes_1 = require("./modules/Users/routes/AuthenticateUserRoutes");
var UsersRoutes_1 = require("./modules/Users/routes/UsersRoutes");
var swagger_json_1 = __importDefault(require("./swagger.json"));
dotenv.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(UsersRoutes_1.userRoutes);
app.use(PetsRoutes_1.petsRoutes);
app.use(AuthenticateUserRoutes_1.authenticateUserRoutes);
app.get("/", function (request, response) {
    response.status(200).json({ message: "Servidor online" });
});
app.listen(process.env.PORT || 3333, function () { return console.log("rodando"); });
