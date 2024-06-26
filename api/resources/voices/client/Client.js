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
exports.Voices = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const ElevenLabs = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors/index"));
/**
 * Access to voices created either by you or us.
 */
class Voices {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Gets a list of all available voices for a user.
     *
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.getAll()
     */
    getAll(requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/voices"),
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
     * Gets the default settings for voices. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await elevenLabs.voices.getDefaultSettings()
     */
    getDefaultSettings(requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/voices/settings/default"),
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
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
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
     * Returns the settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.getSettings("2EiwWnXFnvU5JabPnv8n")
     */
    getSettings(voiceId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/${encodeURIComponent(voiceId)}/settings`),
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
     * Returns metadata about a specific voice.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.VoicesGetRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.get("29vD33N1CtxCmqQRPOHJ")
     */
    get(voiceId, request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { with_settings: withSettings } = request;
            const _queryParams = {};
            if (withSettings != null) {
                _queryParams["with_settings"] = withSettings.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/${encodeURIComponent(voiceId)}`),
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
    /**
     * Deletes a voice by its ID.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.delete("29vD33N1CtxCmqQRPOHJ")
     */
    delete(voiceId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/${encodeURIComponent(voiceId)}`),
                method: "DELETE",
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
     * Edit your settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.VoiceSettings} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.editSettings("29vD33N1CtxCmqQRPOHJ", {
     *         stability: 0.1,
     *         similarity_boost: 0.3,
     *         style: 0.2
     *     })
     */
    editSettings(voiceId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/${encodeURIComponent(voiceId)}/settings/edit`),
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
     * Add a new voice to your collection of voices in VoiceLab.
     *
     * @param {ElevenLabs.BodyAddVoiceV1VoicesAddPost} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.add({
     *         files: [fs.createReadStream("/path/to/your/file")],
     *         name: "Alex"
     *     })
     */
    add(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _request = new core.FormDataWrapper();
            yield _request.append("name", request.name);
            for (const _file of request.files) {
                yield _request.append("files", _file);
            }
            if (request.description != null) {
                yield _request.append("description", request.description);
            }
            if (request.labels != null) {
                yield _request.append("labels", request.labels);
            }
            const _maybeEncodedRequest = _request.getRequest();
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/voices/add"),
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
     * Edit a voice created by you.
     *
     * @param {string} voiceId
     * @param {ElevenLabs.BodyEditVoiceV1VoicesVoiceIdEditPost} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.edit("JBFqnCBsd6RMkjVDRZzb", {
     *         name: "George"
     *     })
     */
    edit(voiceId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _request = new core.FormDataWrapper();
            yield _request.append("name", request.name);
            if (request.files != null) {
                for (const _file of request.files) {
                    yield _request.append("files", _file);
                }
            }
            if (request.description != null) {
                yield _request.append("description", request.description);
            }
            if (request.labels != null) {
                yield _request.append("labels", request.labels);
            }
            const _maybeEncodedRequest = _request.getRequest();
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/${encodeURIComponent(voiceId)}/edit`),
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
     * Add a sharing voice to your collection of voices in VoiceLab.
     *
     * @param {string} publicUserId - Public user ID used to publicly identify ElevenLabs users.
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {ElevenLabs.AddSharingVoiceRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.addSharingVoice("63e84100a6bf7874ba37a1bab9a31828a379ec94b891b401653b655c5110880f", "sB1b5zUrxQVAFl2PhZFp", {
     *         new_name: "Alita"
     *     })
     */
    addSharingVoice(publicUserId, voiceId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, `v1/voices/add/${encodeURIComponent(publicUserId)}/${encodeURIComponent(voiceId)}`),
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
     * Gets a list of shared voices.
     *
     * @param {ElevenLabs.VoicesGetSharedRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voices.getShared({
     *         page_size: 1,
     *         gender: "female",
     *         language: "en"
     *     })
     */
    getShared(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { page_size: pageSize, category, gender, age, accent, language, search, use_cases: useCases, descriptives, featured, reader_app_enabled: readerAppEnabled, owner_id: ownerId, sort, page, } = request;
            const _queryParams = {};
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (category != null) {
                _queryParams["category"] = category;
            }
            if (gender != null) {
                _queryParams["gender"] = gender;
            }
            if (age != null) {
                _queryParams["age"] = age;
            }
            if (accent != null) {
                _queryParams["accent"] = accent;
            }
            if (language != null) {
                _queryParams["language"] = language;
            }
            if (search != null) {
                _queryParams["search"] = search;
            }
            if (useCases != null) {
                if (Array.isArray(useCases)) {
                    _queryParams["use_cases"] = useCases.map((item) => item);
                }
                else {
                    _queryParams["use_cases"] = useCases;
                }
            }
            if (descriptives != null) {
                if (Array.isArray(descriptives)) {
                    _queryParams["descriptives"] = descriptives.map((item) => item);
                }
                else {
                    _queryParams["descriptives"] = descriptives;
                }
            }
            if (featured != null) {
                _queryParams["featured"] = featured.toString();
            }
            if (readerAppEnabled != null) {
                _queryParams["reader_app_enabled"] = readerAppEnabled.toString();
            }
            if (ownerId != null) {
                _queryParams["owner_id"] = ownerId;
            }
            if (sort != null) {
                _queryParams["sort"] = sort;
            }
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ElevenLabsEnvironment.Production, "v1/shared-voices"),
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
exports.Voices = Voices;
