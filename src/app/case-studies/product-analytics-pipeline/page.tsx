import type { Metadata } from "next";
import { ProductAnalyticsPipelineContent } from "./product-analytics-pipeline-content";

export const metadata: Metadata = {
  title: "Product Analytics Pipeline",
  description:
    "How I designed and launched a Pendo + Supabase product analytics pipeline that surfaced risk signals across a 1.5K+ DAU customer base and improved triage speed through modeled, data-backed insights.",
};

export default function ProductAnalyticsPipelinePage() {
  return <ProductAnalyticsPipelineContent />;
}
