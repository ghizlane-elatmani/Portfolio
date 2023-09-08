"use client";

import Project from "@components/Project";

const Projects = () => {
  return (
    <section className="my-section bg-base-100">
      <div className="max-w-4xl m-auto flex items-center flex-col text-center">
        <h2 className="heading-2">Projects</h2>

        <div className="flex flex-col gap-10">
          <Project
            title="Admin ShopNow"
            image="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            description="Updating..."
            badges="next mongodb react tailwind javascript html css"
            siteURL="#"
            codeURL="#"
          />

          <Project
            title="Weather App"
            image="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            description="Weather App is a web application developped with the famous library React and communicating with the API openWeatherMap."
            badges="react tailwind javascript html css"
            siteURL="#"
            codeURL="#"
          />

          <Project
            title="Country Quiz"
            image="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            description="Country Quiz is web application developped with React. There are two types of questions: a city is the capital of... or a flag belong to country..."
            badges="react scss javascript html css"
            siteURL="#"
            codeURL="#"
          />

          <Project
            title="Windbnb"
            image="https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            description="Windbnb is a web application developped with React and inspired by the UI of airbnb, modern and clean."
            badges="react javascript html css"
            siteURL="#"
            codeURL="#"
          />

          <Project
            title="Todo App"
            image="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            description="Todo App is a task management application developped with React. The task are stored in the local storage that when the user refresh the page he can still see his progress."
            badges="react javascript html css"
            siteURL="#"
            codeURL="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
