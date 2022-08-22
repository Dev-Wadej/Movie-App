import { lazy } from 'react';

const Trending = lazy(() =>
    import ('./Page/Trending/Trending'));
const Movies = lazy(() =>
    import ('./Page/Movies/Movies'));
const TvSeries = lazy(() =>
    import ('./Page/Tvseries/Tvseries'));
const Search = lazy(() =>
    import ('./Page/Search/Search'));

export const totalRoutes = [{
        component: Trending,
        title: 'Trending ',
        index: {
            index: true,
        },
    },
    {
        path: '/movies',
        component: Movies,
        title: 'Movies ',
    },
    {
        path: '/series',
        component: TvSeries,
        title: 'TvSeries ',
    },
    {
        path: '/search',
        component: Search,
        title: 'Search ',
    },
];