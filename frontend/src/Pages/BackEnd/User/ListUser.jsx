import React,{useEffect, useState} from "react";
import UserService from "../../../Services/UserService";
import { urlImage,urlAPI } from "../../../Config";
import { Icon } from '@iconify/react';

const ListUser = () => {
           
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(Date.now());
    useEffect(() => {
        (async () => {
          const result = await UserService.getList();
          setUsers(result.data.users);
        })();
      }, [load]);
    return (
              <div className="row"> 
                
          <div className="col-md-12">
            <div className="title text-center my-4">
              <h4>Tất cả user</h4>
            </div>
            <table className="table">
              <thead>
                    
                <tr>
                  <th className="border" scope="col">id</th>
                  <th className="border  w-10" scope="col">Name</th>
                  <th className="border w-25" scope="col">Avatar</th>
                  <th className="border" scope="col">Status</th>
                  <th className="border" scope="col">Features</th>

                </tr>
              </thead>
              <tbody>
                      {users && users.map((user,index)=>{
                        return (
                          <tr>
                            <th className="border" >{user.id}</th>
                            <td className="border" >{user.name}</td>
                            <img className="img-fluid w-50 border" src={urlImage+"/"+"user"+"/"+user.image} alt="imge"/>
                            <td className="border" >{user.status}</td>
                            <td className="border" >
                              <a href={"././show/"+user.id} class="btn btn-primary mx-1" role="button" aria-pressed="true"><Icon icon="ph:eye" /></a>
                              <a href={"././update/"+user.id} class="btn btn-warning mx-1" role="button" aria-pressed="true"><Icon icon="fluent-mdl2:repair" /></a>
                              <a href={"././delete/"+user.id} class="btn btn-danger mx-1" role="button" aria-pressed="true"><Icon icon="icon-park-twotone:delete" /></a>
                              <a href="././create-user" class="btn btn-success mx-1" role="button" aria-pressed="true"><Icon icon="ph:plus" /></a>
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
 
export default ListUser;