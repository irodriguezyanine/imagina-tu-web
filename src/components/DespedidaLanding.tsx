"use client";

import { useState } from "react";
import {
  DespedidaLandingContent,
  type FeatureItem,
} from "@/components/DespedidaLandingContent";

export function DespedidaLanding({ children }: { children?: React.ReactNode }) {
  const [modalFeature, setModalFeature] = useState<FeatureItem | null>(null);
  return (
    <DespedidaLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    >
      {children}
    </DespedidaLandingContent>
  );
}
