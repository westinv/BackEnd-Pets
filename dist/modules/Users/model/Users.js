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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
require("reflect-metadata");
var Users = /** @class */ (function () {
    function Users() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "username", void 0);
    Users = __decorate([
        typeorm_1.Entity("Users"),
        __metadata("design:paramtypes", [])
    ], Users);
    return Users;
}());
exports.Users = Users;
