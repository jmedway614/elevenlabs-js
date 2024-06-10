"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronunciationDictionary = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const ElevenLabs = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors/index"));
class PronunciationDictionary {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Creates a new pronunciation dictionary from a lexicon .PLS file
     *
     * @param {ElevenLabs.BodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromFilePost} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.addFromFile({
     *         name: "name"
     *     })
     */
    addFromFile(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _request = new core.FormDataWrapper();
            if (request.file != null) {
                yield _request.append("file", request.file);
            }
            yield _request.append("name", request.name);
            if (request.description != null) {
                yield _request.append("description", request.description);
            }
            const _maybeEncodedRequest = _request.getRequest();
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/pronunciation-dictionaries/add-from-file"),
                method: "POST",
                headers: Object.assign({ "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined, "X-Fern-Language": "JavaScript", "X-Fern-SDK-Name": "elevenlabs", "X-Fern-SDK-Version": "0.7.0", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield _maybeEncodedRequest.getHeaders())),
                body: yield _maybeEncodedRequest.getBody(),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Add rules to the pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {ElevenLabs.PronunciationDictionary} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.addRulesToThePronunciationDictionary("pronunciation_dictionary_id", {
     *         rules: []
     *     })
     */
    addRulesToThePronunciationDictionary(pronunciationDictionaryId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/pronunciation-dictionaries/${encodeURIComponent(pronunciationDictionaryId)}/add-rules`),
                method: "POST",
                headers: {
                    "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "elevenlabs",
                    "X-Fern-SDK-Version": "0.7.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                body: request,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Remove rules from the pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {ElevenLabs.BodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.removeRulesFromThePronunciationDictionary("pronunciation_dictionary_id", {
     *         rule_strings: ["rule_strings"]
     *     })
     */
    removeRulesFromThePronunciationDictionary(pronunciationDictionaryId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/pronunciation-dictionaries/${encodeURIComponent(pronunciationDictionaryId)}/remove-rules`),
                method: "POST",
                headers: {
                    "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "elevenlabs",
                    "X-Fern-SDK-Version": "0.7.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                body: request,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Get PLS file with a pronunciation dictionary version rules
     *
     * @param {string} dictionaryId - The id of the pronunciation dictionary
     * @param {string} versionId - The id of the version of the pronunciation dictionary
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.download("Fm6AvNgS53NXe6Kqxp3e", "KZFyRUq3R6kaqhKI146w")
     */
    download(dictionaryId, versionId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/pronunciation-dictionaries/${encodeURIComponent(dictionaryId)}/${encodeURIComponent(versionId)}/download`),
                method: "GET",
                headers: {
                    "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "elevenlabs",
                    "X-Fern-SDK-Version": "0.7.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                responseType: "text",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Get metadata for a pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.get("Fm6AvNgS53NXe6Kqxp3e")
     */
    get(pronunciationDictionaryId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/pronunciation-dictionaries/${encodeURIComponent(pronunciationDictionaryId)}/`),
                method: "GET",
                headers: {
                    "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "elevenlabs",
                    "X-Fern-SDK-Version": "0.7.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Get a list of the pronunciation dictionaries you have access to and their metadata
     *
     * @param {ElevenLabs.PronunciationDictionaryGetAllRequest} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.getAll({
     *         page_size: 1
     *     })
     */
    getAll(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { cursor, page_size: pageSize } = request;
            const _queryParams = {};
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/pronunciation-dictionaries/"),
                method: "GET",
                headers: {
                    "xi-api-key": (yield core.Supplier.get(this._options.apiKey)) != null
                        ? yield core.Supplier.get(this._options.apiKey)
                        : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "elevenlabs",
                    "X-Fern-SDK-Version": "0.7.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new ElevenLabs.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ElevenLabsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ElevenLabsTimeoutError();
                case "unknown":
                    throw new errors.ElevenLabsError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
}
exports.PronunciationDictionary = PronunciationDictionary;