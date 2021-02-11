import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function NavLandingPage({match}) {

    useEffect(() => {
        fetchNavPaperList();
    })

    const [paperList, setPaperlist] = useState([]);

    const fetchNavPaperList = async () => {
        const data = await fetch(
            `http://localhost:8080${match.url}`
        )
        const paperList = await data.json();
        setPaperlist(paperList);
    }

    return (
        <div>
            <h2>Nav Landing</h2>
            {paperList.map(paper=>(
                <h2 key={paper.id}><Link to={`/paper/${paper.id}`}>{paper.title}</Link></h2>
                //<p>Category: {paper.category}    id: {paper.id}</p>
            ))}
        </div>
    )
}
export default NavLandingPage;