const customWebsite = new Proxy({"src":"/_astro/custom-website.DVYO8OE9.jpg","width":840,"height":602,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/custom-website.jpg";
							}
							
							return target[name];
						}
					});

export { customWebsite as c };
