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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.users_routes = void 0;
var user_1 = require("../models/user");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
// making an instance from AppUser
var user = new user_1.AppUser();
// configuring the dotenv and taking TOKEN_SECRET
dotenv_1["default"].config();
var TOKEN_SECRET = process.env.TOKEN_SECRET;
// creating the index function to be used in the endpoint
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user.index()];
            case 1:
                users = _a.sent();
                console.log(users);
                res.json(users);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.send("sorry there was an error ".concat(error_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// creating the show function to be used in the endpoint
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tar, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user.show(req.params.id)];
            case 1:
                tar = _a.sent();
                console.log(tar);
                res.json(tar);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.send("sorry there was an error ".concat(error_2));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// creating the create function to be used in the endpoint and adding a token
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var us, cer, token, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                us = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: req.body.password
                };
                return [4 /*yield*/, user.create(us)];
            case 1:
                cer = _a.sent();
                token = jsonwebtoken_1["default"].sign({ user: cer }, TOKEN_SECRET);
                console.log(token);
                res.json(token);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.send("sorry there was an error ".concat(error_3));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Authenticating the user and adding a token
var Authenticate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var us, auth, token, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                us = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: req.body.password
                };
                return [4 /*yield*/, user.authenticate(us)];
            case 1:
                auth = _a.sent();
                token = jsonwebtoken_1["default"].sign({ user: auth }, TOKEN_SECRET);
                console.log(token);
                res.json(token);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.send("sorry there was an error ".concat(error_4));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// creating a function to verifing the token
var verifyAuthToken = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(" ")[1];
        jsonwebtoken_1["default"].verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.send("invalid token ".concat(error));
        return;
    }
};
// exporting a function to be used in server and adding it's neccessary endpoints
var users_routes = function (app) {
    app.get("/users", verifyAuthToken, index);
    app.get("/users/:id", verifyAuthToken, show);
    app.post("/users", create);
    app.post("/authenticate", Authenticate);
};
exports.users_routes = users_routes;
