/**
 * HubSpot Conversations (chat widget / AI chatbot) SDK
 * @see https://developers.hubspot.com/docs/api-reference/conversations-chat-configuration/chat-widget-sdk
 */
export {};

declare global {
  interface HsConversationsSettings {
    loadImmediately?: boolean;
    inlineEmbedSelector?: string;
    enableWidgetCookieBanner?: boolean;
    disableAttachment?: boolean;
  }

  interface HubSpotConversationsWidget {
    load: () => void;
    refresh: () => void;
    remove: () => void;
    status: () => { loaded: boolean };
  }

  interface HubSpotConversationsAPI {
    widget: HubSpotConversationsWidget;
  }

  interface Window {
    hsConversationsSettings?: HsConversationsSettings;
    hsConversationsOnReady?: Array<() => void>;
    HubSpotConversations?: HubSpotConversationsAPI;
  }
}
