/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace Models {
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
 * Access the different models of the platform.
 */
export declare class Models {
    protected readonly _options: Models.Options;
    constructor(_options?: Models.Options);
    /**
     * Gets a list of available models.
     *
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await elevenLabs.models.getAll()
     */
    getAll(requestOptions?: Models.RequestOptions): Promise<ElevenLabs.Model[]>;
}