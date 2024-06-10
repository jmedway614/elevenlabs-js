/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ElevenLabs from "../../../../index";
/**
 * @example
 *     {
 *         rules: []
 *     }
 */
export interface PronunciationDictionary {
    /**
     * List of pronunciation rules. Rule can be either:
     *     an alias rule: {'string_to_replace': 'a', 'type': 'alias', 'alias': 'b', }
     *     or a phoneme rule: {'string_to_replace': 'a', 'type': 'phoneme', 'phoneme': 'b', 'alphabet': 'ipa' }
     */
    rules: ElevenLabs.PronunciationDictionaryRule[];
}
