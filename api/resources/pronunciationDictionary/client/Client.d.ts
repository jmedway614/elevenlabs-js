/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace PronunciationDictionary {
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
export declare class PronunciationDictionary {
    protected readonly _options: PronunciationDictionary.Options;
    constructor(_options?: PronunciationDictionary.Options);
    /**
     * Creates a new pronunciation dictionary from a lexicon .PLS file
     *
     * @param {ElevenLabs.BodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromFilePost} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.addFromFile({
     *         name: "name"
     *     })
     */
    addFromFile(request: ElevenLabs.BodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromFilePost, requestOptions?: PronunciationDictionary.RequestOptions): Promise<ElevenLabs.AddPronunciationDictionaryResponseModel>;
    /**
     * Add rules to the pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {ElevenLabs.PronunciationDictionary} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.addRulesToThePronunciationDictionary("pronunciation_dictionary_id", {
     *         rules: []
     *     })
     */
    addRulesToThePronunciationDictionary(pronunciationDictionaryId: string, request: ElevenLabs.PronunciationDictionary, requestOptions?: PronunciationDictionary.RequestOptions): Promise<ElevenLabs.AddPronunciationDictionaryRulesResponseModel>;
    /**
     * Remove rules from the pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {ElevenLabs.BodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.removeRulesFromThePronunciationDictionary("pronunciation_dictionary_id", {
     *         rule_strings: ["rule_strings"]
     *     })
     */
    removeRulesFromThePronunciationDictionary(pronunciationDictionaryId: string, request: ElevenLabs.BodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost, requestOptions?: PronunciationDictionary.RequestOptions): Promise<ElevenLabs.RemovePronunciationDictionaryRulesResponseModel>;
    /**
     * Get PLS file with a pronunciation dictionary version rules
     *
     * @param {string} dictionaryId - The id of the pronunciation dictionary
     * @param {string} versionId - The id of the version of the pronunciation dictionary
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.download("Fm6AvNgS53NXe6Kqxp3e", "KZFyRUq3R6kaqhKI146w")
     */
    download(dictionaryId: string, versionId: string, requestOptions?: PronunciationDictionary.RequestOptions): Promise<string>;
    /**
     * Get metadata for a pronunciation dictionary
     *
     * @param {string} pronunciationDictionaryId - The id of the pronunciation dictionary
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.get("Fm6AvNgS53NXe6Kqxp3e")
     */
    get(pronunciationDictionaryId: string, requestOptions?: PronunciationDictionary.RequestOptions): Promise<ElevenLabs.GetPronunciationDictionaryMetadataResponse>;
    /**
     * Get a list of the pronunciation dictionaries you have access to and their metadata
     *
     * @param {ElevenLabs.PronunciationDictionaryGetAllRequest} request
     * @param {PronunciationDictionary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.pronunciationDictionary.getAll({
     *         page_size: 1
     *     })
     */
    getAll(request?: ElevenLabs.PronunciationDictionaryGetAllRequest, requestOptions?: PronunciationDictionary.RequestOptions): Promise<ElevenLabs.GetPronunciationDictionariesMetadataResponseModel>;
}