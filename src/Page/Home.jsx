import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";
import { useState } from "react";


const Home = () => {
    const allcoffe=useLoaderData();
    const [deleteCoffe,setDeleteCoffe]=useState(allcoffe);
    return (
        <div className="mt-8  border-4 border-green-500 grid md:grid-cols-2 ">
            {
                allcoffe.map(all=><CoffeCard deleteCoffe={deleteCoffe} setDeleteCoffe={setDeleteCoffe} key={all._id} all={all}></CoffeCard>)
            }
        </div>
    );
};

export default Home;