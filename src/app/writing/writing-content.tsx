"use client";

import { FadeIn } from "@/components/fade-in";

const articles = [
  {
    id: "analytics",
    title: "What Product Analytics Changed About My Thinking",
    category: "Product Analytics",
    content: [
      "Before I had access to product analytics, I prioritized features based on stakeholder volume — whoever asked the loudest got their feature next. It felt responsive. It was actually reactive.",
      "When I started instrumenting user flows with Pendo and Amplitude, I discovered that the features stakeholders requested most urgently were often used by less than 15% of the user base. Meanwhile, the workflows that 80% of users relied on daily had significant friction points that no one had raised because users had simply learned to work around them.",
      "Product analytics did not replace customer conversations — it made them sharper. Instead of asking users what they wanted, I could show them their own behavior and ask why. The insights from that shift were fundamentally different.",
      "The biggest change was in how I framed prioritization discussions. Instead of debating opinions, we debated data. Instead of asking 'should we build this?', we asked 'what does usage tell us about where users struggle most?' The quality of product decisions improved measurably.",
      "A concrete example: Pendo data showed that our mobile inspection form had a 34% abandonment rate at the photo attachment step. No stakeholder had ever raised this. Meanwhile, three enterprise accounts were lobbying for a custom reporting dashboard that analytics showed would serve fewer than 50 users. We deprioritized the dashboard and fixed the photo flow — adoption of completed inspections increased 28% in the next sprint.",
    ],
  },
  {
    id: "ai-products",
    title: "Building AI Products Beyond Prompt Engineering",
    category: "AI Products",
    content: [
      "The gap between a working AI prototype and a production AI product is larger than most teams realize. I learned this firsthand while leading the semantic search initiative.",
      "The prototype was impressive — it took two days to build and demonstrated clearly better results than keyword search. Getting it to production took three months. The difference was everything that a demo does not need to handle: adversarial inputs, latency requirements, cost management, graceful degradation, and user trust.",
      "Guardrails are not an afterthought — they are a core product feature. Enterprise customers evaluated our AI maturity not by how smart the results were, but by how safely the system handled edge cases. Could a user trick it into returning inappropriate content? What happened when the AI service was unavailable? How did we handle queries about topics outside our domain?",
      "Evaluation is the hardest part of AI product development. Unlike traditional features where you can write deterministic tests, AI outputs are probabilistic. We built evaluation suites with human-rated reference results, but maintaining them required ongoing investment that we initially underestimated.",
      "The most important lesson: AI products require a different feedback loop. Users need to be able to signal when results are wrong, and that signal needs to flow back into the system. Without this loop, quality degrades silently.",
      "Cost management was a lesson learned the hard way. Our initial embedding generation cost was 3x what we projected because we re-embedded unchanged content on every index refresh. Implementing change detection — only re-embedding modified PBIs — cut inference costs by 70%. The broader lesson: AI product costs scale with usage in ways traditional features do not, and your cost model needs to be a first-class product decision, not an infrastructure afterthought.",
    ],
  },
  {
    id: "roadmaps",
    title: "Roadmaps Are Negotiation Documents",
    category: "Product Strategy",
    content: [
      "Early in my PM journey, I treated roadmaps as project plans — lists of features with dates attached. This caused two problems: stakeholders treated dates as commitments, and the team treated the roadmap as a contract.",
      "A roadmap is not a plan. It is a communication tool designed to create shared understanding about direction and trade-offs. The moment you put a date next to a feature, you have made a promise. The moment you remove a feature, you have broken one.",
      "I now structure roadmaps around outcomes, not outputs. Instead of 'Build sprint resource planner — Q2', I frame it as 'Improve sprint planning visibility for PMs — Q2 focus area.' This preserves the intent while giving the team room to discover the right solution.",
      "The most valuable roadmap conversations are the ones about what we are not doing. Every feature on the roadmap has an implicit opportunity cost. Making that cost explicit — showing what gets delayed when something new is added — transforms roadmap reviews from wish-list sessions into genuine strategy discussions.",
      "Roadmaps should be updated regularly and shared broadly. A roadmap that lives in a PM's notebook is not a roadmap — it is a to-do list.",
    ],
  },
  {
    id: "release-speed",
    title: "Release Speed Isn't Product Success",
    category: "Product Delivery",
    content: [
      "When I optimized our release process and reduced cycle time by 95%, the team celebrated. We could ship faster than ever. But faster shipping did not automatically mean better products.",
      "Release speed is a capability, not a goal. It matters because it reduces the time between a decision and its validation. But if you are shipping the wrong things faster, you are just creating waste more efficiently.",
      "The real value of release speed showed up in our ability to run experiments. When a release took 3 weeks, we could not afford to ship something we were not confident about. When it took 2 days, we could ship a minimal version, measure adoption, and iterate. The quality of our product decisions improved because the cost of learning decreased.",
      "The lesson: invest in release infrastructure not because shipping fast is the goal, but because fast feedback loops enable better product decisions. Speed is the means, not the end.",
      "Before the release train: we shipped 2 features per quarter and each one was a bet-the-sprint commitment. After: we shipped 8-10 smaller increments per quarter, each validated with Pendo adoption data within days. The percentage of shipped features that hit their adoption targets went from roughly 40% to over 70% — not because we got better at predicting, but because we got faster at correcting.",
    ],
  },
  {
    id: "enterprise-mobile",
    title: "Lessons From Enterprise Mobile Platforms",
    category: "Enterprise Mobile",
    content: [
      "Enterprise mobile products operate under constraints that consumer mobile products rarely face. Managed device policies, network restrictions, compliance requirements, and multi-stakeholder approval processes all shape what you can build and how you can deliver it.",
      "The biggest lesson I learned working on enterprise mobile platforms is that the user and the buyer are different people with different success criteria. Users care about workflow efficiency. Buyers care about compliance, security, and total cost of ownership. A product that delights users but fails a security audit will never be purchased.",
      "This dual-stakeholder reality affects every product decision. Feature prioritization must balance user value with buyer requirements. Rollout strategies must accommodate enterprise change management processes. Even UX decisions are constrained by accessibility standards and device management policies.",
      "The most underrated skill in enterprise mobile PM work is understanding the deployment environment. Knowing how MDM policies work, how app distribution differs from consumer app stores, and how enterprise network configurations affect app behavior has saved me from proposing features that would have been technically impossible to deploy.",
      "Enterprise mobile is not glamorous, but it teaches you to make product decisions within real constraints — and that discipline transfers to every other product domain.",
    ],
  },
];

export function WritingContent() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            Writing
          </p>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl max-w-3xl leading-[1.08]">
            Product thinking{" "}
            <em className="italic">in practice.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-5 text-lg text-muted max-w-2xl leading-[1.55] font-medium">
            Perspectives on building products — informed by experience
            shipping enterprise software, AI features, and mobile platforms.
            Not theory. Practice.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-20">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.05} direction="up">
              <article
                id={article.id}
                className="scroll-mt-24"
              >
                <div className="mb-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    {article.category}
                  </p>
                  <h2 className="text-xl font-semibold text-foreground">
                    {article.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {article.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {i < articles.length - 1 && (
                  <div className="mt-12 border-b border-border" />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
