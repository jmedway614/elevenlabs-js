/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as fs from "fs";
import * as ElevenLabs from "../../../../index";

/**
 * @example
 *     {
 *         audio: fs.createReadStream("/path/to/your/file"),
 *         optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
 *         output_format: ElevenLabs.OutputFormat.Mp32205032
 *     }
 */
export interface BodySpeechToSpeechStreamingV1SpeechToSpeechVoiceIdStreamPost {
    /**
     * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model.
     */
    optimize_streaming_latency?: ElevenLabs.OptimizeStreamingLatency;
    /**
     * The output format of the generated audio.
     */
    output_format?: ElevenLabs.OutputFormat;
    audio: File | fs.ReadStream;
    /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for speech to speech, you can check this using the can_do_voice_conversion property. */
    model_id?: string;
    /** Voice settings overriding stored setttings for the given voice. They are applied only on the given request. Needs to be send as a JSON encoded string. */
    voice_settings?: string;
}
