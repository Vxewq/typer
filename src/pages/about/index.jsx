import "./style.scss";

export default function About() {
  return (
    <div className="container-about">
      <div className="showcase">
        <div className="title">
          <h1>
            About{" "}
            <span>
              {" "}
              <img src="/navbar.png" width={100} draggable="false" alt="" />
              typer
            </span>
          </h1>
        </div>
        <p className="par">
          This project is a minimalistic typing platform designed to enhance
          typing speed and accuracy. Inspired by my passion for typing and
          typing-related websites, I developed this tool to provide a focused
          and efficient way to practice. With a clean interface and real-time
          feedback, it aims to help users improve their skills. My goal is to
          continue refining and expanding its features to create a comprehensive
          typing experience.
        </p>
      </div>
      <div className="creator">
        <div className="title">
          <h1>About Creator</h1>
        </div>
        <p className="par">
          Hi! My name is Shoxrux Rahmatullayev. I am full-stack developer. You can check about me <a href="https://shoxrux-rahmatullayev-portfolio.vercel.app/">HERE</a>
        </p>
      </div>
    </div>
  );
}
