import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeCard = ({all}) => {
    const {_id,photo,name,chef,supplier}=all;

    const handleDelete=(_id)=>{
     console.log(_id);
     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      fetch(`http://localhost:5000/coffe/${_id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
           Swal.fire({
          title: "Deleted!",
          text: "Your coffe  has been deleted.",
          icon: "success"
        });
        }
      })

      }
    });
    }
    return (
<div className="mt-4 bg-red-200 bg-base-100 border-4 ml-3 border-yellow-400 flex shadow-xl">
  <div className="w-1/2 ml-20 m-2 ">
  <img src={photo} alt="Movie"/>
  </div>

 <div className="   w-1/2">
  
 <div className="flex p-10 items-center align-middle justify-between   ">
      <div className=" text-xl ">  
      <h1 className="font-bold text-green-600 font-mono"> Name:{name} </h1>
        <h2 className="font-bold"> Price:{chef}  </h2>
        <h2 className="font-bold">Brand:{supplier} </h2>
        </div>
 
    <div className="join space-y-3 join-vertical">
  <button className="btn  join-item">Button</button>
  <Link to={`/updatecoffe/${_id}`} ><button className="btn join-item">Update</button></Link>
  <button onClick={()=>handleDelete(_id)} className="btn btn-accent join-item">X</button>
</div>
  
  </div>
 </div>
</div>
    );
};

export default CoffeCard;