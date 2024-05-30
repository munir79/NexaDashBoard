
import Swal from 'sweetalert2'
const AddCoffe = () => {
    const handleaddCoffe=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const catagorey=form.catagorey.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newcoffe={name,chef,supplier,test,catagorey,details,photo};
        console.log(newcoffe);
        fetch('http://localhost:5000/coffe',{
         method:"POST",
         headers:{
            'Content-Type':'Application/json'
         } ,
         body:JSON.stringify(newcoffe)  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Sucess ',
                    text: 'New Cofee Adde sucessfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                form.reset(" ");
            }
        })
    }
    return (
        <div className="bg-pink-100">
            <div>
                <h3 className="text-center text-4xl"> Add Products </h3>
               
            </div>
            <div className="p-14">
                <form onSubmit={handleaddCoffe} >
                    {/* first input */}
                    <div className=" md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold ">Tittle</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Enter Products Name" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="chef" placeholder="Enter Products Price" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* Second  input row  */}
                    <div className=" md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold ">Discount</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="supplier" placeholder="Enter Products Discount" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text font-bold">Test</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="test" placeholder="Enter Coffe Test" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* Third  input row  */}
                    <div className=" md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold ">Catagorey</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text"  name="catagorey" placeholder="Enter Products Catagorey" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text font-bold">Description </span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="details" placeholder="Enter Products Details" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    
                    </div>
                    {/* phot url */}
                    <div className="mb-8">
                    <div className="form-control w-full md:ml-3">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" placeholder="photo url" className=" w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    <button className=" bg-orange-400 mt-4 btn btn-block" type="submit">Add Products</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffe;