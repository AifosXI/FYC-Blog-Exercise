"use client";
import Image from "next/image";
import {List} from "antd";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [dataBlog, setDataBlog] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts`, JSON.stringify({
            limit: 10,
        }), {headers: {
                "Content-Type" : "application/json",
            }});
        setDataBlog(response.data.blogs);
        console.log(response.data.blogs);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-6 px-12">
            <List
                className={"mt-5 mb-12"}
                pagination={{
                    position:'bottom',
                    align:'center',
                    defaultPageSize: 12,
                }}
                grid={{ gutter: 30, column: 4 }}
                dataSource={dataBlog}
                renderItem={(item) => (
                    <List.Item>
                        <Link key={item.id} href={`/blog/${item.id}`} className={"block mb-8 relative hover:before:content-[''] hover:before:inset-[5%] hover:before:absolute hover:before:border hover:before:border-white hover:before:block hover:before:z-10"}>
                            <div>
                                <Image width={600} height={100} className={"w-full h-[30rem] object-cover rounded-lg relative"} src={item.photo_url} alt={item.title}/>
                                <div className={"flex flex-col p-4 border absolute bottom-0 w-4/5 left-1/2 -translate-x-1/2 bg-white rounded-t-lg h-32"}>
                                    <div className={"flex flex-row justify-between"}>
                                        <p>{ item.title }</p>
                                        <p className={"relative before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-4 before:w-0.5 before:block before:bg-blue-400"}>
                                            {new Date(item.created_at).toLocaleString("fr-FR", {
                                                month: "2-digit",
                                                day: "2-digit",
                                                year: "numeric"
                                            })}
                                        </p>
                                    </div>
                                    <p className={"mt-2"}>
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </Link>
                    </List.Item>
                )}
            />
        </main>
    );
}
