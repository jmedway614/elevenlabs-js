/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ElevenLabs from "../index";
export interface GetLibraryVoicesResponse {
    voices: ElevenLabs.LibraryVoiceResponse[];
    has_more: boolean;
    last_sort_id?: string;
}
