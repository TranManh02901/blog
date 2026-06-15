import React from 'react';
import { act } from 'react';
import { useMemo, memo, useRef, useEffect, useState, useReducer } from 'react'
import { useStore } from '../components/store';

// const types_data = ['posts', 'todos', 'albums'];
const lessions = [
    {
        id: 1,
        name: 'Lập trình cơ bản'
    },
    {
        id: 2,
        name: 'Toán nâng cao'
    },
    {
        id: 3,
        name: 'Triết học MacLenin'
    },
];

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
    // 2. Cleanup function luôn được gọi trước khi component unmounted

    // const [title, setTitle] = useState('')
    // const [posts, setPosts] = useState([])
    // const [type, setType] = useState('posts')
    // const [showToTop, setShowToTop] = useState(false)

    // --------vidu: useEffect set title trang web
    // useEffect(() => {
    //     document.title = title;
    // })

    // --------vidu: useEffect tab chuyển đổi dữ liệu
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts);
    //         })
    // }, [type])

    // --------vidu: useEffect show go to top
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowToTop(true)
    //         } else {
    //             setShowToTop(false)
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     console.log('add');

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //         console.log('remove');
    //     }
    // }, [])

    // --------vidu: useEffect resize trang web hiển thị ra ngoài view
    // const [width, setWidth] = useState(window.innerWidth)
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)

    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [])

    // --------vidu: useEffect set time đếm ngược
    // const [time, setTime] = useState(180)
    // useEffect(() => {

    //     const timeId = setInterval(() => {
    //         setTime(time - 1)
    //     }, 1000)
    //     return () => {
    //         clearInterval(timeId)
    //     }
    // }, [time])

    //-----------vidu: useEffect nhập hình ảnh và hiển thị ra ngoài view
    // const [image, setImage] = useState()

    // useEffect(() => {
    //     return () => {
    //         image && URL.revokeObjectURL(image)
    //     }
    // }, [image])

    // const handleChangeImage = (e) => {
    //     const file = e.target.files[0]

    //     setImage(URL.createObjectURL(file));
    // }

    //-----------vidu: useEffect xử lý chức năng comment
    // const [lessionId, setLessionId] = useState(1)

    // useEffect(() => {
    //     const handleComment = ({ detail }) => {
    //         console.log(detail);
    //     }

    //     window.addEventListener(`lesson-${lessionId}`, handleComment)

    //     return () => {
    //         window.removeEventListener(`lesson-${lessionId}`, handleComment)
    //     }
    // }, [lessionId])

    //-----------vidu: useRef
    // const [count, setCount] = useState(60)
    // let timeID = useRef()

    // const handleStart = () => {
    //     timeID.current = setInterval(() => {
    //         setCount(prevCount => prevCount - 1)
    //     }, 1000)
    // }

    // const handleStop = () => {
    //     clearInterval(timeID.current)
    // }

    //------------vidu: useMemo() 
    // const [name, setName] = useState()
    // const [price, setPrice] = useState()
    // const [products, setProducts] = useState([])

    // const nameRef = useRef()

    // const handleSubmit = () => {
    //     console.log('run');

    //     setProducts([...products, {
    //         name,
    //         price: +price
    //     }])
    //     setName('')
    //     setPrice('')

    //     nameRef.current.focus()
    // }

    // const total = useMemo(() => {
    //     const result_prd = products.reduce((result, prd) => {
    //         console.log('tinh toan lai')

    //         return result + prd.price
    //     }, 0)
    //     return result_prd
    // }, [products])


    // ----------------------vidu: learn useReducer
    // useReducer 
    // 1: init state: 0
    // 2: Actions: up(state + 1), down(state - 1)
    // 3: reducer
    // 4: dispatch

    // const initState = 0

    // const UP_BTN = 'up'
    // const DOWN_BTN = 'down'

    // const reducer = (state, action) => {
    //     console.log('helllo');

    //     switch (action) {
    //         case UP_BTN:
    //             return state + 1
    //         case DOWN_BTN:
    //             return state - 1
    //         default:
    //             return new Error('Invalid action')
    //     }
    // }

    const [state, dispatch] = useStore()

    return (
        <div>
            <div className='mb-3'>
                <input
                    className='form-control mb-3'
                    placeholder='Enter name...'
                    value={state.todoInput}
                    onClick={e => {
                        dispatch()
                    }}
                />
            </div>

            {/* <div className='mb-3'>
                <h1>{count}</h1>
                <button className='btn btn-secondary'
                    // onClick={() => setCount(count - 1)}
                    onClick={() => dispatch(DOWN_BTN)}
                >down</button>
                <button className='btn btn-primary'
                    // onClick={() => setCount(count + 1)}
                    onClick={() => dispatch(UP_BTN)}
                >up</button>
            </div> */}
            {/* <div className='input-group'>
                <input
                    className='form-control mb-3'
                    ref={nameRef}
                    value={name}
                    placeholder='Enter name...'
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='input-group'>
                <input
                    className='form-control mb-3'
                    value={price}
                    placeholder='Enter price...'
                    onChange={e => setPrice(e.target.value)}
                />
            </div>

            <button className='btn btn-primary mb-3' onClick={handleSubmit}>Add</button>

            <div className='mb-3'>Total: {total}</div>

            <div className='mb-3'>
                <ul>
                    {products.map((product_item, index) => (
                        <li key={index}>{product_item.name} - {product_item.price}</li>
                    ))}
                </ul>
            </div> */}

            {/* <div className='mb-3'>
                <h1>{count}</h1>
                <button
                    onClick={handleStart}
                    className='btn btn-primary'>
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className='btn btn-secondary'>
                    Stop
                </button>
            </div> */}

            {/* <div className='mb-3'>
                <ul className='nav nav-bar'>
                    {lessions.map(lession_item => (
                        <li
                            className={lessionId === lession_item.id ? 'btn btn-primary' : 'btn btn-secondary'}
                            key={lession_item.id}
                            onClick={() => {
                                setLessionId(lession_item.id)
                            }}>
                            {lession_item.name}
                        </li>
                    ))}
                </ul>
            </div> */}

            {/* <div className='mb-3'>
                <input
                    type='file'
                    onChange={handleChangeImage}
                />
                <button>Click submit</button>
                <img
                    src={image}
                    alt=''
                />
            </div> */}

            {/* <div className='mb-3'>
                <h2>{time}</h2>
            </div> */}

            {/* <div className='mb-3'>
                <h2>{width}</h2>
            </div> */}

            {/* <div className='mb-3'>
                <h2>Change title</h2>
                <div class="input-group mb-3">
                    <input className='form-control' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
            </div> */}

            {/* <div className='mb-3'>
                <h2>Tab buttons</h2>
                {types_data.map(type_item => (
                    <button
                        className={type === type_item ? 'btn btn-primary' : 'btn btn-secondary'}
                        key={type_item}
                        onClick={() => setType(type_item)}>
                        {type_item}
                    </button>
                ))}
            </div> */}

            {/* <div className='mb-3' style={{ padding: 30 }}>
                <ul>
                    {posts.map(post_item => (
                        <li key={post_item.id}>{post_item.title}</li>
                    ))}
                </ul>
            </div> */}

            {/* {showToTop && (
                <div
                    className='totop btn btn-danger'
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>Hello</div>
            )} */}


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