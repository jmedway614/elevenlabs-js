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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = void 0;
const ElevenLabsError_1 = require("../errors/ElevenLabsError");
const runtime_1 = require("../core/runtime/runtime");
const child_process_1 = require("child_process");
function stream(audio) {
    var audio_1, audio_1_1;
    var e_1, _a;
    var _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (runtime_1.RUNTIME.type !== "node") {
            throw new ElevenLabsError_1.ElevenLabsError({
                message: `This function is only supported in node environments. ${runtime_1.RUNTIME.type} is not supported`
            });
        }
        try {
            const exe = (0, child_process_1.exec)('mpv --no-cache --no-terminal -- fd://0');
            try {
                for (audio_1 = __asyncValues(audio); audio_1_1 = yield audio_1.next(), !audio_1_1.done;) {
                    const data = audio_1_1.value;
                    (_b = exe.stdin) === null || _b === void 0 ? void 0 : _b.write(data);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (audio_1_1 && !audio_1_1.done && (_a = audio_1.return)) yield _a.call(audio_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_c = exe.stdin) === null || _c === void 0 ? void 0 : _c.end();
            // await exe
        }
        catch (error) {
            throw new ElevenLabsError_1.ElevenLabsError({
                message: `Play has failed to properly execute. Please see error below`,
                body: error
            });
        }
    });
}
exports.stream = stream;
