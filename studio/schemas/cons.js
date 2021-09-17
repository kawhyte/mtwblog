const Cons = {
	name: "cons",
	title: "Negatives",
	type: "document",
	fields: [
		{
			name: "reviewConText",
			title: "Negatives",
			type: "string",
		},
		{
			name: "post",
			type: "reference",
			to: [{ type: "post" }],
		},
	],
};

export default Cons;
