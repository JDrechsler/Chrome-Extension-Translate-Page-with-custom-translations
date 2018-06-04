import { translationStringPairs } from './translations';

// const possibleTextClasses = [
// 	'sapUiInvisibleText',
// 	'sapMText',
// 	'sapMSLITitleOnly',
// 	'sapMFeedListItemInfoText',
// 	'sapMObjectAttributeText',
// 	'sapMBtnContent'
// ];

// const possibleTextIDs = [
// 	'__label1-bdi',
// 	'__label14-bdi',
// 	'__label15-bdi',
// 	'__label16-bdi',
// 	'__error0-title-inner'
// ];

function main() {
	iterateThroughMostInnerDivs();
	setInterval(() => {
		iterateThroughMostInnerDivs();
	}, 10);
}

function iterateThroughMostInnerDivs() {
	const bodyDivs = document.body.getElementsByTagName('*');

	// @ts-ignore
	const mostInnerDivs: Element[] = [...bodyDivs].filter(
		e => e.childElementCount === 0
	);

	for (const pair of translationStringPairs) {
		const germanText = pair.split('|')[0];

		for (let i = 0; i < mostInnerDivs.length; i++) {
			const currentNode = mostInnerDivs[i];
			if (currentNode.textContent === germanText) {
				// console.log(currentNode.textContent);
				const englishTranslation = pair.split('|')[1];
				currentNode.textContent = englishTranslation;
			}

			if (currentNode.tagName === 'input') {
				const inputNode = <HTMLInputElement>currentNode;
				if (inputNode.placeholder === germanText) {
					const englishTranslation = pair.split('|')[1];
					inputNode.placeholder = englishTranslation;
				}
			}
		}
	}
}

console.log('Translation background server started.');
main();
