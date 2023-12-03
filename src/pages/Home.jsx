import React from 'react'
import MainLayout from '../layouts/MainLayout';
import MyButton from '../MyButton';

const Home = () => {
  return (
    <MainLayout>
        <div className="mt-4 p-5 bg-warning text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="Test" color="success"/>
      <MyButton text="Danger" color="danger"/>
      <MyButton text="Information" color="dark"/>
      <MyButton text="Primary" color="info"/>
    </MainLayout>
  )
}

export default Home