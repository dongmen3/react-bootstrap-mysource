import React, {useEffect, useState}from 'react';

export default function PaperDetailPage({match}) {

    useEffect(() => {
        fetchPaperDetail();
    })

    const [paperDetail, setPaperDetail] = useState({});

    const fetchPaperDetail = async () => {
        const data = await fetch(
            `http://localhost:8080${match.url}`
        )
        const paperDetail = await data.json();
        setPaperDetail(paperDetail);
    };
    const content = paperDetail.content;
    return (
        <div>
            <h2>{paperDetail.title}</h2>
            <h2>Cat:   {paperDetail.category}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
