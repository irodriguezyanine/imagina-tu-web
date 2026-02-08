"use client";

import { useState } from "react";
import {
  WebProfesionalLandingContent,
  type WebProfesionalFeatureItem,
} from "@/components/WebProfesionalLandingContent";

export function WebProfesionalLanding({ children }: { children?: React.ReactNode }) {
  const [modalFeature, setModalFeature] = useState<WebProfesionalFeatureItem | null>(null);
  return (
    <WebProfesionalLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    >
      {children}
    </WebProfesionalLandingContent>
  );
}
