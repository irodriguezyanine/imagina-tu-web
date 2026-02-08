"use client";

import { useState } from "react";
import {
  CumpleanosLandingContent,
  type CumpleanosFeatureItem,
} from "@/components/CumpleanosLandingContent";

export function CumpleanosLanding() {
  const [modalFeature, setModalFeature] = useState<CumpleanosFeatureItem | null>(null);
  return (
    <CumpleanosLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    />
  );
}
