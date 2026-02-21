---
name: ui-ux-designer
description: Guides professional UI/UX for websites using Tailwind CSS and Headless UI. Use when designing or building interfaces, implementing layouts and components, improving usability and visual appeal, or when the user asks for UI/UX best practices, Tailwind patterns, or Headless UI components.
---

# Professional UI/UX Designer

## When to Apply

Use this skill when:
- Designing or implementing page layouts and components
- Styling with Tailwind CSS or building Headless UI–based components
- Improving usability, visual hierarchy, or accessibility
- Creating or refining design system choices (typography, color, spacing)
- Ensuring consistent, professional, and appealing interfaces

## Stack Assumptions

- **Tailwind CSS** (v4): Utility-first styling; use theme tokens and responsive utilities.
- **Headless UI** (React): Unstyled, accessible primitives (Dialog, Menu, Listbox, etc.); style with Tailwind.
- **Next.js**: Prefer Server Components for layout; use Client Components only where interactivity or Headless UI is needed.

---

## 1. Visual Design Principles

### Hierarchy and clarity

- **Clear visual hierarchy**: Use size, weight, and color to show importance. One primary focal point per section; support with clear secondary and tertiary levels.
- **Typography scale**: Use a consistent scale (e.g. `text-xs` through `text-4xl` or `text-5xl`). Prefer semantic roles: one clear `text-3xl`/`text-4xl` for main headings, smaller for subheadings and body. Avoid too many font sizes on one screen.
- **Contrast**: Text must meet WCAG AA (4.5:1 normal text, 3:1 large text). Use Tailwind’s contrast utilities and test with real content; avoid low-contrast gray-on-gray.

### Consistency and rhythm

- **Spacing system**: Use Tailwind’s spacing scale (`p-4`, `gap-6`, `space-y-8`) consistently. Prefer a small set of values (e.g. 4, 6, 8, 12, 16, 24) rather than arbitrary numbers.
- **Alignment and grid**: Align elements to a clear grid; use `max-w-*` containers and consistent padding. Center or align content intentionally; avoid random alignment.
- **Borders and radius**: Use a consistent radius scale (`rounded-lg`, `rounded-xl`, etc.) and border widths; avoid mixing many different radii on the same page.

### Color and branding

- **Limited palette**: Define a small set of semantic colors (primary, secondary, neutral, success, error). Use Tailwind theme or CSS variables; avoid one-off hex values scattered in markup.
- **Background and surface**: Differentiate background, surface (cards/panels), and elevated (modals/dropdowns) with subtle contrast. Use `bg-*` and `ring-*`/`border-*` consistently.
- **Avoid generic “AI” look**: Skip default purple gradients and overused font pairings unless they fit the brand. Choose a distinct direction (e.g. editorial, minimal, bold) and stick to it.

---

## 2. UX and Usability

### Interaction and feedback

- **Affordances**: Buttons and links should look clickable (hover/active states). Use `cursor-pointer`, `hover:`, `focus:`, and `active:` with Tailwind. Ensure focus visible for keyboard users (`focus-visible:ring-*`).
- **Feedback**: Loading states (skeletons, spinners), success/error messages, and disabled states where actions are unavailable. Use Headless UI’s built-in state where it helps (e.g. `open` on Dialog).
- **Reduced motion**: Respect `prefers-reduced-motion` for animations; use `motion-reduce:` or conditional classes so motion is optional.

### Layout and flow

- **Scannable content**: Short paragraphs, bullet lists, clear headings. Adequate line height (`leading-relaxed` or `leading-normal`) and line length (e.g. `max-w-prose` for body text).
- **Touch and click targets**: Minimum ~44×44px for primary actions on touch devices; use `min-h-11`, `py-3`, `px-4`-style padding for buttons.
- **Progressive disclosure**: Use Headless UI (Disclosure, Dialog) to hide complexity until needed; avoid overwhelming single-screen layouts.

### Accessibility (a11y)

- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, `<button>` vs `<a>` correctly. Headless UI exposes roles and ARIA; keep the DOM semantic.
- **Focus and keyboard**: Ensure all interactive elements are focusable and order is logical. Headless UI manages focus trap and return in modals; don’t break it with custom focus logic unless needed.
- **Labels and announcements**: Form inputs need visible or aria-label; errors and status changes should be announced (aria-live or visible text).

---

## 3. Tailwind CSS Usage

### Structure and tokens

- **Prefer theme values**: Use `text-primary`, `bg-surface`, spacing and radius from theme when defined. Use arbitrary values (`w-[137px]`) only when no token fits.
- **Responsive and states**: Use `sm:`, `md:`, `lg:` for layout and typography; use `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:` for interactivity. Mobile-first: base = mobile, then add breakpoints.
- **Consistent utilities**: Prefer `flex` + `gap` over margin hacks; use `grid` for true grids. Use `space-y-*` or `divide-*` for list spacing when appropriate.

