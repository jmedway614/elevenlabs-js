/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace AudioNative {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}
export declare class AudioNative {
    protected readonly _options: AudioNative.Options;
    constructor(_options?: AudioNative.Options);
    /**
     * Creates AudioNative enabled project, optionally starts conversion and returns project id and embeddable html snippet.
     *
     * @param {ElevenLabs.BodyCreatesAudioNativeEnabledProjectV1AudioNativePost} request
     * @param {AudioNative.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.audioNative.create({
     *         file: fs.createReadStream("/path/to/your/file"),
     *         name: "name"
     *     })
     */
    create(request: ElevenLabs.BodyCreatesAudioNativeEnabledProjectV1AudioNativePost, requestOptions?: AudioNative.RequestOptions): Promise<ElevenLabs.AudioNativeCreateProjectResponseModel>;
}