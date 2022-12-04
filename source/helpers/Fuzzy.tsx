import fg from 'fast-glob'
import fuzzaldrin from 'fuzzaldrin'
export const Fuzzy = () => {
    const query = 'read'

    const files = fg.sync('**/*', {ignore: ['**/node_modules/**/*']})

    const searchResults = fuzzaldrin.filter(files, query).map(files => ({
        label: files,
        value: files
    }))

    return searchResults
}
