"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";

export default function Post({params}) {

    const [dataPost, setDataPost] = useState([]);

    useEffect(() => {
        getDetailsPost();
    }, []);

    async function getDetailsPost() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`);
        setDataPost(response.data.blog);
    }

    return (
        <div className={"max-w-screen-2xl mx-auto pb-12"}>
            <Image width={600} height={100} className={"w-full h-96 object-cover rounded-lg relative"} src={dataPost.photo_url} alt={dataPost.title}/>
            <div className={"flex flex-row justify-between pt-4"}>
                <p>{dataPost.category}</p>
                <p>{new Date(dataPost.created_at).toLocaleString("fr-FR", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric"
                })}</p>
            </div>
            <h1 className={"text-3xl font-bold text-center my-4"}>{dataPost.title}</h1>
            <p>{dataPost.content_text}</p>
        </div>
    )
}