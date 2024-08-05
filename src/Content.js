import { useEffect, useState } from "react"
import Paragraph from "./Paragraph";
const tabs = ['posts', 'comments', 'albums']
// function Content() {
//     const [posts, setPosts] = useState([])
//     const [title, setTitle] = useState('')
//     const [type, setType] = useState('posts')
//     const [showgototop, setShowGoToTop] = useState(false)
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts => {
//             setPosts(posts);
//         })
//     }, [type])

//     useEffect(()=>{
//        const handleScroll =()=>{
//         if(window.scrollY >=200){
//             setShowGoToTop(true);
//             console.log('set state')
//         }else{
//         setShowGoToTop(false);
//         }
//        }
//         window.addEventListener('scroll', handleScroll)

//         return ()=> {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     },[])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button key={tab}
//                 style={type === tab ? {
//                     color: '#fff', 
//                     backgroundColor: '#333',
//                 } : {}}
//                 onClick={()=> setType(tab)}>
//                     {tab}
//                 </button>
//             ))}
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}

//             </ul>
//             {
//                 showgototop && (
//                     <button style={
//                         {
//                             position: 'fixed',
//                             right: 20,
//                             bottom:20
//                         }
//                     }>
//                         Go To Top
//                     </button>
//                 )
//             }
//         </div>
//     )
// }
// function Content() {
//     const [width, setWdith] = useState(window.innerWidth)
//     useEffect(()=>{
//         const handleResize =()=>{
//             setWdith(window.innerWidth)
//         }
//         window.addEventListener('resize', handleResize)

//         ///cleanup fun
//         return ()=> {
//             window.removeEventListener('resize',handleResize)
//         }
//     },[])
//     return(
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }
// function Content() {
//     const [width, setWdith] = useState(1)
//     useEffect(()=>{
//         console.log(`Mounted or Re-render lần ${width}`)
       
//         ///cleanup fun
//         return ()=> {
//             console.log(`Xóa lần ${width}`)
//         }
//     },[width])
//     return(
//         <div>
//             <h1>{width}</h1>
//             <button onClick={()=> setWdith(width+1)}>Click me</button>
//         </div>
//     )
// }
// function Content() {
//     const [avatar, setAvatar] = useState()
//     useEffect(()=>{
        
       
       
//         return ()=> {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     },[avatar])
//     const handlePreviewAvatar =(e)=>{
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//     }
//     return(
//         <div>
//            <input type="file" onChange={handlePreviewAvatar}/>
//            {avatar && <img src={avatar.preview} style={{width: 200}}/>}
//         </div>
//     )
// }

function Content() {
   
    return(
       <div>
           <Paragraph/>
       </div>
    );
    
}
export default Content