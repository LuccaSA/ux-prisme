import { formatPage } from './format/format.page';
import { punctuationPage } from './punctuation';
import { typographicRulesPage } from './typographic-rules';
import { vocabularyPage } from './vocabulary';
import { voicePage } from './voice';
import { GroupPage } from '@prisme/common';

export const contentPage = new GroupPage('content', 'Contenu', [
	formatPage,
	punctuationPage,
	typographicRulesPage,
	vocabularyPage,
	voicePage,
]);
