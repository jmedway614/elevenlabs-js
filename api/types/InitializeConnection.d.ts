/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ElevenLabs from "../index";
export interface InitializeConnection {
    /** The initial text that must be sent is a blank space. */
    text: " ";
    voice_settings?: ElevenLabs.RealtimeVoiceSettings;
    /** This property should only be provided in the first message you send. */
    generation_config?: ElevenLabs.GenerationConfig;
    /**
     * Your ElevenLabs API key. This is a required parameter that should be provided in the first message you send.
     * You can find your API key in the [API Keys section](https://elevenlabs.io/docs/api-reference/websockets#api-keys).
     */
    "xi-api-key": string;
}
