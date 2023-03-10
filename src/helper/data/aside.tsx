import React from "react";
import ArrowRight from "../../components/svgs/icons/ArrowRight";
import Documentary from "../../components/svgs/icons/Documentary";
import Download from "../../components/svgs/icons/Download";
import Home from "../../components/svgs/icons/Home";
import MusicNote from "../../components/svgs/icons/MusicNote";
import Naruto from "../../components/svgs/icons/Naruto";
import PaperDownload from "../../components/svgs/icons/PaperDownload";
import Tv from "../../components/svgs/icons/Tv";
import Wallet from "../../components/svgs/icons/Wallet";
type MenuStructure = {
    [key: string]: {
        id: string;
        text: string;
        path: string;
        subMenu: {
            [key: string]: {
                id: string;
                text: string;
                path: string;
                icon: React.ReactElement;
            };
        };
    };
};
export const menuStructure: MenuStructure = {
    menu: {
        id: "menu",
        text: "Menu",
        path: "/menu",
        subMenu: {
            discover: {
                id: "discover",
                text: "Discover",
                path: "/menu/discover",
                icon: <Home />,
            },
            trending: {
                id: "trending",
                text: "Trending",
                path: "/menu/trending",
                icon: <ArrowRight />,
            },
            streaming: {
                id: "streaming",
                text: "Streaming",
                path: "/menu/streaming",
                icon: <Download />,
            },
            playlist: {
                id: "playlist",
                text: "Playlist",
                path: "/menu/playlist",
                icon: <PaperDownload />,
            },
            bookmark: {
                id: "bookmark",
                text: "Bookmark",
                path: "/menu/bookmark",
                icon: <Wallet />,
            },
        },
    },
    category: {
        id: "category",
        text: "Category",
        path: "/category",
        subMenu: {
            movies: {
                id: "movies",
                text: "Movies",
                path: "/category/movies",
                icon: <Home />,
            },
            anime: {
                id: "anime",
                text: "Anime",
                path: "/category/anime",
                icon: <Naruto />,
            },
            tvSeries: {
                id: "tv-series",
                text: "TV Series",
                path: "/category/tv-series",
                icon: <Tv />,
            },
            documentaries: {
                id: "documentaries",
                text: "Documentaries",
                path: "/category/documentaries",
                icon: <Documentary />,
            },
            music: {
                id: "music",
                text: "Music",
                path: "/category/music",
                icon: <MusicNote />,
            },
        },
    },
};
