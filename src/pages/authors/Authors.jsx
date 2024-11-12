import { useState } from "react";
import{authors} from "../../data/authors"
import "./Authors.css";
const Authors = () => {
    const [search,setSearch]=useState("");
console.log(

    authors.filter(a=> a.name.toLocaleLowerCase().includes(search)) // finding author
);
    return (
        <div className='authors'>
           <div className="authors-search-wrapper">
            <input type="search" placeholder="Search in authors..." value={search} onChange={(e)=>{setSearch(e.target.value)}} />
           </div>
           <div className="authors-wrapper">
{authors.filter(a=> a.name.toLocaleLowerCase().includes(search)).map(author =>
<div className="author" key={author.id}>
<img src={`${author.image}`} alt={author.name} className="author-img"/>
<h2 className="author-name">{author.name}</h2>
</div>   
)}
           </div>
        </div>
    );
}

export default Authors;
