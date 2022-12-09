import React, { useState } from 'react'
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {

    const [studentName, setStudentName] = useState('');

  

  return (
    <div className="container">

      <h1>Nome: {studentName}</h1>

      <input 
      type="text" 
      placeholder="Digite o nome" 
      onChange={e => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Jorge" time="20:32:30" />
      <Card name="Lemes" time="20:45:23" />
      <Card name="Santos" time="23:15:03" />

    </div>
  );
}














