/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }const highlightRender = (props) => (
	<span style={{ backgroundColor: "yellow" }}>{props.children}</span>
  );
  { "title": "Underline", "value": "underline" },
					{ "title": "Strike", "value": "strike-through" },
 */
import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;

const centerTextIcon = () => <span style={{ fontWeight: "bold" }}>C</span>;
const rightAlignTextIcon = () => <span style={{ fontWeight: "bold" }}>R</span>;
const leftAlignTextIcon = () => <span style={{ fontWeight: "bold" }}>L</span>;

const highlightRender = (props) => (
	<span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

const centerTextStyle = (props) => (
	<div
		style={{
			textAlign: 'center',
			
		}}>
		{props.children}
	</div>
);
const rightAlignTextStyle = (props) => (
	<div
		style={{
			textAlign: 'right',
			
		}}>
		{props.children}
	</div>
);
const leftAlignTextStyle = (props) => (
	<div
		style={{
			textAlign: 'left',
			
		}}>
		{props.children}
	</div>
);

const BlockContent = {
	title: "Block Content",
	name: "blockContent",
	type: "array",
	of: [
		{
			title: "Block",
			type: "block",
			// Styles let you set what your user can mark up blocks with. These
			// correspond with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				// { title: "Normal+right", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },

				{ title: "Number", value: "number" },
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Underline", value: "underline" },
					{ title: "Strike", value: "strike-through" },

					{
						title: "Highlight",
						value: "highlight",
						blockEditor: {
							icon: highlightIcon,
							render: highlightRender,
						},
					},
					{
						title: "Center text",
						value: "centerText",
						blockEditor: {
							icon: centerTextIcon,
							render: centerTextStyle,
						},
					},
					{
						title: "Right align text",
						value: "rightAlignText",
						blockEditor: {
							icon: rightAlignTextIcon,
							render: rightAlignTextStyle,
						},
					},
					{
						title: "Left align text",
						value: "leftAlignText",
						blockEditor: {
							icon: leftAlignTextIcon,
							render: leftAlignTextStyle,
						},
					},
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
				],
			},
		},
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		{
			type: "image",
			options: { hotspot: true },
		},

		{
			type: "youtube2",
		},
	],
};

export default BlockContent;
