if(typeof document!="undefined"){const t=`/*! tailwindcss v2.2.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

html {
	-moz-tab-size: 4;
	-o-tab-size: 4;
	   tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
	margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
	font-family:
		system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	-webkit-text-decoration: underline dotted;
	        text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Tailwind custom reset styles
 */

/**
 * 1. Use the user's configured \`sans\` font-family (with Tailwind's default
 *    sans-serif font stack as a fallback) as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 *    to override it to ensure consistency even when using the default theme.
 */

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}


/**
 * Inherit font-family and line-height from \`html\` so users can set them as
 * a class directly on the \`html\` element.
 */

body {
  font-family: inherit;
  line-height: inherit;
}

/**
 * 1. Prevent padding and border from affecting element width.
 *
 *    We used to set this in the html element and inherit from
 *    the parent element for everything else. This caused issues
 *    in shadow-dom-enhanced elements like <details> where the content
 *    is wrapped by a div with box-sizing set to \`content-box\`.
 *
 *    https://github.com/mozdevs/cssremedy/issues/4
 *
 *
 * 2. Allow adding a border to an element by just adding a border-width.
 *
 *    By default, the way the browser specifies that an element should have no
 *    border is by setting it's border-style to \`none\` in the user-agent
 *    stylesheet.
 *
 *    In order to easily add borders to elements by just setting the \`border-width\`
 *    property, we change the default border-style for all elements to \`solid\`, and
 *    use border-width to hide them instead. This way our \`border\` utilities only
 *    need to set the \`border-width\` property instead of the entire \`border\`
 *    shorthand, making our border utilities much more straightforward to compose.
 *
 *    https://github.com/tailwindcss/tailwindcss/pull/116
 */

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

/*
 * Ensure horizontal rules are visible by default
 */

hr {
  border-top-width: 1px;
}

/**
 * Undo the \`border-style: none\` reset that Normalize applies to images so that
 * our \`border-{width}\` utilities have the expected effect.
 *
 * The Normalize reset is unnecessary for us since we default the border-width
 * to 0 on all elements.
 *
 * https://github.com/tailwindcss/tailwindcss/issues/362
 */

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */

a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */

pre,
code,
kbd,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/**
 * 1. Make replaced elements \`display: block\` by default as that's
 *    the behavior you want almost all of the time. Inspired by
 *    CSS Remedy, with \`svg\` added as well.
 *
 *    https://github.com/mozdevs/cssremedy/issues/14
 * 
 * 2. Add \`vertical-align: middle\` to align replaced elements more
 *    sensibly by default when overriding \`display\` by adding a
 *    utility like \`inline\`.
 *
 *    This can trigger a poorly considered linting error in some
 *    tools but is included by design.
 * 
 *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
 */

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/**
 * Constrain images and videos to the parent width and preserve
 * their intrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
video {
  max-width: 100%;
  height: auto;
}

*, ::before, ::after {
	--tw-translate-x: 0;
	--tw-translate-y: 0;
	--tw-rotate: 0;
	--tw-skew-x: 0;
	--tw-skew-y: 0;
	--tw-scale-x: 1;
	--tw-scale-y: 1;
	--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
	--tw-border-opacity: 1;
	border-color: rgba(229, 231, 235, var(--tw-border-opacity));
	--tw-shadow: 0 0 #0000;
	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-ring-color: rgba(59, 130, 246, 0.5);
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
	--tw-blur: var(--tw-empty,/*!*/ /*!*/);
	--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
	--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
	--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
	--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
	--tw-invert: var(--tw-empty,/*!*/ /*!*/);
	--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
	--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
	--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
	--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
	--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.container {
	width: 100%;
}
@media (min-width: 640px) {

	.container {
		max-width: 640px;
	}
}
@media (min-width: 768px) {

	.container {
		max-width: 768px;
	}
}
@media (min-width: 1024px) {

	.container {
		max-width: 1024px;
	}
}
@media (min-width: 1280px) {

	.container {
		max-width: 1280px;
	}
}
@media (min-width: 1536px) {

	.container {
		max-width: 1536px;
	}
}
.visible {
	visibility: visible;
}
.invisible {
	visibility: hidden;
}
.fixed {
	position: fixed;
}
.top-0 {
	top: 0px;
}
.left-0 {
	left: 0px;
}
.bottom-0 {
	bottom: 0px;
}
.z-40 {
	z-index: 40;
}
.z-10 {
	z-index: 10;
}
.m-10 {
	margin: 2.5rem;
}
.my-5 {
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
}
.mb-1 {
	margin-bottom: 0.25rem;
}
.mb-3 {
	margin-bottom: 0.75rem;
}
.mt-3 {
	margin-top: 0.75rem;
}
.inline {
	display: inline;
}
.flex {
	display: flex;
}
.table {
	display: table;
}
.grid {
	display: grid;
}
.hidden {
	display: none;
}
.h-64 {
	height: 16rem;
}
.h-3 {
	height: 0.75rem;
}
.h-screen {
	height: 100vh;
}
.h-14 {
	height: 3.5rem;
}
.h-52 {
	height: 13rem;
}
.min-h-screen {
	min-height: 100vh;
}
.w-96 {
	width: 24rem;
}
.w-full {
	width: 100%;
}
.w-32 {
	width: 8rem;
}
.w-2\\/3 {
	width: 66.666667%;
}
.min-w-full {
	min-width: 100%;
}
.flex-1 {
	flex: 1 1 0%;
}
.border-separate {
	border-collapse: separate;
}
.transform {
	transform: var(--tw-transform);
}
.transform-gpu {
	--tw-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@-webkit-keyframes pulse {

	50% {
		opacity: .5;
	}
}
@keyframes pulse {

	50% {
		opacity: .5;
	}
}
.animate-pulse {
	-webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cursor-pointer {
	cursor: pointer;
}
.grid-cols-1 {
	grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-col {
	flex-direction: column;
}
.place-items-center {
	place-items: center;
}
.items-center {
	align-items: center;
}
.justify-center {
	justify-content: center;
}
.justify-between {
	justify-content: space-between;
}
.gap-1 {
	gap: 0.25rem;
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-x-reverse: 0;
	margin-right: calc(0.75rem * var(--tw-space-x-reverse));
	margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
}
.overflow-hidden {
	overflow: hidden;
}
.rounded-2xl {
	border-radius: 1rem;
}
.rounded-md {
	border-radius: 0.375rem;
}
.rounded-xl {
	border-radius: 0.75rem;
}
.rounded {
	border-radius: 0.25rem;
}
.rounded-full {
	border-radius: 9999px;
}
.border-4 {
	border-width: 4px;
}
.border-2 {
	border-width: 2px;
}
.border {
	border-width: 1px;
}
.border-white {
	--tw-border-opacity: 1;
	border-color: rgba(255, 255, 255, var(--tw-border-opacity));
}
.border-black {
	--tw-border-opacity: 1;
	border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
.border-green-600 {
	--tw-border-opacity: 1;
	border-color: rgba(5, 150, 105, var(--tw-border-opacity));
}
.bg-gray-50 {
	--tw-bg-opacity: 1;
	background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}
.bg-blue-900 {
	--tw-bg-opacity: 1;
	background-color: rgba(30, 58, 138, var(--tw-bg-opacity));
}
.bg-blue-500 {
	--tw-bg-opacity: 1;
	background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}
.bg-black {
	--tw-bg-opacity: 1;
	background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}
.bg-yellow-400 {
	--tw-bg-opacity: 1;
	background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
}
.bg-yellow-200 {
	--tw-bg-opacity: 1;
	background-color: rgba(253, 230, 138, var(--tw-bg-opacity));
}
.bg-white {
	--tw-bg-opacity: 1;
	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-gray-900 {
	--tw-bg-opacity: 1;
	background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}
.bg-blue-50 {
	--tw-bg-opacity: 1;
	background-color: rgba(239, 246, 255, var(--tw-bg-opacity));
}
.bg-yellow-500 {
	--tw-bg-opacity: 1;
	background-color: rgba(245, 158, 11, var(--tw-bg-opacity));
}
.bg-opacity-25 {
	--tw-bg-opacity: 0.25;
}
.bg-opacity-90 {
	--tw-bg-opacity: 0.9;
}
.bg-gradient-to-br {
	background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
	background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-yellow-300 {
	--tw-gradient-from: #fcd34d;
	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(252, 211, 77, 0));
}
.from-blue-500 {
	--tw-gradient-from: #3b82f6;
	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));
}
.via-pink-200 {
	--tw-gradient-stops: var(--tw-gradient-from), #fbcfe8, var(--tw-gradient-to, rgba(251, 207, 232, 0));
}
.via-green-400 {
	--tw-gradient-stops: var(--tw-gradient-from), #34d399, var(--tw-gradient-to, rgba(52, 211, 153, 0));
}
.to-green-200 {
	--tw-gradient-to: #a7f3d0;
}
.to-green-500 {
	--tw-gradient-to: #10b981;
}
.bg-clip-text {
	-webkit-background-clip: text;
	        background-clip: text;
}
.object-contain {
	-o-object-fit: contain;
	   object-fit: contain;
}
.object-cover {
	-o-object-fit: cover;
	   object-fit: cover;
}
.object-top {
	-o-object-position: top;
	   object-position: top;
}
.p-2 {
	padding: 0.5rem;
}
.p-16 {
	padding: 4rem;
}
.p-3 {
	padding: 0.75rem;
}
.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.px-6 {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
}
.py-16 {
	padding-top: 4rem;
	padding-bottom: 4rem;
}
.py-2 {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
.pt-1 {
	padding-top: 0.25rem;
}
.pt-2 {
	padding-top: 0.5rem;
}
.pb-5 {
	padding-bottom: 1.25rem;
}
.pt-6 {
	padding-top: 1.5rem;
}
.pb-2 {
	padding-bottom: 0.5rem;
}
.pl-4 {
	padding-left: 1rem;
}
.text-left {
	text-align: left;
}
.text-center {
	text-align: center;
}
.text-justify {
	text-align: justify;
}
.font-poppins {
	font-family: Poppins, sans-serif;
}
.font-mono {
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-3xl {
	font-size: 1.875rem;
	line-height: 2.25rem;
}
.text-5xl {
	font-size: 3rem;
	line-height: 1;
}
.text-9xl {
	font-size: 8rem;
	line-height: 1;
}
.font-medium {
	font-weight: 500;
}
.font-bold {
	font-weight: 700;
}
.font-semibold {
	font-weight: 600;
}
.italic {
	font-style: italic;
}
.text-white {
	--tw-text-opacity: 1;
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.text-transparent {
	color: transparent;
}
.opacity-70 {
	opacity: 0.7;
}
.shadow {
	--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
	--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring-2 {
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white {
	--tw-ring-opacity: 1;
	--tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
}
.blur {
	--tw-blur: blur(8px);
	filter: var(--tw-filter);
}
.drop-shadow-2xl {
	--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
	filter: var(--tw-filter);
}
.transition-transform {
	transition-property: transform;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
.transition-none {
	transition-property: none;
}
.transition-opacity {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
.duration-300 {
	transition-duration: 300ms;
}
.ease-out {
	transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.hover\\:scale-105:hover {
	--tw-scale-x: 1.05;
	--tw-scale-y: 1.05;
	transform: var(--tw-transform);
}
.hover\\:scale-125:hover {
	--tw-scale-x: 1.25;
	--tw-scale-y: 1.25;
	transform: var(--tw-transform);
}
.hover\\:text-blue-500:hover {
	--tw-text-opacity: 1;
	color: rgba(59, 130, 246, var(--tw-text-opacity));
}
.hover\\:opacity-75:hover {
	opacity: 0.75;
}
.hover\\:opacity-50:hover {
	opacity: 0.5;
}
@media (min-width: 768px) {

	.md\\:table-cell {
		display: table-cell;
	}

	.md\\:h-64 {
		height: 16rem;
	}

	.md\\:w-full {
		width: 100%;
	}

	@-webkit-keyframes pulse {

		50% {
			opacity: .5;
		}
	}

	@keyframes pulse {

		50% {
			opacity: .5;
		}
	}

	.md\\:animate-pulse {
		-webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.md\\:grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.md\\:flex-row {
		flex-direction: row;
	}

	.md\\:justify-start {
		justify-content: flex-start;
	}

	.md\\:space-x-5 > :not([hidden]) ~ :not([hidden]) {
		--tw-space-x-reverse: 0;
		margin-right: calc(1.25rem * var(--tw-space-x-reverse));
		margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
	}

	.md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(0px * var(--tw-space-y-reverse));
	}

	.md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
		--tw-space-x-reverse: 0;
		margin-right: calc(0.75rem * var(--tw-space-x-reverse));
		margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
	}

	.md\\:px-32 {
		padding-left: 8rem;
		padding-right: 8rem;
	}

	.md\\:pb-0 {
		padding-bottom: 0px;
	}

	.md\\:text-left {
		text-align: left;
	}

	.md\\:text-lg {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
}
`,n=document.createElement("style"),e=document.createTextNode(t);n.type="text/css",n.appendChild(e),document.head.appendChild(n)}
