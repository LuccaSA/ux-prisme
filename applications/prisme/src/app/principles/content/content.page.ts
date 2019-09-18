import { typographicRulesPage } from './typographic-rules';
import { vocabularyPage } from './vocabulary';
import { GroupPage } from '@prisme/common';

export const contentPage = new GroupPage('content', 'Contenu', [
	typographicRulesPage,
	vocabularyPage,
]);
