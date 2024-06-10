/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as fs from "fs";
/**
 * @example
 *     {
 *         files: [fs.createReadStream("/path/to/your/file")],
 *         name: "Alex"
 *     }
 */
export interface BodyAddVoiceV1VoicesAddPost {
    /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
    name: string;
    files: File[] | fs.ReadStream[];
    /** How would you describe the voice? */
    description?: string;
    /** Serialized labels dictionary for the voice. */
    labels?: string;
}