/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as stream from "stream";
export declare namespace Samples {
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
/**
 * Access to your samples. A sample is any audio file you attached to a voice. A voice can have one or more samples.
 */
export declare class Samples {
    protected readonly _options: Samples.Options;
    constructor(_options?: Samples.Options);
    /**
     * Removes a sample by its ID.
     *
     * @param {string} voiceId - Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
     * @param {string} sampleId - Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.
     * @param {Samples.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.samples.delete("ja9xsmfGhxYcymxGcOGB", "pMsXgVXv3BLzUgSXRplE")
     */
    delete(voiceId: string, sampleId: string, requestOptions?: Samples.RequestOptions): Promise<unknown>;
    /**
     * Returns the audio corresponding to a sample attached to a voice.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    getAudio(voiceId: string, sampleId: string, requestOptions?: Samples.RequestOptions): Promise<stream.Readable>;
}
