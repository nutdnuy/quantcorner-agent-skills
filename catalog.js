/* Source-reviewed public skills and research tools. See research.md. */
window.CATALOG = [
  {
    "id": "skill-anthropic-catalyst-calendar",
    "title": "Catalyst Calendar",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Track earnings, corporate events, and macro releases across a research coverage universe.",
    "tags": [
      "Catalysts",
      "Earnings dates",
      "Events"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/catalyst-calendar",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares catalyst-calendar. Builds an event calendar and weekly preview from a specified company universe and time horizon.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/catalyst-calendar/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Builds an event calendar and weekly preview from a specified company universe and time horizon.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/catalyst-calendar/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-earnings-analysis",
    "title": "Earnings Analysis",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Turn quarterly results into an earnings update with estimate comparisons and thesis implications.",
    "tags": [
      "Earnings",
      "Estimate revisions",
      "Research notes"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/earnings-analysis",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares earnings-analysis. Intended for companies already under coverage; reviews reported results, revised forecasts, and the investment thesis.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/earnings-analysis/SKILL.md",
    "featured": true,
    "verifiedAsOf": "2026-09-26",
    "detail": "Intended for companies already under coverage; reviews reported results, revised forecasts, and the investment thesis.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/earnings-analysis/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-earnings-preview",
    "title": "Earnings Preview",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Prepare consensus comparisons, key operating metrics, and scenarios before a company reports.",
    "tags": [
      "Consensus",
      "Scenarios",
      "Earnings"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/earnings-preview",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares earnings-preview. Organizes a pre-earnings briefing around financial metrics, operating drivers, catalysts, and bull/base/bear cases.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/earnings-preview/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Organizes a pre-earnings briefing around financial metrics, operating drivers, catalysts, and bull/base/bear cases.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/earnings-preview/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-idea-generation",
    "title": "Investment Idea Generation",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Combine quantitative screens and thematic research to develop a shortlist of investment ideas.",
    "tags": [
      "Screening",
      "Themes",
      "Long / short"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/idea-generation",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares idea-generation. Uses market, sector, style, and geography criteria to structure value, growth, quality, and special-situation research.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/idea-generation/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses market, sector, style, and geography criteria to structure value, growth, quality, and special-situation research.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/idea-generation/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-initiating-coverage",
    "title": "Initiating Coverage",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Develop initial company coverage through separate research, modeling, valuation, and report stages.",
    "tags": [
      "Company research",
      "Valuation",
      "Initiation"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/initiating-coverage",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares initiating-coverage. The upstream skill runs one stage at a time with prerequisite checks before dependent modeling or report tasks.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/initiating-coverage/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "The upstream skill runs one stage at a time with prerequisite checks before dependent modeling or report tasks.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/initiating-coverage/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-model-update",
    "title": "Financial Model Update",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Refresh financial forecasts and valuation assumptions after earnings, guidance, or macro changes.",
    "tags": [
      "Forecasts",
      "Guidance",
      "Valuation"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/model-update",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares model-update. Compares new actuals with prior estimates and documents changes to forward assumptions and valuation outputs.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/model-update/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Compares new actuals with prior estimates and documents changes to forward assumptions and valuation outputs.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/model-update/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-morning-note",
    "title": "Morning Research Note",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Summarize overnight company news, earnings developments, and upcoming events in a short research note.",
    "tags": [
      "Market briefing",
      "News",
      "Daily research"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/morning-note",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares morning-note. Structures a daily briefing around a leading development, company updates, events, and concise earnings comparisons.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/morning-note/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Structures a daily briefing around a leading development, company updates, events, and concise earnings comparisons.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/morning-note/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-sector-overview",
    "title": "Sector Overview",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Map industry economics, competitors, valuation context, and thematic drivers for sector research.",
    "tags": [
      "Industry",
      "Competitive landscape",
      "Themes"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/sector-overview",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares sector-overview. Defines a sector universe, assesses market growth and structure, profiles peers, and places valuation in context.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/sector-overview/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Defines a sector universe, assesses market growth and structure, profiles peers, and places valuation in context.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/sector-overview/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-thesis-tracker",
    "title": "Investment Thesis Tracker",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Maintain thesis pillars, incoming evidence, risks, and catalyst milestones for portfolio or watchlist names.",
    "tags": [
      "Thesis",
      "Monitoring",
      "Catalysts"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/equity-research/skills/thesis-tracker",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares thesis-tracker. Keeps an update log and thesis scorecard that records how new evidence affects each original argument.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/equity-research/skills/thesis-tracker/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Keeps an update log and thesis scorecard that records how new evidence affects each original argument.",
    "skillPath": "plugins/vertical-plugins/equity-research/skills/thesis-tracker/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-3-statement-model",
    "title": "Three-Statement Model",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Populate an existing financial-model template with linked income statement, balance sheet, and cash flows.",
    "tags": [
      "Financial modeling",
      "Excel",
      "Cash flow"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/3-statement-model",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares 3-statement-model. Designed for template completion with formula-based projections and checks on links between financial statements.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/3-statement-model/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Designed for template completion with formula-based projections and checks on links between financial statements.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/3-statement-model/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-audit-xls",
    "title": "Financial Model Audit",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Check spreadsheet formulas and financial-model integrity from a selected range through a full workbook.",
    "tags": [
      "Model audit",
      "Formula checks",
      "Excel"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/audit-xls",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares audit-xls. Model-wide checks include balance-sheet balance, cash-flow tie-outs, cross-sheet links, units, and calculation logic.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/audit-xls/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Model-wide checks include balance-sheet balance, cash-flow tie-outs, cross-sheet links, units, and calculation logic.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/audit-xls/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-clean-data-xls",
    "title": "Financial Data Cleanup",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Market data",
    "description": "Profile and normalize spreadsheet data by identifying duplicates, inconsistent dates, and mixed data types.",
    "tags": [
      "Data quality",
      "Normalization",
      "Excel"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/clean-data-xls",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares clean-data-xls. Flags data issues before applying fixes and favors traceable helper-column formulas where practical.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/clean-data-xls/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Flags data issues before applying fixes and favors traceable helper-column formulas where practical.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/clean-data-xls/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-competitive-analysis",
    "title": "Competitive Landscape Analysis",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Build a structured comparison of market positioning, competitors, operating metrics, and strategic implications.",
    "tags": [
      "Peer comparison",
      "Market mapping",
      "Strategy"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/competitive-analysis",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares competitive-analysis. Scopes the competitor set and audience before organizing comparative research and presentation material.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/competitive-analysis/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Scopes the competitor set and audience before organizing comparative research and presentation material.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/competitive-analysis/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-comps-analysis",
    "title": "Comparable Company Analysis",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Create peer-comparison workbooks combining operating statistics, valuation multiples, and benchmarking.",
    "tags": [
      "Comps",
      "Multiples",
      "Benchmarking"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/comps-analysis",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares comps-analysis. Uses comparable public companies, documented financial inputs, and spreadsheet calculations to assess relative valuation.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/comps-analysis/SKILL.md",
    "featured": true,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses comparable public companies, documented financial inputs, and spreadsheet calculations to assess relative valuation.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/comps-analysis/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-dcf-model",
    "title": "DCF Model Builder",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Build a discounted-cash-flow valuation with forecasts, cost of capital, and sensitivity analysis.",
    "tags": [
      "DCF",
      "WACC",
      "Sensitivity"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/dcf-model",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares dcf-model. Produces a formula-based Excel model with historical inputs, cash-flow projections, terminal value, and valuation sensitivities.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/dcf-model/SKILL.md",
    "featured": true,
    "verifiedAsOf": "2026-09-26",
    "detail": "Produces a formula-based Excel model with historical inputs, cash-flow projections, terminal value, and valuation sensitivities.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/dcf-model/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-lbo-model",
    "title": "LBO Model",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Complete a leveraged-buyout template with financing, operating projections, debt schedules, and returns.",
    "tags": [
      "LBO",
      "Debt schedule",
      "Private equity"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills/lbo-model",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares lbo-model. Uses an attached or bundled template and checks formulas, transaction assumptions, and private-equity return calculations.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/financial-analysis/skills/lbo-model/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses an attached or bundled template and checks formulas, transaction assumptions, and private-equity return calculations.",
    "skillPath": "plugins/vertical-plugins/financial-analysis/skills/lbo-model/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-break-trace",
    "title": "Reconciliation Break Trace",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Trace a reconciliation difference to its originating entries and explain the source of the mismatch.",
    "tags": [
      "Reconciliation",
      "Audit trail",
      "Fund operations"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/fund-admin/skills/break-trace",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares break-trace. Requires GL and subledger records; diagnoses differences in dates, FX, mappings, quantities, or amounts without posting adjustments.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/fund-admin/skills/break-trace/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires GL and subledger records; diagnoses differences in dates, FX, mappings, quantities, or amounts without posting adjustments.",
    "skillPath": "plugins/vertical-plugins/fund-admin/skills/break-trace/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-nav-tieout",
    "title": "Fund NAV Tie-Out",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Recompute an investor capital account from the NAV pack and compare it with the LP statement.",
    "tags": [
      "NAV",
      "LP statements",
      "Fund controls"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/fund-admin/skills/nav-tieout",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares nav-tieout. Compares statement lines with independently recomputed values and flags capital, ownership, or commitment inconsistencies.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/fund-admin/skills/nav-tieout/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Compares statement lines with independently recomputed values and flags capital, ownership, or commitment inconsistencies.",
    "skillPath": "plugins/vertical-plugins/fund-admin/skills/nav-tieout/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-buyer-list",
    "title": "M&A Buyer Universe",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Identify potential strategic and financial acquirers and assess their fit with a sell-side target.",
    "tags": [
      "M&A",
      "Buyer screening",
      "Sponsors"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/buyer-list",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares buyer-list. Organizes buyer candidates by acquisition rationale, financial capacity, existing portfolio fit, and outreach priority.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/buyer-list/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Organizes buyer candidates by acquisition rationale, financial capacity, existing portfolio fit, and outreach priority.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/buyer-list/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-cim-builder",
    "title": "CIM Builder",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Organize company, industry, customer, and financial materials into a draft confidential information memorandum.",
    "tags": [
      "M&A",
      "Deal materials",
      "Company analysis"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/cim-builder",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares cim-builder. Creates a structured sell-side document from supplied management materials, historical results, forecasts, and supporting research.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/cim-builder/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Creates a structured sell-side document from supplied management materials, historical results, forecasts, and supporting research.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/cim-builder/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-datapack-builder",
    "title": "Financial Data Pack Builder",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Market data",
    "description": "Extract and standardize financial information into a sourced workbook for diligence and investment review.",
    "tags": [
      "Data extraction",
      "Financial statements",
      "Due diligence"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/datapack-builder",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares datapack-builder. Normalizes figures from filings, memoranda, and data sources while preserving references, assumptions, and calculation checks.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/datapack-builder/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Normalizes figures from filings, memoranda, and data sources while preserving references, assumptions, and calculation checks.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/datapack-builder/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-deal-tracker",
    "title": "Deal Pipeline Tracker",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Maintain live-deal milestones, deadlines, responsibilities, and weekly status summaries.",
    "tags": [
      "Deal pipeline",
      "Milestones",
      "M&A"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/deal-tracker",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares deal-tracker. Tracks transaction stages, upcoming milestones, overdue work, and action owners across multiple deals.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/deal-tracker/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Tracks transaction stages, upcoming milestones, overdue work, and action owners across multiple deals.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/deal-tracker/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-merger-model",
    "title": "Merger Model",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Analyze acquisition financing, pro forma earnings, and accretion or dilution under different deal assumptions.",
    "tags": [
      "M&A",
      "Accretion / dilution",
      "Synergies"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/merger-model",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares merger-model. Builds sources and uses, pro forma EPS, synergy sensitivities, and breakeven analysis for a proposed transaction.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/merger-model/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Builds sources and uses, pro forma EPS, synergy sensitivities, and breakeven analysis for a proposed transaction.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/merger-model/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-strip-profile",
    "title": "Company Strip Profile",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Condense a company's business, financials, valuation, ownership, and segments into a compact profile.",
    "tags": [
      "Company profile",
      "Financial metrics",
      "Valuation"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/investment-banking/skills/strip-profile",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares fsi-strip-profile. The file declares the skill name fsi-strip-profile and structures company research for investment-banking profile slides.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/investment-banking/skills/strip-profile/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "The file declares the skill name fsi-strip-profile and structures company research for investment-banking profile slides.",
    "skillPath": "plugins/vertical-plugins/investment-banking/skills/strip-profile/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-ai-readiness",
    "title": "Portfolio AI Readiness",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Assess portfolio-company AI opportunities and rank practical projects for operating-partner attention.",
    "tags": [
      "Portfolio operations",
      "AI assessment",
      "Prioritization"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/ai-readiness",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares ai-readiness. Reviews company materials for data availability, accountable ownership, and feasible pilots before comparing opportunities across the portfolio.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/ai-readiness/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Reviews company materials for data availability, accountable ownership, and feasible pilots before comparing opportunities across the portfolio.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/ai-readiness/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-dd-checklist",
    "title": "Due Diligence Checklist",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Create a target-specific diligence request list with workstream tracking and red-flag escalation.",
    "tags": [
      "Due diligence",
      "Data room",
      "Risk flags"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/dd-checklist",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares dd-checklist. Tailors financial, commercial, legal, and operational diligence tasks to the deal type, industry, complexity, and timeline.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/dd-checklist/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Tailors financial, commercial, legal, and operational diligence tasks to the deal type, industry, complexity, and timeline.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/dd-checklist/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-dd-meeting-prep",
    "title": "Diligence Meeting Prep",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Prepare focused questions, benchmarks, and risk probes for management, expert, or customer diligence calls.",
    "tags": [
      "Due diligence",
      "Management interviews",
      "Expert calls"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/dd-meeting-prep",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares dd-meeting-prep. Uses meeting context and known concerns to prioritize questions and identify follow-up evidence to request.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/dd-meeting-prep/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses meeting context and known concerns to prioritize questions and identify follow-up evidence to request.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/dd-meeting-prep/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-deal-screening",
    "title": "Deal Screening",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Compare incoming deal materials with a fund's criteria and prepare a concise screening memo.",
    "tags": [
      "Deal screening",
      "Investment criteria",
      "Private equity"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/deal-screening",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares deal-screening. Extracts business and financial facts, applies stated screening thresholds, and organizes open questions with bull and bear cases.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/deal-screening/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Extracts business and financial facts, applies stated screening thresholds, and organizes open questions with bull and bear cases.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/deal-screening/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-deal-sourcing",
    "title": "Private Equity Deal Sourcing",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Find target companies, check existing relationship context, and draft tailored founder outreach.",
    "tags": [
      "Sourcing",
      "Company screening",
      "Private equity"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/deal-sourcing",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares deal-sourcing. Combines target discovery with relationship checks and outreach drafting; access to CRM or communications depends on connected tools.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/deal-sourcing/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Combines target discovery with relationship checks and outreach drafting; access to CRM or communications depends on connected tools.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/deal-sourcing/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-ic-memo",
    "title": "Investment Committee Memo",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Synthesize diligence, financial analysis, deal terms, and scenarios into a structured investment memo.",
    "tags": [
      "IC memo",
      "Due diligence",
      "Deal analysis"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/ic-memo",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares ic-memo. Organizes the company, thesis, transaction structure, returns, and key risks into materials for committee review.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/ic-memo/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Organizes the company, thesis, transaction structure, returns, and key risks into materials for committee review.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/ic-memo/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-portfolio-monitoring",
    "title": "Portfolio Company Monitoring",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Compare portfolio-company results with budget and flag KPI deviations or covenant concerns.",
    "tags": [
      "Portfolio monitoring",
      "KPIs",
      "Covenants"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/portfolio-monitoring",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares portfolio-monitoring. Extracts operating and financial metrics from reporting packages and compares trends with plans and underwriting assumptions.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/portfolio-monitoring/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Extracts operating and financial metrics from reporting packages and compares trends with plans and underwriting assumptions.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/portfolio-monitoring/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-returns-analysis",
    "title": "Private Equity Returns Analysis",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Model IRR and invested-capital multiples across financing, growth, exit, and holding-period scenarios.",
    "tags": [
      "IRR",
      "MOIC",
      "Sensitivity"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/returns-analysis",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares returns-analysis. Builds return waterfalls, two-way sensitivities, and bull/base/bear cases from explicit transaction and operating assumptions.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/returns-analysis/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Builds return waterfalls, two-way sensitivities, and bull/base/bear cases from explicit transaction and operating assumptions.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/returns-analysis/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-unit-economics",
    "title": "Unit Economics Analysis",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Evaluate recurring-revenue quality using customer cohorts, retention, acquisition costs, and payback.",
    "tags": [
      "LTV / CAC",
      "Cohorts",
      "Revenue quality"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/unit-economics",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares unit-economics. Adapts metrics to the business model and examines ARR movements, customer concentration, retention, and margins.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/unit-economics/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Adapts metrics to the business model and examines ARR movements, customer concentration, retention, and margins.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/unit-economics/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-anthropic-value-creation-plan",
    "title": "Value Creation Plan",
    "repo": "anthropics/financial-services",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Translate post-acquisition growth and cost initiatives into an EBITDA bridge and execution plan.",
    "tags": [
      "Value creation",
      "EBITDA bridge",
      "100-day plan"
    ],
    "compatibility": [
      "Claude Code",
      "Cowork"
    ],
    "compatibilityNote": "Distributed in Anthropic's financial-services plugins for Claude Code and Cowork; required inputs and connectors vary by skill.",
    "sourceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/private-equity/skills/value-creation-plan",
    "evidence": "Canonical GitHub tree and raw SKILL.md verified; frontmatter declares value-creation-plan. Maps initiatives to expected impact, timing, investment needs, owners, and measurable operating targets.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/blob/main/plugins/vertical-plugins/private-equity/skills/value-creation-plan/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Maps initiatives to expected impact, timing, investment needs, owners, and measurable operating targets.",
    "skillPath": "plugins/vertical-plugins/private-equity/skills/value-creation-plan/SKILL.md",
    "sourceRevision": "574ed3624aebd0418c7e96cd101262f30210ab26"
  },
  {
    "id": "skill-community-himself65-earnings-preview",
    "title": "Earnings Preview",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Prepare an upcoming earnings briefing with consensus forecasts, prior surprises, analyst sentiment, and reporting dates.",
    "tags": [
      "Earnings",
      "Consensus",
      "yfinance"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/earnings-preview",
    "evidence": "Verified SKILL.md frontmatter and workflow describe earnings calendars, EPS and revenue forecasts, historical surprises, and analyst targets.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/earnings-preview/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Needs a ticker and Yahoo Finance coverage. This is a pre-report briefing workflow, distinct from the earnings-recap skill.",
    "skillPath": "plugins/market-analysis/skills/earnings-preview/SKILL.md"
  },
  {
    "id": "skill-community-himself65-earnings-recap",
    "title": "Earnings Recap",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Review reported earnings against expectations and connect the surprise to margins, financial trends, and subsequent price moves.",
    "tags": [
      "Earnings",
      "Surprises",
      "Price reaction"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/earnings-recap",
    "evidence": "Verified SKILL.md separates announcement timestamps from fiscal quarter dates, then documents EPS surprises, quarterly statements, and price-reaction windows.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/earnings-recap/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires accessible earnings history and price data. Upstream distinguishes reported results from its separate pre-earnings workflow.",
    "skillPath": "plugins/market-analysis/skills/earnings-recap/SKILL.md"
  },
  {
    "id": "skill-community-himself65-estimate-analysis",
    "title": "Analyst Estimate Analysis",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Compare consensus estimates across periods and track forecast revisions, analyst disagreement, and previous forecasting accuracy.",
    "tags": [
      "Estimates",
      "Revisions",
      "Consensus"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/estimate-analysis",
    "evidence": "Verified SKILL.md documents earnings and revenue estimates, EPS trends, revision counts, growth comparisons, and historical forecast accuracy.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/estimate-analysis/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses yfinance estimate fields; unavailable coverage or stale estimates can limit the analysis.",
    "skillPath": "plugins/market-analysis/skills/estimate-analysis/SKILL.md"
  },
  {
    "id": "skill-community-himself65-etf-premium",
    "title": "ETF Premium & Discount",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Compare ETF prices with reported NAV, rank premiums or discounts, and investigate possible structural causes of price gaps.",
    "tags": [
      "ETFs",
      "NAV",
      "Premium discount"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/etf-premium",
    "evidence": "Verified SKILL.md includes single-fund snapshots, peer comparisons, a premium screener, and deeper premium-decomposition workflows.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/etf-premium/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires Python, yfinance, pandas, and NumPy. NAV timing and source quality need review before interpreting a price gap.",
    "skillPath": "plugins/market-analysis/skills/etf-premium/SKILL.md"
  },
  {
    "id": "skill-community-himself65-yfinance-data",
    "title": "Yahoo Finance Data",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Retrieve price histories, company statements, corporate actions, estimates, and options-chain data through the yfinance Python library.",
    "tags": [
      "yfinance",
      "OHLCV",
      "Financial statements"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/yfinance-data",
    "evidence": "Verified SKILL.md maps data requests to yfinance methods and references a bundled API guide for retrieval and presentation.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/yfinance-data/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Data-provider access is through the unofficial yfinance library. The skill is an instruction package, not a hosted data service.",
    "skillPath": "plugins/market-analysis/skills/yfinance-data/SKILL.md"
  },
  {
    "id": "skill-community-himself65-stock-liquidity",
    "title": "Stock Liquidity Analysis",
    "repo": "himself65/finance-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Inspect spreads, traded dollar volume, turnover, and estimated market impact to characterize equity execution constraints.",
    "tags": [
      "Liquidity",
      "Market impact",
      "Trading costs"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in the finance-market-analysis plugin. Repository documents Claude Code support; data workflows require Python and yfinance.",
    "sourceUrl": "https://github.com/himself65/finance-skills/tree/main/plugins/market-analysis/skills/stock-liquidity",
    "evidence": "Verified SKILL.md covers spread analysis, volume metrics, available depth data, market-impact estimates, turnover, and Amihud illiquidity.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/plugins/market-analysis/skills/stock-liquidity/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires Python, yfinance, pandas, and NumPy. Depth and impact outputs are limited by the available quote data and modeling assumptions.",
    "skillPath": "plugins/market-analysis/skills/stock-liquidity/SKILL.md"
  },
  {
    "id": "skill-community-joel-historical-risk",
    "title": "Historical Risk Analysis",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Measure realized volatility, drawdowns, historical loss quantiles, and benchmark-relative risk from an investment return history.",
    "tags": [
      "Drawdown",
      "Historical VaR",
      "Volatility"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/historical-risk",
    "evidence": "Verified SKILL.md covers close-to-close, Parkinson and Yang-Zhang volatility, drawdown duration, historical VaR, downside deviation, and tracking error.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/historical-risk/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires suitable historical prices or returns. The file includes worked examples, pitfalls, and a reference-script section.",
    "skillPath": "plugins/wealth-management/skills/historical-risk/SKILL.md"
  },
  {
    "id": "skill-community-joel-forward-risk",
    "title": "Forward-Looking Risk",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Explore prospective loss distributions with parametric VaR, simulation, expected shortfall, scenario shocks, and risk decomposition.",
    "tags": [
      "Expected shortfall",
      "Monte Carlo",
      "Stress testing"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/forward-risk",
    "evidence": "Verified SKILL.md documents parametric and Monte Carlo VaR, expected shortfall, component and marginal VaR, and scenario stress tests.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/forward-risk/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Risk estimates depend on distribution, covariance, and scenario assumptions. The source includes worked examples and Python reference usage.",
    "skillPath": "plugins/wealth-management/skills/forward-risk/SKILL.md"
  },
  {
    "id": "skill-community-joel-volatility-modeling",
    "title": "Volatility Modeling",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Work through EWMA and GARCH forecasts and compare realized volatility with options-implied measures and term structures.",
    "tags": [
      "GARCH",
      "EWMA",
      "Implied volatility"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/volatility-modeling",
    "evidence": "Verified SKILL.md contains EWMA and GARCH(1,1), volatility clustering, implied volatility, skew, term structure, volatility premium, and VIX sections.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/volatility-modeling/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires return history or options inputs appropriate to the selected model. This is a source-reviewed modeling guide, not a tested forecasting service.",
    "skillPath": "plugins/wealth-management/skills/volatility-modeling/SKILL.md"
  },
  {
    "id": "skill-community-joel-performance-attribution",
    "title": "Performance Attribution",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Explain active portfolio returns through allocation, security selection, factors, currency effects, and multi-period attribution.",
    "tags": [
      "Brinson",
      "Active return",
      "Attribution"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/performance-attribution",
    "evidence": "Verified SKILL.md covers Brinson-Fachler effects, multi-period linking, factor attribution, fixed-income attribution, and currency attribution.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/performance-attribution/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires portfolio and benchmark weights and returns. The source includes formulas, worked examples, and a reference-script section.",
    "skillPath": "plugins/wealth-management/skills/performance-attribution/SKILL.md"
  },
  {
    "id": "skill-community-joel-asset-allocation",
    "title": "Asset Allocation",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Compare strategic and tactical portfolios using mean-variance optimization, Black-Litterman views, risk parity, and allocation constraints.",
    "tags": [
      "Black-Litterman",
      "Risk parity",
      "Optimization"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/asset-allocation",
    "evidence": "Verified SKILL.md includes strategic and tactical allocation, mean-variance optimization, Black-Litterman, risk parity, glide paths, and asset-liability matching.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/asset-allocation/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Needs explicit objectives, constraints, and capital-market assumptions. The upstream core plugin is a dependency of wealth-management skills.",
    "skillPath": "plugins/wealth-management/skills/asset-allocation/SKILL.md"
  },
  {
    "id": "skill-community-joel-factor-investing",
    "title": "Factor Investing",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Interpret multi-factor regressions, separate exposures from residual performance, and assess smart-beta portfolio construction.",
    "tags": [
      "Fama-French",
      "Factor exposure",
      "Smart beta"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the wealth-management plugin; upstream includes Python reference calculations and depends on its core plugin.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/wealth-management/skills/factor-investing",
    "evidence": "Verified SKILL.md covers CAPM extensions, Fama-French factors, regression interpretation, alpha decomposition, smart-beta evaluation, crowding, and replication.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/wealth-management/skills/factor-investing/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires return series and factor data for empirical use. Quantitative examples support interpretation; no performance claim has been independently validated.",
    "skillPath": "plugins/wealth-management/skills/factor-investing/SKILL.md"
  },
  {
    "id": "skill-community-joel-return-calculations",
    "title": "Investment Return Calculations",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Calculate and compare time-weighted, money-weighted, annualized, and compound returns while accounting for investor cash flows.",
    "tags": [
      "TWR",
      "IRR",
      "CAGR"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual Claude Code SKILL.md in the core plugin, with a Python reference-script section. The repository documents installation into .claude/skills.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills/tree/main/plugins/core/skills/return-calculations",
    "evidence": "Verified SKILL.md covers holding-period returns, log returns, CAGR, time-weighted returns, Modified Dietz, money-weighted returns, and period linking.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills/blob/main/plugins/core/skills/return-calculations/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires portfolio valuations and correctly timed cash flows. This skill distinguishes manager performance from the investor cash-flow experience.",
    "skillPath": "plugins/core/skills/return-calculations/SKILL.md"
  },
  {
    "id": "skill-community-options-black-scholes",
    "title": "Black-Scholes Option Pricing",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Estimate European option values under Black-Scholes-Merton and check parity, boundary cases, and model assumptions.",
    "tags": [
      "Black-Scholes",
      "European options",
      "Pricing"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-pricing/skills/black-scholes",
    "evidence": "Verified SKILL.md defines BSM inputs, call and put formulas, dividend yield, edge cases, sanity checks, and reference formulas.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-pricing/skills/black-scholes/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "The source uses SciPy or a documented approximation and includes an optional yfinance rate lookup. Review its default assumptions before use.",
    "skillPath": "plugins/option-pricing/skills/black-scholes/SKILL.md"
  },
  {
    "id": "skill-community-options-binomial-pricing",
    "title": "Binomial Tree Pricing",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Use a Cox-Ross-Rubinstein lattice to compare American and European option values and examine early-exercise effects.",
    "tags": [
      "CRR tree",
      "American options",
      "Early exercise"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-pricing/skills/binomial-pricing",
    "evidence": "Verified SKILL.md documents tree parameters, terminal payoffs, backward induction, exercise decisions, and European-price convergence checks.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-pricing/skills/binomial-pricing/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires spot, strike, maturity, rates, volatility, and exercise style. The file provides an algorithmic workflow rather than a standalone pricing API.",
    "skillPath": "plugins/option-pricing/skills/binomial-pricing/SKILL.md"
  },
  {
    "id": "skill-community-options-greeks-calculator",
    "title": "Option Greeks Calculator",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Compute option sensitivities and aggregate multi-leg exposures with explicit quantity, contract, volatility-point, and time conventions.",
    "tags": [
      "Greeks",
      "Sensitivities",
      "Options risk"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-pricing/skills/greeks-calculator",
    "evidence": "Verified SKILL.md contains first- and second-order BSM Greeks, scaling conventions, position aggregation, sanity checks, and reference files.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-pricing/skills/greeks-calculator/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses European-option BSM assumptions. Input conventions and higher-order formulas require review; catalog verification did not execute the calculations.",
    "skillPath": "plugins/option-pricing/skills/greeks-calculator/SKILL.md"
  },
  {
    "id": "skill-community-options-iv-surface",
    "title": "Implied Volatility Surface",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Filter options quotes, fit strike-and-maturity volatility surfaces, and examine dislocations and arbitrage checks.",
    "tags": [
      "IV surface",
      "SVI",
      "SABR"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-volatility/skills/iv-surface",
    "evidence": "Verified SKILL.md documents chain filtering, implied-volatility inversion, SVI or SABR fitting, arbitrage checks, and surface visualization.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-volatility/skills/iv-surface/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Upstream calls the companion yfinance-options skill and uses Python/SciPy examples. Thin or stale option chains can prevent a usable fit.",
    "skillPath": "plugins/option-volatility/skills/iv-surface/SKILL.md"
  },
  {
    "id": "skill-community-options-delta-hedging",
    "title": "Delta Hedging Research",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Study discrete option hedging with rebalance bands, gamma-related P&L, transaction costs, and volatility breakeven assumptions.",
    "tags": [
      "Delta hedging",
      "Gamma",
      "Transaction costs"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-risk-management/skills/delta-hedging",
    "evidence": "Verified SKILL.md documents position inputs, net Greeks, rebalance bands, expected gamma P&L, transaction-cost drag, and an optional simulation.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-risk-management/skills/delta-hedging/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Depends on position inputs and the companion greeks-calculator. This is an instructional research workflow; formulas and hedging defaults are not independently validated.",
    "skillPath": "plugins/option-risk-management/skills/delta-hedging/SKILL.md"
  },
  {
    "id": "skill-community-options-portfolio-greeks",
    "title": "Portfolio Greeks",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Summarize options-book sensitivities by underlying and expiry, then review concentration and scenario exposures.",
    "tags": [
      "Options book",
      "Net Greeks",
      "Concentration"
    ],
    "compatibility": [
      "Claude Code",
      "Python"
    ],
    "compatibilityNote": "Individual SKILL.md in a repository documented for Claude Code. Mathematical and Python examples may require additional packages and companion skills.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills/tree/main/plugins/option-risk-management/skills/portfolio-greeks",
    "evidence": "Verified SKILL.md covers position gathering, per-position Greeks, underlying-level aggregation, cross-underlying caveats, concentration checks, and stress tests.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/plugins/option-risk-management/skills/portfolio-greeks/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Calls greeks-calculator and optionally options-chain-reader. Requires reliable position and market inputs; account-level risk thresholds are upstream defaults.",
    "skillPath": "plugins/option-risk-management/skills/portfolio-greeks/SKILL.md"
  },
  {
    "id": "skill-community-nima-backtesting",
    "title": "Backtesting Discipline",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Plan strategy tests with point-in-time data, realistic execution costs, held-out samples, and checks for overfitting.",
    "tags": [
      "Backtesting",
      "Walk-forward",
      "Bias control"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/backtesting",
    "evidence": "Verified SKILL.md includes survivorship and look-ahead bias, commissions and slippage, walk-forward validation, multiple testing, and robustness checks.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/backtesting/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "An instructional review workflow with examples, not a bundled backtesting engine. Requires strategy rules and appropriate historical data.",
    "skillPath": "skills/finance/backtesting/SKILL.md"
  },
  {
    "id": "skill-community-nima-market-breadth",
    "title": "Market Breadth",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Assess market participation through advance-decline measures, new highs and lows, moving-average breadth, and index-weight comparisons.",
    "tags": [
      "Breadth",
      "Market internals",
      "Participation"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/market-breadth",
    "evidence": "Verified SKILL.md specifies constituent data and workflows for advance-decline lines, new highs versus lows, moving-average breadth, and equal-weight comparisons.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/market-breadth/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Needs constituent-level history, not only an index price. The skill guides interpretation; it does not supply a live breadth-data feed.",
    "skillPath": "skills/finance/market-breadth/SKILL.md"
  },
  {
    "id": "skill-community-nima-market-regime",
    "title": "Market Regime Analysis",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Characterize trend, volatility, risk appetite, and macro conditions when reviewing whether a strategy fits its environment.",
    "tags": [
      "Regime",
      "Volatility",
      "Macro"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/market-regime",
    "evidence": "Verified SKILL.md lists price and volatility history, cross-asset inputs, sector performance, and a workflow connecting market regime with strategy selection.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/market-regime/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Uses supplied market history and cross-asset data. This is qualitative analysis guidance; no trained regime-classification model is bundled.",
    "skillPath": "skills/finance/market-regime/SKILL.md"
  },
  {
    "id": "skill-community-nima-quantitative-analysis",
    "title": "Financial Quantitative Analysis",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Review financial time-series hypotheses for distribution assumptions, stationarity, spurious relationships, and multiple-testing effects.",
    "tags": [
      "Time series",
      "Stationarity",
      "Multiple testing"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/quantitative-analysis",
    "evidence": "Verified SKILL.md covers fat tails, stationarity, correlation and causation, volatility clustering, hypothesis counts, and out-of-sample validation.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/quantitative-analysis/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Contains analytical guidance and code examples. Requires data, an explicit hypothesis, and knowledge of the preceding research search.",
    "skillPath": "skills/finance/quantitative-analysis/SKILL.md"
  },
  {
    "id": "skill-community-nima-stock-screening",
    "title": "Stock Screening",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Design defensible selection rules, limit overfitting, and turn a point-in-time investment universe into a research shortlist.",
    "tags": [
      "Screening",
      "Selection",
      "Point-in-time data"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/stock-screening",
    "evidence": "Verified SKILL.md covers universe definition, screening thresholds, mechanism-based criteria, survivorship bias, look-ahead bias, ranking, and manual review.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/stock-screening/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires a defined universe and suitable data. The output is a shortlist for further research, not automatic trading instructions.",
    "skillPath": "skills/finance/stock-screening/SKILL.md"
  },
  {
    "id": "skill-community-nima-trade-journal",
    "title": "Trading Process Review",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Structure trade records and review decisions, rule adherence, and recurring behavior separately from realized gains or losses.",
    "tags": [
      "Trade journal",
      "Process review",
      "Execution"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Standalone SKILL.md instructions. Repository documents copying or linking skill directories into .claude/skills for Claude Code; data and calculation tools are supplied separately.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/tree/main/skills/finance/trade-journal",
    "evidence": "Verified SKILL.md documents pre-trade thesis recording, process grading, setup and mistake categories, sample review, and dated rule changes.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/trade-journal/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Requires the trader’s own contemporaneous trade records and plans. This is a review method, not brokerage connectivity or automated execution.",
    "skillPath": "skills/finance/trade-journal/SKILL.md"
  },
  {
    "id": "skill-research-statsmodels",
    "title": "Statsmodels · Econometrics",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Fit regression and time-series models with residual diagnostics, robust inference, and forecasts.",
    "tags": [
      "Econometrics",
      "ARIMA",
      "Regression"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.9+ with statsmodels 0.14.6; optional scikit-learn for predictive metrics.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/statsmodels",
    "evidence": "SKILL.md documents OLS, quantile regression, SARIMAX, VAR, stationarity tests, robust standard errors, and holdout validation.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/statsmodels/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Useful for testing factor relationships and temporal models. The source emphasizes assumption checks, multiple comparisons, and avoiding future-information leakage.",
    "skillPath": "skills/statsmodels/SKILL.md"
  },
  {
    "id": "skill-research-aeon",
    "title": "Aeon · Time-series Learning",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Classify, cluster, and compare time series with specialized temporal features and distance measures.",
    "tags": [
      "Time series",
      "Clustering",
      "Anomaly detection"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ and aeon 1.x; optional extras for deep-learning estimators.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/aeon",
    "evidence": "SKILL.md covers classification, regression, clustering, forecasting, segmentation, anomaly detection, and similarity search.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/aeon/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A general temporal-research skill that can support market-series experiments. Its source flags forecasting and several detection modules as experimental.",
    "skillPath": "skills/aeon/SKILL.md"
  },
  {
    "id": "skill-research-timesfm-forecasting",
    "title": "TimesFM Forecasting",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Create zero-shot forecasts and prediction intervals from univariate time-series inputs.",
    "tags": [
      "Forecasting",
      "Foundation models",
      "Prediction intervals"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+, timesfm, and PyTorch; downloads model weights and requires the supplied resource preflight before loading them.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/timesfm-forecasting",
    "evidence": "SKILL.md supports CSV, DataFrame, and array inputs, including price series, with point forecasts and quantile intervals.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/timesfm-forecasting/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Designed for local inference with a pretrained time-series model. Forecast usefulness on financial data still depends on appropriate evaluation and the chosen series.",
    "skillPath": "skills/timesfm-forecasting/SKILL.md"
  },
  {
    "id": "skill-research-scikit-learn",
    "title": "Scikit-learn · Predictive Research",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Build tabular predictive models with preprocessing pipelines, cross-validation, and parameter search.",
    "tags": [
      "Machine learning",
      "Pipelines",
      "Model validation"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.11+, scikit-learn 1.7+, NumPy, and SciPy; plotting dependencies are optional.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/scikit-learn",
    "evidence": "SKILL.md includes classification, regression, clustering, model evaluation, feature processing, and explicit leakage-prevention guidance.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/scikit-learn/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A method skill for prediction experiments. Trading objectives, chronological splits, transaction costs, and execution assumptions must be supplied separately.",
    "skillPath": "skills/scikit-learn/SKILL.md"
  },
  {
    "id": "skill-research-stable-baselines3",
    "title": "Stable Baselines3 · RL Experiments",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Algorithmic trading",
    "description": "Prototype reinforcement-learning agents and evaluate custom Gymnasium environments.",
    "tags": [
      "Reinforcement learning",
      "PPO",
      "Gymnasium"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+, PyTorch 2.3+, stable-baselines3 2.8+, and a compatible Gymnasium environment.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/stable-baselines3",
    "evidence": "SKILL.md documents PPO, SAC, DQN and related algorithms, training callbacks, custom environments, and environment validation.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/stable-baselines3/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Supports reinforcement-learning research infrastructure. It does not provide a ready-made market simulator or a validated trading strategy.",
    "skillPath": "skills/stable-baselines3/SKILL.md"
  },
  {
    "id": "skill-research-pymoo",
    "title": "Pymoo · Multi-objective Optimization",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Explore constrained solutions and Pareto trade-offs when several objectives compete.",
    "tags": [
      "Optimization",
      "Pareto frontier",
      "Constraints"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ and pymoo; optional matplotlib, autograd, or joblib depending on the workflow.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/pymoo",
    "evidence": "SKILL.md documents NSGA-II/III, MOEA/D, mixed-variable problems, constraint handling, and multi-criteria selection.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/pymoo/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Can support allocation research after the researcher defines financial objectives and constraints. The skill itself is a general optimization workflow.",
    "skillPath": "skills/pymoo/SKILL.md"
  },
  {
    "id": "skill-research-pymc",
    "title": "PyMC · Bayesian Modeling",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Estimate probabilistic models with hierarchical structure, posterior checks, and uncertainty summaries.",
    "tags": [
      "Bayesian inference",
      "MCMC",
      "Uncertainty"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.12+ with PyMC 6.0.1-compatible dependencies; alternative samplers require their own dependencies.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/pymc",
    "evidence": "SKILL.md documents priors, NUTS sampling, hierarchical models, covariance priors, posterior diagnostics, and model comparison.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/pymc/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Useful when research needs explicit parameter uncertainty. The workflow checks prior plausibility, convergence, and predictive fit before interpreting estimates.",
    "skillPath": "skills/pymc/SKILL.md"
  },
  {
    "id": "skill-research-shap",
    "title": "SHAP · Model Attribution",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Portfolio & risk",
    "description": "Inspect feature contributions to a fitted model and validate local and aggregate explanations.",
    "tags": [
      "Explainability",
      "Model risk",
      "Feature attribution"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.12+, uv, and SHAP 0.52.0; dependencies for the fitted model are separate.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/shap",
    "evidence": "SKILL.md specifies explainers, background data, held-out rows, multi-output handling, and additivity checks.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/shap/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Supports review of predictive model behavior. The source explicitly separates model explanations from causal, fairness, and predictive-validity conclusions.",
    "skillPath": "skills/shap/SKILL.md"
  },
  {
    "id": "skill-research-statistical-analysis",
    "title": "Statistical Analysis",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Select hypothesis tests, check assumptions, and report effect sizes with uncertainty.",
    "tags": [
      "Hypothesis testing",
      "Effect sizes",
      "Research methods"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python scientific stack including SciPy, statsmodels, Pingouin, pandas, and plotting libraries; Bayesian tools are optional.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/statistical-analysis",
    "evidence": "SKILL.md covers t-tests, ANOVA, correlations, regression, non-parametric alternatives, diagnostics, and reporting.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/statistical-analysis/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "For evaluating empirical research claims with a planned test and transparent assumptions. Financial time dependence requires a suitable statistical design.",
    "skillPath": "skills/statistical-analysis/SKILL.md"
  },
  {
    "id": "skill-research-statistical-power",
    "title": "Statistical Power & Sample Size",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Estimate minimum detectable effects, sample requirements, and power curves for research designs.",
    "tags": [
      "Sample size",
      "Statistical power",
      "Monte Carlo"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ with statsmodels, SciPy, Pingouin, NumPy, and matplotlib; simulation extras depend on the model.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/statistical-power",
    "evidence": "SKILL.md covers formula-based power for correlation and regression as well as simulation-based power for more complex designs.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/statistical-power/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Helps plan whether a research sample can detect a chosen effect. For financial observations, model dependence instead of assuming every row is independent.",
    "skillPath": "skills/statistical-power/SKILL.md"
  },
  {
    "id": "skill-research-database-lookup",
    "title": "Financial Database Lookup",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Retrieve economic indicators and filings through documented APIs with filters, pagination, and provenance.",
    "tags": [
      "FRED",
      "SEC EDGAR",
      "Macro data"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Agent HTTP or shell tools; some providers need API keys. The skill lists Claude Code, Codex, Cursor, and other hosts.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/database-lookup",
    "evidence": "SKILL.md names FRED, SEC EDGAR, BEA, BLS, World Bank, ECB, Treasury, and Alpha Vantage with separate API reference files.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/database-lookup/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A broader database skill with a concrete economics-and-finance section. This entry represents one actual skill, not a separate invented skill for each data provider.",
    "skillPath": "skills/database-lookup/SKILL.md"
  },
  {
    "id": "skill-research-usfiscaldata",
    "title": "U.S. Treasury Fiscal Data",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Query federal debt, Treasury statements, securities auctions, and official exchange-rate datasets.",
    "tags": [
      "Treasury",
      "Fiscal data",
      "Macro research"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python with requests and pandas, plus network access to the Treasury Fiscal Data API; no API key is documented as required.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/usfiscaldata",
    "evidence": "SKILL.md documents the Treasury REST endpoint, field selection, filters, pagination, and debt, statement, rate, and auction datasets.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/usfiscaldata/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Use the dataset-specific API guide to confirm endpoints and field meanings. Treasury reporting exchange rates are distinct from live trading quotes.",
    "skillPath": "skills/usfiscaldata/SKILL.md"
  },
  {
    "id": "skill-research-polars",
    "title": "Polars · Research Data Pipelines",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Transform large tabular research datasets with lazy expressions, joins, and optimized queries.",
    "tags": [
      "ETL",
      "DataFrames",
      "Lazy queries"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ and Polars 1.41.x; optional integrations support databases, cloud storage, and other data tools.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/polars",
    "evidence": "SKILL.md documents expression-based processing, lazy query plans, streaming execution, Arrow interoperability, and pandas migration.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/polars/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A data-preparation skill for research pipelines. It processes supplied datasets; it does not supply market prices or resolve vendor licensing.",
    "skillPath": "skills/polars/SKILL.md"
  },
  {
    "id": "skill-research-dask",
    "title": "Dask · Distributed Data Processing",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Scale pandas and NumPy research workflows across partitions, CPU cores, or a cluster.",
    "tags": [
      "Distributed computing",
      "Parquet",
      "Large datasets"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ and Dask; DataFrame workflows need pandas 2+ and PyArrow 16+. Remote storage adds provider-specific dependencies.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/dask",
    "evidence": "SKILL.md covers larger-than-memory processing, parallel file operations, DataFrames, task graphs, and distributed execution.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/dask/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Useful for large historical-data transformations or repeated research workloads. Computation and storage resources must be configured for the specific project.",
    "skillPath": "skills/dask/SKILL.md"
  },
  {
    "id": "skill-research-vaex",
    "title": "Vaex · Out-of-core Analytics",
    "repo": "K-Dense-AI/scientific-agent-skills",
    "kind": "Skill",
    "category": "Market data",
    "description": "Explore and aggregate financial time-series tables that exceed available memory.",
    "tags": [
      "Out-of-core",
      "Aggregation",
      "Financial data"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor",
      "Python"
    ],
    "compatibilityNote": "Python 3.10+ with Vaex; the source recommends Python 3.12+ with Vaex 4.19.0. Cloud access requires optional packages.",
    "sourceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/vaex",
    "evidence": "SKILL.md explicitly lists financial time series and covers memory-mapped tables, virtual columns, aggregations, and format conversion.",
    "evidenceUrl": "https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/skills/vaex/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A single-machine data-analysis workflow for large tables. The skill distinguishes this use case from in-memory Polars and distributed Dask processing.",
    "skillPath": "skills/vaex/SKILL.md"
  },
  {
    "id": "skill-research-creating-financial-models",
    "title": "Creating Financial Models",
    "repo": "anthropics/claude-cookbooks",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Develop DCF valuations, assumption sensitivities, Monte Carlo estimates, and scenario comparisons.",
    "tags": [
      "DCF",
      "Sensitivity analysis",
      "Financial modeling"
    ],
    "compatibility": [
      "Anthropic API",
      "Python"
    ],
    "compatibilityNote": "Official cookbook custom skill demonstrated through the Anthropic API and Python notebooks. Direct Claude Code installation is not documented in the inspected cookbook.",
    "sourceUrl": "https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/creating-financial-models",
    "evidence": "SKILL.md defines DCF inputs and outputs, WACC and terminal-value methods, sensitivity tables, Monte Carlo analysis, and best/base/worst scenarios.",
    "evidenceUrl": "https://github.com/anthropics/claude-cookbooks/blob/main/skills/custom_skills/creating-financial-models/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Includes a financial-modeling skill definition and companion DCF and sensitivity scripts. Assumptions and historical financial statements must be supplied and reviewed.",
    "skillPath": "skills/custom_skills/creating-financial-models/SKILL.md"
  },
  {
    "id": "skill-research-csv-data-summarizer",
    "title": "CSV Data Summarizer",
    "repo": "coffeefuelbump/csv-data-summarizer-claude-skill",
    "kind": "Skill",
    "category": "Market data",
    "description": "Profile CSV datasets for missing values, distributions, correlations, and date-based trends.",
    "tags": [
      "CSV",
      "Data quality",
      "Exploratory analysis"
    ],
    "compatibility": [
      "Claude.ai",
      "Python"
    ],
    "compatibilityNote": "README documents uploading the skill ZIP to Claude.ai. SKILL.md requires Python 3.8+, pandas, matplotlib, and seaborn; Claude Code support was not specifically documented.",
    "sourceUrl": "https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill",
    "evidence": "The root SKILL.md contains YAML metadata, an analysis workflow, dependency versions, and a financial-data case covering trends, statistics, and correlations.",
    "evidenceUrl": "https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill/blob/main/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A general CSV analysis skill with an included financial P&L example. It inspects supplied tables and generates charts; it is not a market-data feed or trading engine.",
    "skillPath": "SKILL.md"
  },
  {
    "id": "anthropic-financial-services",
    "title": "Claude for Financial Services",
    "repo": "anthropics/financial-services",
    "kind": "Skill collection",
    "category": "Investment research",
    "description": "Financial modeling and equity-research skills for DCF, comparable companies, earnings notes, and investment workflows.",
    "tags": [
      "DCF",
      "Equity research",
      "MCP"
    ],
    "compatibility": [
      "Claude Code",
      "Claude Cowork"
    ],
    "compatibilityNote": "Official plugin marketplace; underlying skills and connectors are grouped by financial-services vertical.",
    "sourceUrl": "https://github.com/anthropics/financial-services",
    "evidence": "README documents Claude Code and Cowork installation and lists financial-analysis and equity-research plugins. The skills directory contains dcf-model, comps-analysis, lbo-model, and other skill folders.",
    "evidenceUrl": "https://github.com/anthropics/financial-services/tree/main/plugins/vertical-plugins/financial-analysis/skills",
    "featured": true,
    "verifiedAsOf": "2026-09-25",
    "detail": "Official plugin marketplace; underlying skills and connectors are grouped by financial-services vertical."
  },
  {
    "id": "trading-agents",
    "title": "TradingAgents",
    "repo": "TauricResearch/TradingAgents",
    "kind": "AI agent",
    "category": "Algorithmic trading",
    "description": "A research team of fundamental, news, technical, and risk agents that debate market views and trading decisions.",
    "tags": [
      "Multi-agent",
      "LangGraph",
      "Research"
    ],
    "compatibility": [
      "Python",
      "Anthropic API"
    ],
    "compatibilityNote": "Standalone LangGraph-based framework with multiple model providers, including Anthropic; not a Claude Code skill.",
    "sourceUrl": "https://github.com/TauricResearch/TradingAgents",
    "evidence": "README describes analyst, researcher, trader, risk, and portfolio-manager roles; documents LangGraph and Anthropic API support. It positions the system as a research framework.",
    "evidenceUrl": "https://github.com/TauricResearch/TradingAgents#tradingagents-framework",
    "featured": true,
    "verifiedAsOf": "2026-09-25",
    "detail": "Standalone LangGraph-based framework with multiple model providers, including Anthropic; not a Claude Code skill."
  },
  {
    "id": "qlib",
    "title": "Qlib",
    "repo": "microsoft/qlib",
    "kind": "Research framework",
    "category": "Algorithmic trading",
    "description": "A quantitative-research platform spanning data processing, machine-learning models, backtesting, and portfolio analysis.",
    "tags": [
      "Machine learning",
      "Alpha research",
      "Backtesting"
    ],
    "compatibility": [
      "Python"
    ],
    "compatibilityNote": "Python quantitative-investment framework; not a SKILL.md collection.",
    "sourceUrl": "https://github.com/microsoft/qlib",
    "evidence": "README states that Qlib includes data processing, training, backtesting, alpha research, risk modeling, and portfolio optimization, with supervised learning and reinforcement-learning support.",
    "evidenceUrl": "https://github.com/microsoft/qlib#framework-of-qlib",
    "featured": true,
    "verifiedAsOf": "2026-09-25",
    "detail": "Python quantitative-investment framework; not a SKILL.md collection."
  },
  {
    "id": "himself65-finance-skills",
    "title": "Finance Skills",
    "repo": "himself65/finance-skills",
    "kind": "Skill collection",
    "category": "Investment research",
    "description": "Agent skills for company valuation, earnings analysis, stock correlations, options payoff, and market-data research.",
    "tags": [
      "Earnings",
      "Valuation",
      "Market data"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor"
    ],
    "compatibilityNote": "README explicitly lists these agents under plugin groups and describes the Agent Skills open standard.",
    "sourceUrl": "https://github.com/himself65/finance-skills",
    "evidence": "README's market-analysis section lists company-valuation, earnings-preview, earnings-recap, stock-correlation, options-payoff, and yfinance-data. Repository documentation identifies SKILL.md files under plugin groups.",
    "evidenceUrl": "https://github.com/himself65/finance-skills/blob/main/CLAUDE.md",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "README explicitly lists these agents under plugin groups and describes the Agent Skills open standard."
  },
  {
    "id": "joel-lewis-finance-skills",
    "title": "Finance Skills for Claude Code",
    "repo": "JoelLewis/finance_skills",
    "kind": "Skill collection",
    "category": "Portfolio & risk",
    "description": "Skills covering portfolio construction, risk measurement, performance attribution, and investment-management foundations.",
    "tags": [
      "Portfolio",
      "Risk",
      "Attribution"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Claude Code plugins and standalone SKILL.md files, with Python references for selected quantitative skills.",
    "sourceUrl": "https://github.com/JoelLewis/finance_skills",
    "evidence": "README documents wealth-management skills including VaR, CVaR, Black-Litterman, risk parity, and attribution. It describes each plugin as SKILL.md files with optional Python references and shows .claude/skills installation.",
    "evidenceUrl": "https://github.com/JoelLewis/finance_skills#plugins",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Claude Code plugins and standalone SKILL.md files, with Python references for selected quantitative skills."
  },
  {
    "id": "finance-option-skills",
    "title": "Finance Option Skills",
    "repo": "dongzhuoyao/finance-option-skills",
    "kind": "Skill collection",
    "category": "Portfolio & risk",
    "description": "Options-focused skills for pricing, Greeks, payoff diagrams, volatility surfaces, and derivatives risk analysis.",
    "tags": [
      "Options",
      "Greeks",
      "Volatility"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Claude Code marketplace; upstream describes brokerage-related skills as read-only.",
    "sourceUrl": "https://github.com/dongzhuoyao/finance-option-skills",
    "evidence": "README documents Claude Code use and pricing, strategies, volatility, and risk skill groups. Repository documentation confirms SKILL.md-based reference files and read-only brokerage constraints.",
    "evidenceUrl": "https://github.com/dongzhuoyao/finance-option-skills/blob/main/CLAUDE.md",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Claude Code marketplace; upstream describes brokerage-related skills as read-only."
  },
  {
    "id": "claude-finance-collection",
    "title": "Claude Skills · Finance",
    "repo": "nimadorostkar/Claude-Skills-collection",
    "kind": "Skill collection",
    "category": "Algorithmic trading",
    "description": "Finance skills for backtesting discipline, position sizing, risk management, and price-action analysis.",
    "tags": [
      "Backtesting",
      "Position sizing",
      "Validation"
    ],
    "compatibility": [
      "Claude Code"
    ],
    "compatibilityNote": "Finance is a subset of a broader collection; individual folders can be copied into .claude/skills.",
    "sourceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection",
    "evidence": "Repository lists a finance skill category and .claude/skills setup. Its backtesting SKILL.md covers bias, execution costs, walk-forward validation, statistical significance, and robustness.",
    "evidenceUrl": "https://github.com/nimadorostkar/Claude-Skills-collection/blob/main/skills/finance/backtesting/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Finance is a subset of a broader collection; individual folders can be copied into .claude/skills."
  },
  {
    "id": "anthropic-financial-modeling-cookbook",
    "title": "Financial Modeling Cookbook",
    "repo": "anthropics/claude-cookbooks",
    "kind": "Skill collection",
    "category": "Investment research",
    "description": "An official custom-skill example for DCF valuation, sensitivity analysis, Monte Carlo simulation, and scenario planning.",
    "tags": [
      "DCF",
      "Sensitivity",
      "Monte Carlo"
    ],
    "compatibility": [
      "Claude Skills"
    ],
    "compatibilityNote": "Custom SKILL.md example inside a larger cookbook repository; not presented as a Claude Code plugin marketplace.",
    "sourceUrl": "https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills",
    "evidence": "The creating-financial-models SKILL.md specifies DCF, sensitivity analysis, Monte Carlo, and scenario workflows, and lists dcf_model.py and sensitivity_analysis.py references.",
    "evidenceUrl": "https://github.com/anthropics/claude-cookbooks/blob/main/skills/custom_skills/creating-financial-models/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Custom SKILL.md example inside a larger cookbook repository; not presented as a Claude Code plugin marketplace."
  },
  {
    "id": "ai-hedge-fund",
    "title": "AI Hedge Fund",
    "repo": "virattt/ai-hedge-fund",
    "kind": "AI agent",
    "category": "Portfolio & risk",
    "description": "An educational agent team for studying investment decisions, fund mandates, and historical portfolio backtests.",
    "tags": [
      "Multi-agent",
      "Portfolio",
      "Backtesting"
    ],
    "compatibility": [
      "Python",
      "Anthropic API"
    ],
    "compatibilityNote": "Standalone Python application with several model providers; upstream states that it does not make actual trades.",
    "sourceUrl": "https://github.com/virattt/ai-hedge-fund",
    "evidence": "README identifies the project as an educational proof of concept, explicitly excludes actual trade execution, and documents saved fund mandates, rebalance cadence, backtests, and Anthropic among supported providers.",
    "evidenceUrl": "https://github.com/virattt/ai-hedge-fund#how-to-run",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Standalone Python application with several model providers; upstream states that it does not make actual trades."
  },
  {
    "id": "dexter",
    "title": "Dexter",
    "repo": "virattt/dexter",
    "kind": "AI agent",
    "category": "Investment research",
    "description": "A financial research agent that plans multi-step questions, gathers financial data, and checks its findings.",
    "tags": [
      "Deep research",
      "Financial statements",
      "Planning"
    ],
    "compatibility": [
      "Bun",
      "Anthropic API"
    ],
    "compatibilityNote": "Standalone application using Bun; setup lists Anthropic as an optional model provider. Not a Claude Code plugin.",
    "sourceUrl": "https://github.com/virattt/dexter",
    "evidence": "README describes task planning, data-tool execution, self-validation, and financial-statement access. It lists Bun prerequisites and optional ANTHROPIC_API_KEY setup.",
    "evidenceUrl": "https://github.com/virattt/dexter#-overview",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Standalone application using Bun; setup lists Anthropic as an optional model provider. Not a Claude Code plugin."
  },
  {
    "id": "finrobot",
    "title": "FinRobot",
    "repo": "AI4Finance-Foundation/FinRobot",
    "kind": "AI agent",
    "category": "Investment research",
    "description": "Financial agent workflows for equity analysis, valuation, and automated research-report generation.",
    "tags": [
      "Equity research",
      "Valuation",
      "Reports"
    ],
    "compatibility": [
      "Python",
      "AutoGen",
      "OpenAI Agents SDK"
    ],
    "compatibilityNote": "The repository contains the original AutoGen platform and the finrobot_equity OpenAI Agents SDK project.",
    "sourceUrl": "https://github.com/AI4Finance-Foundation/FinRobot",
    "evidence": "Architecture table identifies open-source V0 on AutoGen and V1 finrobot_equity on OpenAI Agents SDK, covering financial analysis, valuation, and report generation. V2 is explicitly not open source.",
    "evidenceUrl": "https://github.com/AI4Finance-Foundation/FinRobot#-architecture-evolution",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "The repository contains the original AutoGen platform and the finrobot_equity OpenAI Agents SDK project."
  },
  {
    "id": "rd-agent",
    "title": "R&D-Agent",
    "repo": "microsoft/RD-Agent",
    "kind": "AI agent",
    "category": "Algorithmic trading",
    "description": "Automated quantitative R&D that proposes and implements factors and models, then evaluates them in a research loop.",
    "tags": [
      "Factor research",
      "Qlib",
      "Multi-agent"
    ],
    "compatibility": [
      "Python",
      "Qlib"
    ],
    "compatibilityNote": "Standalone research automation framework; its quantitative-finance workflow integrates with Qlib.",
    "sourceUrl": "https://github.com/microsoft/RD-Agent",
    "evidence": "README describes RD-Agent(Q) as a multi-agent quantitative-strategy R&D framework using factor-model co-optimization. The Microsoft Qlib README links RD-Agent for automated quantitative research.",
    "evidenceUrl": "https://github.com/microsoft/RD-Agent#-the-first-data-centric-quant-multi-agent-framework",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Standalone research automation framework; its quantitative-finance workflow integrates with Qlib."
  },
  {
    "id": "finrl",
    "title": "FinRL",
    "repo": "AI4Finance-Foundation/FinRL",
    "kind": "Research framework",
    "category": "Algorithmic trading",
    "description": "The original financial reinforcement-learning framework for market environments, strategy experiments, and research benchmarks.",
    "tags": [
      "Reinforcement learning",
      "Market environments",
      "Benchmarks"
    ],
    "compatibility": [
      "Python"
    ],
    "compatibilityNote": "Original education and research framework. Upstream points production-focused development to FinRL-X / FinRL-Trading.",
    "sourceUrl": "https://github.com/AI4Finance-Foundation/FinRL",
    "evidence": "README explicitly preserves this repository as the original educational/research pipeline and identifies market environments, DRL agents, and financial applications as its core layers.",
    "evidenceUrl": "https://github.com/AI4Finance-Foundation/FinRL#overview",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Original education and research framework. Upstream points production-focused development to FinRL-X / FinRL-Trading."
  },
  {
    "id": "openbb",
    "title": "OpenBB",
    "repo": "OpenBB-finance/OpenBB",
    "kind": "Research framework",
    "category": "Market data",
    "description": "A financial-data platform that connects research datasets to Python, REST APIs, and MCP-based agent workflows.",
    "tags": [
      "Financial data",
      "MCP",
      "API"
    ],
    "compatibility": [
      "Python",
      "REST API",
      "MCP"
    ],
    "compatibilityNote": "Data infrastructure for analysts and agents; not itself a Claude Code skill pack.",
    "sourceUrl": "https://github.com/OpenBB-finance/OpenBB",
    "evidence": "README describes the Open Data Platform exposing consolidated data through Python, Workspace and Excel, MCP servers, and REST APIs.",
    "evidenceUrl": "https://github.com/OpenBB-finance/OpenBB#open-data-platform",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Data infrastructure for analysts and agents; not itself a Claude Code skill pack."
  },
  {
    "id": "pyportfolioopt",
    "title": "PyPortfolioOpt",
    "repo": "PyPortfolio/PyPortfolioOpt",
    "kind": "Research framework",
    "category": "Portfolio & risk",
    "description": "Portfolio optimization tools for efficient frontiers, Black-Litterman allocation, and hierarchical risk parity.",
    "tags": [
      "Optimization",
      "Black-Litterman",
      "Risk parity"
    ],
    "compatibility": [
      "Python"
    ],
    "compatibilityNote": "Python portfolio-optimization library. The older robertmartin8 repository URL redirects here.",
    "sourceUrl": "https://github.com/PyPortfolio/PyPortfolioOpt",
    "evidence": "README identifies mean-variance optimization, Black-Litterman allocation, covariance shrinkage, and hierarchical risk parity as implemented methods.",
    "evidenceUrl": "https://github.com/PyPortfolio/PyPortfolioOpt#welcome-to-pyportfolioopt",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Python portfolio-optimization library. The older robertmartin8 repository URL redirects here."
  },
  {
    "id": "vectorbt",
    "title": "vectorbt",
    "repo": "polakowo/vectorbt",
    "kind": "Research framework",
    "category": "Algorithmic trading",
    "description": "Vectorized backtesting and parameter exploration for multi-asset strategies, built around the Python data stack.",
    "tags": [
      "Backtesting",
      "Parameter sweeps",
      "pandas"
    ],
    "compatibility": [
      "Python"
    ],
    "compatibilityNote": "Standalone Python research and backtesting library; not a Claude Code skill.",
    "sourceUrl": "https://github.com/polakowo/vectorbt",
    "evidence": "README describes vectorized research with pandas, NumPy, and Numba, multi-asset broadcasting, parameter sweeps, and indicators.",
    "evidenceUrl": "https://github.com/polakowo/vectorbt",
    "featured": false,
    "verifiedAsOf": "2026-09-25",
    "detail": "Standalone Python research and backtesting library; not a Claude Code skill."
  },
  {
    "id": "llm-wiki-starter",
    "title": "LLM Wiki Starter",
    "repo": "Migchw/llm-wiki-starter",
    "kind": "AI agent",
    "category": "Investment research",
    "description": "Organize articles, filings, and transcripts into linked source notes and evidence-backed investment thesis drafts.",
    "tags": [
      "Obsidian",
      "Knowledge base",
      "Investment thesis"
    ],
    "compatibility": [
      "Claude Code",
      "Obsidian"
    ],
    "compatibilityNote": "A local Markdown vault template with Claude Code agents and Python source-capture tools. Open the repository as a project and follow its setup guide.",
    "sourceUrl": "https://github.com/Migchw/llm-wiki-starter",
    "evidence": "README documents source capture, linked notes, research commands, and separate evidence and thesis review roles.",
    "evidenceUrl": "https://github.com/Migchw/llm-wiki-starter#readme",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A complete investment-research workspace with an Obsidian vault and agent workflows. Source notes distinguish facts, interpretations, and open questions; thesis drafts require review."
  },
  {
    "id": "skill-book-to-skill",
    "title": "Book to Skill",
    "repo": "virgiliojr94/book-to-skill",
    "kind": "Skill",
    "category": "Investment research",
    "description": "Turn books and document collections into reusable agent skills with chapter references, decision rules, and research notes.",
    "tags": [
      "Books",
      "Skill creation",
      "Knowledge extraction"
    ],
    "compatibility": [
      "Claude Code",
      "GitHub Copilot CLI",
      "Amp"
    ],
    "compatibilityNote": "The root SKILL.md supports Claude Code and other Agent Skills hosts. Document extraction uses Python with optional format-specific dependencies.",
    "sourceUrl": "https://github.com/virgiliojr94/book-to-skill",
    "evidence": "The root SKILL.md defines the converter; README describes chapter files, a glossary, patterns, and a quick-reference sheet.",
    "evidenceUrl": "https://github.com/virgiliojr94/book-to-skill/blob/master/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "A general document-to-skill converter useful for organizing research reading. It accepts files or collections; extraction requirements depend on format, and scanned PDFs need OCR first.",
    "skillPath": "SKILL.md"
  },
  {
    "id": "skill-zframes",
    "title": "zframes",
    "repo": "zentryHQ/zframes",
    "kind": "Skill",
    "category": "Market data",
    "description": "Build and update personal market dashboards from a JSON specification, with live data widgets and a local CLI runtime.",
    "tags": [
      "Market dashboard",
      "Live data",
      "JSON"
    ],
    "compatibility": [
      "Claude Code",
      "Codex",
      "Cursor"
    ],
    "compatibilityNote": "README at the linked revision lists Claude Code as the primary host and Codex, Cursor, and Gemini CLI as compatible. The skill drives the npm zframes CLI.",
    "sourceUrl": "https://github.com/zentryHQ/zframes/tree/0b6efb5012362e33b3ee396d0ed9789015299f79",
    "evidence": "The skill defines create, update, serve, and shared-dashboard workflows; it validates dashboard.json and serves the prebuilt runtime.",
    "evidenceUrl": "https://github.com/zentryHQ/zframes/blob/0b6efb5012362e33b3ee396d0ed9789015299f79/skills/zframes/SKILL.md",
    "featured": false,
    "verifiedAsOf": "2026-09-26",
    "detail": "Source review is pinned to the revision supplied by Nuth. The agent configures dashboard frames rather than writing React. Available data depends on each public provider and instrument.",
    "skillPath": "skills/zframes/SKILL.md"
  }
];
