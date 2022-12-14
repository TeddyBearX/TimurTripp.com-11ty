const package = require('../package.json');

module.exports = {
	isDeveloperPage: data => data.page.inputPath.indexOf('/README') > -1 || data.page.inputPath.indexOf('/LICENSE') > -1 || data.page.inputPath.indexOf('/TEST') > -1,
	name: data => data.site.name || package.name,
	title: data => {
		const pageTitle = data.isDeveloperPage ? data.page.filePathStem.substr(1) + ' (Source Project for Developers)' : data.title;
		return (pageTitle ? pageTitle + ' | '  : '') + data.name;
	},
	author: data => data.author || data.site.author || package.author,
	description: data => data.description || data.site.description || package.description,
	keywords: data => new Set([...data.keywords, ...data.site.keywords, ...package.keywords]),
	version: data => data.site.version || package.version,
	license: data => data.site.license || package.license,
	noIndex: data => data.noIndex || data.isDeveloperPage,
	permalink: data => data.isDeveloperPage ? data.page.inputPath + '/' : data.permalink
};
