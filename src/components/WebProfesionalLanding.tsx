"use client";

import { useState } from "react";
import {
  WebProfesionalLandingContent,
  type WebProfesionalFeatureItem,
} from "@/components/WebProfesionalLandingContent";

export function WebProfesionalLanding() {
  const [modalFeature, setModalFeature] = useState<WebProfesionalFeatureItem | null>(null);
  return (
    <WebProfesionalLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    />
  );
}
