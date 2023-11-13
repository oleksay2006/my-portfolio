import { defineNuxtPlugin } from "#app";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

export default defineNuxtPlugin(() => {
  Sentry.init({
    dsn: "",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  });
});
