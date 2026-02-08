"use client";

import { useState } from "react";
import {
  EventosLandingContent,
  type EventosFeatureItem,
} from "@/components/EventosLandingContent";

export function EventosLanding() {
  const [modalFeature, setModalFeature] = useState<EventosFeatureItem | null>(null);
  return (
    <EventosLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    />
  );
}
