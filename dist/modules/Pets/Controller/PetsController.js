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
exports.PetsController = void 0;
var CreatePetService_1 = require("../services/CreatePetService");
var DeletePetService_1 = require("../services/DeletePetService");
var ListPetByClassService_1 = require("../services/ListPetByClassService");
var ListPetByIdadeService_1 = require("../services/ListPetByIdadeService");
var ListPetByIdService_1 = require("../services/ListPetByIdService");
var ListPetByRacaService_1 = require("../services/ListPetByRacaService");
var ListPetByStatusService_1 = require("../services/ListPetByStatusService");
var UpdatePetService_1 = require("../services/UpdatePetService");
var PetsController = /** @class */ (function () {
    function PetsController() {
    }
    PetsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var createPetService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createPetService = new CreatePetService_1.CreatePetService();
                        return [4 /*yield*/, createPetService.execute(request.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).send()];
                }
            });
        });
    };
    PetsController.prototype.listPetById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listPetById, id, pet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPetById = new ListPetByIdService_1.ListPetByIdService();
                        id = request.params.id;
                        return [4 /*yield*/, listPetById.execute({ id: id })];
                    case 1:
                        pet = _a.sent();
                        return [2 /*return*/, response.status(201).json(pet)];
                }
            });
        });
    };
    PetsController.prototype.updatePet = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var updatePetService, id, _a, nome, descricao, classe, idade, raca, status, user_id, updatedPet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        updatePetService = new UpdatePetService_1.UpdatePetService();
                        id = request.params.id;
                        _a = request.body, nome = _a.nome, descricao = _a.descricao, classe = _a.classe, idade = _a.idade, raca = _a.raca, status = _a.status, user_id = _a.user_id;
                        return [4 /*yield*/, updatePetService.execute({
                                id: id,
                                user_id: user_id,
                                nome: nome,
                                descricao: descricao,
                                classe: classe,
                                idade: idade,
                                raca: raca,
                                status: status,
                            })];
                    case 1:
                        updatedPet = _b.sent();
                        return [2 /*return*/, response.status(201).json(updatedPet)];
                }
            });
        });
    };
    PetsController.prototype.listPetByClass = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listPetByClass, classe, pets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPetByClass = new ListPetByClassService_1.ListPetByClassService();
                        classe = request.params.classe;
                        return [4 /*yield*/, listPetByClass.execute({ classe: classe })];
                    case 1:
                        pets = _a.sent();
                        return [2 /*return*/, response.status(201).json(pets)];
                }
            });
        });
    };
    PetsController.prototype.listPetByIdade = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listPetByidade, idade, pets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPetByidade = new ListPetByIdadeService_1.ListPetByIdadeService();
                        idade = request.params.idade;
                        return [4 /*yield*/, listPetByidade.execute({ idade: idade })];
                    case 1:
                        pets = _a.sent();
                        return [2 /*return*/, response.status(201).json(pets)];
                }
            });
        });
    };
    PetsController.prototype.listPetByRaca = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listPetByRaca, raca, pets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPetByRaca = new ListPetByRacaService_1.ListPetByRacaService();
                        raca = request.params.raca;
                        return [4 /*yield*/, listPetByRaca.execute({ raca: raca })];
                    case 1:
                        pets = _a.sent();
                        return [2 /*return*/, response.status(201).json(pets)];
                }
            });
        });
    };
    PetsController.prototype.listPetByStatus = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listPetByStatus, status, isTrueSet, pets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPetByStatus = new ListPetByStatusService_1.ListPetByStatusService();
                        status = request.params.status;
                        if (status === "true") {
                            isTrueSet = true;
                        }
                        else {
                            isTrueSet = false;
                        }
                        return [4 /*yield*/, listPetByStatus.execute({ status: isTrueSet })];
                    case 1:
                        pets = _a.sent();
                        return [2 /*return*/, response.status(201).json(pets)];
                }
            });
        });
    };
    PetsController.prototype.deletePet = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var deletePetService, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deletePetService = new DeletePetService_1.DeletePetService();
                        id = request.params.id;
                        return [4 /*yield*/, deletePetService.execute({
                                id: id,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).send()];
                }
            });
        });
    };
    return PetsController;
}());
exports.PetsController = PetsController;
