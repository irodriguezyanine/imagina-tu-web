"use client";

import { useState } from "react";
import {
  MatrimonioLandingContent,
  type MatrimonioFeatureItem,
} from "@/components/MatrimonioLandingContent";

export function MatrimonioLanding() {
  const [modalFeature, setModalFeature] = useState<MatrimonioFeatureItem | null>(null);
  return (
    <MatrimonioLandingContent
      modalFeature={modalFeature}
      setModalFeature={setModalFeature}
    />
  );
}