### Maintainability

- **Component-level styling**: Keep Tailwind classes in components; extract repeated patterns into shared components or a small set of utility components (e.g. `Button`, `Card`) rather than long duplicate class strings.
- **Avoid inline style for layout**: Use Tailwind for layout and styling; reserve inline style for rare dynamic values (e.g. width from data).
- **Dark mode** (if used): Use `dark:` variants and a single theme switch; keep contrast and hierarchy in both modes.

---

## 4. Headless UI Patterns

### When to use Headless UI

- **Dialog / Modal**: Overlays that trap focus and need escape/close. Use `<Dialog>`, style overlay and panel with Tailwind (`fixed inset-0`, `bg-black/50`, `rounded-xl`, etc.).
- **Dropdowns and menus**: `<Menu>`, `<Listbox>` for select-like or command menus. Style `Menu.Button`, `Menu.Items`, and items with Tailwind; preserve keyboard and focus behavior.
- **Disclosure / Accordion**: Collapsible sections with `<Disclosure>`; style `Disclosure.Button` and `Disclosure.Panel`.
- **Tabs**: Use Headless UI `<Tab.Group>` for accessible tab panels; style tab list and panels to match the design system.
- **Transitions**: Use Headless UI `<Transition>` for enter/leave (e.g. modal fade, dropdown slide). Combine with Tailwind `transition`, `duration-*`, `opacity`, `scale` for smooth, consistent motion.

### Styling Headless UI with Tailwind

- **Apply classes to Headless slots**: Use `className` on the component’s rendered elements (e.g. `Dialog.Panel`, `Menu.Items`). Use `as` prop if you need a different element (e.g. `Menu.Button as="button"`).
- **State-based styling**: Headless exposes state (e.g. `open`, `active`, `selected`). Use conditional or data attributes and Tailwind: `data-[active]:bg-primary data-[active]:text-white` or render props when the API supports it.
- **Keep accessibility**: Don’t remove focus management, ARIA attributes, or keyboard behavior. Only customize appearance and layout.

---

## 5. Component and Page Patterns

### Pages and sections

- **Hero / above fold**: Clear headline, short supporting text, primary CTA. Use spacing and size to create hierarchy; avoid clutter.
- **Cards and lists**: Consistent card style (padding, radius, shadow or border); clear separation between items (gap or divide). Reuse one card component with variants if needed.
- **Forms**: Label + input + error per field; primary submit button; clear validation feedback. Use consistent input height and radius; style focus ring for visibility.
- **Navigation**: Clear current page state; adequate spacing between links; mobile menu (e.g. Headless UI Dialog or Disclosure) that’s easy to open and close.

### Efficiency and polish

- **Reusable primitives**: Buttons (primary, secondary, ghost), inputs, badges, containers. Same Tailwind patterns in one place.
- **Micro-interactions**: Subtle hover/focus effects; optional light motion (e.g. `transition duration-200`) for buttons and links. Don’t over-animate.
- **Loading and empty states**: Skeleton or spinner that matches layout; empty state message and optional action. Avoid blank areas with no feedback.

---

## 6. UI/UX Checklist

- [ ] Clear visual hierarchy (one main focal point, consistent typography scale).
- [ ] Consistent spacing and alignment (Tailwind scale, grid, max-width).
- [ ] Color and contrast meet accessibility; limited, semantic palette.
- [ ] Interactive elements have hover/focus/active and visible focus ring.
- [ ] Headless UI used for overlays, menus, tabs; styled with Tailwind.
- [ ] Responsive: readable and usable on mobile and desktop; touch targets adequate.
- [ ] Semantic HTML and keyboard/focus order; labels and feedback in place.
- [ ] No generic “AI” look; distinct, intentional design direction.
- [ ] Loading and error states considered; reduced motion respected.

---

## 7. Quick Reference

| Need | Use |
|------|-----|
| Hierarchy | Typography scale, weight, color; one focal point per section |
| Spacing | Tailwind spacing scale; consistent gap/padding |
| Buttons | Primary/secondary/ghost; hover/focus/active; min touch target |
| Overlays | Headless UI Dialog; style overlay + panel with Tailwind |
| Menus/dropdowns | Headless UI Menu or Listbox; style items and states |
| Forms | Label + input + error; focus ring; consistent height/radius |
| Responsive | Mobile-first; sm/md/lg for layout and type |
| Focus | focus-visible:ring-*; preserve Headless UI focus behavior |

Apply this skill when designing or implementing UI so the site feels professional, consistent, accessible, and appealing, using Tailwind and Headless UI effectively.
