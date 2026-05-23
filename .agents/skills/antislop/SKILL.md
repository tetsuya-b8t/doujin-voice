---
name: antislop
description: Detect and fix AI-generated writing patterns (slop). Comprehensive detection with 45+ patterns across 3 severity tiers, scoring system, and editor mode that directly fixes problems. Use when scanning any content for AI tells, auditing drafts before publishing, checking if writing "sounds like AI", humanizing AI-generated text, or verifying content authenticity. Trigger on "check for slop", "does this sound like AI", "humanize this", "AI audit", "slop check", "clean up AI writing", or any request to detect/remove artificial-sounding patterns. Also use proactively before publishing any AI-assisted content.
use_when: User wants to detect AI patterns, audit content authenticity, humanize AI text, check for slop, or verify writing doesn't sound AI-generated before publishing.
user-invocable: true
tools: [Read, Edit, Write]
last-refreshed: 2026-02-14
---

# The AntiSlop

A comprehensive AI writing pattern detector and fixer. Combines patterns from [Wikipedia's Signs of AI Writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) with advanced structural detection and an editor mode that actually fixes problems.

## The 30-Second Test

**The Horoscope Test:**

> "Could anyone have written this, for anyone?"

If yes, it's slop. Like a horoscope -- technically applicable to everyone, resonant with no one.

**What fails:**
- Vague claims without specific examples
- Advice that applies universally without context
- Content missing the author's distinct perspective
- Writing that could have any byline

**What passes:**
- Specific tools, dates, outcomes mentioned
- Personal observations grounded in experience
- Opinions that not everyone would agree with
- Details only this author would know

---

## Usage

```
/antislop

[paste your text here]
```

Or ask Claude to check text directly:

```
Please run antislop on this: [your text]
```

---

## How It Works

1. **Run the Horoscope Test** - Could anyone have written this for anyone?
2. **Scan for patterns** - 45+ known AI tells across 6 categories
3. **Calculate slop score** - Tiered severity with quantifiable scoring
4. **Apply fixes** - Editor mode rewrites problems, not just flags them
5. **Report changes** - Before/after for every fix applied

---

## Detection Patterns (35+)

### Tier 1: Almost Always AI (Remove Immediately)

| Pattern | Example | Fix |
|---------|---------|-----|
| Delve | "Let's delve into..." | Remove or replace with direct statement |
| Game-changer | "This game-changing approach..." | Describe the actual impact |
| Revolutionary | "A revolutionary new method..." | State what it actually does |
| Unlock potential | "Unlock your potential..." | Remove entirely |
| Leverage (as verb) | "Leverage these insights..." | "Use" |
| It's worth noting | "It's worth noting that..." | Just state the thing |
| Moreover/Furthermore | "Moreover, this approach..." | Remove or use "Also" |
| Today's digital landscape | "In today's digital landscape..." | Remove |
| Cutting-edge | "Cutting-edge solutions..." | Remove |
| Pivotal moment | "Marking a pivotal moment in..." | State what happened |
| Tapestry (abstract) | "A rich tapestry of influences..." | Remove or be specific |
| Intricate/intricacies | "The intricacies of..." | "Details of" or remove |
| Showcase (as verb) | "Showcasing their commitment..." | "Shows" or describe what happened |
| Vibrant | "A vibrant community of..." | Remove or use specific detail |
| Interplay | "The interplay between X and Y..." | "How X and Y affect each other" |
| Garner | "Garnering attention from..." | "Got attention from" or be specific |
| Align with | "Aligning with broader trends..." | State the actual relationship |

### Tier 2: Suspicious When Repeated

| Pattern | Example | Fix |
|---------|---------|-----|
| Here's the thing | Used repeatedly | Keep first, vary subsequent |
| At the end of the day | "At the end of the day..." | Remove |
| The bottom line | "The bottom line is..." | Just state it |
| Let's dive in | "Without further ado, let's dive in" | Remove |
| Comprehensive and thorough | Paired adjectives | Pick one |
| Simple and straightforward | Paired adjectives | Pick one |
| In this post, we'll cover | Template opening | Remove |
| By the end of this article | Promise opener | Remove |

### Tier 3: Watch for Clusters

| Pattern | Example | Fix |
|---------|---------|-----|
| However/But | Every paragraph starts this way | Vary transitions |
| Firstly/Secondly/Thirdly | Enumerated points | Use natural flow |
| Moving forward | "Moving forward, we'll..." | Remove |
| Robust/Seamless/Scalable | Corporate buzzwords | Use specific terms |
| Stakeholder | "Key stakeholders..." | Name them or say "people" |

---

## Structural Patterns (Critical)

### Staccato Fragment Spam

Three or more consecutive short declarative sentences in parallel structure.

**Detection rule:** 3+ consecutive sentences all under 10 words, all declarative, following parallel structure.

### Comparator Sentences

**Before:** "This isn't theoretical. It's practical."
**After:** Just state what it is directly.

### Over-Balanced Sections

Every section same length. All paragraphs 3-4 sentences. Real writing reflects priorities.

---

## Scoring System

| Pattern Type | Points |
|--------------|--------|
| Each Tier 1 phrase | +3 |
| Each Tier 2 phrase (repeated) | +2 |
| Tier 3 cluster (3+ in section) | +2 |
| Failed horoscope test | +5 |
| Staccato fragment spam (per instance) | +4 |
| Sentence uniformity detected | +3 |
| Comparator sentences (per instance) | +2 |
| Manufactured personality | +4 |
| Self-promotional framing | +5 |
| Template headers (per instance) | +2 |

**Score interpretation:**
- **0-5:** Low risk (minor edits)
- **6-12:** Medium risk (significant editing required)
- **13+:** High risk (likely unedited AI output)

---

## Editor Mode (Default)

This skill is an **editor**, not a critic. After detection:

1. **Apply all fixes directly** using the Edit tool
2. **Report changes made** with before/after examples
3. **Save the cleaned file** in place

**Fix priority:**
1. Remove all Tier 1 phrases
2. Deduplicate Tier 2 phrases (keep first, vary subsequent)
3. Break up staccato fragments
4. Fix comparator sentences
5. Vary sentence lengths where uniformity detected

To audit without editing, explicitly request "audit only."

---

## Output Format

```markdown
## AntiSlop Report

**Horoscope Test:** [PASS/FAIL] - [reason]
**Slop Score:** [X] → [Y] - [Risk Level]

### Fixes Applied

| Location | Before | After |
|----------|--------|-------|
| Line 3 | "Let's delve into the details" | "Here are the details" |

### Remaining Considerations
- [Any issues requiring human judgment]
```

---

## Core Principle

**AI slop isn't about individual words -- it's about patterns.**

One "moreover" doesn't make content AI-generated. But "moreover" + "it's worth noting" + "delve into" + uniform sentences + emoji headers = obvious slop.

The goal is writing that sounds like a specific human with specific opinions, not a very polite committee trying not to offend anyone.

---

## References

- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- Finnish study on "delve" usage (56,878 essays)
- Georgia Tech analysis (168.3M articles)
