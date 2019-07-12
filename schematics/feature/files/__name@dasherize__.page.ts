import { FeaturePage } from '@prisme/common';
import { <%= classify(name) %>Feature } from './<%=dasherize(name)%>.feature';

export const <%=camelize(name)%>Page = new FeaturePage(
	'<%=dasherize(name)%>',
	'<%=title || capitalize(name)%>',
	<%= classify(name) %>Feature,
);
