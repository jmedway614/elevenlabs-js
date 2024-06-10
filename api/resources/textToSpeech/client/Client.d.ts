/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import * as stream from "stream";
export declare namespace TextToSpeech {
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
export declare class TextToSpeech {
    protected readonly _options: TextToSpeech.Options;
    constructor(_options?: TextToSpeech.Options);
    /**
     * Converts text into speech using a voice of your choice and returns audio.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convert(voiceId: string, request: ElevenLabs.TextToSpeechRequest, requestOptions?: TextToSpeech.RequestOptions): Promise<stream.Readable>;
    /**
     * Converts text into speech using a voice of your choice and returns audio as an audio stream.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    convertAsStream(voiceId: string, request: ElevenLabs.TextToSpeechAsStreamRequest, requestOptions?: TextToSpeech.RequestOptions): Promise<stream.Readable>;
}