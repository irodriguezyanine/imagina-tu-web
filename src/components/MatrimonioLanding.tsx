"use client";

import { useState } from "react";
import {
  MatrimonioLandingContent,
  type MatrimonioFeatureItem,
} from "@/components/MatrimonioLandingContent";

export function MatrimonioLanding({ children }: { children?: React.ReactNode }) {
  const [modalFeature, setModalFeature] = useState<MatrimonioFeatureItem | null>(null);
  return (
    <MatrimonioLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    >
      {children}
    </MatrimonioLandingContent>
  );
}
