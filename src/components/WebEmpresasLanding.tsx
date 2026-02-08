"use client";

import { useState } from "react";
import {
  WebEmpresasLandingContent,
  type WebEmpresasFeatureItem,
} from "@/components/WebEmpresasLandingContent";

export function WebEmpresasLanding({ children }: { children?: React.ReactNode }) {
  const [modalFeature, setModalFeature] = useState<WebEmpresasFeatureItem | null>(null);
  return (
    <WebEmpresasLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    >
      {children}
    </WebEmpresasLandingContent>
  );
}
