"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pets = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
require("reflect-metadata");
var Pets = /** @class */ (function () {
    function Pets() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Pets.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "classe", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "idade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pets.prototype, "raca", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Pets.prototype, "status", void 0);
    Pets = __decorate([
        typeorm_1.Entity("Pets"),
        __metadata("design:paramtypes", [])
    ], Pets);
    return Pets;
}());
exports.Pets = Pets;
