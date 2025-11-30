const creatorImage = new Proxy({"src":"/_astro/creator.GLH25YHJ.jpg","width":2316,"height":2406,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/webmoov4/website/src/assets/creator.jpg";
							}
							
							return target[name];
						}
					});

export { creatorImage as c };
