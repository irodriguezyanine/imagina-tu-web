"use client";

import { useState } from "react";
import {
  CumpleanosLandingContent,
  type CumpleanosFeatureItem,
} from "@/components/CumpleanosLandingContent";

export function CumpleanosLanding({ children }: { children?: React.ReactNode }) {
  const [modalFeature, setModalFeature] = useState<CumpleanosFeatureItem | null>(null);
  return (
    <CumpleanosLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    >
      {children}
    </CumpleanosLandingContent>
  );
}
