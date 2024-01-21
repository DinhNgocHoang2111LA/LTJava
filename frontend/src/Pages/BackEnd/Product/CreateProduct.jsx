import React,{useEffect, useState} from "react";
import ProductService from "../../../Services/ProductService";
import { urlImage } from "../../../Config";
 
const CreateProduct = () => {
    const [products, setProducts] = useState([]); 
    const [load, setLoad] = useState(Date.now());
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState('');
    
    useEffect(() => {
        (async () => {
          const result = await ProductService.getList();
          setProducts(result.data);
        })();
      }, [load]);
  
      
      function format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    //=============
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
       
        const newProduct = {
          name,
          description,
          slug,
          price,
          image,
        };
  
        // Send a POST request to the Spring Boot endpoint
        const response = await ProductService.getStore(newProduct);
  
        // Handle the response as needed (e.g., show a success message, redirect)
        console.log("Product created successfully:", response.data);
  
        // Trigger a re-render by updating the forceUpdateTimestamp
        alert("Thêm sản phẩm mới thành công")
        setLoad(Date.now());
      } catch (error) {
        console.error("Error creating product:", error);
      }
    };
    return ( 
        <div className="row">
            <div className="title p-4 my-4 col-md-6">
                <h4>Chức năng</h4>
                <form onSubmit={handleSubmit} method="post">
                        <div className="mb-3">
                        <label>
                            <strong>Tên sản phẩm</strong>
                        </label>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required /></div>
                        <div className="mb-3">
                        <label>
                            <strong>Mô tả</strong>
                        </label>
                        <textarea name="description" value={description} className="form-control" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>slug</strong>
                        </label>
                        <textarea name="detail" value={slug} className="form-control" onChange={(e) => setSlug(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Giá bán</strong>
                        </label>
                        <input type="number" value={price} name="price" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Hình đại diện</strong>
                        </label>
                        <input id="image" value={image} type="file" className="form-control" onChange={(e) => setImage(e.target.value)}/>
                        </div>
                       
                        <div className="mb-3 text-end">
                        <button type="submit" value="submit" className="btn btn-success">
                            <i className="fa fa-save" />
                            Lưu[Thêm]</button>
                        </div>
                </form>
            </div>
            <div className="col-md-6 border ">
            <div className="title text-center my-4">
              <h4>Tất cả sản phẩm</h4>
            </div>
            <table className="table">
              <thead>
                    
                <tr>
                  <th className="border" scope="col">id</th>
                  <th className="border  w-10" scope="col">Name</th>
                  <th className="border" scope="col">Price</th>
                  <th className="border" scope="col">slug</th>
                  <th className="border" scope="col">description</th>
                  <th className="border" scope="col">image</th>

                </tr>
              </thead>
              <tbody>
                      {products && products.map((product,index)=>{
                        return (
                          <tr>
                            <th className="border" >{product.id}</th>
                            <td className="border" >{product.name}</td>
                            <td className="border" >{format2(product.price,'$')}</td>
                            <td className="border" >{product.slug}</td>
                            <td className="border" >{product.description}</td>
                            <td className="border" >
                              <img src={urlImage+"/product/"+product.image} alt='png'/>
                            </td>
                          </tr>
                        );

                      })}
                
                
              </tbody>
            </table>
          </div>
        </div>
     );
}
 
export default CreateProduct;