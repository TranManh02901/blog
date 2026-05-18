import React from 'react';
import { useEffect, useState } from 'react'

const types_data = ['posts', 'todos', 'albums'];

export const Learn = () => {
    //------------------------------------------useEffect()------------------------------------------------
    // note 
    // 1. useEffect(callback)    
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi element thêm component vào DOM
    // 2. useEffect(callback, [])    
    // 3. useEffect(callback, [deps])

    //-------lý thuyết chung
    // 1. Callback luôn được gọi sau khi component được mounted

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showToTop, setShowToTop] = useState(false)

    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowToTop(true)
            } else {
                setShowToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div>
            <div className='mb-3'>
                <h2>Change title</h2>
                <div class="input-group mb-3">
                    <input className='form-control' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
            </div>

            <div className='mb-3'>
                <h2>Tab buttons</h2>
                {types_data.map(type_item => (
                    <button
                        className={type === type_item ? 'btn btn-primary' : 'btn btn-secondary'}
                        key={type_item}
                        onClick={() => setType(type_item)}>
                        {type_item}
                    </button>
                ))}
            </div>

            <div className='mb-3' style={{ padding: 30 }}>
                <ul>
                    {posts.map(post_item => (
                        <li key={post_item.id}>{post_item.title}</li>
                    ))}
                </ul>
            </div>

            {showToTop && (
                <div
                    className='totop btn btn-danger'
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>Hello</div>
            )}
        </div>
    )


    //------------------------------------------useState()------------------------------------------------
    // const gift = [
    //     {
    //         id: 1,
    //         name: 'lua chon 1'
    //     },
    //     {
    //         id: 2,
    //         name: 'lua chon 2'
    //     },
    //     {
    //         id: 3,
    //         name: 'lua chon 3'
    //     },
    // ]

    // const [checked, setChecked] = useState([]);
    // const handleCheck = (id) => {
    //     setChecked(prev => {
    //         const isChecked = checked.includes(id);
    //         if (isChecked) {
    //             return checked.filter(item => item !== id)
    //         } else {
    //             return [...prev, id]
    //         }
    //     })
    // }
    // const handleUpdate = () => {
    //     console.log({ ids: checked });
    // }
    // return (
    //     <div className='congaf' style={{ padding: 20 }}>
    //         {gift.map(gift => (
    //             <div key={gift.id}>
    //                 <input
    //                     type='checkbox'
    //                     checked={checked.includes(gift.id)}
    //                     onChange={() => handleCheck(gift.id)} />
    //                 <label>{gift.name}</label>
    //             </div>
    //         ))}
    //         <button onClick={handleUpdate}>Click button</button>
    //     </div>
    // )

    // const [input, setInput] = useState('');
    // const [jobs, setJobs] = useState(() => {
    //     const local_data = localStorage.getItem('jobs');
    //     const parse_local_data = JSON.parse(local_data);

    //     return parse_local_data ?? []
    // });

    // const handleUpdate = () => {
    //     setJobs(prev => {
    //         const data_job = [...prev, input];

    //         // add to localstorage
    //         const json_job = JSON.stringify(data_job)
    //         localStorage.setItem('jobs', json_job);

    //         console.log(json_job);

    //         return data_job;
    //     });
    //     setInput('')
    // }

    // const handleDelete = () => {
    //     setJobs([]);
    // }

    // return (
    //     <div className='congaf' style={{ padding: 20 }}>
    //         <input className='input-type' placeholder='type here' style={{ outline: 'none' }} value={input} onChange={e => setInput(e.target.value)} />
    //         <button className='btn btn-primary' onClick={handleUpdate}>Click button</button>
    //         <button className='btn btn-danger' onClick={handleDelete}>Delete all</button>
    //         <ul>
    //             {jobs.map((job_item, index) => (
    //                 <li key={index}>{job_item}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )
}

export class Learning extends React.Component {
    render() {
        return (
            <Learn />
        )
    };
};