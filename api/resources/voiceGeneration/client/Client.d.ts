/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import * as stream from "stream";
export declare namespace VoiceGeneration {
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
export declare class VoiceGeneration {
    protected readonly _options: VoiceGeneration.Options;
    constructor(_options?: VoiceGeneration.Options);
    /**
     * Get possible parameters for the /v1/voice-generation/generate-voice endpoint.
     *
     * @param {VoiceGeneration.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await elevenLabs.voiceGeneration.generateParameters()
     */
    generateParameters(requestOptions?: VoiceGeneration.RequestOptions): Promise<ElevenLabs.VoiceGenerationParameterResponse>;
    /**
     * Generate a random voice based on parameters. This method returns a generated_voice_id in the response header, and a sample of the voice in the body. If you like the generated voice call /v1/voice-generation/create-voice with the generated_voice_id to create the voice.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    generate(request: ElevenLabs.GenerateVoiceRequest, requestOptions?: VoiceGeneration.RequestOptions): Promise<stream.Readable>;
    /**
     * Create a previously generated voice. This endpoint should be called after you fetched a generated_voice_id using /v1/voice-generation/generate-voice.
     *
     * @param {ElevenLabs.CreatePreviouslyGenertedVoiceRequest} request
     * @param {VoiceGeneration.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.voiceGeneration.createAPreviouslyGeneratedVoice({
     *         voice_name: "Alex",
     *         voice_description: "Middle-aged American woman",
     *         generated_voice_id: "rbVJFu6SGRD1dbWpKnWl"
     *     })
     */
    createAPreviouslyGeneratedVoice(request: ElevenLabs.CreatePreviouslyGenertedVoiceRequest, requestOptions?: VoiceGeneration.RequestOptions): Promise<ElevenLabs.Voice>;
}
