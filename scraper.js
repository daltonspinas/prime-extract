const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://primeng.org';
const COMPONENT_LIST_PATH = path.join(__dirname, 'component-list.json');

function extractCodeFromElement($, element) {
    // Extract code from pre elements
    const codeBlocks = [];
    $(element).find('pre code').each((i, codeEl) => {
        const code = $(codeEl).text().trim();
        if (code) {
            codeBlocks.push(code);
        }
    });
    return codeBlocks;
}

function extractSectionContent($, section) {
    const sectionData = {
        title: '',
        description: '',
        code: []
    };

    // Extract section title
    const titleEl = $(section).find('h2.doc-section-label').first();
    if (titleEl.length) {
        sectionData.title = titleEl.text().replace('#', '').trim();
    }

    // Extract description from doc-section-description
    const descEl = $(section).find('.doc-section-description p').first();
    if (descEl.length) {
        sectionData.description = descEl.text().trim();
    }

    // Extract code examples
    sectionData.code = extractCodeFromElement($, section);

    return sectionData;
}

async function scrapeComponents() {
    // Load component list
    const componentList = JSON.parse(fs.readFileSync(COMPONENT_LIST_PATH, 'utf-8'));

    // Ensure output directory exists
    const outDir = path.join(__dirname, 'components');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    for (const comp of componentList) {
        const url = BASE_URL + comp.path;
        try {
            console.log(`Scraping ${comp.name} from ${url}...`);
            const { data: compData } = await axios.get(url);
            const $ = cheerio.load(compData);

            // Extract main documentation container
            const docMain = $('.doc-main');
            if (!docMain.length) {
                console.log(`No doc-main found for ${comp.name}, trying alternative selectors...`);
                continue;
            }

            let markdown = '';

            // Extract title and intro
            const docIntro = docMain.find('.doc-intro').first();
            if (docIntro.length) {
                const title = docIntro.find('h1').text().trim() || comp.name;
                const intro = docIntro.find('p').text().trim();
                
                markdown += `# ${title}\n\n`;
                if (intro) {
                    markdown += `${intro}\n\n`;
                }
            } else {
                markdown += `# ${comp.name}\n\n`;
            }

            // Extract documentation sections
            const docSections = docMain.find('app-docsection section');
            
            if (docSections.length > 0) {
                docSections.each((i, section) => {
                    const sectionData = extractSectionContent($, section);
                    
                    if (sectionData.title) {
                        markdown += `## ${sectionData.title}\n\n`;
                        
                        if (sectionData.description) {
                            markdown += `${sectionData.description}\n\n`;
                        }
                        
                        // Add code examples
                        sectionData.code.forEach((code, codeIndex) => {
                            const language = code.includes('<') ? 'html' : 
                                           code.includes('import') ? 'typescript' : 'text';
                            markdown += `\`\`\`${language}\n${code}\n\`\`\`\n\n`;
                        });
                    }
                });
            } else {
                console.log(`No documentation sections found for ${comp.name}`);
                // Fallback: extract any available content
                const fallbackTitle = $('h1').first().text().trim() || comp.name;
                const fallbackDesc = $('p').first().text().trim();
                markdown += `${fallbackDesc}\n\n`;
            }

            // Add source link
            markdown += `---\n\n[View Official Documentation](${url})\n`;

            // Write to markdown file
            const filename = comp.name.toLowerCase().replace(/\s+/g, '');
            fs.writeFileSync(path.join(outDir, `${filename}.md`), markdown);
            console.log(`✓ Wrote ${filename}.md`);
            
            // Add small delay to be respectful to the server
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (err) {
            console.error(`✗ Failed to scrape ${comp.name} at ${url}:`, err.message);
        }
    }
}

scrapeComponents().catch(console.error);