/**
 * params {
 *      [string]: any
 * }
 */

export const buildQuerystring = (params) => {
    // { a: 1, b: 2 }
    // Object.keys => [a, b]
    // Object.values => [1, 2]
    // Object.entries => [['sort_by', ''], ['search', 'iphone'], ['page', 2]]
    return (
        "?" +
        Object.entries(params)
            .filter(
                (entry) =>
                    entry[1] !== null &&
                    entry[1] !== undefined &&
                    entry[1] != ""
            )
            // [['search', 'iphone'], ['page', 2]]
            .map((entry) => `${entry[0]}=${entry[1]}`)
            // ['search=iphone', 'page=2']
            .join("&")
    );
    // 'search=iphone&page=2
};
