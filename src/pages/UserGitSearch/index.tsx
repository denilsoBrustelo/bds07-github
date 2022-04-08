import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';



type FormData = {
  user: string;
}

type UserGit = {
  name: string;
  url: string;
  followers: string;
  location:string;
  avatar_url:string;

}

const UserGitSearch = () => {

  const [userGit, setUserGit] = useState<UserGit>();

  const [formData, setFormData] = useState<FormData>({
    user: ''
  });

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("Mudou para :" + event.target.value)
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]:value });

  }

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(formData);

    axios.get(`https://api.github.com/users/${formData.user}`)
    .then( (response) => {
      setUserGit(response.data);
      console.log(response.data)
    } )
    .catch((error) => {
      setUserGit(undefined);
      console.log(error);
    });


  }


  return (
    <div className="user-search-container">
      
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
          <h1 >Encontre um perfil GitHub</h1>
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      { userGit &&
          <div className="user-details-container">
                
            <div className="container details-container">    
                <div>
                  <img src={userGit.avatar_url} alt={userGit.name}/>
                </div>
                <div className="cards-container">
                  <h2>Informações</h2>
                  <ResultCard title="Perfil" description={userGit.url} />
                  <ResultCard title="Seguidores" description={userGit.followers} />
                  <ResultCard title="localidade" description={userGit.location} />
                  <ResultCard title="Nome" description={userGit.name} />
                </div>  
             </div>  
          </div> 
        }


    </div>
  );
};

export default UserGitSearch;
