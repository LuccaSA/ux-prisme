import { typographicRulesPage } from './typographic-rules';
import { vocabularyPage } from './vocabulary';
import { GroupPage } from '@prisme/common';
import { numberFormattingPage } from './number-formatting/number-formatting.page';

export const contentPage = new GroupPage('content', 'Contenu', [
	numberFormattingPage,
	typographicRulesPage,
	vocabularyPage,
]);
