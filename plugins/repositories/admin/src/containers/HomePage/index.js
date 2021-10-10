import React, { useState, useEffect, memo } from 'react';
import axios from "axios"
import {Header} from "@buffetjs/custom"
import {Table} from "@buffetjs/core"


const HomePage = () => {
  const [rows, setRows] = useState([])
  
  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  const getRepos = () => {
    axios
      .get("https://api.github.com/users/react-avancado/repos")
      .then(res => setRows(res.data))
      .catch(error => strapi.notification.error(`Ops... github API error: ${error}`))
  }

  useEffect(() => {
    getRepos();
  }, [])
  
  return (
    <div style={{padding: "18px 30px"}}>
      <Header 
        title={{label: "React Avançado Repositories"}} 
        content="A list of our repositories in react avançado"
      />
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default memo(HomePage);
