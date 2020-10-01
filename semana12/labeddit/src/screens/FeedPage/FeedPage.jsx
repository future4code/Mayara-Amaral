import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import CardPost from '../../components/CardPost/CardPost'
import { BaseUrl } from '../../constants/constants'
import axios from 'axios'

export function FeedPage() {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios.get(`${BaseUrl}posts`, {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
           setPosts(res.data.posts)
        })
        .catch(err => {
            console.log(err)
        })
    }   
     
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
           <CardPost posts={posts}/>
        </div>
    )
}

export default FeedPage;