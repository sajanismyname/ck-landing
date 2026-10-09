# Connect Kisan — Landing Page Redesign Implementation Prompt

## 1. Objective

Redesign the existing Connect Kisan landing page into a polished, human-centered agricultural marketplace for Nepal.

Use the approved UI/UX design and wireframe as the primary visual reference. The result must feel like a real agricultural platform built around the needs of Nepali farmers, buyers, agricultural businesses, and knowledge contributors—not a generic AI-generated SaaS landing page.

This is a redesign of the **existing project**, not a request to create an unrelated application or rebuild the entire codebase.

Before making changes, inspect the existing project structure, components, routes, styling system, assets, and current functionality. Reuse working implementations wherever possible.

## 2. Core Layout Requirements

### A. Header and Navigation

Create a clean top header containing these elements:

* Connect Kisan logo and brand identity.
* Search bar for products, crops, agricultural supplies, market prices, and relevant information.
* Bazar navigation link.
* Login entry.
* Sidebar toggle button using a recognizable menu icon.
* Existing language switcher, if already supported.

Keep the header visually compact, aligned, and consistent across desktop and mobile.

On desktop, arrange the logo, search, Bazar, Login, and menu toggle in one coherent header row whenever the available width permits.

On mobile, preserve the same functionality without forcing the desktop layout into a narrow viewport. The search bar may occupy a dedicated row immediately below the main header controls.

Do not allow the logo, search field, navigation links, or menu icon to overlap, disappear unexpectedly, or cause horizontal page scrolling.

### B. Integrated Sidebar — Critical Requirement

The sidebar must be an integral part of the website layout, not a separate external navigation page.

**Desktop and monitor behavior:**

* Display the sidebar as a persistent vertical navigation region alongside the main content.
* Place it within the website's overall layout.
* Keep it visible while the user browses the landing page.
* Include a toggle to collapse or expand it when useful.
* When collapsed, preserve recognizable navigation icons and accessible labels or tooltips.
* Let the main content use the remaining available width.
* Keep the sidebar and main content aligned with the header and footer.

**Mobile behavior:**

* Display a menu icon in the top header.
* Opening it should reveal a slide-over sidebar or drawer inspired by the relevant navigation interaction in eSewa.
* Use eSewa only as a reference for this navigation behavior, not as a template for the entire visual design.
* Place the drawer above the existing page using an appropriate overlay and stacking order.
* Do not shrink, stretch, or recalculate the underlying content width when the drawer opens.
* Include a close button and support closing the drawer by tapping outside it.
* Prevent background scrolling while the drawer is open where appropriate.
* Ensure the drawer fits within the mobile viewport and its contents remain accessible.
* Maintain usable touch targets and appropriate spacing.

**Sidebar navigation items:**

1. Home
2. Farming Knowledge
3. Information
4. Contribute

Use consistent Lucide icons and clear labels. Highlight the active destination. Support existing sub-navigation where it is already part of the application.

The desktop sidebar and mobile drawer must share the same navigation structure and destinations.

### C. Hero Section / CTA Slider

Place the main hero section immediately below the header and alongside the integrated sidebar.

Use the following primary message:

**Farm Smarter. Sell Better. Grow More.**

Include:

* Authentic agricultural photography relevant to Nepal.
* A concise supporting description.
* A primary CTA such as “Get Started Free”.
* A secondary CTA such as “Explore Bazar”.
* A subtle Nepal-focused identity through imagery, language, and agricultural context.

Retain an existing functional carousel or slider if the project already has one and it serves the design. Otherwise, implement a static hero unless a slider provides genuine value.

Avoid excessive animation, decorative gradients, oversized floating elements, and unnecessary visual effects.

If market prices or agricultural advisory previews are included, use actual project data where available. Do not present invented market rates, AI diagnoses, merchant statistics, or other sample data as live information.

## 3. Landing Page Content Order

Preserve this order for the main marketplace experience.

### Section 1: Hero / CTA

Present the primary value proposition and the two main CTAs described above.

### Section 2: Today's Deals

Create a marketplace section titled “Today's Deals”.

Requirements:

* Display featured agricultural products and supplies.
* Use clear product photographs.
* Show product name, unit or quantity, current price, and original price or discount when supported by real data.
* Use restrained discount badges.
* Include a “View All” link that navigates to the appropriate existing destination.
* Use responsive product cards.
* On desktop, show multiple products in a horizontal grid.
* On mobile, use a suitable two-column grid when readable; use horizontal scrolling only when it improves usability.

