"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Refreshes the HubSpot chat widget on route change so chatflow targeting
 * works correctly in this Next.js SPA (HubSpot doesn't see full page reloads).
 */
export function HubSpotChatRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => {
      if (typeof window !== "undefined" && window.HubSpotConversations?.widget) {
        window.HubSpotConversations.widget.refresh();
      }
    };

    refresh();
  }, [pathname]);

  return null;
}
