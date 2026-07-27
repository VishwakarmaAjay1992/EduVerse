export type AnalyticsEvent =
  | "start_path_clicked"
  | "placement_plan_created"
  | "lesson_started"
  | "practice_completed"
  | "quiz_completed"
  | "lesson_completed"
  | "continue_learning_clicked"
  | "dashboard_opened"
  | "search_performed"
  | "search_result_clicked"
  | "review_completed"
  | "mistake_saved"
  | "learning_data_exported"
  | "learning_data_imported";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Lightweight analytics bridge. Events are available immediately as browser
 * CustomEvents and will also flow into Google Tag Manager when dataLayer exists.
 */
export function trackEvent(event: AnalyticsEvent, properties: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties };
  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent("eduverse:analytics", { detail: payload }));
}
