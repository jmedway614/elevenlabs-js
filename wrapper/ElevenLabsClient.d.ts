/// <reference types="node" />
import { ElevenLabsClient as FernClient } from "../Client";
import * as ElevenLabs from "../api";
import * as core from "../core";
import * as stream from "stream";
export declare namespace ElevenLabsClient {
    interface Options {
        /**
         * Your ElevenLabs API Key. Defaults to the environment
         * variable ELEVENLABS_API_KEY.
         */
        apiKey?: core.Supplier<string>;
    }
    interface GeneratAudioBulk extends ElevenLabs.TextToSpeechRequest {
    }
    interface GenerateAudioStream extends ElevenLabs.TextToSpeechAsStreamRequest {
        stream: true;
    }
}
export declare class ElevenLabsClient extends FernClient {
    constructor(options?: ElevenLabsClient.Options);
    /**
     * Generates audio for a voice.
     *
     * @example Generate the entire audio
     * import { play } from "elevenlabs";
     *
     * const audio = eleven.generate({
     *   voiceId: "George" // defaults to Bella
     * })
     * await play(audio);
     *
     * @example
     * import { stream } from "elevenlabs"
     *
     * const audioStream = eleven.generate({
     *   stream: true,
     *   voice: "Bella"
     * })
     * await stream(audioStream);
     */
    generate(request: (ElevenLabsClient.GeneratAudioBulk | ElevenLabsClient.GenerateAudioStream) & {
        voice?: string;
    }, requestOptions?: FernClient.RequestOptions): Promise<stream.Readable>;
}