**Important: Do not include Add to Cart buttons or cart actions inside the product cards.**

Cards may link to an existing product detail page or marketplace destination. Do not invent routes if the application already defines the correct ones.

### Section 3: Top Merchants

Display trusted or featured merchants.

Each merchant card may include:

* Merchant logo or image.
* Merchant name.
* Business category.
* Rating and review count, if supported.
* Relevant sales or verification information, if available.

Use consistent card sizes, clear typography, and subtle borders.

Provide a “View All” link to the appropriate existing merchant or Bazar destination.

Do not fabricate merchant names, ratings, sales counts, or verification badges.

### Section 4: Highest Sellers

Show products or sellers with the strongest sales performance, using actual available data and the existing application's definition of best-selling.

Each card should prioritize:

* Product image.
* Product or seller name.
* Relevant category.
* Units sold or another meaningful sales indicator, when available.
* A link to view the relevant item.

Do not include Add to Cart buttons.

If the backend does not provide sales rankings, use a clearly defined existing fallback or leave the ranking unpopulated rather than inventing sales data.

### Section 5: Community Contribution CTA

Preserve the community and agricultural knowledge contribution purpose of Connect Kisan.

Use a warm, authentic visual section that encourages users to share agricultural knowledge and support farmers.

Suggested messaging:

**Be Part of a Stronger Agricultural Community**

Supporting text should emphasize sharing knowledge, helping farmers, and improving agricultural access.

Provide a clear “Contribute Now” CTA linking to the existing contribution page:

https://connectkisan.com/en/contribution

This is a knowledge-contribution platform, not a donation campaign. Do not redesign it as a fundraising or financial donation section.

### Section 6: Remaining Existing Sections

Retain the existing sections and features that remain relevant, including:

* Digital agriculture and farming tools.
* Agricultural knowledge resources.
* Existing app download section, if functional.
* Supporting information and service links.
* Footer with relevant navigation, support information, and social links.

Avoid duplicating information already communicated effectively in the hero, sidebar, or marketplace sections.

## 4. Human-Centered Visual Design

The visual design should feel authentic, warm, practical, and trustworthy.

### Color palette

Use the existing Connect Kisan brand colors where appropriate. A proposed direction is:

* Warm cream background: `#FAF9F5`
* Primary agricultural green: `#047857`
* Deep forest green: `#064E3B`
* Dark readable text: `#1C1917`
* Muted supporting text: `#78716C`
* Restrained harvest amber for highlights and discounts.

Use green for meaningful actions and agricultural identity, not as a background for every component.

### Typography

* Use a clear, readable sans-serif typeface.
* Ensure correct rendering of both English and Nepali Devanagari.
* Establish a consistent hierarchy for headings, descriptions, prices, labels, and metadata.
* Avoid excessively large headings, dense text, and unnecessary uppercase labels.

### Photography and assets

Prioritize authentic, contextually appropriate photographs of:

* Nepali farmers.
* Agricultural fields and harvests.
* Real agricultural produce.
* Farming equipment and supplies.
* Relevant agricultural activities.

Reuse existing licensed or project-owned assets wherever possible. Do not replace useful real imagery with generic illustrations, synthetic-looking people, or decorative placeholders without a reason.

### Cards and spacing

* Use consistent card padding and alignment.
* Apply subtle borders and restrained shadows.
* Maintain adequate whitespace without wasting space.
* Keep product images visually consistent.
* Use rounded corners consistently.
* Avoid excessive pill-shaped elements and unnecessary badges.
* Make prices and important product information easy to scan.

The design should prioritize real content and useful interactions over decorative effects.

## 5. Responsive Design Requirements

Implement the layout mobile-first.

Test at minimum these viewport widths:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px and wider

Requirements:

* No unintended horizontal overflow.
* No overlapping header elements.
* No clipped search input or menu controls.
* No unreadable product cards.
* No sidebar that pushes the mobile content off-screen.
* No unnecessary desktop-style fixed widths on mobile.
* Images should preserve their intended aspect ratios.
* Use fluid containers and appropriate breakpoints.
* Maintain consistent spacing and hierarchy between desktop, tablet, and mobile.
* Keep the desktop sidebar persistent and the mobile sidebar overlay-based.
* Ensure the page does not jump or change width when the mobile drawer opens.
* Use appropriate mobile viewport sizing, including `100dvh` where relevant.

