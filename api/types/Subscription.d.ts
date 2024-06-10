/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ElevenLabs from "../index";
export interface Subscription {
    tier: string;
    character_count: number;
    character_limit: number;
    can_extend_character_limit: boolean;
    allowed_to_extend_character_limit: boolean;
    next_character_count_reset_unix: number;
    voice_limit: number;
    max_voice_add_edits?: number;
    voice_add_edit_counter?: number;
    professional_voice_limit: number;
    can_extend_voice_limit: boolean;
    can_use_instant_voice_cloning: boolean;
    can_use_professional_voice_cloning: boolean;
    currency?: ElevenLabs.Currency;
    status?: ElevenLabs.SubscriptionStatus;
    billing_period?: ElevenLabs.ExtendedSubscriptionResponseModelBillingPeriod;
    next_invoice?: ElevenLabs.Invoice;
    has_open_invoices?: boolean;
}
