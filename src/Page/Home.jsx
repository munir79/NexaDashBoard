import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";


const Home = () => {
    const allcoffe=useLoaderData();
    return (
        <div className="mt-8  border-4 border-green-500 grid md:grid-cols-2 ">
            {
                allcoffe.map(all=><CoffeCard  key={all._id} all={all}></CoffeCard>)
            }
        </div>
    );
};

export default Home;