The mobile page must preserve the design's identity and content hierarchy rather than simply hiding major sections.

## 6. Accessibility and Interaction

Ensure:

* Semantic HTML and meaningful heading hierarchy.
* Keyboard-accessible navigation and controls.
* Visible keyboard focus indicators.
* Appropriate accessible names for icon-only buttons.
* Correct contrast for text and interactive elements.
* Accessible drawer behavior, including Escape-key dismissal where appropriate.
* Appropriate focus management when opening and closing the drawer.
* Reduced-motion support for optional animations.
* Proper image alternative text.
* No controls that appear interactive but do nothing.

All CTAs, navigation items, search controls, language selectors, and menu buttons must use real existing functionality or be implemented with a clearly defined action.

## 7. Technical Implementation Constraints

* Preserve the existing framework, project architecture, and installed dependencies.
* Reuse existing components, routes, APIs, and design tokens.
* Avoid introducing a new UI library unless it is genuinely necessary.
* Use the project's existing icon library, preferably Lucide if already installed.
* Avoid duplicating components or creating parallel implementations of existing features.
* Do not replace working backend logic with hardcoded frontend data.
* Do not alter authentication, marketplace business logic, or unrelated pages as part of this redesign.
* Keep the implementation modular and maintainable.
* Preserve existing SEO metadata and semantic page structure.
* Do not suppress TypeScript or lint errors to make the build pass.
* Do not leave temporary debug logging or dead controls in the finished implementation.

If the project already uses Next.js, Tailwind CSS, and TypeScript, continue using that stack instead of migrating frameworks.

## 8. Required Implementation Workflow

### Phase 1: Inspect

Before modifying files:

1. Inspect the existing project structure.
2. Locate the current landing page and its component hierarchy.
3. Identify the header, sidebar, hero, Bazar, merchant, seller, contribution, and footer components.
4. Inspect the current routes, API responses, product models, merchant data, and existing styles.
5. Identify which components can be reused and which require changes.
6. Compare the current implementation against the requirements in this prompt.

Do not begin by replacing the entire landing page with a new implementation.

### Phase 2: Plan

Provide a concise implementation plan identifying:

* Files that need changes.
* Existing components that can be reused.
* New components, if necessary.
* Responsive behavior for the header and sidebar.
* Data sources for deals, merchants, and highest sellers.
* Any missing data or functionality that prevents an accurate implementation.

### Phase 3: Implement

Implement the redesign using the approved design direction.

Work within the existing architecture. Keep changes focused on the landing page and directly related shared components.

### Phase 4: Verify

Run the available project checks, including:

* Production build.
* TypeScript checks.
* Linting.
* Existing relevant automated tests.

Manually verify the header, sidebar, navigation, CTAs, product links, responsive layouts, and drawer behavior at the specified viewport sizes.

Confirm that the sidebar remains integrated into the desktop layout and opens as an overlay on mobile.

Confirm that product cards do not display Add to Cart buttons.

Do not claim a check passed unless it was actually executed and its result was inspected.

### Phase 5: Report

Provide a concise completion report containing:

1. Files changed.
2. Design changes implemented.
3. Sidebar and responsive behavior.
4. Existing functionality preserved.
5. Validation commands executed and their actual results.
6. Known limitations or outstanding issues.

## 9. Acceptance Criteria

The redesign is complete only when:

* The header includes the logo, search, Bazar, Login, and sidebar toggle.
* The sidebar is part of the page layout on desktop and remains accessible on mobile.
* The mobile drawer overlays the page without shrinking or distorting the underlying layout.
* The hero appears immediately below the header.
* Today's Deals appears before Top Merchants and Highest Sellers.
* Product cards contain no Add to Cart buttons.
* The contribution section leads to the existing knowledge-contribution destination.
* Existing relevant sections and functionality remain intact.
* The page uses authentic, readable, human-centered agricultural design.
* All major sections adapt correctly across mobile, tablet, and desktop.
* No unintended horizontal scrolling or major responsive defects remain.
* Build, type, lint, and test results are reported honestly.

**Final instruction:** Treat the approved UI/UX design and wireframe as the visual direction, the existing codebase as the source of truth for functionality, and the requirements above as the implementation contract. Prioritize usability, authenticity, responsive behavior, and preservation of existing features over unnecessary redesign or architectural changes.
