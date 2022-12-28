type MenuStructure = {
	[key: string]: {
		id: string;
		text: string;
		path: string;
		icon: string;
		subMenu: {
			[key: string]: {
				id: string;
				text: string;
				path: string;
				icon: string;
			};
		};
	};
};
export const menuStructure: MenuStructure = {
	menu: {
		id: 'menu',
		text: 'Menu',
		path: '/menu',
		icon: 'Menu',
		subMenu: {
			discover: {
				id: 'discover',
				text: 'Discover',
				path: '/menu/discover',
				icon: 'Explore',
			},
			trending: {
				id: 'trending',
				text: 'Trending',
				path: '/menu/trending',
				icon: 'TrendingUp',
			},
			streaming: {
				id: 'streaming',
				text: 'Streaming',
				path: '/menu/streaming',
				icon: 'PlayCircleOutline',
			},
			playlist: {
				id: 'playlist',
				text: 'Playlist',
				path: '/menu/playlist',
				icon: 'QueueMusic',
			},
			bookmark: {
				id: 'bookmark',
				text: 'Bookmark',
				path: '/menu/bookmark',
				icon: 'Bookmark',
			},
		},
	},
	category: {
		id: 'category',
		text: 'Category',
		path: '/category',
		icon: 'Category',
		subMenu: {
			movies: {
				id: 'movies',
				text: 'Movies',
				path: '/category/movies',
				icon: 'Movie',
			},
			anime: {
				id: 'anime',
				text: 'Anime',
				path: '/category/anime',
				icon: 'Anime',
			},
			tvSeries: {
				id: 'tv-series',
				text: 'TV Series',
				path: '/category/tv-series',
				icon: 'Tv',
			},
			documentaries: {
				id: 'documentaries',
				text: 'Documentaries',
				path: '/category/documentaries',
				icon: 'Description',
			},
			music: {
				id: 'music',
				text: 'Music',
				path: '/category/music',
				icon: 'MusicNote',
			},
		},
	},
};
