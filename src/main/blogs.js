import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import { fetchArticles, formatDate } from './gnews';

const ArticleCard = ({ article }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <Link
            to={`/blogs/${article.id}`}
            className="flex gap-4 bg-[#333F50] border rounded-md p-4 shadow-dark-lg hover:bg-[#3a4760] transition-colors"
        >
            {article.image && !imgError ? (
                <img
                    src={article.image}
                    alt={article.title}
                    className="flex-shrink-0 w-20 h-20 rounded-md object-cover"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-md bg-[#2C3038] text-blue-400 text-3xl">
                    <BiNews />
                </div>
            )}
            <div className="flex flex-col">
                <p className="font-bold text-[whitesmoke] text-[14px]">{article.title}</p>
                <p className="mt-1 text-[11px] text-[#A9D18E] font-['Hack']">{article.source?.name} · {formatDate(article.publishedAt)}</p>
                <p className="mt-2 text-[12px] text-gray-300">{article.description}</p>
            </div>
        </Link>
    );
};

const PAGE_SIZE = 6;

const Pagination = ({ page, pageCount, onChange }) => {
    if (pageCount <= 1) return null;

    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 font-['Hack']">
            <button
                type="button"
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded-md bg-[#333F50] text-[whitesmoke] text-[13px] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#3a4760] transition-colors"
            >
                {'<'}
            </button>
            {pageNumbers.map((n) => (
                <button
                    type="button"
                    key={n}
                    onClick={() => onChange(n)}
                    className={`px-3 py-1 rounded-md text-[13px] transition-colors ${
                        n === page
                            ? 'bg-blue-400 text-[#171923]'
                            : 'bg-[#333F50] text-[whitesmoke] hover:bg-[#3a4760]'
                    }`}
                >
                    {n}
                </button>
            ))}
            <button
                type="button"
                onClick={() => onChange(page + 1)}
                disabled={page === pageCount}
                className="px-3 py-1 rounded-md bg-[#333F50] text-[whitesmoke] text-[13px] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#3a4760] transition-colors"
            >
                {'>'}
            </button>
        </div>
    );
};

export const Blogs = () => {
    const [articles, setArticles] = useState([]);
    const [status, setStatus] = useState('loading');
    const [page, setPage] = useState(1);
    const hasFetchedRef = useRef(false);

    useEffect(() => {
        if (hasFetchedRef.current) return;
        hasFetchedRef.current = true;

        fetchArticles()
            .then((articles) => {
                setArticles(articles);
                setStatus('done');
            })
            .catch(() => {
                setStatus('error');
            });
    }, []);

    const pageCount = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
    const currentArticles = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const goToPage = (n) => {
        setPage(Math.min(Math.max(n, 1), pageCount));
    };

    return (
        <div className="flex flex-col items-center mt-10 mb-10 gap-6">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className="flex bg-[#333F50] border rounded-md w-[90%] md:w-4/5 lg:w-[70%] xl:w-1/2 p-4">
                <p className="text-purple-500 text-[14px]">{'>'} <span className="text-blue-400">news</span></p>
            </div>
            <div className="flex flex-col gap-4 w-[90%] md:w-4/5 lg:w-[70%] xl:w-1/2">
                {status === 'loading' && (
                    <p className="text-center text-blackAlpha-700 dark:text-white font-['Hack']">Loading...</p>
                )}
                {status === 'error' && (
                    <p className="text-center text-blackAlpha-700 dark:text-white font-['Hack']">Không thể tải tin tức lúc này.</p>
                )}
                {status === 'done' && currentArticles.map((article) => (
                    <ArticleCard key={article.id || article.url} article={article} />
                ))}
            </div>
            {status === 'done' && (
                <Pagination page={page} pageCount={pageCount} onChange={goToPage} />
            )}
        </div>
    );
};
