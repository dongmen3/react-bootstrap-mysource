import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function HomePage() {

    useEffect(() => {
        fetchLatestPaperList();
    }, [])

    const [papers, setPapers] = useState([]);

    const fetchLatestPaperList = async () => {
        const data = await fetch(
            'http://localhost:8080/'
        );
        const paperlist = await data.json();
        console.log(paperlist);
        setPapers(paperlist);
    };
    return (
        <div>   
            {papers.map(paper=>(
                <h2 key={paper.id}><Link to={`/paper/${paper.id}`}>{paper.title}</Link></h2>
                //<p>Category: {paper.category}    id: {paper.id}</p>
            ))}
        </div>
    )
}

export default HomePage;