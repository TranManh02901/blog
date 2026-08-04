import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BiNews, BiArrowBack } from 'react-icons/bi';
import { fetchArticles, getCachedArticle, formatDate } from './gnews';

export const BlogDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(() => getCachedArticle(id));
    const [status, setStatus] = useState(() => (getCachedArticle(id) ? 'done' : 'loading'));
    const fetchedForId = useRef(null);

    useEffect(() => {
        if (article) return;
        if (fetchedForId.current === id) return;
        fetchedForId.current = id;

        fetchArticles()
            .then((articles) => {
                const found = articles.find((a) => String(a.id) === String(id));
                if (found) {
                    setArticle(found);
                    setStatus('done');
                } else {
                    setStatus('not-found');
                }
            })
            .catch(() => {
                setStatus('error');
            });
    }, [id, article]);

    return (
        <div className="flex flex-col items-center mt-10 mb-10 gap-6">
            <Helmet>
                <title>{article ? article.title : 'Blog'}</title>
            </Helmet>
            <div className="flex flex-col gap-4 w-[90%] md:w-4/5 lg:w-[70%] xl:w-1/2">
                <Link
                    to="/blogs/"
                    className="flex items-center gap-2 text-purple-500 text-[14px] font-['Hack'] w-fit"
                >
                    <BiArrowBack /> <span>back</span>
                </Link>

                {status === 'loading' && (
                    <p className="text-center text-blackAlpha-700 dark:text-white font-['Hack']">Loading...</p>
                )}
                {status === 'error' && (
                    <p className="text-center text-blackAlpha-700 dark:text-white font-['Hack']">Không thể tải bài viết lúc này.</p>
                )}
                {status === 'not-found' && (
                    <p className="text-center text-blackAlpha-700 dark:text-white font-['Hack']">Không tìm thấy bài viết này.</p>
                )}

                {status === 'done' && article && (
                    <div className="flex flex-col bg-[#333F50] border rounded-md p-4 sm:p-8 shadow-dark-lg">
                        {article.image ? (
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-auto rounded-md object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-40 rounded-md bg-[#2C3038] text-blue-400 text-5xl">
                                <BiNews />
                            </div>
                        )}
                        <p className="mt-4 font-bold text-[whitesmoke] text-[20px]">{article.title}</p>
                        <p className="mt-2 text-[12px] text-[#A9D18E] font-['Hack']">
                            {article.source?.name} · {formatDate(article.publishedAt)}
                        </p>
                        <p className="mt-4 text-[14px] text-gray-300 whitespace-pre-line">
                            {article.content || article.description}
                        </p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 text-blue-400 text-[13px] font-['Hack'] w-fit"
                        >
                            Đọc bài gốc {'>'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
