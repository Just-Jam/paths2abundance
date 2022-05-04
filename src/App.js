// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from "./client"
import { ApiSession } from "@buidlerlabs/hedera-strato-js";

function App() {
  const [loading, setLoading] = useState(true);
  const [orgs, setOrgs] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchOrganizations = useCallback(async () => {
    let { data: Organizations, error } = await supabase
    .from('Organizations')
    .select('*')
    setOrgs(Organizations)
    console.log(orgs);
  },[])

  const fetchSolutions = useCallback(async () => {
    let { data: Solutions, error } = await supabase
    .from('Solutions')
    .select('*')
    setSolutions(Solutions)
    console.log(solutions);
  },[])

  const fetchProjects = useCallback(async () => {
    let { data: Projects, error } = await supabase
    .from('Projects')
    .select('*')
    setProjects(Projects)
    console.log(projects);
  },[])
  

  useEffect(() => {
    fetchOrganizations();
  },[fetchOrganizations])

  return (
    <>
    <Navbar/>
    <Hero/>
    <Solutions/>

    </>
  );
}

export default App;
