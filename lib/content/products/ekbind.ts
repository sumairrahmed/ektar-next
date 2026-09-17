// Transcribed from PAGES.md §6 (source: ekbind.dc.html → /ekbind)
import type { LedgerRow } from "@/components/LedgerBackground";

export const hero = {
  statusText: "SIM binding · ekBind",
  title: "Bind the account to the SIM. Catch the swap.",
  description:
    "ekBind verifies the SIM behind every session. Silent Network Authentication confirms the SIM directly with the mobile operator over the data connection — no code, no customer action. Reverse SMS proves possession of the SIM from the device itself. Both bind the account to a known SIM, so a swapped SIM or a moved number is caught before a transaction proceeds.",
};

export const ledgerRows: LedgerRow[] = [
  { a: "+971 •• ••• 4821", b: "sim a41f" },
  { a: "+968 •• ••• 7130", b: "sim 92bb" },
  { a: "+971 •• ••• 5507", b: "sna verified · operator confirmed", live: true },
  { a: "+91 ••• ••• 2249", b: "sim 7de4" },
  { a: "+65 •••• 6688", b: "sim 1a58" },
  { a: "+966 •• ••• 3092", b: "swap detected" },
  { a: "+971 •• ••• 8874", b: "sim 04af" },
  { a: "+973 •••• 2261", b: "sim f0c3" },
  { a: "+91 ••• ••• 7715", b: "sim 5b6e" },
  { a: "+65 •••• 3390", b: "reverse sms · sent from device" },
  { a: "+971 •• ••• 6042", b: "sim 31dd" },
  { a: "+968 •• ••• 1188", b: "sim 7b21" },
  { a: "+966 •• ••• 9503", b: "sim e5c9" },
  { a: "+971 •• ••• 2874", b: "sim 88d0" },
];

export const howItWorks = [
  { tag: "01", t: "Silent Network Authentication", d: "The SIM is confirmed with the mobile operator over the data connection. Nothing is sent to the customer, so there is nothing to intercept or socially engineer." },
  { tag: "02", t: "Reverse SMS", d: "The device sends the message rather than receiving a code — possession of the SIM is proven by the sender, not trusted from an inbound message." },
  { tag: "03", t: "SIM-swap and port-out detection", d: "A changed SIM breaks the binding. The session is re-verified before the transaction is allowed to continue." },
];

export const whyNow = {
  heading: "Regulators are mandating device and SIM-level proof",
  text: "Saudi Arabia's SAMA framework mandates device-bound credentials, and Malaysia's BNM RMiT 2026 mandates device binding for every licensed bank — SIM-swap and port-out checks are a core part of meeting that bar.",
};

export const closing = { heading: "Bind every session to a verified SIM." };
