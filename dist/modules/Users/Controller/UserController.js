"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersControler = void 0;
var typeorm_1 = require("typeorm");
var UserRepository_1 = require("../repositories/UserRepository");
var AuthenticateUserService_1 = require("../services/AuthenticateUserService");
var CreateUserService_1 = require("../services/CreateUserService");
var DeleteUserService_1 = require("../services/DeleteUserService");
var ShowUserByEmailService_1 = require("../services/ShowUserByEmailService");
var UpdateUserService_1 = require("../services/UpdateUserService");
var UsersControler = /** @class */ (function () {
    function UsersControler() {
    }
    UsersControler.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, username, password, email, telefone, createUserService;
            return __generator(this, function (_b) {
                _a = request.body, nome = _a.nome, username = _a.username, password = _a.password, email = _a.email, telefone = _a.telefone;
                createUserService = new CreateUserService_1.CreateUserService();
                createUserService.execute({
                    nome: nome,
                    username: username,
                    password: password,
                    email: email,
                    telefone: telefone,
                });
                return [2 /*return*/, response.status(201).send()];
            });
        });
    };
    UsersControler.prototype.showUserByEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var showUserByEmail, email, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        showUserByEmail = new ShowUserByEmailService_1.ShowUserByEmailService();
                        email = request.params.email;
                        return [4 /*yield*/, showUserByEmail.execute({
                                email: email,
                            })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    UsersControler.prototype.authenticateUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, _a, email, password, authenticateUserService, authenticateInfo, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        userRepository = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        _a = request.body, email = _a.email, password = _a.password;
                        authenticateUserService = new AuthenticateUserService_1.AuthenticateUserService();
                        return [4 /*yield*/, authenticateUserService.execute({
                                email: email,
                                password: password,
                            })];
                    case 1:
                        authenticateInfo = _b.sent();
                        return [2 /*return*/, response.status(200).json(authenticateInfo)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(500).send()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersControler.prototype.updateUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var updateUserService, id, _a, nome, username, password, email, telefone, updatedUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        updateUserService = new UpdateUserService_1.UpdateUserService();
                        id = request.params.id;
                        _a = request.body, nome = _a.nome, username = _a.username, password = _a.password, email = _a.email, telefone = _a.telefone;
                        return [4 /*yield*/, updateUserService.execute({
                                id: id,
                                nome: nome,
                                username: username,
                                password: password,
                                email: email,
                                telefone: telefone,
                            })];
                    case 1:
                        updatedUser = _b.sent();
                        return [2 /*return*/, response.status(201).json(updatedUser)];
                }
            });
        });
    };
    UsersControler.prototype.deleteUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteUserService, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteUserService = new DeleteUserService_1.DeleteUserService();
                        id = request.params.id;
                        return [4 /*yield*/, deleteUserService.execute({
                                id: id,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).send()];
                }
            });
        });
    };
    return UsersControler;
}());
exports.UsersControler = UsersControler;
